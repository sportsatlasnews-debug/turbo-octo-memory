import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);