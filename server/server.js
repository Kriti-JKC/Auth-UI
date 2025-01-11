import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/auth.js"; // Correctly importing using ES module syntax

// Load env variables
dotenv.config();

// Initialize express
const app = express();

// Add Middlewares
app.use(cors());
app.use(express.json());

// Use the userRoutes for the '/api/auth' endpoint
app.use("/api/auth", userRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Set port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
