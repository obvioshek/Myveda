"use server";

import { refresh } from "next/cache";
import { db } from "@/src/prisma/db";
import { actingMember } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { instantAt } from "@/lib/app/time";
import { postAnswer } from "@/actions/app/question";
import { postResponse } from "@/actions/app/reader";
import { postNote } from "@/actions/app/community";

export async function markRead(id: string) {
  return attempt(async () => {
    const me = await actingMember();
    await db.orm.public.Notification.where({ id, userId: me.id }).update({ readAt: instantAt(Date.now()) });
    refresh();
  });
}

export async function markAllRead() {
  return attempt(async () => {
    const me = await actingMember();
    const nowI = instantAt(Date.now());
    await db.orm.public.Notification
      .where(n => n.userId.eq(me.id))
      .where(n => n.readAt.isNull())
      .where(n => n.deliverAt.lte(nowI))
      .updateAndCount({ readAt: nowI });
    refresh();
  });
}

export async function setDelivery(input: { digest?: string; quietHours?: boolean }) {
  return attempt(async () => {
    const me = await actingMember();
    const patch: { digest?: string; quietHours?: boolean } = {};
    if (input.digest !== undefined) {
      if (!["Daily", "Weekly"].includes(input.digest)) refuse("Choose daily or weekly.");
      patch.digest = input.digest;
    }
    if (input.quietHours !== undefined) patch.quietHours = !!input.quietHours;
    await db.orm.public.User.where({ id: me.id }).update(patch);
    refresh();
  });
}

// Replying from the Inbox continues the conversation where it happened: an
// answer builds on the answer, a note builds on the note, a reply on the reply.
export async function replyFromInbox(notificationId: string, body: string) {
  const me = await actingMember().catch(() => null);
  if (!me) return { ok: false as const, error: "Sign in to do that." };
  const n = await db.orm.public.Notification.where({ id: notificationId, userId: me.id }).first();
  if (!n || !n.replyType || !n.replyId) return { ok: false as const, error: "This one can't be replied to from here." };
  let result: { ok: boolean; error?: string };
  if (n.replyType === "answer") {
    const a = await db.orm.public.Answer.where({ id: n.replyId }).first();
    if (!a) return { ok: false as const, error: "That answer is no longer here." };
    const q = await db.orm.public.Question.where({ id: a.questionId }).first();
    // the asker replying to an answer adds to it; anyone else builds on it
    result = q?.askerId === me.id
      ? await postResponseToQuestion(a.questionId, a.id, body)
      : await postAnswer({ questionId: a.questionId, body, basis: null, relation: "Builds on", onAnswerId: a.id });
  } else if (n.replyType === "note") {
    const note = await db.orm.public.Note.where({ id: n.replyId }).first();
    if (!note) return { ok: false as const, error: "That note is no longer here." };
    result = note.threadId
      ? await postNote({ threadId: note.threadId, body, buildsOnId: note.id })
      : await postResponse({ target: "note", targetId: note.id, relation: "Builds on", body });
  } else {
    const r = await db.orm.public.Response.where({ id: n.replyId }).first();
    if (!r) return { ok: false as const, error: "That reply is no longer here." };
    result = await postResponse({
      target: r.noteId ? "note" : "article", targetId: (r.noteId ?? r.articleId)!, relation: "Builds on", body, onResponseId: r.id,
    });
  }
  if (result.ok) await db.orm.public.Notification.where({ id: n.id }).update({ readAt: instantAt(Date.now()) });
  return result.ok ? { ok: true as const } : { ok: false as const, error: result.error ?? "That did not go through." };
}

// The asker can't answer their own question, so their reply becomes a
// follow-up that builds on the answer, labelled as asking.
async function postResponseToQuestion(questionId: string, answerId: string, body: string) {
  return attempt(async () => {
    const me = await actingMember();
    const text = body.trim();
    if (text.length < 2) refuse("Write your reply first.");
    const a = await db.orm.public.Answer.where({ id: answerId }).first();
    if (!a) refuse("That answer is no longer here.");
    await db.orm.public.Answer.create({
      questionId, authorId: me.id, relation: "Builds on", basis: "view", body: text, onAnswerId: answerId,
    });
    refresh();
  });
}
