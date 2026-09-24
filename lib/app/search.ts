import { db } from "@/src/prisma/db";
import { LABELS, isBasis, type Basis } from "@/lib/app/labels";
import { canRead, marks, type Viewer } from "@/lib/app/viewer";
import { articleBases } from "@/lib/app/feed";
import { shortAgo } from "@/lib/app/time";
import type { RowItem } from "@/lib/app/types";

const like = (q: string) => `%${q.replace(/[\\%_]/g, c => "\\" + c)}%`;

export interface SearchGroup { name: string; items: RowItem[] }

// Discover search: questions, posts, people, topics and communities, grouped.
// "Only Documented" keeps just the posts that can be checked against a record.
export async function search(v: Viewer, raw: string, docOnly: boolean): Promise<SearchGroup[]> {
  const q = raw.trim().slice(0, 100);
  if (!q) return [];
  const pat = like(q);
  const m = marks(v);
  const [questions, notes, articles, people, topics, communities] = await Promise.all([
    docOnly ? Promise.resolve([]) : db.orm.public.Question.where(x => x.title.ilike(pat)).include("topic").include("community").orderBy(x => x.createdAt.desc()).limit(20).all(),
    db.orm.public.Note.where(x => x.body.ilike(pat)).where(x => x.threadId.isNull()).include("author").include("topic").include("community").orderBy(x => x.createdAt.desc()).limit(40).all(),
    db.orm.public.Article.where(x => x.title.ilike(pat)).include("topic").limit(10).all(),
    docOnly ? Promise.resolve([]) : db.orm.public.User.where(x => x.name.ilike(pat)).where(x => x.handle.isNotNull()).limit(10).all(),
    docOnly ? Promise.resolve([]) : db.orm.public.Topic.where(x => x.name.ilike(pat)).limit(10).all(),
    docOnly ? Promise.resolve([]) : db.orm.public.Community.where(x => x.name.ilike(pat)).limit(10).all(),
  ]);
  // topic names also match people who know about them, and circles about them
  const topicIds = topics.map(t => t.id);
  const [experts, topicCircles] = topicIds.length && !docOnly
    ? await Promise.all([
      db.orm.public.Expertise.where(e => e.topicId.in(topicIds)).include("user").limit(10).all(),
      db.orm.public.CommunityTopic.where(c => c.topicId.in(topicIds)).include("community").limit(10).all(),
    ])
    : [[], []];

  const groups: SearchGroup[] = [];
  const qs = questions.filter(x => canRead(v, x.community) && !m.silenced(x.askerId))
    .map(x => ({ key: x.id, href: `/q/${x.id}`, title: x.title, meta: `Question · ${x.topic?.name ?? ""}`, bases: ["asking" as Basis] }));
  if (qs.length) groups.push({ name: "Questions", items: qs });

  const posts: RowItem[] = [
    ...articles
      .filter(a => !docOnly || articleBases(a).includes("documented"))
      .map(a => ({ key: a.id, href: `/read/${a.slug}`, title: a.title, meta: `${articleBases(a).map(b => LABELS[b].name).join(" · ")} · From the house`, bases: articleBases(a) })),
    ...notes
      .filter(n => canRead(v, n.community) && !m.silenced(n.authorId) && (!docOnly || n.basis === "documented"))
      .map(n => {
        const b: Basis = isBasis(n.basis) ? n.basis : "view";
        return { key: n.id, href: `/note/${n.id}`, title: n.body, meta: `${LABELS[b].name} · ${n.author?.name ?? ""} · ${shortAgo(n.createdAt)}`, bases: [b] };
      }),
  ];
  if (posts.length) groups.push({ name: "Posts", items: posts });

  const seen = new Set<string>();
  const peopleRows = [...people, ...experts.map(e => e.user).filter((u): u is NonNullable<typeof u> => !!u)]
    .filter(u => u.id !== v.me.id && !v.blocked.has(u.id) && !seen.has(u.id) && !!seen.add(u.id))
    .map(u => ({ key: u.id, href: `/u/${encodeURIComponent(u.handle ?? u.id)}`, title: u.name, meta: u.line ?? "", bases: [] as Basis[] }));
  if (peopleRows.length) groups.push({ name: "People", items: peopleRows });

  if (topics.length) groups.push({ name: "Topics", items: topics.map(t => ({ key: t.id, href: `/t/${encodeURIComponent(t.name)}`, title: t.name, meta: "Topic", bases: [] })) });

  const cseen = new Set<string>();
  const comms = [...communities, ...topicCircles.map(c => c.community).filter((c): c is NonNullable<typeof c> => !!c)]
    .filter(c => !cseen.has(c.id) && !!cseen.add(c.id))
    .map(c => ({ key: c.id, href: `/c/${c.slug}`, title: c.name, meta: `${c.format} · ${c.weekPrompt ?? ""}`, bases: [] as Basis[] }));
  if (comms.length) groups.push({ name: "Communities", items: comms });
  return groups;
}

