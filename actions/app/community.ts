"use server";

import { refresh } from "next/cache";
import { db } from "@/src/prisma/db";
import { actingMember } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { notify, notifyDigest, notifyMentions, clip } from "@/lib/app/notify";
import { suggestBasis, suggestIntent } from "@/lib/app/labels";

// Join or leave. A Cohort takes applications instead: the hosts decide.
export async function setMembership(communityId: string, join: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    const c = await db.orm.public.Community.where({ id: communityId }).first();
    if (!c) refuse("That community no longer exists.");
    const where = { userId: me.id, communityId };
    const existing = await db.orm.public.Membership.where(where).first();
    if (!join) {
      if (existing?.isSteward) refuse("Hosts can't leave their own community. Hand it on first.");
      if (existing) await db.orm.public.Membership.where(where).delete();
      refresh();
      return { status: "none" as const };
    }
    if (existing) return { status: existing.status as "member" | "applied" };
    const status = c.format === "Cohort" ? "applied" : "member";
    await db.orm.public.Membership.create({ ...where, status, isSteward: false });
    if (status === "applied") {
      const hosts = await db.orm.public.Membership.where({ communityId, isSteward: true }).all();
      for (const h of hosts) {
        await notify({
          userId: h.userId, actorId: me.id, type: "Communities", text: `applied to join ${c.name}`,
          preview: me.line ?? null, href: `/c/${c.slug}?tab=about`,
        });
      }
    }
    refresh();
    return { status: status as "member" | "applied" };
  });
}

// Hosts accept applications to a Cohort.
export async function decideApplication(communityId: string, userId: string, accept: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    const host = await db.orm.public.Membership.where({ userId: me.id, communityId, isSteward: true }).first();
    if (!host) refuse("Only hosts can decide applications.");
    const where = { userId, communityId };
    const app = await db.orm.public.Membership.where(where).first();
    if (!app || app.status !== "applied") refuse("That application is no longer open.");
    const c = await db.orm.public.Community.where({ id: communityId }).first();
    if (accept) await db.orm.public.Membership.where(where).update({ status: "member" });
    else await db.orm.public.Membership.where(where).delete();
    await notify({
      userId, actorId: me.id, type: "Communities",
      text: accept ? `accepted you into ${c?.name}` : `could not take you into ${c?.name} this time`,
      href: `/c/${c?.slug ?? ""}`,
    });
    refresh();
  });
}

// A note in a community thread. Members only; it may build on another note.
export async function postNote(input: { threadId: string; body: string; buildsOnId?: string | null }) {
  return attempt(async () => {
    const me = await actingMember();
    const thread = await db.orm.public.CommunityThread.where({ id: input.threadId }).include("community").first();
    if (!thread || !thread.community) refuse("That thread is no longer open.");
    if (thread.archived) refuse("This thread is archived: read-only.");
    const c = thread.community;
    const m = await db.orm.public.Membership.where({ userId: me.id, communityId: c.id }).first();
    if (!m || m.status !== "member") refuse(`Join ${c.name} to add notes.`);
    const body = input.body.trim();
    if (body.length < 2) refuse("Write your note first.");
    if (body.length > 3000) refuse("Keep a note under 3,000 characters.");
    let on: { id: string; authorId: string } | null = null;
    if (input.buildsOnId) {
      const n = await db.orm.public.Note.where({ id: input.buildsOnId }).first();
      if (!n || n.communityId !== c.id) refuse("That note is no longer here.");
      on = { id: n.id, authorId: n.authorId };
    }
    const basis = suggestIntent(body) === "asking" ? "view" : suggestBasis(body);
    const note = await db.orm.public.Note.create({
      authorId: me.id, body, basis, communityId: c.id, threadId: thread.id, buildsOnId: on?.id ?? null,
    });
    const href = `/c/${c.slug}?thread=${thread.id}`;
    if (on) {
      await notify({
        userId: on.authorId, actorId: me.id, type: "Builds on", text: `built on your note in ${c.name}`,
        preview: `“${clip(body, 140)}”`, href, replyType: "note", replyId: note.id,
      });
    }
    const members = await db.orm.public.Membership.where({ communityId: c.id, status: "member" }).all();
    for (const mm of members) {
      if (mm.userId === me.id || mm.userId === on?.authorId) continue;
      await notifyDigest({ userId: mm.userId, communityId: c.id, communityName: c.name, href, preview: `${thread.title}: “${clip(body, 120)}”` });
    }
    await notifyMentions(body, me, c.name, href, { type: "note", id: note.id });
    refresh();
    return { id: note.id };
  });
}

// "I've read this far": unlocks a spoiler thread for this member only.
export async function setSpoilerUnlocked(threadId: string, on: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    const where = { userId: me.id, threadId };
    const existing = await db.orm.public.SpoilerUnlock.where(where).first();
    if (on && !existing) await db.orm.public.SpoilerUnlock.create(where);
    if (!on && existing) await db.orm.public.SpoilerUnlock.where(where).delete();
    refresh();
  });
}
