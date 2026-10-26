"use server";

import { randomBytes } from "node:crypto";
import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";
import { hasDatabase } from "@/lib/backend";
import { mailConfigured, sendMail } from "@/lib/mail";
import { siteUrl } from "@/lib/site";
import { instantAt, now, toMs } from "@/lib/app/time";

// Signing up for "One idea a week". As with the early list, an address counts
// only once its owner confirms from their inbox; unconfirmed ones are deleted
// after 30 days, and confirming or stopping takes a button press on
// /weekly-email, so mail scanners can't do either.

export interface WeeklyState { ok: boolean; message: string }

const DAY = 24 * 3600_000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RESEND_AFTER = 10 * 60_000;
const HOURLY_CAP = 60;

const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

async function sendConfirmation(email: string, token: string) {
  const confirm = `${siteUrl()}/weekly-email?do=confirm&token=${token}`;
  await sendMail({
    to: email,
    subject: "Confirm: one idea a week from Veda Verse",
    text: `Someone, hopefully you, asked for Veda Verse's weekly email at this address: one management idea and one classical passage, each Monday.\n\nConfirm: ${confirm}\n\nIf it wasn't you, ignore this email and the address is deleted within 30 days.`,
    html: `<p>Someone, hopefully you, asked for Veda Verse's weekly email at this address: one management idea and one classical passage, each Monday.</p><p><a href="${esc(confirm)}">Confirm</a></p><p>If it wasn't you, ignore this email and the address is deleted within 30 days.</p>`,
  });
}

export async function subscribeWeekly(_prev: WeeklyState | null, form: FormData): Promise<WeeklyState> {
  // a field people never see; bots fill it in
  if (String(form.get("website") ?? "")) return { ok: true, message: "Thanks. Check your inbox for a confirmation link." };

  const email = String(form.get("email") ?? "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL.test(email)) return { ok: false, message: "Enter an email address, like name@example.com." };
  if (!hasDatabase()) return { ok: false, message: "The weekly email isn't open yet. Follow the feed instead, or check back soon." };

  try {
    const list = db.orm.public.WeeklySubscriber;
    await list.where(e => e.confirmedAt.isNull()).where(e => e.createdAt.lte(instantAt(Date.now() - 30 * DAY))).deleteAndCount();

    let entry = await list.where({ email }).first();
    entry ??= await list.create({ email, token: randomBytes(24).toString("base64url") });

    // the same answer whether or not the address was already here
    const done: WeeklyState = mailConfigured()
      ? { ok: true, message: "Thanks. Check your inbox: the emails start once you confirm." }
      : { ok: true, message: "Saved. We'll email you a confirmation link before sending anything." };
    if (entry.confirmedAt || !mailConfigured()) return done;
    if (entry.confirmSentAt && Date.now() - toMs(entry.confirmSentAt) < RESEND_AFTER) return done;

    const lastHour = await list.where(e => e.confirmSentAt.gte(instantAt(Date.now() - 3600_000))).limit(HOURLY_CAP).all().toArray();
    if (lastHour.length >= HOURLY_CAP) return done;

    await sendConfirmation(email, entry.token);
    await list.where({ id: entry.id }).updateAndCount({ confirmSentAt: now() });
    return done;
  } catch (err) {
    console.error("[weekly] could not save:", err);
    return { ok: false, message: "That didn't go through. Try again in a moment." };
  }
}

export async function confirmWeekly(form: FormData) {
  const token = String(form.get("token") ?? "");
  let n = 0;
  if (token && hasDatabase()) {
    n = await db.orm.public.WeeklySubscriber.where({ token }).where(e => e.confirmedAt.isNull()).updateAndCount({ confirmedAt: now() });
    if (!n && await db.orm.public.WeeklySubscriber.where({ token }).first()) n = 1; // already confirmed
  }
  redirect(n ? "/weekly-email?done=confirmed" : "/weekly-email?done=invalid");
}

export async function unsubscribeWeekly(form: FormData) {
  const token = String(form.get("token") ?? "");
  if (token && hasDatabase()) await db.orm.public.WeeklySubscriber.where({ token }).deleteAndCount();
  redirect("/weekly-email?done=removed");
}
