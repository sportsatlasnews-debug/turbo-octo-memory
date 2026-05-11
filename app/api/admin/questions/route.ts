import { connectDB } from "@/lib/mongodb";
import Question from "@/models/Question";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || "babysitter";
    const questions = await Question.find({ category }).sort({ _id: -1 });
    return NextResponse.json(questions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newQuestion = await Question.create({ ...body, category: "babysitter" });
    return NextResponse.json(newQuestion, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    if (!id) return NextResponse.json({ error: "ID mungon" }, { status: 400 });
    
    await Question.findByIdAndDelete(id);
    return NextResponse.json({ message: "Pyetja u fshi" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { _id, ...updateData } = body;

    if (!_id) return NextResponse.json({ error: "ID mungon" }, { status: 400 });

    const updatedQuestion = await Question.findByIdAndUpdate(
      _id,
      { ...updateData },
      { new: true }
    );

    return NextResponse.json(updatedQuestion);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}