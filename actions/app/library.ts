"use server";

import { refresh } from "next/cache";
import { db } from "@/src/prisma/db";
import { actingMember } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { instantAt } from "@/lib/app/time";

export async function createCollection(name: string, visibility: string) {
  return attempt(async () => {
    const me = await actingMember();
    const n = name.trim();
    if (!n) refuse("Give the collection a name.");
    if (visibility !== "private") {
      const m = await db.orm.public.Membership.where({ userId: me.id, communityId: visibility }).first();
      if (!m || m.status !== "member") refuse("You can only share with a circle you are in.");
    }
    const c = await db.orm.public.Collection.create({ ownerId: me.id, name: n.slice(0, 80), visibility });
    refresh();
    return { id: c.id };
  });
}

export async function addToCollection(collectionId: string, targetType: string, targetId: string) {
  return attempt(async () => {
    const me = await actingMember();
    const c = await db.orm.public.Collection.where({ id: collectionId, ownerId: me.id }).first();
    if (!c) refuse("That collection is no longer here.");
    const where = { collectionId, targetType, targetId };
    if (!(await db.orm.public.CollectionItem.where(where).first())) await db.orm.public.CollectionItem.create(where);
    refresh();
    return { name: c.name };
  });
}

export async function removeFromCollection(collectionId: string, targetType: string, targetId: string) {
  return attempt(async () => {
    const me = await actingMember();
    const c = await db.orm.public.Collection.where({ id: collectionId, ownerId: me.id }).first();
    if (!c) refuse("That collection is no longer here.");
    await db.orm.public.CollectionItem.where({ collectionId, targetType, targetId }).delete();
    refresh();
  });
}

export async function deleteCollection(collectionId: string) {
  return attempt(async () => {
    const me = await actingMember();
    await db.orm.public.Collection.where({ id: collectionId, ownerId: me.id }).delete();
    refresh();
  });
}

// Turning history off also forgets what was recorded.
export async function setKeepHistory(on: boolean) {
  return attempt(async () => {
    const me = await actingMember();
    await db.orm.public.User.where({ id: me.id }).update({ keepHistory: on });
    if (!on) await db.orm.public.ReadEvent.where({ userId: me.id }).deleteAndCount();
    refresh();
  });
}

export async function recordRead(targetType: "article" | "note" | "question", targetId: string, title: string) {
  const me = await actingMember().catch(() => null);
  if (!me || !me.keepHistory) return;
  const where = { userId: me.id, targetType, targetId };
  try {
    if (await db.orm.public.ReadEvent.where(where).first()) {
      await db.orm.public.ReadEvent.where(where).update({ readAt: instantAt(Date.now()), title: title.slice(0, 200) });
    } else {
      await db.orm.public.ReadEvent.create({ ...where, title: title.slice(0, 200) });
    }
  } catch (err) {
    console.error("[history]", err);
  }
}
