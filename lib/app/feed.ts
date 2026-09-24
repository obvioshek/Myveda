import { db } from "@/src/prisma/db";
import type { Basis } from "@/lib/app/labels";
import { firstName } from "@/lib/app/labels";
import { shortAgo, toMs, instantAt } from "@/lib/app/time";
import { canRead, marks, personRef, type Viewer } from "@/lib/app/viewer";
import type { FeedEntry, OpenQuestion } from "@/lib/app/types";

const DAY = 86400000;

// ── loading candidates ─────────────────────────────────────────────────────

async function recentNotes(sinceMs: number) {
  return db.orm.public.Note
    .where(n => n.createdAt.gte(instantAt(sinceMs)))
    .where(n => n.threadId.isNull())
    .include("author")
    .include("topic")
    .include("community")
    .orderBy(n => n.createdAt.desc())
    .limit(300)
    .all();
}

async function recentQuestions(sinceMs: number) {
  return db.orm.public.Question
    .where(q => q.createdAt.gte(instantAt(sinceMs)))
    .include("asker")
    .include("topic")
    .include("community")
    .include("answers", a => a.count())
    .orderBy(q => q.createdAt.desc())
    .limit(200)
    .all();
}

async function recentArticles(sinceMs: number) {
  return db.orm.public.Article
    .where(a => a.publishedAt.gte(instantAt(sinceMs)))
    .include("topic")
    .include("sources", s => s.include("checks"))
    .orderBy(a => a.publishedAt.desc())
    .limit(60)
    .all();
}

type NoteRow = Awaited<ReturnType<typeof recentNotes>>[number];
type QuestionRow = Awaited<ReturnType<typeof recentQuestions>>[number];
type ArticleRow = Awaited<ReturnType<typeof recentArticles>>[number];

// A house piece is "checked" once readers have looked at every source and
// most say it supports the claim.
export function sourcesChecked(sources: { checks?: { verdict: string }[] }[]) {
  if (!sources.length) return false;
  return sources.every(s => {
    const checks = s.checks ?? [];
    const supports = checks.filter(c => c.verdict === "Supports it" || c.verdict === "Partly").length;
    const against = checks.filter(c => c.verdict === "Doesn't").length;
    return supports >= 2 && supports > against * 2;
  });
}

export function articleBases(a: { documented?: string | null; told?: string | null }): Basis[] {
  const b: Basis[] = [];
  if (a.documented) b.push("documented");
  if (a.told) b.push("told");
  return b.length ? b : ["documented"];
}

// ── turning rows into feed entries ─────────────────────────────────────────

function noteEntry(v: Viewer, n: NoteRow, reason: string): FeedEntry {
  const m = marks(v);
  const author = n.author ? personRef(n.author) : null;
  return {
    key: `note:${n.id}`, type: "note", id: n.id, href: `/note/${n.id}`, house: false, author,
    circle: n.community ? { name: n.community.name, slug: n.community.slug } : null,
    time: shortAgo(n.createdAt), bases: [n.basis as Basis], reason, title: null, body: n.body, thumb: null,
    asking: null, checked: false, helpful: m.helpful("note", n.id), saved: m.saved("note", n.id),
    followingAuthor: v.following.has(n.authorId), canFollow: n.authorId !== v.me.id, mine: n.authorId === v.me.id,
  };
}

function questionEntry(v: Viewer, q: QuestionRow, reason: string): FeedEntry {
  const m = marks(v);
  const answers = typeof q.answers === "number" ? q.answers : 0;
  return {
    key: `question:${q.id}`, type: "question", id: q.id, href: `/q/${q.id}`, house: false,
    author: q.asker ? personRef(q.asker) : null,
    circle: q.community ? { name: q.community.name, slug: q.community.slug } : null,
    time: shortAgo(q.createdAt), bases: ["asking"], reason, title: null, body: q.title, thumb: null,
    asking: { answered: answers > 0 || !!q.acceptedAnswerId }, checked: false,
    helpful: m.helpful("question", q.id), saved: m.saved("question", q.id),
    followingAuthor: v.following.has(q.askerId), canFollow: q.askerId !== v.me.id, mine: q.askerId === v.me.id,
  };
}

function articleEntry(v: Viewer, a: ArticleRow, reason: string): FeedEntry {
  const m = marks(v);
  return {
    key: `article:${a.id}`, type: "article", id: a.id, href: `/read/${a.slug}`, house: true, author: null, circle: null,
    time: `${a.readMinutes} min read`, bases: articleBases(a), reason, title: a.title,
    body: a.dek ? `${a.dek}` : "", thumb: a.image, asking: null, checked: sourcesChecked(a.sources ?? []),
    helpful: m.helpful("article", a.id), saved: m.saved("article", a.id), followingAuthor: false, canFollow: false, mine: false,
  };
}

function visibleNote(v: Viewer, n: NoteRow, at: number) {
  const m = marks(v);
  if (m.silenced(n.authorId) || m.hidden("note", n.id)) return false;
  if (!canRead(v, n.community)) return false;
  if (n.community?.memory === "fades" && at - toMs(n.createdAt) > (n.community.fadeDays ?? 7) * DAY) return false;
  return true;
}

function visibleQuestion(v: Viewer, q: QuestionRow) {
  const m = marks(v);
  return !m.silenced(q.askerId) && !m.hidden("question", q.id) && canRead(v, q.community);
}

// ── the Edition: a short daily selection, each with its reason ─────────────

const EDITION_SIZE = 9;

