import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: String,
});

export const School = mongoose.model("School", schoolSchema);
