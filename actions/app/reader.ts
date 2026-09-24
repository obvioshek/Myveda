"use server";

import { refresh } from "next/cache";
import { db } from "@/src/prisma/db";
import { actingMember } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { notify, notifyMentions } from "@/lib/app/notify";
import { REPLY_RELATIONS, SOURCE_VERDICTS, suggestBasis } from "@/lib/app/labels";

// A reply to a note or a house piece. It says how it relates, and a
// disagreement has to give its reason.
export async function postResponse(input: {
  target: "note" | "article"; targetId: string; relation: string; body: string;
  anchor?: string | null; reason?: string | null; onResponseId?: string | null;
}) {
  return attempt(async () => {
    const me = await actingMember();
    if (!(REPLY_RELATIONS as readonly string[]).includes(input.relation)) refuse("Say how your reply relates.");
    const body = input.body.trim();
    if (body.length < 2) refuse("Write your reply first.");
    if (body.length > 4000) refuse("Keep a reply under 4,000 characters.");
    const reason = input.reason?.trim() || null;
    if (input.relation === "Disagrees" && !reason) refuse("Give your reason to disagree.");
    const basis = input.relation === "Asks" ? "asking" : suggestBasis(body);

    let ownerId: string | null = null, href = "/home", what = "";
    if (input.target === "note") {
      const n = await db.orm.public.Note.where({ id: input.targetId }).include("community").first();
      if (!n) refuse("That post is no longer here.");
      if (n.community?.memory === "members") {
        const m = await db.orm.public.Membership.where({ userId: me.id, communityId: n.community.id }).first();
        if (!m || m.status !== "member") refuse(`Only members of ${n.community.name} can reply.`);
      }
      ownerId = n.authorId; href = `/note/${n.id}`; what = "your post";
    } else {
      const a = await db.orm.public.Article.where({ id: input.targetId }).first();
      if (!a) refuse("That piece is no longer here.");
      href = `/read/${a.slug}`; what = `“${a.title}”`;
    }
    let on: { id: string; authorId: string } | null = null;
    if (input.onResponseId) {
      const r = await db.orm.public.Response.where({ id: input.onResponseId }).first();
      if (!r || (input.target === "note" ? r.noteId : r.articleId) !== input.targetId) refuse("That reply is no longer here.");
      on = { id: r.id, authorId: r.authorId };
    }
    const r = await db.orm.public.Response.create({
      authorId: me.id,
      noteId: input.target === "note" ? input.targetId : null,
      articleId: input.target === "article" ? input.targetId : null,
      relation: input.relation, basis, anchor: input.anchor?.slice(0, 200) || null, reason,
      onResponseId: on?.id ?? null, body,
    });
    if (ownerId) {
      await notify({
        userId: ownerId, actorId: me.id, type: input.relation === "Builds on" ? "Builds on" : "Answers",
        text: input.relation === "Builds on" ? `built on ${what}` : input.relation === "Asks" ? `asked about ${what}` : input.relation === "Disagrees" ? `disagreed with ${what}` : `added context to ${what}`,
        preview: body, href, replyType: "response", replyId: r.id,
      });
    }
    if (on && on.authorId !== ownerId) {
      await notify({ userId: on.authorId, actorId: me.id, type: "Builds on", text: "built on your reply", preview: body, href, replyType: "response", replyId: r.id });
    }
    await notifyMentions(body, me, "a reply", href, { type: "response", id: r.id });
    refresh();
    return { id: r.id };
  });
}

export async function checkSource(sourceId: string, verdict: string) {
  return attempt(async () => {
    const me = await actingMember();
    if (!(SOURCE_VERDICTS as readonly string[]).includes(verdict)) refuse("Choose what you found.");
    const s = await db.orm.public.ArticleSource.where({ id: sourceId }).first();
    if (!s) refuse("That source is no longer listed.");
    const where = { userId: me.id, sourceId };
    const existing = await db.orm.public.SourceCheck.where(where).first();
    if (existing) await db.orm.public.SourceCheck.where(where).update({ verdict });
    else await db.orm.public.SourceCheck.create({ ...where, verdict });
    refresh();
  });
}

// Goes to the piece's editor; the reader hears back in their Inbox.
export async function suggestCorrection(articleId: string, body: string) {
  return attempt(async () => {
    const me = await actingMember();
    const text = body.trim();
    if (text.length < 5) refuse("Say what should change, and how you know.");
    const a = await db.orm.public.Article.where({ id: articleId }).first();
    if (!a) refuse("That piece is no longer here.");
    await db.orm.public.CorrectionSuggestion.create({ articleId, userId: me.id, body: text.slice(0, 2000) });
    const editors = await db.orm.public.User.where({ isEditor: true }).limit(10).all();
    for (const e of editors) {
      await notify({
        userId: e.id, actorId: me.id, type: "Mentions", text: `suggested a correction to “${a.title}”`,
        preview: text, href: `/read/${a.slug}`,
      });
    }
  });
}
