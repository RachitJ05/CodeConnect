import { clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Missing token" });
        }

        const token = authHeader.split(" ")[1];

        const { sub } = await clerkClient.verifyToken(token);

        const user = await User.findOne({ clerkId: sub });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
