import { db } from "@/src/prisma/db";
import { firstName, isBasis, memoryLabel } from "@/lib/app/labels";
import { shortAgo, toMs } from "@/lib/app/time";
import { canRead, marks, personRef, type Viewer } from "@/lib/app/viewer";
import type { NoteItem, PersonRef } from "@/lib/app/types";

const DAY = 86400000;

export interface ThreadRef { id: string; title: string; subtitle: string | null; pinned: boolean; spoiler: boolean; archived: boolean; current: boolean }

export interface CommunityData {
  id: string; slug: string; name: string; format: string; memoryLabel: string; memory: string; pace: string | null;
  contributors: string | null; weekPrompt: string | null; weekDetail: string | null; rules: string[];
  hosts: PersonRef[]; status: "none" | "member" | "applied"; isHost: boolean; canRead: boolean;
  threads: ThreadRef[];
  thread: (ThreadRef & { notes: NoteItem[] }) | null;
  spoiler: (ThreadRef & { unlocked: boolean; notes: NoteItem[] }) | null;
  applications: (PersonRef & { line: string })[];
  topics: string[];
}

type NoteRow = { id: string; authorId: string; basis: string; body: string; buildsOnId: string | null; createdAt: unknown; author?: { id: string; name: string; initials: string | null; hue: number; handle: string | null } | null };

function noteItems(v: Viewer, rows: NoteRow[], allById: Map<string, NoteRow>): NoteItem[] {
  const m = marks(v);
  return rows
    .filter(n => n.author && !m.silenced(n.authorId) && !m.hidden("note", n.id))
    .map(n => {
      const on = n.buildsOnId ? allById.get(n.buildsOnId) : null;
      return {
        id: n.id, author: personRef(n.author!), basis: isBasis(n.basis) ? n.basis : "view", body: n.body,
        onId: n.buildsOnId, onName: on?.author ? firstName(on.author.name) : null,
        time: shortAgo(n.createdAt as never), mine: n.authorId === v.me.id,
      };
    });
}

const threadRef = (t: { id: string; title: string; subtitle: string | null; pinned: boolean; spoiler: boolean; archived: boolean; isCurrent: boolean }): ThreadRef =>
  ({ id: t.id, title: t.title, subtitle: t.subtitle, pinned: t.pinned, spoiler: t.spoiler, archived: t.archived, current: t.isCurrent });

export async function loadCommunity(v: Viewer, slug: string, threadId?: string): Promise<CommunityData | null> {
  const c = await db.orm.public.Community
    .where({ slug })
    .include("topics", t => t.include("topic"))
    .include("members", mm => mm.include("user"))
    .include("threads", t => t.orderBy(x => x.position.asc()))
    .first();
  if (!c) return null;
  const members = c.members ?? [];
  const mine = members.find(mm => mm.userId === v.me.id);
  const status = (mine?.status as "member" | "applied" | undefined) ?? "none";
  const isHost = !!mine?.isSteward;
  const readable = canRead(v, c);
  const threads = (c.threads ?? []).map(threadRef);
  const open = threads.filter(t => !t.archived && !t.spoiler);
  const chosen = threads.find(t => t.id === threadId) ?? open.find(t => t.current) ?? open.find(t => !t.pinned) ?? null;
  const spoilerT = threads.find(t => t.spoiler && !t.archived && t.id !== chosen?.id) ?? null;

  let thread: CommunityData["thread"] = null;
  let spoiler: CommunityData["spoiler"] = null;
  if (readable) {
    const ids = [chosen?.id, spoilerT?.id].filter(Boolean) as string[];
    const rows = ids.length
      ? await db.orm.public.Note.where(n => n.threadId.in(ids)).include("author").orderBy(n => n.createdAt.asc()).all()
      : [];
    const byId = new Map<string, NoteRow>(rows.map(r => [r.id, r as NoteRow]));
    // a noticeboard forgets: notes fade after its window
    const fresh = (r: NoteRow) => c.memory !== "fades" || Date.now() - toMs(r.createdAt as never) <= (c.fadeDays ?? 7) * DAY;
    const unlocked = spoilerT ? !!(await db.orm.public.SpoilerUnlock.where({ userId: v.me.id, threadId: spoilerT.id }).first()) : false;
    // a spoiler thread opened directly still asks first
    const chosenLocked = !!chosen?.spoiler && !(await db.orm.public.SpoilerUnlock.where({ userId: v.me.id, threadId: chosen.id }).first());
    if (chosen) thread = { ...chosen, notes: chosenLocked ? [] : noteItems(v, rows.filter(r => r.threadId === chosen.id).filter(fresh) as NoteRow[], byId) };
    if (spoilerT) spoiler = { ...spoilerT, unlocked, notes: unlocked ? noteItems(v, rows.filter(r => r.threadId === spoilerT.id).filter(fresh) as NoteRow[], byId) : [] };
  }

  return {
    id: c.id, slug: c.slug, name: c.name, format: c.format, memory: c.memory, memoryLabel: memoryLabel(c.memory, c.fadeDays),
    pace: c.pace, contributors: c.contributors, weekPrompt: c.weekPrompt, weekDetail: c.weekDetail, rules: [...(c.rules ?? [])],
    hosts: members.filter(mm => mm.isSteward && mm.user).map(mm => personRef(mm.user!)),
    status, isHost, canRead: readable, threads, thread, spoiler,
    applications: isHost ? members.filter(mm => mm.status === "applied" && mm.user).map(mm => ({ ...personRef(mm.user!), line: mm.user!.line ?? "" })) : [],
    topics: (c.topics ?? []).map(t => t.topic?.name ?? "").filter(Boolean),
  };
}

export interface CommunityCard {
  id: string; slug: string; name: string; format: string; memory: string; week: string; note: string; hosts: string;
  status: "none" | "member" | "applied"; topics: string[];
}

export async function listCommunities(v: Viewer, topicName?: string): Promise<CommunityCard[]> {
  const rows = await db.orm.public.Community
    .include("topics", t => t.include("topic"))
    .include("members", mm => mm.where(x => x.isSteward.eq(true)).include("user"))
    .orderBy(c => c.name.asc())
    .all();
  return rows
    .map(c => ({
      id: c.id, slug: c.slug, name: c.name, format: c.format, memory: memoryLabel(c.memory, c.fadeDays),
      week: c.weekPrompt ?? "", note: c.weekDetail ?? c.blurb ?? "",
      hosts: (c.members ?? []).map(mm => mm.user?.name).filter(Boolean).join(", "),
      status: v.communityIds.has(c.id) ? "member" as const : v.applied.has(c.id) ? "applied" as const : "none" as const,
      topics: (c.topics ?? []).map(t => t.topic?.name ?? ""),
    }))
    .filter(c => !topicName || c.topics.includes(topicName));
}
