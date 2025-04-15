import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lower: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model("user", userSchema);
