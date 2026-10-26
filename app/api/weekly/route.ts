import { createHash, timingSafeEqual } from "node:crypto";
import { db } from "@/src/prisma/db";
import { hasDatabase } from "@/lib/backend";
import { mailConfigured, sendMail } from "@/lib/mail";
import { weeklyEmail } from "@/lib/weekly-mail";
import { thisWeek } from "@/content/learn/weekly";

// Sends this week's email to confirmed subscribers who haven't had it yet.
// Vercel Cron calls it each morning (vercel.json) with the CRON_SECRET it
// holds; without that secret set, and email configured, it does nothing.
// Each run sends at most BATCH, so a long list goes out over a few mornings,
// and lastWeekSent keeps anyone from getting a week twice.
export const dynamic = "force-dynamic";
export const maxDuration = 60;
const BATCH = 150;

// Compares the caller's secret in constant time, so timing can't reveal it.
const digest = (s: string) => createHash("sha256").update(s).digest();
const matches = (given: string | null, secret: string) => !!given && timingSafeEqual(digest(given), digest(`Bearer ${secret}`));

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || !mailConfigured() || !hasDatabase()) return Response.json({ ok: false, reason: "not configured" }, { status: 503 });
  if (!matches(req.headers.get("authorization"), secret)) return Response.json({ ok: false }, { status: 401 });

  const week = thisWeek();
  const list = db.orm.public.WeeklySubscriber;
  // Never sent anything yet, then sent an earlier week.
  const fresh = await list.where(e => e.confirmedAt.isNotNull()).where(e => e.lastWeekSent.isNull()).orderBy(e => e.createdAt.asc()).limit(BATCH).all().toArray();
  const behind = fresh.length < BATCH
    ? await list.where(e => e.confirmedAt.isNotNull()).where(e => e.lastWeekSent.lt(week)).orderBy(e => e.createdAt.asc()).limit(BATCH - fresh.length).all().toArray()
    : [];
  const due = [...fresh, ...behind];
  let sent = 0, failed = 0;
  for (const s of due) {
    try {
      await sendMail({ to: s.email, ...weeklyEmail(week, s.token) });
      await list.where({ id: s.id }).updateAndCount({ lastWeekSent: week });
      sent++;
    } catch (err) {
      failed++;
      console.error("[weekly] send failed:", err);
    }
  }
  return Response.json({ ok: true, week, sent, failed, more: due.length === BATCH });
}
