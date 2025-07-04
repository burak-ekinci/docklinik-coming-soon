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
    console.log("🛑 name:", name);
    console.log("🛑 email:", email);
    console.log("🛑 phone:", phone);
    console.log("🛑 message:", message);
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
    console.log("🛑 mailOptions:", mailOptions);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });
    console.log("🛑 google user:", process.env.GOOGLE_USER);
    console.log("🛑 google pass:", process.env.GOOGLE_PASSWORD);
    console.log("🛑 transporter:", transporter);
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        valid: true,
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("🛑 contact error:", error);

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
