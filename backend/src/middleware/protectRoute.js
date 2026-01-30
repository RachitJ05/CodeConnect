import { clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Missing or invalid token" });
        }

        const token = authHeader.replace("Bearer", "").trim();

        const { sub } = await clerkClient.verifyToken(token);

        if (!sub) {
            return res.status(401).json({ message: "Invalid token payload" });
        }

        const user = await User.findOne({ clerkId: sub });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error("Auth error:", err);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
