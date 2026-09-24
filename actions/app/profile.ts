"use server";

import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { db } from "@/src/prisma/db";
import { actingMember, DEMO_COOKIE, demoLoginEnabled } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { OPEN_TO, BRINGS, initialsOf } from "@/lib/app/labels";
import { instantAt } from "@/lib/app/time";
import { hasSupabase } from "@/lib/backend";
import { createClient } from "@/utils/supabase/server";

async function topicIds(names: string[]) {
  if (!names.length) return [];
  const topics = await db.orm.public.Topic.where(t => t.name.in(names)).all();
  return topics.map(t => t.id);
}

async function replaceTopics(userId: string, curious: string[], askAbout: string[]) {
  const [curiousIds, askIds] = await Promise.all([topicIds(curious), topicIds(askAbout.slice(0, 3))]);
  await db.transaction(async tx => {
    await tx.orm.public.TopicFollow.where({ userId }).deleteAndCount();
    for (const topicId of curiousIds) await tx.orm.public.TopicFollow.create({ userId, topicId });
    await tx.orm.public.Expertise.where({ userId }).deleteAndCount();
    for (const topicId of askIds) await tx.orm.public.Expertise.create({ userId, topicId });
  });
}

export async function updateProfile(input: { name: string; line: string; askAbout: string[]; curious: string[] }) {
  return attempt(async () => {
    const me = await actingMember();
    const name = input.name.trim();
    if (name.length < 2 || name.length > 60) refuse("Your name should be 2 to 60 characters.");
    if (input.askAbout.length > 3) refuse("Choose up to three topics to be asked about.");
    await db.orm.public.User.where({ id: me.id }).update({
      name, initials: initialsOf(name), line: input.line.trim().slice(0, 160) || null,
    });
    await replaceTopics(me.id, input.curious, input.askAbout);
    refresh();
  });
}

// Decides which questions are sent to you. Not shown on your profile.
export async function setOpenTo(value: string) {
  return attempt(async () => {
    const me = await actingMember();
    if (!(OPEN_TO as readonly string[]).includes(value)) refuse("Choose one of the options.");
    await db.orm.public.User.where({ id: me.id }).update({ openTo: value });
    refresh();
  });
}

export async function completeOnboarding(input: {
  topics: string[]; brings: string; askAbout: string[]; follows: string[]; circle: string | null;
}) {
  return attempt(async () => {
    const me = await actingMember();
    if (input.topics.length < 3) refuse("Pick three or more topics.");
    if (!BRINGS.some(([b]) => b === input.brings)) refuse("Choose what brings you here.");
    await replaceTopics(me.id, input.topics, input.askAbout);
    for (const followeeId of input.follows) {
      if (followeeId === me.id) continue;
      const where = { followerId: me.id, followeeId };
      if (!(await db.orm.public.Follow.where(where).first())) await db.orm.public.Follow.create(where);
    }
    if (input.circle) {
      const c = await db.orm.public.Community.where({ id: input.circle }).first();
      if (c && !(await db.orm.public.Membership.where({ userId: me.id, communityId: c.id }).first())) {
        await db.orm.public.Membership.create({ userId: me.id, communityId: c.id, status: c.format === "Cohort" ? "applied" : "member", isSteward: false });
      }
    }
    await db.orm.public.User.where({ id: me.id }).update({
      brings: input.brings,
      openTo: input.brings === "Reading" ? "Just reading" : "Answering questions",
      onboardedAt: instantAt(Date.now()),
    });
  });
}

export async function skipOnboarding() {
  const me = await actingMember();
  if (!me.onboardedAt) await db.orm.public.User.where({ id: me.id }).update({ onboardedAt: instantAt(Date.now()) });
  redirect("/home");
}

export async function demoSignIn(userId: string) {
  if (!demoLoginEnabled()) return { ok: false as const, error: "Demo sign-in is off on this server." };
  const u = await db.orm.public.User.where({ id: userId }).first();
  if (!u) return { ok: false as const, error: "That member no longer exists." };
  (await cookies()).set(DEMO_COOKIE, u.id, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30 });
  redirect(u.onboardedAt ? "/home" : "/welcome");
}

export async function signOutMember() {
  (await cookies()).delete(DEMO_COOKIE);
  if (hasSupabase()) {
    try { await (await createClient()).auth.signOut(); } catch { /* already signed out */ }
  }
  redirect("/signin");
}
