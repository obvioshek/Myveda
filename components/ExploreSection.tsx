"use client";

import React, { useState, useTransition } from "react";
import Avatar from "@/components/Avatar";
import DishSVG from "@/components/DishSVG";
import ArtScene from "@/components/ArtScene";
import Poll from "@/components/Poll";
import { toggleReaction, toggleSave } from "@/actions/reaction";
import type { FeedItem, FeedPost } from "@/lib/feed";
import { ping } from "@/lib/ping";

const KIND: Record<string, [string, string]> = {
  q: ["k-q", "Question"],
  int: ["k-int", "Interpretation"],
  ctx: ["k-ctx", "Context"],
  fact: ["k-fact", "Fact"],
  exp: ["k-exp", "Experience"],
  trad: ["k-trad", "Tradition"],
  bel: ["k-bel", "Belief"],
  spec: ["k-spec", "Speculation"]
};

const TOPICS = ["All", "Food", "Cities", "Education", "Books", "Everyday life"];
const OC = ["#D98A5F", "#A8C58C", "#E6C9A2", "#C9B79B"];

/* the bottom of the feed: three deliberate doors, one of them out */
const FEED_END: Record<string, string> = {
  path: "Karan replied to your comment about footpaths. It will be here when you are ready.",
  hello: "Rukmini asked her first question in First-time managers. One thoughtful welcome is enough.",
  close: "Good. It will still be here tomorrow. Nothing piles up while you are away."
};

const REACTIONS: [string, string, string][] = [
  ["HELPFUL", "i-bulb", "Helpful"],
  ["CHANGED_MY_MIND", "i-thought", "Made me think"],
  ["RELATABLE", "i-calm", "Relatable"]
];

function KindTag({ k }: { k?: string | null }) {
  if (!k || !KIND[k]) return null;
  return <span className={`kind ${KIND[k][0]}`}>{KIND[k][1]}</span>;
}

function Body({ text }: { text?: string | null }) {
  if (!text) return null;
  let paras: string[] = [text];
  try {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) paras = parsed.map(String);
  } catch { /* plain text */ }
  return <div className="body">{paras.length === 1 ? paras[0] : paras.map((p, i) => <p key={i}>{p}</p>)}</div>;
}

function firstName(name: string) {
  return name.split(" ")[0];
}

// A save is private and never becomes a count. The button answers at once;
// on the live feed the change is also written to the database.
function SaveButton({ postId, initial, live }: { postId: string; initial: boolean; live: boolean }) {
  const [saved, setSaved] = useState(initial);
  const [, startTransition] = useTransition();
  const flip = () => {
    const next = !saved;
    setSaved(next);
    ping(next ? 2 : 1);
    if (live) startTransition(async () => {
      try { await toggleSave(postId); } catch { setSaved(!next); }
    });
  };
  return (
    <button type="button" aria-pressed={saved} onClick={flip}>{saved ? "Saved" : "Save"}</button>
  );
}

function Reactions({ post, initial, live }: { post: FeedPost; initial: string[]; live: boolean }) {
  const [on, setOn] = useState<string[]>(initial);
  const [, startTransition] = useTransition();
  const flip = (kind: string) => {
    const was = on.includes(kind);
    setOn(cur => was ? cur.filter(k => k !== kind) : [...cur, kind]);
    ping(was ? 1 : 2);
    if (live) startTransition(async () => {
      try { await toggleReaction(post.id, kind); }
      catch { setOn(cur => was ? [...cur, kind] : cur.filter(k => k !== kind)); }
    });
  };
  const author = post.user?.name ? firstName(post.user.name) : "the author";
  return (
    <>
      <div className="rxbar" role="group" aria-label="React to this post">
        {REACTIONS.map(([kind, icon, label]) => (
          <button key={kind} type="button" aria-pressed={on.includes(kind)} onClick={() => flip(kind)}>
            <svg aria-hidden="true"><use href={`#${icon}`}/></svg>{label}
          </button>
        ))}
      </div>
      <span className="rxnote">Reactions reach {author} privately. Nobody sees a total.</span>
    </>
  );
}

