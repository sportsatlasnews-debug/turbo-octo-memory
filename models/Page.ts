import mongoose from "mongoose";

const PageSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  sections: Array,
});

export default mongoose.models.Page || mongoose.model("Page", PageSchema);