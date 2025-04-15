import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    require: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

export const Todo = mongoose.model("todo", toDoSchema);
