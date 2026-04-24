import { connectDB } from "@/lib/mongodb";
import Page from "@/models/Page";

export async function GET() {
  await connectDB();
  const pages = await Page.find();
  return Response.json(pages);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();

  const page = await Page.create(data);
  return Response.json(page);
}