import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export function GET() {
  return NextResponse.json({
    message: "works",
  });
}

export async function POST(request) {
  const { name, surname, email, phone, message } = await request.json();


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER, 
    subject: `Consulta ${name} ${surname}`,
    text: `Nombre: ${name}\nApellidos: ${surname}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Correo enviado con éxito",
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        success: false,
        error: "Hubo un error al enviar el correo",
      },
      { status: 500 }
    );
  }
}