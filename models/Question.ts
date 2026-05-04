import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuestion extends Document {
  questionText: string;
  options?: string[]; // Vetëm për pyetjet me alternativa
  correctAnswer?: string; // Opsionale, për auto-grading në të ardhmen
  points: number;
  isWritten: boolean; // True për pyetje me shkrim, False për alternativa
  category?: string; // p.sh. 'mjekësi', 'psikologji', 'logjistikë'
}

const QuestionSchema: Schema = new Schema({
  questionText: { type: String, required: true },
  options: { type: [String], default: [] },
  correctAnswer: { type: String },
  points: { type: Number, required: true, default: 5 },
  isWritten: { type: Boolean, required: true, default: false },
  category: { type: String }
});

// Sigurohemi që modeli nuk krijohet dy herë gjatë Hot Reload në Next.js
const Question: Model<IQuestion> = mongoose.models.Question || mongoose.model<IQuestion>('Question', QuestionSchema);

export default Question;