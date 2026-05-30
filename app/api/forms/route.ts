import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL =
  process.env.FORM_TO_EMAIL || "maldiveinvest@musalhu.com";

type FormPayload = {
  formType: "contact" | "request-access" | "submit-opportunity";
  replyTo?: string;
  subject: string;
  fields: Record<string, unknown>;
};

function toLines(fields: Record<string, unknown>) {
  return Object.entries(fields)
    .map(([key, value]) =>
      `- ${key}: ${Array.isArray(value) ? value.join(", ") : String(value ?? "")}`,
    )
    .join("\n");
}

function toHtml(fields: Record<string, unknown>) {
  const rows = Object.entries(fields)
    .map(([key, value]) => {
      const safeValue = Array.isArray(value)
        ? value.join(", ")
        : String(value ?? "");

      return `
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 600; color: #211C16;">
            ${key}
          </td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #43382d;">
            ${safeValue}
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; background: #F7F3EA; padding: 24px;">
      <div style="max-width: 720px; margin: 0 auto; background: white; border: 1px solid #e6dccb;">
        <div style="padding: 24px; background: #211C16; color: white;">
          <h1 style="margin: 0; font-size: 22px;">ATOLL ESTATES Form Submission</h1>
          <p style="margin: 8px 0 0; color: #D8C7A3;">${DESTINATION_EMAIL}</p>
        </div>

        <div style="padding: 24px;">
          <h2 style="font-size: 18px; margin-top: 0;">Submitted Fields</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
            ${rows}
          </table>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FormPayload;

    if (!body?.formType || !body?.subject || !body?.fields) {
      return NextResponse.json(
        { error: "Invalid form payload." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPassword || !smtpFrom) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const message = `Form Type: ${body.formType}\nSubject: ${body.subject}\n\nSubmitted Fields:\n${toLines(
      body.fields,
    )}`;

    await transporter.sendMail({
      from: `"ATOLL ESTATES" <${smtpFrom}>`,
      to: DESTINATION_EMAIL,
      replyTo: body.replyTo || smtpFrom,
      subject: body.subject,
      text: message,
      html: toHtml({
        formType: body.formType,
        subject: body.subject,
        ...body.fields,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to submit form:", error);
    return NextResponse.json(
      { error: "Failed to submit form." },
      { status: 500 },
    );
  }
}