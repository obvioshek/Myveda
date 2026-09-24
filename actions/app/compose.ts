"use server";

import { refresh } from "next/cache";
import { db } from "@/src/prisma/db";
import { actingMember } from "@/lib/app/session";
import { attempt, refuse } from "@/lib/app/result";
import { notify, notifyDigest, notifyMentions, clip } from "@/lib/app/notify";
import { SOURCE_TYPES, checkSourceUrl, isShareBasis, suggestBasis, suggestIntent } from "@/lib/app/labels";
import { instantAt } from "@/lib/app/time";
import type { DraftInput } from "@/lib/app/types";

const PUBLIC = "public";

async function topicByName(name: string) {
  const t = await db.orm.public.Topic.where({ name }).first();
  if (!t) refuse("Choose a topic.");
  return t;
}

// "public" or a community slug the member belongs to
async function audienceCommunity(me: { id: string }, audience: string) {
  if (!audience || audience === PUBLIC) return null;
  const c = await db.orm.public.Community.where({ slug: audience }).first();
  if (!c) refuse("That circle no longer exists.");
  const m = await db.orm.public.Membership.where({ userId: me.id, communityId: c.id }).first();
  if (!m || m.status !== "member") refuse(`Join ${c.name} to post there.`);
  return c;
}

export async function publish(input: DraftInput) {
  return attempt(async () => {
    const me = await actingMember();
    const text = (input.text ?? "").trim();
    if (text.length < 3) refuse("Write a little more first.");
    if (text.length > 4000) refuse("That is longer than a post can be. Keep it under 4,000 characters.");
    const intent = input.intent ?? suggestIntent(text);
    const topic = await topicByName(input.topic);
    const community = await audienceCommunity(me, input.audience);
    const where = community ? community.name : topic.name;

    if (intent === "asking") {
      if (text.length > 300) refuse("Keep the question itself short; add detail once it is posted.");
      const q = await db.orm.public.Question.create({
        askerId: me.id, title: text, topicId: topic.id, communityId: community?.id ?? null, aiAssisted: !!input.ai,
      });
      // the asker follows their own question
      await db.orm.public.QuestionFollow.create({ userId: me.id, questionId: q.id, following: true, same: false });
      // sent to people who know the topic and are open to answering
      const experts = await db.orm.public.Expertise.where({ topicId: topic.id }).include("user").limit(50).all();
      const reachable = experts
        .filter(e => e.userId !== me.id && e.user && e.user.openTo === "Answering questions")
        .slice(0, 8);
      for (const e of reachable) {
        await notify({
          userId: e.userId, actorId: me.id, type: "Asks", text: `asked about ${topic.name}, which you know about`,
          preview: text, href: `/q/${q.id}`,
        });
      }
      await notifyMentions(text, me, `a question`, `/q/${q.id}`);
      if (input.id) await db.orm.public.Draft.where({ id: input.id, userId: me.id }).delete();
      refresh();
      return { kind: "question" as const, id: q.id, message: `Asked. Sent to people who know ${topic.name}.` };
    }

    const basis = isShareBasis(input.basis) ? input.basis : suggestBasis(text);
    let sourceUrl: string | null = null, sourceType: string | null = null, sourceLocator: string | null = null;
    if (basis === "documented") {
      const check = checkSourceUrl(input.url ?? "");
      if (!input.url?.trim()) refuse("Documented needs a source: a link, ISBN or DOI.");
      if (!check.ok) refuse("Link to the specific page or entry, not a home page.");
      if (!(SOURCE_TYPES as readonly string[]).includes(input.stype)) refuse("Choose what kind of source it is.");
      sourceUrl = check.url ? check.url.toString() : input.url.trim();
      sourceType = input.stype;
      sourceLocator = input.loc?.trim() || null;
    }
    const note = await db.orm.public.Note.create({
      authorId: me.id, body: text, basis, topicId: topic.id, communityId: community?.id ?? null,
      sourceUrl, sourceType, sourceLocator, aiAssisted: !!input.ai,
    });
    if (community) {
      const members = await db.orm.public.Membership.where({ communityId: community.id, status: "member" }).all();
      for (const m of members) {
        if (m.userId === me.id) continue;
        await notifyDigest({
          userId: m.userId, communityId: community.id, communityName: community.name,
          href: `/c/${community.slug}`, preview: `${me.name}: “${clip(text, 120)}”`,
        });
      }
    }
    await notifyMentions(text, me, where, `/note/${note.id}`, { type: "note", id: note.id });
    if (input.id) await db.orm.public.Draft.where({ id: input.id, userId: me.id }).delete();
    refresh();
    return { kind: "note" as const, id: note.id, message: `Posted to ${where}.` };
  });
}

