import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";
import Submission from "@/models/Submission"; // Modeli që krijuam më parë
import Question from "@/models/Question";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 1. GENERATE EXAM TAKER ID & SAVE APPLICATION
export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    // Gjenerimi i një ID-je unike: 3 shkronjat e para të emrit + numër random
    const prefix = data.fullName.substring(0, 3).toUpperCase();
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const examTakerId = `${prefix}-${randomNumber}`;

    // Shtojmë ID-në te të dhënat e aplikimit
    const newApp = await Application.create({ ...data, examTakerId });

    // Konfigurimi i Email-it (Nodemailer)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // Dërgimi i kodit aplikantit (opsionale por e sugjeruar)
    await transporter.sendMail({
      from: `"Qendra M.I.K.E" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Kodi juaj për Testin e Pranimit",
      text: `Përshëndetje ${data.fullName}, kodi juaj për të hyrë në panelin e testimit është: ${examTakerId}`,
    });

    return NextResponse.json({ success: true, examTakerId });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// 2. GET TEST ANSWERS (Për Evaluatorin ose për të parë nëse ekziston)
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("examTakerId");

    if (!id) return NextResponse.json({ error: "ID kërkohet" }, { status: 400 });

    const submission = await Submission.findOne({ testTakerId: id });
    return NextResponse.json(submission);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 3. UPDATE EVALUATIONS (Për Panelin e Evaluatorit)
export async function PATCH(req: Request) {
  try {
    await connectDB();
    const { examTakerId, gradedAnswers, status, totalGrade } = await req.json();

    if (!examTakerId) {
      return NextResponse.json({ success: false, error: "ID e provimit mungon" }, { status: 400 });
    }

    // Përdorim 'findOneAndUpdate' me opsionin 'upsert' që nëse nuk ekziston, ta krijojë.
    // Gjithashtu ndryshojmë 'new: true' në 'returnDocument: "after"' për të hequr warning-un.
    const updatedSubmission = await Submission.findOneAndUpdate(
      { testTakerId: examTakerId.toUpperCase() },
      { 
        $set: {
          status: status || 'pending', 
          answers: gradedAnswers,
          totalGrade: totalGrade || 0,
          submittedAt: new Date()
        }
      },
      { 
        upsert: true, // KRIJOJE nëse nuk ekziston
        returnDocument: 'after', // Zëvendëson 'new: true'
        runValidators: true 
      }
    );

    return NextResponse.json({ success: true, data: updatedSubmission });
  } catch (error: any) {
    console.error("PATCH Error:", error); // Kjo do të të ndihmojë ta shohësh gabimin ekzakt në terminal
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}