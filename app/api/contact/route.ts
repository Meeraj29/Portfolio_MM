import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const brevoApiKey = process.env.BREVO_API_KEY;
  const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL || "no-reply@yourdomain.com";
  const brevoSenderName = process.env.BREVO_SENDER_NAME || "Portfolio Contact";
  const brevoToEmail = process.env.BREVO_TO_EMAIL || "meerajmathin@gmail.com";

  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields before sending." },
        { status: 400 }
      );
    }

    if (!brevoApiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Brevo is not configured yet. Add BREVO_API_KEY to your environment.",
        },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: brevoSenderName,
          email: brevoSenderEmail,
        },
        to: [{ email: brevoToEmail, name: "Meeraj Mathin" }],
        subject,
        htmlContent: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
        textContent: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo email error:", errorText);
      return NextResponse.json(
        {
          success: false,
          message: "Your message could not be sent right now. Please try again later.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your message.",
      },
      { status: 500 }
    );
  }
}
