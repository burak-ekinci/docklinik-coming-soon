import { NextResponse } from "next/server";
import { Templates } from "@/lib/constants";
import nodemailer from "nodemailer";

export const POST = async (request: Request) => {
  const { email } = await request.json();

  if (!email || email === "" || email === null || email === undefined) {
    return NextResponse.json({ valid: false, message: "Email is required" });
  }

  const mailOptions = {
    from: "Docklinik System<info@docklinik.de>",
    to: "info@docklinik.de",
    subject: "Notify Me",
    html: Templates.notifyMeTemplate.replace("{{email}}", email),
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // STARTTLS için
    secure: false, // false = STARTTLS, true = SSL (port 465)
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASSWORD, // mutlaka App Password olmalı
    },
    tls: {
      rejectUnauthorized: false, // Gerekirse sertifika sorunlarını yoksay
    },
    connectionTimeout: 10000, // 10 saniyede bağlanamazsa timeout
    greetingTimeout: 5000, // SMTP selamlama zaman aşımı
  });

  try {
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { valid: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        valid: false,
        message: "An error occurred while sending the email.",
        error,
      },
      { status: 500 }
    );
  }
};
