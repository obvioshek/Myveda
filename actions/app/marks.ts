"use server";

import { refresh } from "next/cache";
import { db } from "@/src/prisma/db";
import { actingMember } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { notify } from "@/lib/app/notify";
import { REPORT_REASONS } from "@/lib/app/labels";
import type { TargetType } from "@/lib/app/types";

const TARGETS: TargetType[] = ["note", "article", "question", "answer", "response"];

function checkTarget(t: string): asserts t is TargetType {
  if (!TARGETS.includes(t as TargetType)) refuse("Unknown item.");
}

// Who wrote it, what it says, and where it lives — for thank-you notes.
async function describe(type: TargetType, id: string) {
  if (type === "note") {
    const n = await db.orm.public.Note.where({ id }).first();
    return n && { ownerId: n.authorId, what: "your post", preview: n.body, href: `/note/${n.id}` };
  }
  if (type === "question") {
    const q = await db.orm.public.Question.where({ id }).first();
    return q && { ownerId: q.askerId, what: "your question", preview: q.title, href: `/q/${q.id}` };
  }
  if (type === "answer") {
    const a = await db.orm.public.Answer.where({ id }).include("question").first();
    return a && { ownerId: a.authorId, what: `your answer to “${a.question?.title ?? "a question"}”`, preview: a.body, href: `/q/${a.questionId}` };
  }
  if (type === "response") {
    const r = await db.orm.public.Response.where({ id }).include("article").first();
    const href = r?.noteId ? `/note/${r.noteId}` : r?.article ? `/read/${r.article.slug}` : "/home";
    return r && { ownerId: r.authorId, what: "your reply", preview: r.body, href };
  }
  const a = await db.orm.public.Article.where({ id }).first();
  return a && { ownerId: null as string | null, what: "a piece", preview: a.title, href: `/read/${a.slug}` };
}

// Helpful is private: the author is thanked in their Inbox, nobody sees a total.
export async function toggleHelpful(type: string, id: string) {
  return attempt(async () => {
    const me = await actingMember();
    checkTarget(type);
    const found = await describe(type, id);
    if (!found) refuse("That is no longer here.");
    if (found.ownerId === me.id) refuse("You can't mark your own post helpful.");
    const existing = await db.orm.public.Helpful.where({ userId: me.id, targetType: type, targetId: id }).first();
    if (existing) {
      await db.orm.public.Helpful.where({ userId: me.id, targetType: type, targetId: id }).delete();
    } else {
      await db.orm.public.Helpful.create({ userId: me.id, targetType: type, targetId: id });
      if (found.ownerId) {
        await notify({
          userId: found.ownerId, actorId: me.id, type: "Thanks",
          text: `marked ${found.what} helpful`, preview: found.preview, href: found.href,
        });
      }
    }
    refresh();
    return { on: !existing };
  });
}

export async function toggleSave(type: string, id: string) {
  return attempt(async () => {
    const me = await actingMember();
    checkTarget(type);
    const existing = await db.orm.public.Bookmark.where({ userId: me.id, targetType: type, targetId: id }).first();
    if (existing) await db.orm.public.Bookmark.where({ userId: me.id, targetType: type, targetId: id }).delete();
    else await db.orm.public.Bookmark.create({ userId: me.id, targetType: type, targetId: id });
    refresh();
    return { on: !existing };
  });
}

export async function setSaveNote(type: string, id: string, note: string) {
  return attempt(async () => {
    const me = await actingMember();
    checkTarget(type);
    await db.orm.public.Bookmark.where({ userId: me.id, targetType: type, targetId: id }).update({ note: note.slice(0, 500) || null });
  });
}

export async function setHidden(type: string, id: string, hidden: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    checkTarget(type);
    const where = { userId: me.id, targetType: type, targetId: id };
    const existing = await db.orm.public.Hide.where(where).first();
    if (hidden && !existing) await db.orm.public.Hide.create(where);
    if (!hidden && existing) await db.orm.public.Hide.where(where).delete();
    refresh();
  });
}

export async function setFollow(userId: string, on: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    if (userId === me.id) refuse("That's you.");
    const where = { followerId: me.id, followeeId: userId };
    const existing = await db.orm.public.Follow.where(where).first();
    if (on && !existing) await db.orm.public.Follow.create(where);
    if (!on && existing) await db.orm.public.Follow.where(where).delete();
    refresh();
    return { on };
  });
}

export async function setTopicFollow(topicName: string, on: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    const topic = await db.orm.public.Topic.where({ name: topicName }).first();
    if (!topic) refuse("Unknown topic.");
    const where = { userId: me.id, topicId: topic.id };
    const existing = await db.orm.public.TopicFollow.where(where).first();
    if (on && !existing) await db.orm.public.TopicFollow.create(where);
    if (!on && existing) await db.orm.public.TopicFollow.where(where).delete();
    refresh();
    return { on };
  });
}

// Muting is silent: they are not told.
export async function setMute(userId: string, on: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    if (userId === me.id) refuse("That's you.");
    const where = { userId: me.id, mutedId: userId };
    const existing = await db.orm.public.Mute.where(where).first();
    if (on && !existing) await db.orm.public.Mute.create(where);
    if (!on && existing) await db.orm.public.Mute.where(where).delete();
    refresh();
  });
}

// Blocking also ends any follow in either direction.
export async function setBlock(userId: string, on: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    if (userId === me.id) refuse("That's you.");
    const where = { userId: me.id, blockedId: userId };
    const existing = await db.orm.public.Block.where(where).first();
    if (on && !existing) {
      await db.orm.public.Block.create(where);
      await db.orm.public.Follow.where({ followerId: me.id, followeeId: userId }).delete();
      await db.orm.public.Follow.where({ followerId: userId, followeeId: me.id }).delete();
    }
    if (!on && existing) await db.orm.public.Block.where(where).delete();
    refresh();
  });
}

const REPORTABLE = [...TARGETS, "profile", "community"];

// Hosts see a report about their community first; Trust & Safety takes the rest.
export async function report(targetType: string, targetId: string, reason: string) {
  return attempt(async () => {
    const me = await actingMember();
    if (!REPORTABLE.includes(targetType)) refuse("Unknown item.");
    if (!(REPORT_REASONS as readonly string[]).includes(reason)) refuse("Choose a reason.");
    let communityId: string | null = null;
    if (targetType === "community") communityId = targetId;
    if (targetType === "note") communityId = (await db.orm.public.Note.where({ id: targetId }).first())?.communityId ?? null;
    if (targetType === "question") communityId = (await db.orm.public.Question.where({ id: targetId }).first())?.communityId ?? null;
    await db.orm.public.Report.create({ reporterId: me.id, targetType, targetId, reason, communityId });
    if (communityId) {
      const hosts = await db.orm.public.Membership.where({ communityId, isSteward: true }).all();
      const community = await db.orm.public.Community.where({ id: communityId }).first();
      for (const h of hosts) {
        await notify({
          userId: h.userId, type: "Communities", text: `A member reported something in ${community?.name ?? "your community"}`,
          preview: `Reason: ${reason}. Review it from the community's About tab.`, href: `/c/${community?.slug ?? ""}?tab=about`,
        });
      }
    }
  });
}

