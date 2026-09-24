"use server";

import { randomBytes } from "node:crypto";
import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";
import { hasDatabase } from "@/lib/backend";
import { mailConfigured, sendMail } from "@/lib/mail";
import { siteUrl } from "@/lib/site";
import { instantAt, now, toMs } from "@/lib/app/time";

export interface JoinState { ok: boolean; message: string; fallback?: string }

const DAY = 24 * 3600_000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Sending caps: one confirmation per address every 10 minutes, and at most
// this many an hour in total, so the form can't be used to flood inboxes.
const RESEND_AFTER = 10 * 60_000;
const HOURLY_CAP = 60;

const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

async function sendConfirmation(email: string, token: string) {
  const confirm = `${siteUrl()}/early-list?do=confirm&token=${token}`;
  const remove = `${siteUrl()}/early-list?do=remove&token=${token}`;
  await sendMail({
    to: email,
    subject: "Confirm your place on the My Veda Verse early list",
    text: `Someone, hopefully you, asked to join the My Veda Verse early list with this address.\n\nConfirm: ${confirm}\n\nIf it wasn't you, ignore this email and the address is deleted within 30 days. Or remove it now: ${remove}\n\nYou'll get one more email, when your invitation is ready. Nothing else.`,
    html: `<p>Someone, hopefully you, asked to join the My Veda Verse early list with this address.</p><p><a href="${esc(confirm)}">Confirm my place</a></p><p>If it wasn't you, ignore this email and the address is deleted within 30 days. Or <a href="${esc(remove)}">remove it now</a>.</p><p>You'll get one more email, when your invitation is ready. Nothing else.</p>`,
  });
}

export async function joinEarlyList(_prev: JoinState | null, form: FormData): Promise<JoinState> {
  // a field people never see; bots fill it in
  if (String(form.get("website") ?? "")) return { ok: true, message: "Thanks. Check your inbox for a confirmation link." };

  const email = String(form.get("email") ?? "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return { ok: false, message: "Enter an email address, like name@example.com." };
  }
  if (!hasDatabase()) {
    return { ok: false, message: "The list isn't open yet, so nothing was stored. To be added by hand,", fallback: email };
  }

  try {
    const list = db.orm.public.EarlyListEntry;
    // unconfirmed addresses don't stay: the promise on the form says 30 days
    await list.where(e => e.confirmedAt.isNull()).where(e => e.createdAt.lte(instantAt(Date.now() - 30 * DAY))).deleteAndCount();

    let entry = await list.where({ email }).first();
    entry ??= await list.create({ email, token: randomBytes(24).toString("base64url") });

    // the same answer whether or not the address was already here
    const done: JoinState = mailConfigured()
      ? { ok: true, message: "Thanks. Check your inbox for a confirmation link; we keep the address only after you confirm." }
      : { ok: true, message: "Saved. We'll email you a confirmation link before adding you to the list." };
    if (entry.confirmedAt || !mailConfigured()) return done;
    if (entry.confirmSentAt && Date.now() - toMs(entry.confirmSentAt) < RESEND_AFTER) return done;

    const lastHour = await list.where(e => e.confirmSentAt.gte(instantAt(Date.now() - 3600_000))).limit(HOURLY_CAP).all().toArray();
    if (lastHour.length >= HOURLY_CAP) return done; // sent later, by hand if need be

    await sendConfirmation(email, entry.token);
    await list.where({ id: entry.id }).updateAndCount({ confirmSentAt: now() });
    return done;
  } catch (err) {
    console.error("[early-list] could not save:", err);
    return { ok: false, message: "That didn't go through. Try again, or email us:", fallback: email };
  }
}

// Confirm and remove are buttons on /early-list, not the email links
// themselves, so a mail scanner opening the link can't act for anyone.
export async function confirmEarlyList(form: FormData) {
  const token = String(form.get("token") ?? "");
  let n = 0;
  if (token && hasDatabase()) {
    n = await db.orm.public.EarlyListEntry.where({ token }).where(e => e.confirmedAt.isNull()).updateAndCount({ confirmedAt: now() });
    if (!n && await db.orm.public.EarlyListEntry.where({ token }).first()) n = 1; // already confirmed
  }
  redirect(n ? "/early-list?done=confirmed" : "/early-list?done=invalid");
}

export async function removeEarlyList(form: FormData) {
  const token = String(form.get("token") ?? "");
  if (token && hasDatabase()) await db.orm.public.EarlyListEntry.where({ token }).deleteAndCount();
  redirect("/early-list?done=removed");
}