export async function edition(v: Viewer): Promise<FeedEntry[]> {
  const at = Date.now();
  const [notes, questions, articles] = await Promise.all([
    recentNotes(at - 14 * DAY), recentQuestions(at - 14 * DAY), recentArticles(at - 45 * DAY),
  ]);
  type Scored = { entry: FeedEntry; score: number; own: boolean };
  const scored: Scored[] = [];
  const hoursOld = (t: unknown) => (at - toMs(t as never)) / 3600000;

  for (const n of notes) {
    if (!visibleNote(v, n, at)) continue;
    const own = n.authorId === v.me.id;
    if (own && hoursOld(n.createdAt) > 24) continue;
    let score = 0, reason = "";
    if (n.communityId && v.communityIds.has(n.communityId)) { score += 3; reason = `From ${n.community!.name}`; }
    if (v.following.has(n.authorId)) { score += 3; reason ||= `You follow ${firstName(n.author!.name)}`; }
    if (n.topicId && v.topicIds.has(n.topicId)) { score += 2; reason ||= `Because you follow ${n.topic!.name}`; }
    if (!score && !own) continue;
    if (own) reason = "Your post";
    scored.push({ entry: noteEntry(v, n, reason), score: score - hoursOld(n.createdAt) / 24, own });
  }
  for (const q of questions) {
    if (!visibleQuestion(v, q)) continue;
    const own = q.askerId === v.me.id;
    if (own && hoursOld(q.createdAt) > 24) continue;
    let score = 0, reason = "";
    if (q.communityId && v.communityIds.has(q.communityId)) { score += 3; reason = `From ${q.community!.name}`; }
    if (v.topicIds.has(q.topicId)) { score += 2; reason ||= `Because you follow ${q.topic!.name}`; }
    if (v.expertiseIds.has(q.topicId)) { score += 1; reason ||= `You know about ${q.topic!.name}`; }
    if (v.following.has(q.askerId)) { score += 2; reason ||= `You follow ${firstName(q.asker!.name)}`; }
    if (!score && !own) continue;
    if (own) reason = "Your question";
    scored.push({ entry: questionEntry(v, q, reason), score: score - hoursOld(q.createdAt) / 24, own });
  }
  for (const a of articles) {
    if (marks(v).hidden("article", a.id)) continue;
    const score = 2 + (v.topicIds.has(a.topicId) ? 1.5 : 0) - hoursOld(a.publishedAt) / (24 * 7);
    scored.push({ entry: articleEntry(v, a, `From the house · ${a.topic?.name ?? ""}`), score, own: false });
  }

  const own = scored.filter(s => s.own).map(s => s.entry);
  const rest = scored.filter(s => !s.own).sort((a, b) => b.score - a.score).slice(0, EDITION_SIZE);
  // keep the day's selection readable: alternate people and the house where we can
  return [...own, ...rest.map(s => s.entry)];
}

// ── Following: newest first, since the last visit ──────────────────────────

export async function followingFeed(v: Viewer): Promise<FeedEntry[]> {
  const at = Date.now();
  const since = at - 7 * DAY;
  const [notes, questions] = await Promise.all([recentNotes(since), recentQuestions(since)]);
  const items: { entry: FeedEntry; t: number }[] = [];
  for (const n of notes) {
    if (!visibleNote(v, n, at) || n.authorId === v.me.id) continue;
    const reason = v.following.has(n.authorId) ? `You follow ${firstName(n.author!.name)}`
      : n.communityId && v.communityIds.has(n.communityId) ? `From ${n.community!.name}`
      : n.topicId && v.topicIds.has(n.topicId) ? `Because you follow ${n.topic!.name}` : "";
    if (reason) items.push({ entry: noteEntry(v, n, reason), t: toMs(n.createdAt) });
  }
  for (const q of questions) {
    if (!visibleQuestion(v, q) || q.askerId === v.me.id) continue;
    const reason = v.following.has(q.askerId) ? `You follow ${firstName(q.asker!.name)}`
      : q.communityId && v.communityIds.has(q.communityId) ? `From ${q.community!.name}`
      : v.topicIds.has(q.topicId) ? `Because you follow ${q.topic!.name}` : "";
    if (reason) items.push({ entry: questionEntry(v, q, reason), t: toMs(q.createdAt) });
  }
  return items.sort((a, b) => b.t - a.t).slice(0, 40).map(i => i.entry);
}

// ── questions this member could help with ──────────────────────────────────

export async function openQuestionsFor(v: Viewer, limit: number): Promise<OpenQuestion[]> {
  if (v.me.openTo === "Just reading") return [];
  const topicIds = v.expertiseIds.size ? [...v.expertiseIds] : [...v.topicIds];
  if (!topicIds.length) return [];
  const qs = await db.orm.public.Question
    .where(q => q.topicId.in(topicIds))
    .where(q => q.acceptedAnswerId.isNull())
    .where(q => q.askerId.neq(v.me.id))
    .include("asker")
    .include("topic")
    .include("community")
    .include("answers", a => a.where(x => x.authorId.eq(v.me.id)).count())
    .orderBy(q => q.createdAt.desc())
    .limit(40)
    .all();
  return qs
    .filter(q => q.answers === 0 && visibleQuestion(v, q as unknown as QuestionRow))
    .slice(0, limit)
    .map(q => ({
      id: q.id, title: q.title,
      meta: `${q.asker?.name ?? "A member"} · ${q.community?.name ?? q.topic?.name ?? ""} · ${shortAgo(q.createdAt)}`,
    }));
}
