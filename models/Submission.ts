import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnswer {
  questionId: mongoose.Types.ObjectId;
  questionText: string;
  submittedAnswer: string;
  maxPoints: number;
  gradedPoints: number;
  isWritten: boolean; // Për të ndihmuar evaluatorin të dallojë pyetjet me shkrim
}

export interface ISubmission extends Document {
  testTakerId: string;
  status: 'pending' | 'graded';
  totalGrade: number;
  answers: IAnswer[];
  submittedAt: Date;
}

const SubmissionSchema: Schema = new Schema({
  testTakerId: { type: String, required: true },
  status: { type: String, enum: ['pending', 'graded'], default: 'pending' },
  totalGrade: { type: Number, default: 0 },
  answers: [{
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
    questionText: { type: String, required: true },
    submittedAnswer: { type: String, required: true },
    maxPoints: { type: Number, required: true },
    gradedPoints: { type: Number, default: 0 },
    isWritten: { type: Boolean, default: false }
  }],
  submittedAt: { type: Date, default: Date.now }
});

const Submission: Model<ISubmission> = mongoose.models.Submission || mongoose.model<ISubmission>('Submission', SubmissionSchema);
export default Submission;