export interface TopicData { name: string; following: boolean; sections: SearchGroup[] }

export async function loadTopic(v: Viewer, name: string): Promise<TopicData | null> {
  const t = await db.orm.public.Topic.where({ name }).first();
  if (!t) return null;
  const m = marks(v);
  const [notes, articles, questions, circles, experts, curious] = await Promise.all([
    db.orm.public.Note.where({ topicId: t.id }).where(x => x.threadId.isNull()).include("author").include("community").orderBy(x => x.createdAt.desc()).limit(40).all(),
    db.orm.public.Article.where({ topicId: t.id }).orderBy(x => x.publishedAt.desc()).limit(10).all(),
    db.orm.public.Question.where({ topicId: t.id }).where(x => x.acceptedAnswerId.isNull()).include("asker").include("community").orderBy(x => x.createdAt.desc()).limit(20).all(),
    db.orm.public.CommunityTopic.where({ topicId: t.id }).include("community").all(),
    db.orm.public.Expertise.where({ topicId: t.id }).include("user").limit(10).all(),
    db.orm.public.TopicFollow.where({ topicId: t.id }).include("user").limit(10).all(),
  ]);
  const visibleNotes = notes.filter(n => canRead(v, n.community) && !m.silenced(n.authorId) && !m.hidden("note", n.id));
  const noteRow = (n: (typeof notes)[number]): RowItem => {
    const b: Basis = isBasis(n.basis) ? n.basis : "view";
    return { key: n.id, href: `/note/${n.id}`, title: n.body, meta: n.author?.name ?? "", bases: [b] };
  };
  const seen = new Set<string>([v.me.id]);
  const people = [...experts, ...curious].map(x => x.user).filter((u): u is NonNullable<typeof u> => !!u && !!u.handle && !seen.has(u.id) && !v.blocked.has(u.id) && !!seen.add(u.id));
  const sections: SearchGroup[] = [
    {
      name: "Best documented",
      items: [
        ...articles.map(a => ({ key: a.id, href: `/read/${a.slug}`, title: a.title, meta: "From the house", bases: articleBases(a) })),
        ...visibleNotes.filter(n => n.basis === "documented").map(noteRow),
      ],
    },
    {
      name: "Open questions",
      items: questions.filter(q => canRead(v, q.community) && !m.silenced(q.askerId))
        .map(q => ({ key: q.id, href: `/q/${q.id}`, title: q.title, meta: q.asker?.name ?? "", bases: ["asking" as Basis] })),
    },
    { name: "Recent", items: visibleNotes.filter(n => n.basis !== "documented").map(noteRow) },
    {
      name: "Circles",
      items: circles.map(c => c.community).filter((c): c is NonNullable<typeof c> => !!c)
        .map(c => ({ key: c.id, href: `/c/${c.slug}`, title: c.name, meta: c.weekPrompt ?? "", bases: [] })),
    },
    { name: "People to follow", items: people.map(u => ({ key: u.id, href: `/u/${encodeURIComponent(u.handle!)}`, title: u.name, meta: u.line ?? "", bases: [] })) },
  ].filter(s => s.items.length);
  return { name: t.name, following: v.topicIds.has(t.id), sections };
}
