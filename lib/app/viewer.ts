import { cache } from "react";
import { db } from "@/src/prisma/db";
import type { Member } from "@/lib/app/session";
import { initialsOf, hueOf } from "@/lib/app/labels";
import type { PersonRef } from "@/components/app/bits";

export type TargetType = "note" | "article" | "question" | "answer" | "response";

// Everything about the viewer that decides what they see and how it is
// marked: who they follow and mute, which circles they are in, and their own
// private marks (helpful, saved, hidden). Loaded once per request.
export const viewerContext = cache(async (me: Member) => {
  const [follows, topicFollows, expertise, memberships, mutes, blocks, blockedBy, hides, helpful, bookmarks] = await Promise.all([
    db.orm.public.Follow.where({ followerId: me.id }).all(),
    db.orm.public.TopicFollow.where({ userId: me.id }).include("topic").all(),
    db.orm.public.Expertise.where({ userId: me.id }).include("topic").all(),
    db.orm.public.Membership.where({ userId: me.id }).include("community").all(),
    db.orm.public.Mute.where({ userId: me.id }).all(),
    db.orm.public.Block.where({ userId: me.id }).all(),
    db.orm.public.Block.where({ blockedId: me.id }).all(),
    db.orm.public.Hide.where({ userId: me.id }).all(),
    db.orm.public.Helpful.where({ userId: me.id }).all(),
    db.orm.public.Bookmark.where({ userId: me.id }).all(),
  ]);
  const members = memberships.filter(m => m.status === "member");
  const key = (t: string, id: string) => `${t}:${id}`;
  return {
    me,
    following: new Set(follows.map(f => f.followeeId)),
    topicIds: new Set(topicFollows.map(t => t.topicId)),
    topicNames: topicFollows.map(t => t.topic?.name ?? "").filter(Boolean),
    expertiseIds: new Set(expertise.map(e => e.topicId)),
    expertiseNames: expertise.map(e => e.topic?.name ?? "").filter(Boolean),
    communityIds: new Set(members.map(m => m.communityId)),
    applied: new Set(memberships.filter(m => m.status === "applied").map(m => m.communityId)),
    hosting: new Set(members.filter(m => m.isSteward).map(m => m.communityId)),
    circles: members
      .map(m => m.community)
      .filter((c): c is NonNullable<typeof c> => !!c)
      .map(c => ({ id: c.id, name: c.name, slug: c.slug, format: c.format })),
    muted: new Set(mutes.map(m => m.mutedId)),
    blocked: new Set([...blocks.map(b => b.blockedId), ...blockedBy.map(b => b.userId)]),
    hidden: new Set(hides.map(h => key(h.targetType, h.targetId))),
    helpful: new Set(helpful.map(h => key(h.targetType, h.targetId))),
    saved: new Set(bookmarks.map(b => key(b.targetType, b.targetId))),
  };
});

export type Viewer = Awaited<ReturnType<typeof viewerContext>>;

export function marks(v: Viewer) {
  return {
    helpful: (t: TargetType, id: string) => v.helpful.has(`${t}:${id}`),
    saved: (t: TargetType, id: string) => v.saved.has(`${t}:${id}`),
    hidden: (t: TargetType, id: string) => v.hidden.has(`${t}:${id}`),
    // someone the viewer should not see: muted, or blocked either way
    silenced: (userId: string | null | undefined) => !!userId && (v.muted.has(userId) || v.blocked.has(userId)),
  };
}

interface UserRow { id: string; name: string; initials?: string | null; hue?: number | null; handle?: string | null }

export function personRef(u: UserRow): PersonRef {
  return {
    id: u.id,
    name: u.name,
    initials: u.initials || initialsOf(u.name),
    hue: u.hue ?? hueOf(u.name),
    handle: u.handle ?? null,
  };
}

// Can the viewer read what is written in this community?
export function canRead(v: Viewer, c: { id: string; memory: string } | null | undefined) {
  if (!c) return true;
  return c.memory !== "members" || v.communityIds.has(c.id);
}
