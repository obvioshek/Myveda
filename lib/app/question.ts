import { db } from "@/src/prisma/db";
import { firstName, isBasis } from "@/lib/app/labels";
import { shortAgo } from "@/lib/app/time";
import { canRead, marks, personRef, type Viewer } from "@/lib/app/viewer";
import type { AnswerItem, PersonRef } from "@/lib/app/types";

export interface QuestionData {
  id: string;
  title: string;
  context: string | null;
  topic: string;
  circle: { name: string; slug: string } | null;
  asker: PersonRef;
  time: string;
  mine: boolean;
  acceptedId: string | null;
  following: boolean;
  same: boolean;
  saved: boolean;
  answers: AnswerItem[];
  answeredByMe: boolean;
  canAnswer: boolean;
}

export async function loadQuestion(v: Viewer, id: string): Promise<QuestionData | null> {
  const q = await db.orm.public.Question
    .where({ id })
    .include("asker")
    .include("topic")
    .include("community")
    .include("answers", a => a.include("author").orderBy(x => x.createdAt.asc()))
    .first();
  if (!q || !q.asker) return null;
  if (v.blocked.has(q.askerId) || !canRead(v, q.community)) return null;
  const m = marks(v);
  const [follow] = await Promise.all([
    db.orm.public.QuestionFollow.where({ userId: v.me.id, questionId: q.id }).first(),
  ]);
  const rows = (q.answers ?? []).filter(a => a.author && !m.silenced(a.authorId));
  const byId = new Map(rows.map(a => [a.id, a]));
  // When anyone disagrees, the opinions sit together as "several views",
  // none ranked above the others.
  const disputed = rows.some(a => a.relation === "Disagrees");
  const answers: AnswerItem[] = rows.map(a => {
    const on = a.onAnswerId ? byId.get(a.onAnswerId) : null;
    const basis = isBasis(a.basis) ? a.basis : "view";
    return {
      id: a.id, author: personRef(a.author!), credential: a.author!.credential ?? null, relation: a.relation, basis,
      on: on?.author ? firstName(on.author.name) : null, reason: a.reason, body: a.body,
      accepted: q.acceptedAnswerId === a.id, helpful: m.helpful("answer", a.id), mine: a.authorId === v.me.id,
      several: disputed && (a.relation === "Disagrees" || (a.relation === "Answers" && basis === "view")),
      source: a.sourceUrl ? { url: a.sourceUrl, type: a.sourceType, locator: a.sourceLocator } : null,
    };
  });
  return {
    id: q.id, title: q.title, context: q.context, topic: q.topic?.name ?? "",
    circle: q.community ? { name: q.community.name, slug: q.community.slug } : null,
    asker: personRef(q.asker), time: shortAgo(q.createdAt), mine: q.askerId === v.me.id, acceptedId: q.acceptedAnswerId,
    following: !!follow?.following, same: !!follow?.same, saved: m.saved("question", q.id), answers,
    answeredByMe: answers.some(a => a.mine),
    canAnswer: !q.community || q.community.memory !== "members" || v.communityIds.has(q.community.id),
  };
}
