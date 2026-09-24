import { db } from "@/src/prisma/db";
import { isBasis } from "@/lib/app/labels";
import { instantAt, shortAgo, toMs } from "@/lib/app/time";
import { canRead, marks, personRef, type Viewer } from "@/lib/app/viewer";
import type { PersonRef, RowItem } from "@/lib/app/types";

export interface ProfileData {
  person: PersonRef;
  line: string | null;
  role: string | null;
  isMe: boolean;
  following: boolean;
  muted: boolean;
  blocked: boolean;
  ask: string[];
  curious: string[];
  pinned: { kind: string; title: string; href: string } | null;
  posts: RowItem[];
  answers: RowItem[];
  questions: RowItem[];
  circles: string[];
  dash: { value: string; label: string }[] | null;
}

function duration(ms: number) {
  if (!Number.isFinite(ms) || ms <= 0) return "—";
  const h = ms / 3600000;
  if (h < 1) return `${Math.max(1, Math.round(ms / 60000))}m`;
  if (h < 48) return `${Math.round(h)}h`;
  return `${Math.round(h / 24)}d`;
}

export async function loadProfile(v: Viewer, key: string): Promise<ProfileData | null> {
  const user = (await db.orm.public.User.where({ handle: key }).first()) ?? (await db.orm.public.User.where({ id: key }).first());
  if (!user) return null;
  const isMe = user.id === v.me.id;
  // a block works both ways: neither sees the other's profile
  if (!isMe && v.blocked.has(user.id) && !(await db.orm.public.Block.where({ userId: v.me.id, blockedId: user.id }).first())) return null;
  const m = marks(v);

  const [expertise, curious, memberships, notes, answers, questions] = await Promise.all([
    db.orm.public.Expertise.where({ userId: user.id }).include("topic").all(),
    db.orm.public.TopicFollow.where({ userId: user.id }).include("topic").all(),
    db.orm.public.Membership.where({ userId: user.id, status: "member" }).include("community").all(),
    db.orm.public.Note.where({ authorId: user.id }).where(n => n.threadId.isNull()).include("topic").include("community").orderBy(n => n.createdAt.desc()).limit(50).all(),
    db.orm.public.Answer.where({ authorId: user.id }).include("question", q => q.include("community")).orderBy(a => a.createdAt.desc()).limit(50).all(),
    db.orm.public.Question.where({ askerId: user.id }).include("topic").include("community").include("answers", a => a.count()).orderBy(q => q.createdAt.desc()).limit(50).all(),
  ]);

  const posts: RowItem[] = notes
    .filter(n => canRead(v, n.community) && !m.hidden("note", n.id))
    .map(n => ({ key: n.id, href: `/note/${n.id}`, title: n.body, meta: `${n.topic?.name ?? n.community?.name ?? ""} · ${shortAgo(n.createdAt)}`, bases: [isBasis(n.basis) ? n.basis : "view"] }));
  const answerRows: RowItem[] = answers
    .filter(a => a.question && canRead(v, a.question.community))
    .map(a => ({
      key: a.id, href: `/q/${a.questionId}`, title: a.body, meta: `On “${a.question!.title}”`,
      bases: [isBasis(a.basis) ? a.basis : "view"], accepted: a.question!.acceptedAnswerId === a.id,
    }));
  const questionRows: RowItem[] = questions
    .filter(q => canRead(v, q.community))
    .map(q => ({ key: q.id, href: `/q/${q.id}`, title: q.title, meta: `${q.topic?.name ?? ""} · ${shortAgo(q.createdAt)}`, bases: ["asking"] }));

  // pinned: their latest answer that helped someone, else their latest question
  const helped = answerRows.find(a => a.accepted);
  const pinned = helped
    ? { kind: "Answer", title: helped.title, href: helped.href }
    : questionRows[0] ? { kind: "Question", title: questionRows[0].title, href: questionRows[0].href } : null;

  const hosting = memberships.filter(mm => mm.isSteward && mm.community).map(mm => mm.community!.name);
  const role = [user.credential, hosting.length ? `Host · ${hosting.join(", ")}` : null].filter(Boolean).join(" · ") || null;

  let dash: ProfileData["dash"] = null;
  if (isMe) {
    const since = instantAt(Date.now() - 30 * 86400000);
    const noteIds = notes.map(n => n.id), answerIds = answers.map(a => a.id), questionIds = questions.map(q => q.id);
    const mineIds = [...noteIds, ...answerIds, ...questionIds];
    const [thanks, builtNotes, builtAnswers, firstAnswers] = await Promise.all([
      mineIds.length ? db.orm.public.Helpful.where(h => h.targetId.in(mineIds)).where(h => h.createdAt.gte(since)).all() : Promise.resolve([]),
      noteIds.length ? db.orm.public.Note.where(n => n.buildsOnId.in(noteIds)).where(n => n.authorId.neq(user.id)).all() : Promise.resolve([]),
      answerIds.length ? db.orm.public.Answer.where(a => a.onAnswerId.in(answerIds)).where(a => a.authorId.neq(user.id)).all() : Promise.resolve([]),
      questionIds.length ? db.orm.public.Answer.where(a => a.questionId.in(questionIds)).orderBy(a => a.createdAt.asc()).all() : Promise.resolve([]),
    ]);
    const firstByQ = new Map<string, number>();
    for (const a of firstAnswers) if (!firstByQ.has(a.questionId)) firstByQ.set(a.questionId, toMs(a.createdAt));
    const waits = questions.filter(q => firstByQ.has(q.id)).map(q => firstByQ.get(q.id)! - toMs(q.createdAt)).sort((a, b) => a - b);
    const median = waits.length ? waits[Math.floor(waits.length / 2)] : NaN;
    dash = [
      { value: String(new Set(thanks.map(t => t.userId)).size), label: "people marked your posts helpful this month" },
      { value: String(new Set([...builtNotes.map(n => n.buildsOnId), ...builtAnswers.map(a => a.onAnswerId)]).size), label: "notes others built on" },
      { value: duration(median), label: "typical time to a first answer on your questions" },
    ];
  }

  return {
    person: personRef(user), line: user.line, role, isMe,
    following: v.following.has(user.id), muted: v.muted.has(user.id), blocked: v.blocked.has(user.id),
    ask: expertise.map(e => e.topic?.name ?? "").filter(Boolean),
    curious: curious.map(t => t.topic?.name ?? "").filter(Boolean),
    pinned, posts, answers: answerRows, questions: questionRows,
    circles: memberships.filter(mm => mm.community && canRead(v, mm.community)).map(mm => mm.community!.name),
    dash,
  };
}