function PersonPost({ item, live, hidden }: { item: FeedItem; live: boolean; hidden: boolean }) {
  const p = item.post;
  const who = p.user?.name || "A member";
  const replies = p.replies ?? [];
  const said = p.said?.length
    ? p.said
    : Array.from(new Set(replies.map(r => firstName(r.user.name))));
  return (
    <article className="post" data-topic={p.topic.name} hidden={hidden}>
      <div className="post-h">
        <Avatar name={who} />
        <div>
          <div className="who">{who}</div>
          <div className="mt">{p.topic.name} · <span className="ptype">{p.type}</span> · {p.when}</div>
        </div>
      </div>
      <b className="ptitle"><KindTag k={p.kind} />{p.title}</b>
      <Body text={p.body} />
      {p.art === "dish" && <div className="art"><DishSVG /></div>}
      {p.art && p.art !== "dish" && <div className="art"><ArtScene seed={p.art} /></div>}
      {p.cap && <span className="pcap">{p.cap}</span>}
      {p.sgi && (
        <span className="sgi">
          <svg width="12" height="12" aria-hidden="true"><use href="#i-tag"/></svg>
          Illustration is AI-assisted · declared by the author
        </span>
      )}
      {p.src && <div className="post-ctx"><span className="tag src">Source: {p.src}</span></div>}
      {p.pollOptions && p.pollOptions.length > 0 && (
        <Poll postId={p.id} options={p.pollOptions} viewerVotedOptionId={item.viewerVotedOptionId} live={live} />
      )}
      <Reactions post={p} initial={item.viewerReactions} live={live} />
      {replies.length > 0 && (
        <div className="replies">
          {replies.map((r, ri) => (
            <div className="rp" key={r.id ?? ri}>
              <Avatar name={r.user.name} />
              <p><b>{firstName(r.user.name)}</b><KindTag k={r.kind} />{r.body}</p>
            </div>
          ))}
        </div>
      )}
      <div className="post-f">
        {said.length > 0 && (
          <>
            <span className="reacted">{said.map(n => <i key={n}><Avatar name={n} /></i>)}</span>
            <span className="said">
              {said.length === 1 ? `${said[0]} replied` : `${said[0]} and ${said.length - 1} ${said.length === 2 ? "other" : "others"} replied`}
            </span>
          </>
        )}
        {p.metric && <span className="metric">{p.metric}</span>}
        <span className="act">
          <a href="#respond">Reply</a>
          <SaveButton postId={p.id} initial={item.viewerSaved} live={live} />
          <a href="#share">Share with your take</a>
        </span>
      </div>
    </article>
  );
}

function OrgPost({ item, index, live, hidden }: { item: FeedItem; index: number; live: boolean; hidden: boolean }) {
  const o = item.post;
  return (
    <article className="post org" data-topic={o.topic.name} hidden={hidden}>
      <div className="post-h">
        <div className="omark" aria-hidden="true" style={{ "--oc": OC[index % OC.length] } as React.CSSProperties}>{o.org?.mark}</div>
        <div>
          <div className="who">{o.org?.name}<span className="okind">{o.org?.kind}</span></div>
          <div className="mt">{o.topic.name} · <span className="ptype">{o.type}</span> · {o.when}</div>
        </div>
      </div>
      <b className="ptitle"><KindTag k={o.kind} />{o.title}</b>
      <Body text={o.body} />
      {o.src && <div className="post-ctx"><span className="tag src">Source: {o.src}</span></div>}
      <div className="post-f">
        <span className="said">{item.reason} · no paid reach</span>
        {o.metric && <span className="metric">{o.metric}</span>}
        <span className="act">
          <SaveButton postId={o.id} initial={item.viewerSaved} live={live} />
          <a href="#share">Share with your take</a>
        </span>
      </div>
    </article>
  );
}

