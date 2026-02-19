import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = "yusrak.kuloglu@gmail.com";

function validate(body: unknown): {
  name: string;
  email: string;
  message: string;
} {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid request body.");
  }
  const { name, email, message } = body as Record<string, unknown>;

  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("Name is required.");
  }
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    throw new Error("A valid email address is required.");
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    throw new Error("Message must be at least 10 characters.");
  }

  return {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }

  let fields: { name: string; email: string; message: string };
  try {
    const body = await req.json();
    fields = validate(body);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid request." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <contact@yusrakuloglu.com>",
    to: TO_EMAIL,
    replyTo: fields.email,
    subject: `Portfolio Contact: ${fields.name}`,
    text: `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #c9a96e;">New Portfolio Contact</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 80px;">Name</td>
            <td style="padding: 8px 0;">${fields.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${fields.email}">${fields.email}</a>
            </td>
          </tr>
        </table>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
        <h3 style="margin-bottom: 8px;">Message</h3>
        <p style="white-space: pre-wrap; color: #444;">${fields.message}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
