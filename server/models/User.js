import mongoose from "mongoose";
import bycrypt from "bcryptjs";

// Define User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving to database
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
  next();
});

// Use default export to make the model available for import
export default mongoose.model("User", UserSchema);
