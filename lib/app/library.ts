import { db } from "@/src/prisma/db";
import { LABELS, isBasis, type Basis } from "@/lib/app/labels";
import { inboxWhen } from "@/lib/app/time";
import { canRead, marks, type Viewer } from "@/lib/app/viewer";
import { articleBases } from "@/lib/app/feed";
import type { DraftInput, TargetType } from "@/lib/app/types";

export interface Resolved { type: TargetType; id: string; href: string; title: string; meta: string; bases: Basis[] }

// Turn (type, id) pairs into something a list can show. Anything no longer
// there, or no longer readable, drops out.
export async function resolveTargets(v: Viewer, pairs: { targetType: string; targetId: string }[]): Promise<Map<string, Resolved>> {
  const ids = (t: string) => pairs.filter(p => p.targetType === t).map(p => p.targetId);
  const [notes, articles, questions, answers] = await Promise.all([
    ids("note").length ? db.orm.public.Note.where(n => n.id.in(ids("note"))).include("author").include("topic").include("community").all() : Promise.resolve([]),
    ids("article").length ? db.orm.public.Article.where(a => a.id.in(ids("article"))).include("topic").all() : Promise.resolve([]),
    ids("question").length ? db.orm.public.Question.where(q => q.id.in(ids("question"))).include("asker").include("topic").include("community").all() : Promise.resolve([]),
    ids("answer").length ? db.orm.public.Answer.where(a => a.id.in(ids("answer"))).include("author").include("question").all() : Promise.resolve([]),
  ]);
  const m = marks(v);
  const out = new Map<string, Resolved>();
  for (const n of notes) {
    if (!canRead(v, n.community) || m.silenced(n.authorId)) continue;
    out.set(`note:${n.id}`, { type: "note", id: n.id, href: `/note/${n.id}`, title: n.body, meta: `${n.author?.name ?? ""} · ${n.topic?.name ?? n.community?.name ?? ""}`, bases: [isBasis(n.basis) ? n.basis : "view"] });
  }
  for (const a of articles) out.set(`article:${a.id}`, { type: "article", id: a.id, href: `/read/${a.slug}`, title: a.title, meta: `From the house · ${a.topic?.name ?? ""}`, bases: articleBases(a) });
  for (const q of questions) {
    if (!canRead(v, q.community)) continue;
    out.set(`question:${q.id}`, { type: "question", id: q.id, href: `/q/${q.id}`, title: q.title, meta: `${q.asker?.name ?? ""} · ${q.topic?.name ?? ""}`, bases: ["asking"] });
  }
  for (const a of answers) out.set(`answer:${a.id}`, { type: "answer", id: a.id, href: `/q/${a.questionId}`, title: a.body, meta: `${a.author?.name ?? ""} · on “${a.question?.title ?? ""}”`, bases: [isBasis(a.basis) ? a.basis : "view"] });
  return out;
}

export async function loadLibrary(v: Viewer) {
  const me = v.me;
  const [bookmarks, collections, drafts, history] = await Promise.all([
    db.orm.public.Bookmark.where({ userId: me.id }).orderBy(b => b.createdAt.desc()).all(),
    db.orm.public.Collection.where({ ownerId: me.id }).include("items", i => i.orderBy(x => x.addedAt.desc())).orderBy(c => c.createdAt.asc()).all(),
    db.orm.public.Draft.where({ userId: me.id }).orderBy(d => d.updatedAt.desc()).all(),
    me.keepHistory ? db.orm.public.ReadEvent.where({ userId: me.id }).orderBy(r => r.readAt.desc()).limit(50).all() : Promise.resolve([]),
  ]);
  const resolved = await resolveTargets(v, [...bookmarks, ...collections.flatMap(c => c.items ?? [])]);
  const historyArticles = history.filter(h => h.targetType === "article").map(h => h.targetId);
  const slugs = new Map(
    (historyArticles.length ? await db.orm.public.Article.select("id", "slug").where(a => a.id.in(historyArticles)).all() : []).map(a => [a.id, a.slug]),
  );
  const circleNames = new Map(v.circles.map(c => [c.id, c.name]));
  return {
    saved: bookmarks
      .map(b => ({ item: resolved.get(`${b.targetType}:${b.targetId}`), note: b.note ?? "" }))
      .filter((x): x is { item: Resolved; note: string } => !!x.item),
    collections: collections.map(c => ({
      id: c.id, name: c.name,
      visibility: c.visibility === "private" ? "Private" : `Shared with ${circleNames.get(c.visibility) ?? "a circle"}`,
      items: (c.items ?? []).map(i => resolved.get(`${i.targetType}:${i.targetId}`)).filter((x): x is Resolved => !!x),
    })),
    drafts: drafts.map(d => ({
      id: d.id, when: inboxWhen(d.updatedAt),
      draft: {
        id: d.id, text: d.text, intent: (d.intent === "asking" || d.intent === "sharing") ? d.intent : null,
        basis: isBasis(d.basis) ? d.basis : null, topic: d.topicName ?? "", audience: d.audience ?? "public",
        url: d.sourceUrl ?? "", stype: d.sourceType ?? "Reference work", loc: d.sourceLocator ?? "", ai: d.aiAssisted,
      } satisfies DraftInput,
      label: d.intent === "asking" ? LABELS.asking : null,
    })),
    history: history.map(h => ({ key: `${h.targetType}:${h.targetId}`, href: h.targetType === "article" ? (slugs.has(h.targetId) ? `/read/${slugs.get(h.targetId)}` : null) : h.targetType === "question" ? `/q/${h.targetId}` : `/note/${h.targetId}`, type: h.targetType, id: h.targetId, title: h.title, when: inboxWhen(h.readAt) })),
    keepHistory: me.keepHistory,
    circles: v.circles.map(c => ({ id: c.id, name: c.name })),
  };
}

export type LibraryData = Awaited<ReturnType<typeof loadLibrary>>;
