import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String }], // Opsionale, nese jane me alternativa
  correctAnswer: { type: String }, 
  isWritten: { type: Boolean, default: false }, // Nese eshte pyetje me shkrim
  category: { 
    type: String, 
    required: true, 
    enum: ['moshart', 'babysitter', 'cleaning'] // Kategorite tona
  },
  maxPoints: { type: Number, default: 5 }
});

export default mongoose.models.Question || mongoose.model("Question", QuestionSchema);