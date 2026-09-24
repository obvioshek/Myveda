"use client";

import React, { useState, useEffect } from "react";
import { POSTS, ORGS, Post } from "@/lib/data";
import Avatar from "@/components/Avatar";
import DishSVG from "@/components/DishSVG";
import ArtScene from "@/components/ArtScene";
import Poll from "@/components/Poll";
import { toggleReaction, toggleSave } from "@/actions/reaction";

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

function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function ExploreSection({ 
  initialPosts = [], 
  initialOrgPosts = [] 
}: { 
  initialPosts?: any[]; 
  initialOrgPosts?: any[]; 
}) {
  const [topic, setTopic] = useState("all");
  const [showCounts, setShowCounts] = useState(false);

  useEffect(() => {
    // Replicate the global class toggle for the feed counts
    if (showCounts) {
      document.documentElement.classList.add("ff-on");
    } else {
      document.documentElement.classList.remove("ff-on");
    }
  }, [showCounts]);

  const filteredItems = initialPosts.filter(i => topic === "all" || i.post.topic.name === topic);
  const filteredOrgs = initialOrgPosts.filter(i => topic === "all" || i.post.topic.name === topic);

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
              <button 
                aria-pressed={!showCounts} 
                onClick={() => setShowCounts(false)}
              >
                Without counts
              </button>
              <button 
                aria-pressed={showCounts} 
                onClick={() => setShowCounts(true)}
              >
                With counts
              </button>
            </div>
            <div className="chips topicf" id="topicF" role="group" aria-label="Filter the feed by topic">
              {["All", "Food", "Cities", "Education", "Books", "Everyday life"].map(t => {
                const val = t === "All" ? "all" : t;
                return (
                  <button 
                    key={val}
                    type="button" 
                    aria-pressed={topic === val} 
                    onClick={() => setTopic(val)}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="feedwrap">
            <div>
              <div className="feed" id="feedList">
                {filteredItems.map((item, i) => {
                  const p = item.post;
                  return (
                  <article key={i} className="post" data-topic={p.topic.name}>
                    <div className="post-h">
                      <Avatar name={p.user?.name || "Anonymous"} />
                      <div>
                        <div className="who">{p.user?.name || "Anonymous"}</div>
                        <div className="mt">{p.topic.name} · <span className="ptype">{p.type}</span> · 1 hour ago</div>
                      </div>
                    </div>
                    <div className="post-ctx note">
                      <span className="tag src">Served: {item.reason}</span>
                    </div>
                    <b className="ptitle">
                      {p.kind && <span className={`kind ${KIND[p.kind][0]}`}>{KIND[p.kind][1]}</span>}
                      {p.title}
                    </b>
                    {p.body && (
                      <div className="body">
                        {(() => {
                          try {
                            const b = JSON.parse(p.body);
                            return Array.isArray(b) ? b.map((para: string, bi: number) => <p key={bi}>{para}</p>) : <p>{p.body}</p>;
                          } catch {
                            return <p>{p.body}</p>;
                          }
                        })()}
                      </div>
                    )}
                    {p.art === "dish" && <div className="art"><DishSVG /></div>}
                    {p.art && p.art !== "dish" && <div className="art"><ArtScene seed={p.art} /></div>}
                    {p.cap && <span className="pcap">{p.cap}</span>}
                    {p.sgi && (
                      <span className="sgi">
                        <svg width="12" height="12" aria-hidden="true"><use href="#i-tag"/></svg>
                        Illustration is AI-assisted · declared by the author
                      </span>
                    )}
                    {p.pollOptions && p.pollOptions.length > 0 && (
                      <Poll 
                        postId={p.id} 
                        options={p.pollOptions} 
                        viewerVotedOptionId={item.viewerVotedOptionId} 
                      />
                    )}
                    <div className="rxbar" role="group" aria-label="React to this post">
                      <button type="button" aria-pressed={item.viewerReactions?.includes('HELPFUL') || false} 
                              onClick={() => toggleReaction(p.id, 'HELPFUL')}>
                        <svg aria-hidden="true"><use href="#i-bulb"/></svg>Helpful
                      </button>
                      <button type="button" aria-pressed={item.viewerReactions?.includes('CHANGED_MY_MIND') || false}
                              onClick={() => toggleReaction(p.id, 'CHANGED_MY_MIND')}>
                        <svg aria-hidden="true"><use href="#i-thought"/></svg>Made me think
                      </button>
                      <button type="button" aria-pressed={item.viewerReactions?.includes('RELATABLE') || false}
                              onClick={() => toggleReaction(p.id, 'RELATABLE')}>
                        <svg aria-hidden="true"><use href="#i-calm"/></svg>Relatable
                      </button>
                    </div>
                    <span className="rxnote">Reactions reach {p.user?.name.split(" ")[0]} privately. Nobody sees a total.</span>

                    {p.replies && p.replies.length > 0 && (
                      <div className="replies">
                        {p.replies.map((r: any, ri: number) => (
                          <div className="rp" key={ri}>
                            <Avatar name={r.user.name} />
                            <p>
                              <b>{r.user.name.split(" ")[0]}</b>
                              <span className={`kind ${KIND[r.kind][0]}`}>{KIND[r.kind][1]}</span>
                              {r.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="post-f">
                      <span className="reacted">
                        {Array.from(new Set(p.replies?.map((r: any) => r.user.name) || [])).map((n: unknown, ni) => <i key={ni as number}><Avatar name={n as string} /></i>)}
                      </span>
                      <span className="said">
                        {p.replies?.length > 0 && `${p.replies[0].user.name.split(' ')[0]} and ${p.replies.length - 1} other${p.replies.length === 2 ? '' : 's'} replied`}
                      </span>
                      <span className="act">
                        <a href="#respond">Reply</a>
                        <button type="button" className="sv" aria-pressed={item.viewerSaved || false} onClick={() => toggleSave(p.id)} data-toggle data-on="Saved" data-off="Save"><svg aria-hidden="true"><use href="#i-bookmark"/></svg><span className="tl">{item.viewerSaved ? 'Saved' : 'Save'}</span></button>
                        <a href="#share">Share with your take</a>
                      </span>
                    </div>
                  </article>
                )})}
              </div>

              <div className="orgfeed" id="orgFeed" role="region" aria-labelledby="orgT" hidden={filteredOrgs.length === 0}>
                <div className="org-h">
                  <h4 id="orgT">From pages you follow</h4>
                  <p>Companies, news channels, brands, and public institutions post here — kept apart from people, clearly labelled, and never able to pay for reach. Follow or mute any page.</p>
                </div>
                <div className="feed" id="orgList">
                  {filteredOrgs.map((item, i) => {
                    const OC = ["#D98A5F", "#A8C58C", "#E6C9A2", "#C9B79B"];
                    const o = item.post;
                    return (
                      <article key={i} className="post org" data-topic={o.topic.name}>
                        <div className="post-h">
                          <div className="omark" aria-hidden="true" style={{ "--oc": OC[i % OC.length] } as React.CSSProperties}>{o.org?.mark}</div>
                          <div>
                            <div className="who">{o.org?.name}<span className="okind">{o.org?.kind}</span></div>
                            <div className="mt">{o.topic.name} · <span className="ptype">{o.type}</span> · 1 day ago</div>
                          </div>
                        </div>
                        <div className="post-ctx note">
                          <span className="tag t-ok">Served:</span> {item.reason}
                        </div>
                        <b className="ptitle">
                          {o.kind && <span className={`kind ${KIND[o.kind][0]}`}>{KIND[o.kind][1]}</span>}
                          {o.title}
                        </b>
                        {o.body && (
                          <div className="body">
                            {(() => {
                              try {
                                const b = JSON.parse(o.body);
                                return Array.isArray(b) ? b.map((para: string, bi: number) => <p key={bi}>{para}</p>) : <p>{o.body}</p>;
                              } catch {
                                return <p>{o.body}</p>;
                              }
                            })()}
                          </div>
                        )}
                        {o.src && (
                          <div className="post-ctx">
                            <span className="tag src">Source: {o.src}</span>
                          </div>
                        )}
                        <div className="post-f">
                          <span className="act">
                            <a href="#respond">Reply</a>
                            <button type="button" className="sv" aria-pressed={item.viewerSaved || false} onClick={() => toggleSave(o.id)} data-toggle data-on="Saved" data-off="Save"><svg aria-hidden="true"><use href="#i-bookmark"/></svg><span className="tl">{item.viewerSaved ? 'Saved' : 'Save'}</span></button>
                            <a href="#share">Share with your take</a>
                          </span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="feed-end" style={{ marginTop: ".8em" } as React.CSSProperties}>
                <svg width="26" height="26" aria-hidden="true"><use href="#i-bowl"/></svg>
                <b>You're all caught up.</b>
                <span>That is everything from the people and topics you follow. New posts will be here tomorrow.</span>
                <div className="fe-go" id="feGo">
                  <button type="button" data-k="path">Continue a discussion</button>
                  <button type="button" data-k="hello">Welcome someone new</button>
                  <button type="button" data-k="close">Close the app</button>
                </div>
                <span className="fe-say" id="feSay" aria-live="polite"></span>
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
            <div className="aside" style={{ marginTop: ".8em" } as React.CSSProperties}>
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