export default function ExploreSection({
  initialPosts = [],
  initialOrgPosts = [],
  live = false
}: {
  initialPosts?: FeedItem[];
  initialOrgPosts?: FeedItem[];
  live?: boolean;
}) {
  const [topic, setTopic] = useState("all");
  const [showCounts, setShowCounts] = useState(false);
  const [endSay, setEndSay] = useState("");

  const shown = (i: FeedItem) => topic === "all" || i.post.topic.name === topic;
  const anyOrgShown = initialOrgPosts.some(shown);
  const feedClass = showCounts ? "feed counts" : "feed";

  return (
    <section className="sec" id="explore" aria-labelledby="h-explore">
      <div className="wrap">
        <span className="eyebrow rv">01 — Explore</span>
        <h2 id="h-explore" className="big rv">See what people <em>are sharing.</em></h2>
        <p className="deck rv">Everyday moments, photos, questions, and polls from the people and topics you follow. Filter by topic, vote in a poll, or turn on counts to see how a scoreboard changes the same feed.</p>

        <div className="demo rv">
          <span className="hint">Compare the same feed with and without public counts</span>
          <div className="feedbar">
            <div className="pick" id="feedPick">
              <button type="button" aria-pressed={!showCounts} onClick={() => { setShowCounts(false); ping(4); }}>
                Without counts
              </button>
              <button type="button" aria-pressed={showCounts} onClick={() => { setShowCounts(true); ping(1); }}>
                With counts
              </button>
            </div>
            <div className="chips topicf" id="topicF" role="group" aria-label="Filter the feed by topic">
              {TOPICS.map(t => {
                const val = t === "All" ? "all" : t;
                return (
                  <button key={val} type="button" aria-pressed={topic === val} onClick={() => { setTopic(val); ping(2); }}>
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="feedwrap">
            <div>
              <div className={feedClass} id="feedList">
                {initialPosts.map(item => (
                  <PersonPost key={item.id} item={item} live={live} hidden={!shown(item)} />
                ))}
              </div>

              <div className="orgfeed" id="orgFeed" role="region" aria-labelledby="orgT" hidden={!anyOrgShown}>
                <div className="org-h">
                  <h4 id="orgT">From pages you follow</h4>
                  <p>Companies, news channels, brands, and public institutions post here — kept apart from people, clearly labelled, and never able to pay for reach. Follow or mute any page.</p>
                </div>
                <div className={feedClass} id="orgList">
                  {initialOrgPosts.map((item, i) => (
                    <OrgPost key={item.id} item={item} index={i} live={live} hidden={!shown(item)} />
                  ))}
                </div>
              </div>

              <div className="feed-end" style={{ marginTop: ".8em" }}>
                <svg width="26" height="26" aria-hidden="true"><use href="#i-bowl"/></svg>
                <b>You&apos;re all caught up.</b>
                <span>That is everything from the people and topics you follow. New posts will be here tomorrow.</span>
                <div className="fe-go" id="feGo">
                  {Object.entries({ path: "Continue a discussion", hello: "Welcome someone new", close: "Close the app" }).map(([k, label]) => (
                    <button key={k} type="button" data-k={k} onClick={() => { setEndSay(FEED_END[k]); ping(4); }}>{label}</button>
                  ))}
                </div>
                <span className="fe-say" id="feSay" aria-live="polite">{endSay}</span>
              </div>
            </div>

            <div className="aside">
              <h4>Every post and reply says what it is</h4>
              <p>One of eight labels, chosen with one tap, so readers know what they are reading. A fact always needs a source.</p>
              <div className="kinds8">
                <span className="kind k-q">Question</span>
                <span className="kind k-fact">Fact</span>
                <span className="kind k-ctx">Context</span>
                <span className="kind k-exp">Experience</span>
                <span className="kind k-int">Interpretation</span>
                <span className="kind k-trad">Tradition</span>
                <span className="kind k-bel">Belief</span>
                <span className="kind k-spec">Speculation</span>
              </div>
              <ul>
                <li><b>A topic</b>, so it reaches people who care about it</li>
                <li><b>Replies by people</b> — who contributed, not how many reacted</li>
                <li><b>Save</b>, a private bookmark that never becomes a public count</li>
              </ul>
            </div>
            <div className="aside" style={{ marginTop: ".8em" }}>
              <h4>Not here</h4>
              <p>Left out from the start, not hidden in a settings menu.</p>
              <ul>
                <li>Public like and follower counts</li>
                <li>Infinite scroll and autoplay</li>
                <li>A trending leaderboard</li>
                <li>Brands paying for reach</li>
                <li>Read receipts and typing indicators</li>
                <li>Unlabelled AI-generated media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
