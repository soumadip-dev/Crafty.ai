import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true, // This option tells Mongoose to use the new MongoDB connection string parser instead of the old one.
      useUnifiedTopology: true, // It replaces older connection management logic with a more robust, event-driven engine that better handles:
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection failed");
    process.exit(1);
  }
};
