// app/api/project-images/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Rruga drejt dosjes suaj në direktorinë publike
    const dirPath = path.join(process.cwd(), 'public', 'images', 'mikenelagjentime');
    
    // Lexon skedarët nga dosja
    const files = fs.readdirSync(dirPath);
    
    // Filtroni vetëm imazhet (jpg, jpeg, png, webp)
    const images = files.filter(file => 
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    ).map(file => `/images/mikenelagjentime/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Gabim gjatë leximit të dosjes së imazheve:", error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}