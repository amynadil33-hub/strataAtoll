import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Keep this route as a Vercel FastAPI proxy; do not merge direct email transport code here.
const DESTINATION_EMAIL = "support@musalhu.com";
const FAST_API_URL =
  process.env.VERCEL_FAST_API_URL || process.env.VERCEL_FASTAPI_URL;
const FAST_API_TOKEN =
  process.env.VERCEL_FAST_API_TOKEN || process.env.VERCEL_FASTAPI_TOKEN;

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FormPayload;
    if (!body?.formType || !body?.subject || !body?.fields) {
      return NextResponse.json({ error: "Invalid form payload." }, { status: 400 });
    }

    if (!FAST_API_URL) {
      return NextResponse.json(
        {
          error:
            "Form service is not configured. Set VERCEL_FAST_API_URL or VERCEL_FASTAPI_URL.",
        },
        { status: 500 },
      );
    }

    const message = `Form Type: ${body.formType}\nSubject: ${body.subject}\n\nSubmitted Fields:\n${toLines(
      body.fields,
    )}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (FAST_API_TOKEN) {
      headers.Authorization = `Bearer ${FAST_API_TOKEN}`;
    }

    const fastApiResponse = await fetch(FAST_API_URL.trim(), {
      method: "POST",
      headers,
      body: JSON.stringify({
        to: DESTINATION_EMAIL,
        replyTo: body.replyTo || DESTINATION_EMAIL,
        subject: body.subject,
        formType: body.formType,
        fields: body.fields,
        message,
      }),
    });

    if (!fastApiResponse.ok) {
      const errorText = await fastApiResponse.text();
      return NextResponse.json(
        { error: `Form service error: ${errorText}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit form." }, { status: 500 });
  }
}
