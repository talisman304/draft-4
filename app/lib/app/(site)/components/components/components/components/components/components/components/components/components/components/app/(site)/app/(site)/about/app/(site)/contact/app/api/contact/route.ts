import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10)
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = Schema.parse(json);

    // OPTION A (recommended): integrate Resend, Postmark, Mailgun, etc.
    // Example pseudo:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Website <noreply@yourdomain.com>",
    //   to: process.env.CONTACT_TO_EMAIL!,
    //   subject: `New consultation request from ${data.name}`,
    //   replyTo: data.email,
    //   text: `${data.message}\n\nPhone: ${data.phone || "-"}`
    // });

    // OPTION B: store leads in a database (Supabase, Airtable, etc.)

    // For now we just return OK so the site is deployable immediately.
    // Wire your preferred email provider when ready.
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
