import { connectDB } from "@/lib/mongodb";
import Submission from "@/models/Submission";
import { NextResponse } from "next/server";

// Merr të gjitha testet e dorëzuara
export async function GET() {
  try {
    await connectDB();
    const submissions = await Submission.find().sort({ submittedAt: -1 });
    return NextResponse.json(submissions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Ruaj vlerësimin përfundimtar
export async function PATCH(req: Request) {
  try {
    await connectDB();
    const { submissionId, gradedAnswers, totalGrade } = await req.json();

    const updated = await Submission.findByIdAndUpdate(
      submissionId,
      { 
        $set: { 
          answers: gradedAnswers, 
          totalGrade, 
          status: 'graded' 
        } 
      },
      { returnDocument: 'after' }
    );

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}