import nodemailer, { type Transporter } from "nodemailer";

// Outgoing email for the site itself (not sign-in links, which Supabase sends).
// Configured by SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and SMTP_FROM; with
// GoDaddy email that's smtpout.secureserver.net, port 465, and the mailbox's
// own address and password.

export function mailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

let transport: Transporter | null = null;

export async function sendMail(msg: { to: string; subject: string; text: string; html: string }) {
  if (!mailConfigured()) throw new Error("Email is not configured.");
  const port = Number(process.env.SMTP_PORT ?? 465);
  transport ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transport.sendMail({ from: process.env.SMTP_FROM || `My Veda Verse <${process.env.SMTP_USER}>`, ...msg });
}
