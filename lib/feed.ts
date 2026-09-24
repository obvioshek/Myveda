import { POSTS, ORGS, REELS, type Post } from "@/lib/data";

// The shape the Explore feed renders, whether it came from the database
// (actions/feed.ts) or from the demo content in lib/data.ts.

export interface FeedPollOption { id: string; text: string; votes: number }
export interface FeedReply { id?: string; kind: string; body: string; user: { name: string } }

export interface FeedPost {
  id: string;
  title?: string | null;
  body?: string | null;
  type: string;
  kind?: string | null;
  art?: string | null;
  cap?: string | null;
  sgi?: boolean | null;
  src?: string | null;
  why?: string | null;
  when?: string;
  createdAt?: string | Date | null;
  topic: { name: string };
  user?: { name: string } | null;
  org?: { name: string; mark: string; kind: string } | null;
  pollOptions?: FeedPollOption[];
  replies?: FeedReply[];
  said?: string[];
  metric?: string;
}

export interface FeedItem {
  id: string;
  reason: string;
  isOrg: boolean;
  post: FeedPost;
  viewerReactions: string[];
  viewerSaved: boolean;
  viewerVotedOptionId: string | null;
}

export interface ReelItem { id: string; title: string; subtitle: string; duration: string }

export function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// "3 hours ago", "yesterday" — the reference never shows clock times on posts.
export function relativeTime(date: string | Date | null | undefined, now = Date.now()) {
  if (!date) return "recently";
  const t = new Date(date).getTime();
  if (Number.isNaN(t)) return "recently";
  const mins = Math.max(0, Math.round((now - t) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return mins === 1 ? "1 minute ago" : `${mins} minutes ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return hrs === 1 ? "1 hour ago" : `${hrs} hours ago`;
  const days = Math.round(hrs / 24);
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  return new Date(t).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

// The "With counts" view exists to show what a scoreboard does to the same
// feed. Real engagement numbers never leave the server, so the scoreboard is
// illustrative: the demo content carries its own, anything else is derived
// from the post id.
export function scoreboard(post: FeedPost, n?: string) {
  const seed = hashStr(post.user?.name || post.org?.name || post.id);
  if (n) return `♥ ${n} · ${post.org ? seed % 3000 + 200 : seed % 900 + 40} shares`;
  const likes = (hashStr(post.id) % 9000) + 120;
  const shown = likes >= 1000 ? `${(likes / 1000).toFixed(1)}K` : String(likes);
  return `♥ ${shown} · ${seed % 900 + 40} shares`;
}

function demoPost(p: Post, id: string): FeedPost {
  const post: FeedPost = {
    id,
    title: p.title,
    body: Array.isArray(p.body) ? JSON.stringify(p.body) : p.body,
    type: p.type,
    kind: p.k,
    art: p.art,
    cap: p.cap,
    sgi: p.sgi,
    src: p.src,
    why: p.why,
    when: p.when,
    topic: { name: p.topic },
    user: p.who ? { name: p.who } : null,
    org: p.name ? { name: p.name, mark: String(p.mark ?? "?"), kind: p.kind ?? "Page" } : null,
    pollOptions: Array.isArray(p.poll)
      ? p.poll.map(([text, votes]: [string, number], i: number) => ({ id: `${id}-o${i}`, text, votes }))
      : [],
    replies: (p.rp ?? []).map(([name, kind, body]: [string, string, string], i: number) => ({
      id: `${id}-r${i}`, kind, body, user: { name },
    })),
    said: p.said,
  };
  post.metric = scoreboard(post, p.n);
  return post;
}

export function demoFeed(): { personalItems: FeedItem[]; orgItems: FeedItem[] } {
  const personalItems = POSTS.map((p, i) => {
    const post = demoPost(p, `demo-p${i}`);
    return {
      id: `demo-fi${i}`,
      reason: `Because you follow ${p.topic}`,
      isOrg: false,
      post,
      viewerReactions: [],
      viewerSaved: false,
      viewerVotedOptionId: null,
    };
  });
  const orgItems = ORGS.map((o, i) => ({
    id: `demo-fo${i}`,
    reason: o.why ?? "From a page you follow",
    isOrg: true,
    post: demoPost(o, `demo-o${i}`),
    viewerReactions: [],
    viewerSaved: false,
    viewerVotedOptionId: null,
  }));
  return { personalItems, orgItems };
}

export function demoReels(): ReelItem[] {
  return REELS.map(([title, meta], i) => {
    const [subtitle, duration = ""] = meta.split(" · ");
    return { id: `demo-reel${i}`, title, subtitle, duration };
  });
}
