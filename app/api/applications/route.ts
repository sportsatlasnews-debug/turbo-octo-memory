import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newApp = await Application.create(data);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      tls: { rejectUnauthorized: false }
    });

    const emailSubject = `Aplikim i ri: ${data.type === 'job' ? data.role : 'Vullnetar'} - ${data.fullName}`;
    
    // Formatimi i emailit sipas llojit te aplikimit
    const emailBody = `
APLIKIM I RI - ${data.targetGroup === 'mike' ? 'Qendra M.I.K.E' : 'Shtëpia e Zotërinjve'}
--------------------------------------------------
Lloji: ${data.type.toUpperCase()}
Emri: ${data.fullName}
ID: ${data.idNumber}
Kontakti: ${data.phone} | ${data.email}
Adresa: ${data.address}, ${data.city}

PROFILI:
- Arsimi: ${data.education} (${data.institution})
- Eksperiencë: ${data.hasExperience}
- Aftësitë: ${data.skills?.join(", ")}
- Gjuhët: ${data.languages?.join(", ")}

DISPONUESHMËRIA:
- Koha: ${data.availability?.join(", ")}
- Data fillimit: ${data.startDate || 'Menjëherë'}

PAGESA:
- Preferenca: ${data.paymentPreference}
- Shuma: ${data.expectedAmount} (Negociueshme: ${data.isNegotiable})
--------------------------------------------------
    `;

    await transporter.sendMail({
      from: `"Sistemi M.I.K.E" <${process.env.EMAIL_USER}>`,
      // to: "info@mikecenter.org",
      to: "anxhi.bloom.dev@gmail.com",
      subject: emailSubject,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}