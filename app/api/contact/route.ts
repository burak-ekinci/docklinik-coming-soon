import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Templates } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      phone,

      message,
    } = await request.json();
    if (!email || email === "" || email === null || email === undefined) {
      return NextResponse.json({ valid: false, message: "Email is required" });
    }
    if (!name || name === "" || name === null || name === undefined) {
      return NextResponse.json({ valid: false, message: "Name is required" });
    }
    if (
      !message ||
      message === "" ||
      message === null ||
      message === undefined
    ) {
      return NextResponse.json({
        valid: false,
        message: "Message is required",
      });
    }

    if (phone === "" || phone === null || phone === undefined) {
      return NextResponse.json({ valid: false, message: "Phone is required" });
    }

    const mailOptions = {
      from: "Docklinik System<info@docklinik.de>",
      to: "info@docklinik.de",
      subject: "Docklinik Contact Form",
      html: Templates.contactTemplate
        .replace("{{name}}", name)
        .replace("{{email}}", email)
        .replace("{{phone}}", phone)
        .replace("{{message}}", message),
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

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        valid: true,
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        valid: false,
        message: "An error occurred while processing your request.",
        error,
      },
      { status: 500 }
    );
  }
}
