import { db } from "@/src/prisma/db";
import { firstName, isBasis, type Basis } from "@/lib/app/labels";
import { longDate, shortAgo } from "@/lib/app/time";
import { canRead, marks, personRef, type Viewer } from "@/lib/app/viewer";
import { articleBases } from "@/lib/app/feed";
import type { ReplyItem } from "@/lib/app/types";
import type { PersonRef } from "@/components/app/bits";

export interface ReaderData {
  kind: "article" | "note";
  id: string;
  topic: string;
  bases: Basis[];
  read: string | null;
  title: string | null;
  dek: string | null;
  editor: string | null;
  updated: string | null;
  author: PersonRef | null;
  authorMeta: string | null;
  following: boolean;
  mine: boolean;
  edited: boolean;
  image: string | null;
  paras: { text: string; src: { n: number; title: string; meta: string } | null }[];
  documented: string | null;
  told: string | null;
  carry: string | null;
  noteSource: { url: string; type: string | null; locator: string | null } | null;
  sources: { id: string; n: number; title: string; type: string; locator: string | null; url: string | null; mine: string | null }[];
  corrections: { date: string; text: string }[];
  related: string[];
  saved: boolean;
  helpful: boolean;
  replies: ReplyItem[];
  canReply: boolean;
}

type ResponseRow = {
  id: string; authorId: string; relation: string; basis: string; anchor: string | null; reason: string | null;
  body: string; onResponseId: string | null; author?: { id: string; name: string; initials: string | null; hue: number; handle: string | null } | null;
};

function replies(v: Viewer, rows: ResponseRow[]): ReplyItem[] {
  const m = marks(v);
  const byId = new Map(rows.map(r => [r.id, r]));
  return rows
    .filter(r => r.author && !m.silenced(r.authorId))
    .map(r => {
      const on = r.onResponseId ? byId.get(r.onResponseId) : null;
      return {
        id: r.id, author: personRef(r.author!), relation: r.relation,
        basis: isBasis(r.basis) ? r.basis : "view", anchor: r.anchor,
        on: on?.author ? firstName(on.author.name) : null, reason: r.reason, body: r.body, mine: r.authorId === v.me.id,
      };
    });
}

export async function loadArticle(v: Viewer, slug: string): Promise<ReaderData | null> {
  const a = await db.orm.public.Article
    .where({ slug })
    .include("topic")
    .include("paragraphs", p => p.orderBy(x => x.position.asc()))
    .include("sources", s => s.orderBy(x => x.number.asc()).include("checks", c => c.where(x => x.userId.eq(v.me.id))))
    .include("corrections", c => c.orderBy(x => x.createdAt.desc()))
    .include("responses", r => r.include("author").orderBy(x => x.createdAt.asc()))
    .first();
  if (!a) return null;
  const m = marks(v);
  const sources = a.sources ?? [];
  const srcFor = (n: number | null) => {
    const s = n ? sources.find(x => x.number === n) : null;
    return s ? { n: s.number, title: s.title, meta: [s.type, s.locator].filter(Boolean).join(" · ") } : null;
  };
  return {
    kind: "article", id: a.id, topic: a.topic?.name ?? "", bases: articleBases(a), read: `${a.readMinutes} min read`,
    title: a.title, dek: a.dek, editor: a.editorName,
    updated: a.updatedAt && a.updatedAt.epochMilliseconds !== a.publishedAt.epochMilliseconds ? `Updated ${longDate(a.updatedAt)}` : `Published ${longDate(a.publishedAt)}`,
    author: null, authorMeta: null, following: false, mine: false, edited: false, image: a.image,
    paras: (a.paragraphs ?? []).map(p => ({ text: p.text, src: srcFor(p.sourceNumber) })),
    documented: a.documented, told: a.told, carry: a.carry, noteSource: null,
    sources: sources.map(s => ({ id: s.id, n: s.number, title: s.title, type: s.type, locator: s.locator, url: s.url, mine: s.checks?.[0]?.verdict ?? null })),
    corrections: (a.corrections ?? []).map(c => ({ date: longDate(c.createdAt), text: c.text })),
    related: [...(a.related ?? [])], saved: m.saved("article", a.id), helpful: m.helpful("article", a.id),
    replies: replies(v, (a.responses ?? []) as ResponseRow[]), canReply: true,
  };
}

export async function loadNote(v: Viewer, id: string): Promise<ReaderData | null> {
  const n = await db.orm.public.Note
    .where({ id })
    .include("author")
    .include("topic")
    .include("community")
    .include("responses", r => r.include("author").orderBy(x => x.createdAt.asc()))
    .first();
  if (!n || !n.author) return null;
  const m = marks(v);
  if (v.blocked.has(n.authorId) || !canRead(v, n.community)) return null;
  const member = !n.community || v.communityIds.has(n.community.id);
  return {
    kind: "note", id: n.id, topic: n.topic?.name ?? n.community?.name ?? "", bases: [isBasis(n.basis) ? n.basis : "view"],
    read: null, title: null, dek: null, editor: null, updated: null,
    author: personRef(n.author),
    authorMeta: `${n.community ? `in ${n.community.name} · ` : ""}${n.topic?.name ?? ""}${n.topic ? " · " : ""}${shortAgo(n.createdAt)}`,
    following: v.following.has(n.authorId), mine: n.authorId === v.me.id, edited: !!n.editedAt, image: null,
    paras: n.body.split(/\n{2,}/).map(t => ({ text: t, src: null })),
    documented: null, told: null, carry: null,
    noteSource: n.sourceUrl ? { url: n.sourceUrl, type: n.sourceType, locator: n.sourceLocator } : null,
    sources: [], corrections: [], related: [], saved: m.saved("note", n.id), helpful: m.helpful("note", n.id),
    replies: replies(v, (n.responses ?? []) as ResponseRow[]),
    canReply: member || n.community?.memory !== "members",
  };
}
