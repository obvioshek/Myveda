import { connection } from "next/server";
import { hasDatabase } from "@/lib/backend";
import { demoFeed, demoReels, relativeTime, scoreboard, type FeedItem, type FeedPost, type ReelItem } from "@/lib/feed";
import { buildFeedSession, fetchFeed } from "@/actions/feed";
import { fetchReels } from "@/actions/reel";

export interface HomeContent {
  personalItems: FeedItem[];
  orgItems: FeedItem[];
  reels: ReelItem[];
  // true when the feed came from the database, so reactions, saves, votes and
  // posts can be written back; false when it is the demo content.
  live: boolean;
}

// The rows actions/feed.ts returns, as far as this page reads them.
interface Named { name: string }
interface DbReply { id: unknown; kind: string; body: string; state?: string | null; user?: Named | null }
interface DbPost {
  id: unknown; title?: string | null; body?: string | null; type?: string | null; kind?: string | null;
  art?: string | null; cap?: string | null; sgi?: boolean | null; src?: string | null; why?: string | null;
  createdAt?: unknown; topic?: Named | null; user?: Named | null;
  org?: { name: string; mark: string; kind: string } | null;
  pollOptions?: { id: unknown; text: string; votes: number }[];
  replies?: DbReply[];
}
interface DbFeedItem {
  id: unknown; reason: string; isOrg: boolean; post?: DbPost;
  viewerReactions?: string[]; viewerSaved?: boolean; viewerVotedOptionId?: unknown;
}

function toFeedItem(item: DbFeedItem): FeedItem {
  const p: DbPost = item.post ?? { id: item.id };
  const post: FeedPost = {
    id: String(p.id),
    title: p.title,
    body: p.body,
    type: p.type ? p.type.charAt(0).toUpperCase() + p.type.slice(1).toLowerCase() : "Text",
    kind: p.kind,
    art: p.art,
    cap: p.cap,
    sgi: p.sgi,
    src: p.src,
    why: p.why,
    createdAt: p.createdAt ? new Date(String(p.createdAt)).toISOString() : null,
    // formatted here so server and client render the same text
    when: relativeTime(p.createdAt ? String(p.createdAt) : null),
    topic: { name: p.topic?.name ?? "Everyday life" },
    user: p.user ? { name: p.user.name } : null,
    org: p.org ? { name: p.org.name, mark: p.org.mark, kind: p.org.kind } : null,
    pollOptions: (p.pollOptions ?? []).map(o => ({ id: String(o.id), text: o.text, votes: o.votes })),
    replies: (p.replies ?? [])
      .filter((r): r is DbReply & { user: Named } => r.state !== "RETRACTED" && !!r.user)
      .map(r => ({ id: String(r.id), kind: r.kind, body: r.body, user: { name: r.user.name } })),
  };
  post.metric = scoreboard(post);
  return {
    id: String(item.id),
    reason: item.reason,
    isOrg: Boolean(item.isOrg),
    post,
    viewerReactions: item.viewerReactions ?? [],
    viewerSaved: Boolean(item.viewerSaved),
    viewerVotedOptionId: item.viewerVotedOptionId ? String(item.viewerVotedOptionId) : null,
  };
}

export async function loadHomeContent(): Promise<HomeContent> {
  const demo: HomeContent = { ...demoFeed(), reels: demoReels(), live: false };
  if (!hasDatabase()) return demo;

  // every visit opens its own finite feed session, so never prerender it
  await connection();
  try {
    const sessionId = await buildFeedSession();
    const feed = await fetchFeed(sessionId);
    const personalItems = (feed.personalItems as DbFeedItem[]).map(toFeedItem);
    const orgItems = (feed.orgItems as DbFeedItem[]).map(toFeedItem);
    const reels: ReelItem[] = (await fetchReels()).map(r => ({
      id: String(r.id), title: r.title, subtitle: r.subtitle, duration: r.duration,
    }));

    // A visitor who has already seen everything gets the "caught up" state in
    // the product; on this public page the demo feed stands in instead of an
    // empty section.
    const hasFeed = personalItems.length + orgItems.length > 0;
    return {
      personalItems: hasFeed ? personalItems : demo.personalItems,
      orgItems: hasFeed ? orgItems : demo.orgItems,
      reels: reels.length ? reels : demo.reels,
      live: hasFeed,
    };
  } catch (err) {
    console.error("[home] database unavailable, showing demo content:", err);
    return demo;
  }
}