// Drafts save as you type; the composer keeps the returned id.
export async function saveDraft(input: DraftInput) {
  return attempt(async () => {
    const me = await actingMember();
    const text = (input.text ?? "").trim();
    if (!text) return { id: input.id ?? null };
    const data = {
      text: input.text.slice(0, 4000), intent: input.intent, basis: input.basis, topicName: input.topic || null,
      audience: input.audience || null, sourceUrl: input.url || null, sourceType: input.stype || null,
      sourceLocator: input.loc || null, aiAssisted: !!input.ai, updatedAt: instantAt(Date.now()),
    };
    if (input.id) {
      const existing = await db.orm.public.Draft.where({ id: input.id, userId: me.id }).first();
      if (existing) {
        await db.orm.public.Draft.where({ id: input.id }).update(data);
        return { id: input.id };
      }
    }
    const d = await db.orm.public.Draft.create({ userId: me.id, ...data });
    return { id: d.id };
  });
}

export async function deleteDraft(id: string) {
  return attempt(async () => {
    const me = await actingMember();
    await db.orm.public.Draft.where({ id, userId: me.id }).delete();
    refresh();
  });
}

const STOP = new Set("the a an and or but of to in on for with is are was were be do does did how what why when where who which your you my i me we our it its that this there than then as at by from can should would could have has had about into over after before".split(" "));

// Before a question is asked: has someone asked it already?
export async function similarQuestions(text: string) {
  return attempt(async () => {
    await actingMember();
    const words = Array.from(new Set(text.toLowerCase().match(/[a-zÀ-ɏ]{3,}/g) ?? [])).filter(w => !STOP.has(w));
    if (words.length < 2) return { items: [] as { id: string; title: string; status: string }[] };
    const candidates = await db.orm.public.Question
      .include("topic")
      .include("community")
      .include("answers", a => a.count())
      .orderBy(q => q.createdAt.desc())
      .limit(500)
      .all();
    const scored = candidates
      .map(q => {
        const t = q.title.toLowerCase();
        const hits = words.filter(w => t.includes(w.length > 5 ? w.slice(0, w.length - 2) : w)).length;
        return { q, score: hits / words.length };
      })
      .filter(s => s.score >= 0.34)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    return {
      items: scored.map(({ q }) => ({
        id: q.id, title: q.title,
        status: `${q.acceptedAnswerId || (q.answers as number) > 0 ? "Answered" : "Open"} · ${q.community?.name ?? q.topic?.name ?? ""}`,
      })),
    };
  });
}

// Undo right after posting, or remove your own post later. Anything others
// have already answered or built on stays, so their words keep their context.
export async function deleteMine(kind: "note" | "question", id: string) {
  return attempt(async () => {
    const me = await actingMember();
    if (kind === "question") {
      const q = await db.orm.public.Question.where({ id, askerId: me.id }).include("answers", a => a.count()).first();
      if (!q) refuse("That question is no longer here.");
      if ((q.answers as number) > 0) refuse("People have answered this, so it stays.");
      await db.orm.public.Question.where({ id }).delete();
    } else {
      const n = await db.orm.public.Note.where({ id, authorId: me.id }).include("responses", r => r.count()).first();
      if (!n) refuse("That post is no longer here.");
      if ((n.responses as number) > 0) refuse("People have replied to this, so it stays.");
      await db.orm.public.Note.where({ id }).delete();
    }
    refresh();
  });
}

// "You can edit after posting": the text of your own post, or the context
// under your own question. Edits are marked as edited.
export async function editMine(kind: "note" | "question", id: string, text: string) {
  return attempt(async () => {
    const me = await actingMember();
    const t = text.trim();
    if (kind === "note") {
      if (t.length < 3) refuse("Write a little more first.");
      const n = await db.orm.public.Note.where({ id, authorId: me.id }).first();
      if (!n) refuse("That post is no longer here.");
      await db.orm.public.Note.where({ id }).update({ body: t.slice(0, 4000), editedAt: instantAt(Date.now()) });
    } else {
      const q = await db.orm.public.Question.where({ id, askerId: me.id }).first();
      if (!q) refuse("That question is no longer here.");
      await db.orm.public.Question.where({ id }).update({ context: t.slice(0, 2000) || null });
    }
    refresh();
  });
}
