import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
    try {
        const token = chatClient.createToken(req.user.clerkId); // use clerkId (not mongodb _id) as it should match the ID we have in stream dashboard
        res.status(200).json({ 
            token ,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.profileImage
        });
    } catch (error) {
        console.error("Failed to generate Stream token", error);
        res.status(500).json({ message: "Failed to generate Stream token" });
    }
}