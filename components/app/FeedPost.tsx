"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/app/Icon";
import { useServerState } from "@/components/app/useServerState";
import { Avatar, Chips, profileHref } from "@/components/app/bits";
import { useApp } from "@/components/app/AppProvider";
import { setFollow, setHidden, setMute, toggleHelpful, toggleSave } from "@/actions/app/marks";
import { firstName } from "@/lib/app/labels";
import type { FeedEntry } from "@/lib/app/types";

// One row of the feed. Helpful and Save answer at once; both are private.
export default function FeedPost({ p }: { p: FeedEntry }) {
  const { run, toast, openReport } = useApp();
  const [helpful, setHelpful] = useServerState(p.helpful);
  const [saved, setSaved] = useServerState(p.saved);
  const [following, setFollowing] = useServerState(p.followingAuthor);
  const [menu, setMenu] = useState(false);
  const [gone, setGone] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const who = p.house ? "the editors" : p.author ? firstName(p.author.name) : "them";

  useEffect(() => {
    if (!menu) return;
    const onDown = (e: MouseEvent) => { if (!menuRef.current?.contains(e.target as Node)) setMenu(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [menu]);

  if (gone) return null;

  const flip = async (kind: "helpful" | "saved") => {
    const [val, set, act] = kind === "helpful" ? [helpful, setHelpful, toggleHelpful] as const : [saved, setSaved, toggleSave] as const;
    set(!val);
    const r = await run(act(p.type, p.id));
    if (!r.ok) set(val);
  };

  return (
    <article className="post">
      {p.house ? (
        <span className="house-mark" aria-hidden="true"><Icon name="logo" /></span>
      ) : p.author && <Avatar person={p.author} />}
      <div className="post-main">
        <div className="post-meta">
          {p.house ? <Link className="author" href="/discover">From the house</Link>
            : p.author && <Link className="author" href={profileHref(p.author)}>{p.author.name}</Link>}
          {p.circle && <span>in <Link href={`/c/${p.circle.slug}`} style={{ color: "inherit" }}>{p.circle.name}</Link></span>}
          <span>· {p.time}</span>
          <span className="chips"><Chips bases={p.bases} /></span>
          <div className="post-more" ref={menuRef}>
            <button className="btn btn-ghost btn-icon" type="button" aria-label="More options" aria-expanded={menu} aria-haspopup="menu" onClick={() => setMenu(m => !m)} style={{ width: 32, height: 32, color: "var(--ink-2)" }}>
              <Icon name="more" />
            </button>
            {menu && (
              <div className="menu" role="menu" style={{ top: 36 }}>
                <button role="menuitem" type="button" onClick={async () => {
                  setMenu(false); setGone(true);
                  const r = await run(setHidden(p.type, p.id, true));
                  if (!r.ok) { setGone(false); return; }
                  toast("Hidden. You'll see fewer posts like this.", async () => { await run(setHidden(p.type, p.id, false)); setGone(false); });
                }}>Not interested</button>
                {p.author && p.canFollow && (
                  <button role="menuitem" type="button" onClick={async () => {
                    setMenu(false); setGone(true);
                    const r = await run(setMute(p.author!.id, true));
                    if (!r.ok) { setGone(false); return; }
                    toast(`Muted ${who}. They won't know.`, async () => { await run(setMute(p.author!.id, false)); setGone(false); });
                  }}>Mute {who}</button>
                )}
                {!p.mine && <button role="menuitem" type="button" className="danger" onClick={() => { setMenu(false); openReport(p.type, p.id); }}>Report</button>}
              </div>
            )}
          </div>
        </div>
        <div className="post-reason">{p.reason}</div>
        {p.title && <h3 className="post-title"><Link href={p.href}>{p.title}</Link></h3>}
        {p.body && <p className="post-body"><Link href={p.href}>{p.body}</Link></p>}
        {p.thumb && <Link className="thumb" href={p.href}>{p.thumb}</Link>}
        {p.asking && (
          <div className="q-status">
            <span>{p.asking.answered ? "Has answers" : "Open question"}</span>
            <Link className="btn btn-secondary" href={p.href} style={{ padding: "6px 12px" }}>{p.asking.answered ? "Read answers" : p.mine ? "See it" : "Answer"}</Link>
          </div>
        )}
        {p.checked && <div className="checked"><Icon name="check" size={14} />Source checked by readers who usually disagree</div>}
        <div className="acts">
          <Link className="btn btn-ghost act" href={p.href}><Icon name="reply" size={16} />Reply</Link>
          {!p.mine && (
            <button className="btn btn-ghost act" type="button" aria-pressed={helpful} onClick={() => flip("helpful")}>
              <Icon name="bulb" size={16} fill={helpful} />{helpful ? "Marked helpful" : "Helpful"}
            </button>
          )}
          <button className="btn btn-ghost act" type="button" aria-pressed={saved} onClick={() => flip("saved")}>
            <Icon name="bookmark" size={16} fill={saved} />{saved ? "Saved" : "Save"}
          </button>
        </div>
        {helpful && (
          <div className="privnote">
            <span>Only {who} {p.house ? "see" : "sees"} this.</span>
            {p.author && p.canFollow && (
              <button className="btn btn-ghost" type="button" style={{ padding: "2px 6px", fontSize: 13 }} onClick={async () => {
                const next = !following; setFollowing(next);
                const r = await run(setFollow(p.author!.id, next));
                if (!r.ok) setFollowing(!next);
              }}>
                {following ? `Following ${who}` : `See more from ${who}? Follow`}
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
