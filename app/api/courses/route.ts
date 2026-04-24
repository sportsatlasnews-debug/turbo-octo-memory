import { connectDB } from "@/lib/mongodb";
import Course from "@/models/Course";

export async function GET() {
  await connectDB();
  const courses = await Course.find();
  return Response.json(courses);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();

  const course = await Course.create(data);
  return Response.json(course);
}