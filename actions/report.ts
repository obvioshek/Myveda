"use server";

import { headers } from "next/headers";
import { CONTACT_EMAIL } from "@/content/landing";
import { mailConfigured, sendMail } from "@/lib/mail";
import { siteUrl } from "@/lib/site";
import { REPORT_KINDS } from "@/lib/report-kinds";

// "Report a problem" on the learning pages: a wrong answer, unclear wording, a
// translation or reference that doesn't hold. The report goes by email to the
// site's own address and nowhere else, so the form can't be used to write to
// anyone. Nothing is stored. Where email isn't set up, or the caps below are
// reached, the reader gets a ready-made email to send from their own app.

export type ReportInput = { kind: string; where: string; what: string; details: string; email: string; website: string };
export type ReportResult = { ok: true } | { ok: false; error: string; mailto?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PER_ADDRESS = 5;       // reports from one network address in 10 minutes
const PER_HOUR = 100;        // reports in total in an hour, on one server
const sent = new Map<string, number[]>();
let lastHour: number[] = [];

const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const clip = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1)}…`);

function mailtoFor(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(clip(body, 1500))}`;
}

export async function reportProblem(input: ReportInput): Promise<ReportResult> {
  // a field people never see; bots fill it in
  if (input.website) return { ok: true };

  const kind = REPORT_KINDS.find(k => k === input.kind);
  const details = String(input.details ?? "").trim();
  const where = String(input.where ?? "");
  const what = clip(String(input.what ?? "").replace(/\s+/g, " ").trim(), 300);
  const email = String(input.email ?? "").trim();
  if (!kind) return { ok: false, error: "Choose what kind of problem it is." };
  if (details.length < 10) return { ok: false, error: "Say a little more about the problem, so it can be found and fixed." };
  if (details.length > 2000) return { ok: false, error: "Keep the report under 2,000 characters." };
  if (!/^\/[\w\-./#%]{0,300}$/.test(where)) return { ok: false, error: "This page's address couldn't be read. Reload the page and try again." };
  if (email && (email.length > 254 || !EMAIL.test(email))) return { ok: false, error: "That email address doesn't look right. Leave it empty if you'd rather not get a reply." };

  const url = `${siteUrl()}${where}`;
  const subject = `Problem report: ${kind}`;
  const text = `${kind}\n\nPage: ${url}\nAbout: ${what || "the page"}\n\n${details}\n\n${email ? `Reply to: ${email}` : "No reply address given."}`;
  const fallback = mailtoFor(subject, text);

  if (!mailConfigured()) return { ok: false, error: "Reports can't be sent from the site yet. Send it from your own email instead; it's filled in for you.", mailto: fallback };

  const now = Date.now();
  const ip = ((await headers()).get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const mine = (sent.get(ip) ?? []).filter(t => now - t < 10 * 60_000);
  lastHour = lastHour.filter(t => now - t < 3600_000);
  if (mine.length >= PER_ADDRESS || lastHour.length >= PER_HOUR) {
    return { ok: false, error: "A lot of reports have come in just now. Send this one from your own email instead; it's filled in for you.", mailto: fallback };
  }

  try {
    await sendMail({
      to: CONTACT_EMAIL,
      subject,
      text,
      html: `<p><b>${esc(kind)}</b></p><p>Page: <a href="${esc(url)}">${esc(url)}</a><br>About: ${esc(what || "the page")}</p><p>${esc(details).replace(/\n/g, "<br>")}</p><p>${email ? `Reply to: ${esc(email)}` : "No reply address given."}</p>`,
      replyTo: email || undefined,
    });
  } catch {
    return { ok: false, error: "The report didn't send. Send it from your own email instead; it's filled in for you.", mailto: fallback };
  }
  mine.push(now);
  sent.set(ip, mine);
  lastHour.push(now);
  if (sent.size > 5000) sent.clear();
  return { ok: true };
}
