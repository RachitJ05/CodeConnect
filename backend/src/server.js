import express from "express";
import path from "path";
import {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest } from "./lib/inngest.js";
import { functions } from "./lib/inngest.js";
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}));   // credentials:true allows cookies to be sent
app.use(clerkMiddleware());   // this add auth field to to request object: req.auth()

app.use("/api/inngest", serve({client: inngest, functions}));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}


const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();

export default app;