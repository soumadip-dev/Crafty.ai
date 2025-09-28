import express from "express";
import cors from "cors";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRoutes from "./routes/ai.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectCloudinary from "./configs/cloudinary.js";
import { connectDB } from "./configs/db.js";
import { ENV } from "./configs/env.js";

const app = express();

await connectCloudinary();

// Enable CORS to allow requests from other domains
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Initialize Clerk Middleware
app.use(clerkMiddleware());

// Set the port for the server
const PORT = ENV.PORT || 8080;

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello from Crafty.ai Server!");
});

// Apply authentication middleware to all routes
app.use(requireAuth());

// Routes
app.use("/api/v1/ai", aiRoutes);
app.use("/api/v1/user", userRoutes);

// Start the server and listen on the specified port
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.info(`✔️ Server is up and running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
