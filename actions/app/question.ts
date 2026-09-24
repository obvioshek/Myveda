"use server";

import { refresh } from "next/cache";
import { db } from "@/src/prisma/db";
import { actingMember } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { notify, notifyMentions } from "@/lib/app/notify";
import { ANSWER_RELATIONS, SOURCE_TYPES, checkSourceUrl, isShareBasis, suggestBasis, firstName } from "@/lib/app/labels";

async function visibleQuestion(meId: string, id: string) {
  const q = await db.orm.public.Question.where({ id }).include("community").first();
  if (!q) refuse("That question is no longer here.");
  if (q.community?.memory === "members") {
    const m = await db.orm.public.Membership.where({ userId: meId, communityId: q.community.id }).first();
    if (!m || m.status !== "member") refuse(`Only members of ${q.community.name} can answer this.`);
  }
  return q;
}

export async function postAnswer(input: {
  questionId: string; body: string; basis: string | null; relation?: string; onAnswerId?: string | null;
  reason?: string | null; url?: string; stype?: string; loc?: string;
}) {
  return attempt(async () => {
    const me = await actingMember();
    const q = await visibleQuestion(me.id, input.questionId);
    if (q.askerId === me.id) refuse("You asked this. Mark the answer that helped instead.");
    const body = input.body.trim();
    if (body.length < 3) refuse("Say a little more.");
    if (body.length > 6000) refuse("Keep an answer under 6,000 characters.");
    const relation = (ANSWER_RELATIONS as readonly string[]).includes(input.relation ?? "") ? input.relation! : "Answers";
    const reason = input.reason?.trim() || null;
    if (relation === "Disagrees" && !reason) refuse("Say why you disagree.");
    let on: { id: string; authorId: string; name: string } | null = null;
    if (input.onAnswerId) {
      const a = await db.orm.public.Answer.where({ id: input.onAnswerId, questionId: q.id }).include("author").first();
      if (!a) refuse("That answer is no longer here.");
      on = { id: a.id, authorId: a.authorId, name: a.author?.name ?? "" };
    }
    const basis = isShareBasis(input.basis) ? input.basis : suggestBasis(body);
    let source: { sourceUrl: string | null; sourceType: string | null; sourceLocator: string | null } = { sourceUrl: null, sourceType: null, sourceLocator: null };
    if (basis === "documented" && input.url?.trim()) {
      const check = checkSourceUrl(input.url);
      if (!check.ok) refuse("Link to the specific page or entry, not a home page.");
      source = {
        sourceUrl: check.url ? check.url.toString() : input.url.trim(),
        sourceType: (SOURCE_TYPES as readonly string[]).includes(input.stype ?? "") ? input.stype! : "Reference work",
        sourceLocator: input.loc?.trim() || null,
      };
    }
    const a = await db.orm.public.Answer.create({
      questionId: q.id, authorId: me.id, relation: on && relation === "Answers" ? "Builds on" : relation,
      basis, body, onAnswerId: on?.id ?? null, reason, ...source,
    });
    await notify({
      userId: q.askerId, actorId: me.id, type: "Answers", text: `answered your question “${q.title}”`,
      preview: body, href: `/q/${q.id}`, replyType: "answer", replyId: a.id,
    });
    if (on) {
      await notify({
        userId: on.authorId, actorId: me.id, type: "Builds on", text: `built on your answer to “${q.title}”`,
        preview: body, href: `/q/${q.id}`, replyType: "answer", replyId: a.id,
      });
    }
    // people who followed the question, or have it too
    const followers = await db.orm.public.QuestionFollow.where({ questionId: q.id }).all();
    for (const f of followers) {
      if (f.userId === q.askerId || f.userId === on?.authorId || !(f.following || f.same)) continue;
      await notify({
        userId: f.userId, actorId: me.id, type: "Answers", text: `answered a question you follow: “${q.title}”`,
        preview: body, href: `/q/${q.id}`,
      });
    }
    await notifyMentions(body, me, `an answer`, `/q/${q.id}`, { type: "answer", id: a.id });
    refresh();
    return { id: a.id };
  });
}

// Only the asker marks the answer that helped; they can change it later.
export async function acceptAnswer(questionId: string, answerId: string) {
  return attempt(async () => {
    const me = await actingMember();
    const q = await db.orm.public.Question.where({ id: questionId }).first();
    if (!q) refuse("That question is no longer here.");
    if (q.askerId !== me.id) refuse("Only the person who asked can mark the answer.");
    const a = await db.orm.public.Answer.where({ id: answerId, questionId }).first();
    if (!a) refuse("That answer is no longer here.");
    const next = q.acceptedAnswerId === answerId ? null : answerId;
    await db.orm.public.Question.where({ id: questionId }).update({ acceptedAnswerId: next });
    if (next) {
      await notify({
        userId: a.authorId, actorId: me.id, type: "Thanks",
        text: `said your answer answered “${q.title}”`, preview: a.body, href: `/q/${q.id}`,
      });
    }
    refresh();
    return { accepted: next };
  });
}

export async function setQuestionFollow(questionId: string, field: "following" | "same", on: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    const q = await visibleQuestion(me.id, questionId);
    if (field === "same" && q.askerId === me.id) refuse("It's your question.");
    const where = { userId: me.id, questionId };
    const existing = await db.orm.public.QuestionFollow.where(where).first();
    if (existing) {
      await db.orm.public.QuestionFollow.where(where).update({ [field]: on });
    } else if (on) {
      await db.orm.public.QuestionFollow.create({ ...where, following: field === "following", same: field === "same" });
    }
    refresh();
    return { on, asker: firstName((await db.orm.public.User.where({ id: q.askerId }).first())?.name ?? "") };
  });
}
