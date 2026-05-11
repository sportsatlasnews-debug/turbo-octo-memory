import { connectDB } from "@/lib/mongodb";
import Question from "@/models/Question";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();
    
    // Marrim kategorine nga URL (p.sh. /api/test/generate?category=babysitter)
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    if (!category) {
      return NextResponse.json({ error: "Kategoria eshte e detyrueshme" }, { status: 400 });
    }

    // Logjika e Randomization: Perzgjedh 20 pyetje rastesore nga kategoria
    const randomQuestions = await Question.aggregate([
      { $match: { category: category } }, // Filtro sipas kursit
      { $sample: { size: 20 } }           // Perzgjedh rastesisht 20
    ]);

    return NextResponse.json(randomQuestions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}