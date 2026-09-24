import { db } from "@/src/prisma/db";
import { inboxGroup, inboxWhen, instantAt } from "@/lib/app/time";
import { personRef, type Viewer } from "@/lib/app/viewer";
import type { PersonRef } from "@/lib/app/types";

export const INBOX_FILTERS = ["All", "Answers", "Builds on", "Mentions", "Thanks", "Asks", "Communities"] as const;

export interface InboxItem {
  id: string; type: string; actor: PersonRef | null; initials: string; text: string; preview: string | null;
  href: string; when: string; unread: boolean; canReply: boolean;
}

export async function loadInbox(v: Viewer, filter: string) {
  const nowI = instantAt(Date.now());
  let q = db.orm.public.Notification
    .where(n => n.userId.eq(v.me.id))
    .where(n => n.deliverAt.lte(nowI))
    .include("actor")
    .orderBy(n => n.deliverAt.desc())
    .limit(100);
  if (filter !== "All") q = q.where(n => n.type.eq(filter));
  const [rows, held] = await Promise.all([
    q.all(),
    db.orm.public.Notification.where(n => n.userId.eq(v.me.id)).where(n => n.deliverAt.gt(nowI)).all(),
  ]);
  const groups = new Map<string, InboxItem[]>();
  for (const n of rows) {
    if (n.actorId && v.blocked.has(n.actorId)) continue;
    const g = inboxGroup(n.deliverAt);
    const item: InboxItem = {
      id: n.id, type: n.type, actor: n.actor ? personRef(n.actor) : null,
      initials: n.actor ? "" : (n.text.match(/\b[A-Z]/g) ?? ["·"]).slice(0, 2).join(""),
      text: n.text, preview: n.preview, href: n.href, when: inboxWhen(n.deliverAt), unread: !n.readAt,
      canReply: !!(n.replyType && n.replyId),
    };
    groups.set(g, [...(groups.get(g) ?? []), item]);
  }
  return {
    groups: ["Today", "This week", "Earlier"].filter(g => groups.has(g)).map(g => ({ name: g, items: groups.get(g)! })),
    held: { quiet: held.filter(h => !h.digestKey).length, digest: held.filter(h => !!h.digestKey).length },
    digest: v.me.digest, quietHours: v.me.quietHours,
  };
}

export type InboxData = Awaited<ReturnType<typeof loadInbox>>;
