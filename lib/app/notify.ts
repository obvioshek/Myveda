import { db } from "@/src/prisma/db";
import { inQuietHours, instantAt, nextLocalHour, toMs } from "@/lib/app/time";

// The Inbox has three speeds:
//   right away — answers to your questions, people building on your notes,
//                mentions, private thank-yous (held until 8 am in quiet hours)
//   a digest   — your circles and the people you follow, daily or weekly
//   never      — counts, milestones, "you're trending"; there is no code path
//                that creates one.

export type NotificationType = "Answers" | "Builds on" | "Mentions" | "Thanks" | "Communities" | "Asks";

interface Recipient { id: string; timezone?: string | null; quietHours?: boolean | null; digest?: string | null }

const tzOf = (u: Recipient) => u.timezone || "Asia/Kolkata";

function rightAwayAt(u: Recipient, at = Date.now()) {
  if (u.quietHours !== false && inQuietHours(at, tzOf(u))) return nextLocalHour(at, tzOf(u), 8);
  return at;
}

function digestAt(u: Recipient, at = Date.now()) {
  return u.digest === "Weekly" ? nextLocalHour(at + 60000, tzOf(u), 8, "Mon") : nextLocalHour(at + 60000, tzOf(u), 8);
}

async function recipient(userId: string): Promise<Recipient | null> {
  return db.orm.public.User.select("id", "timezone", "quietHours", "digest").where({ id: userId }).first();
}

export async function notify(input: {
  userId: string;
  actorId?: string | null;
  type: NotificationType;
  text: string;
  preview?: string | null;
  href: string;
  replyType?: "answer" | "note" | "response" | null;
  replyId?: string | null;
}) {
  // nobody is told about their own actions
  if (input.actorId && input.actorId === input.userId) return;
  const u = await recipient(input.userId);
  if (!u) return;
  if (input.actorId) {
    const blocked = await db.orm.public.Block
      .where(b => b.userId.eq(input.userId))
      .where(b => b.blockedId.eq(input.actorId!))
      .first();
    if (blocked) return;
  }
  await db.orm.public.Notification.create({
    userId: input.userId,
    actorId: input.actorId ?? null,
    type: input.type,
    text: input.text,
    preview: input.preview ? clip(input.preview, 160) : null,
    href: input.href,
    replyType: input.replyType ?? null,
    replyId: input.replyId ?? null,
    deliverAt: instantAt(rightAwayAt(u)),
  });
}

// One digest line per community per period: later activity updates the
// pending line instead of adding another.
export async function notifyDigest(input: { userId: string; communityId: string; communityName: string; href: string; preview: string }) {
  const u = await recipient(input.userId);
  if (!u) return;
  const key = `digest:${input.communityId}`;
  const pending = await db.orm.public.Notification
    .where(n => n.userId.eq(input.userId))
    .where(n => n.digestKey.eq(key))
    .orderBy(n => n.deliverAt.desc())
    .first();
  if (pending && toMs(pending.deliverAt) > Date.now()) {
    await db.orm.public.Notification.where({ id: pending.id }).update({ preview: clip(input.preview, 160) });
    return;
  }
  await db.orm.public.Notification.create({
    userId: input.userId,
    type: "Communities",
    text: `${input.communityName} · ${u.digest === "Weekly" ? "weekly" : "daily"} digest`,
    preview: clip(input.preview, 160),
    href: input.href,
    digestKey: key,
    deliverAt: instantAt(digestAt(u)),
  });
}

// @handle mentions in anything a member writes.
export async function notifyMentions(text: string, actor: { id: string; name: string }, where: string, href: string, reply?: { type: "note" | "answer" | "response"; id: string }) {
  const handles = Array.from(new Set(Array.from(text.matchAll(/@([a-z0-9_.-]{2,32})/gi)).map(m => m[1].toLowerCase())));
  if (!handles.length) return;
  const users = await db.orm.public.User.select("id", "handle").where(u => u.handle.in(handles)).all();
  for (const u of users) {
    await notify({
      userId: u.id, actorId: actor.id, type: "Mentions", text: `mentioned you in ${where}`,
      preview: `“${clip(text, 140)}”`, href, replyType: reply?.type ?? null, replyId: reply?.id ?? null,
    });
  }
}

export function clip(s: string, n: number) {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t;
}
