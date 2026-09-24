"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Icon from "@/components/app/Icon";
import AppProvider, { useApp } from "@/components/app/AppProvider";
import { signOutMember } from "@/actions/app/profile";
import type { ComposeAudience, PersonRef } from "@/lib/app/types";

interface ShellProps {
  me: PersonRef;
  circles: { name: string; slug: string }[];
  hasUnread: boolean;
  topics: string[];
  audiences: ComposeAudience[];
  children: React.ReactNode;
}

export default function Shell(props: ShellProps) {
  return (
    <AppProvider topics={props.topics} audiences={props.audiences}>
      <Frame {...props} />
    </AppProvider>
  );
}

function titleFor(path: string) {
  if (path.startsWith("/home")) return "Home";
  if (path.startsWith("/read") || path.startsWith("/note")) return "Read";
  if (path.startsWith("/q/")) return "Question";
  if (path.startsWith("/c/")) return "Circle";
  if (path.startsWith("/c")) return "Communities";
  if (path.startsWith("/u/")) return "Profile";
  if (path.startsWith("/discover")) return "Discover";
  if (path.startsWith("/t/")) return decodeURIComponent(path.slice(3));
  if (path.startsWith("/library")) return "Library";
  if (path.startsWith("/inbox")) return "Inbox";
  return "";
}

function Frame({ me, circles, hasUnread, children }: ShellProps) {
  const path = usePathname() ?? "";
  const router = useRouter();
  const { openCompose } = useApp();
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const meHref = `/u/${encodeURIComponent(me.handle ?? me.id)}`;

  const [menuPath, setMenuPath] = useState(path);
  if (menuPath !== path) { setMenuPath(path); setMenu(false); }
  useEffect(() => {
    if (!menu) return;
    const onDown = (e: MouseEvent) => { if (!menuRef.current?.contains(e.target as Node)) setMenu(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [menu]);

  const cur = (on: boolean) => (on ? ("page" as const) : undefined);
  const isHome = path.startsWith("/home") || path.startsWith("/read") || path.startsWith("/note") || path.startsWith("/q/");
  const isDiscover = path.startsWith("/discover") || path.startsWith("/t/");
  const isCommunity = path.startsWith("/c");
  const isLibrary = path.startsWith("/library");
  const isReader = path.startsWith("/read") || path.startsWith("/note");
  const showBack = !["/home", "/discover", "/c"].includes(path) && path !== meHref;

  return (
    <div className={`shell${isReader ? " has-mbar" : ""}`}>
      <a className="sr-only" href="#main">Skip to the content</a>
      <header className="top">
        <Link className="brand" href="/home">
          <span className="mark"><Icon name="logo" /></span>
          <span className="word">Veda Verse</span>
        </Link>
        <Link className="top-search" href="/discover"><Icon name="search" size={16} />Search questions, posts, people, circles</Link>
        <div className="top-actions">
          <button className="btn btn-primary" type="button" onClick={() => openCompose()}><Icon name="plus" size={16} />Ask or post</button>
          <Link className="btn btn-secondary btn-icon bell" href="/inbox" aria-label={hasUnread ? "Inbox, new items" : "Inbox"}>
            <Icon name="bell" />{hasUnread && <span className="dot" />}
          </Link>
          <div style={{ position: "relative" }} ref={menuRef}>
            <button
              className="me-btn av"
              style={{ "--h": me.hue, "--s": "40px" } as React.CSSProperties}
              type="button"
              aria-label="Account menu"
              aria-expanded={menu}
              aria-haspopup="menu"
              onClick={() => setMenu(m => !m)}
            >
              {me.initials}
            </button>
            {menu && (
              <div className="menu" role="menu">
                <Link role="menuitem" href={meHref}>Your profile</Link>
                <Link role="menuitem" href="/library">Library</Link>
                <Link role="menuitem" href="/welcome?replay=1">Replay onboarding</Link>
                <Link role="menuitem" href="/">About Veda Verse</Link>
                <form action={signOutMember}><button role="menuitem" type="submit" style={{ width: "100%", textAlign: "left", padding: "10px 12px", border: "none", background: "none", fontSize: 14, cursor: "pointer", color: "var(--color-text)", borderRadius: 6 }}>Sign out</button></form>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mtop">
        {showBack && (
          <button className="btn btn-ghost btn-icon" type="button" aria-label="Back" onClick={() => router.back()} style={{ width: 44, height: 44, color: "var(--color-text)" }}>
            <Icon name="back" size={20} />
          </button>
        )}
        {path.startsWith("/home") ? <span className="word">Veda Verse</span> : <span className="title">{titleFor(path)}</span>}
        <Link className="btn btn-ghost btn-icon bell" href="/inbox" aria-label={hasUnread ? "Inbox, new items" : "Inbox"} style={{ width: 44, height: 44, color: "var(--color-text)" }}>
          <Icon name="bell" size={20} />{hasUnread && <span className="dot" />}
        </Link>
      </div>

      <div className="body">
        <nav className="rail" aria-label="Main">
          <Link href="/home" aria-current={cur(isHome)}><Icon name="home" size={19} />Home</Link>
          <Link href="/discover" aria-current={cur(isDiscover)}><Icon name="compass" size={19} />Discover</Link>
          <Link href="/c" aria-current={cur(isCommunity)}><Icon name="people" size={19} />Communities</Link>
          <Link href="/library" aria-current={cur(isLibrary)}><Icon name="library" size={19} />Library</Link>
          {circles.length > 0 && <div className="kicker circles">Your circles</div>}
          {circles.map(c => (
            <Link key={c.slug} className="small" href={`/c/${c.slug}`} aria-current={cur(path === `/c/${c.slug}`)}>{c.name}</Link>
          ))}
        </nav>
        <main className="main" id="main" tabIndex={-1}>{children}</main>
      </div>

      <nav className="mnav" aria-label="Main">
        <Link href="/home" aria-current={cur(path.startsWith("/home"))}><Icon name="home" size={22} />Home</Link>
        <Link href="/discover" aria-current={cur(isDiscover)}><Icon name="compass" size={22} />Discover</Link>
        <button className="btn btn-primary btn-icon compose" type="button" aria-label="Ask or post" onClick={() => openCompose()}><Icon name="plus" size={22} /></button>
        <Link href="/c" aria-current={cur(isCommunity)}><Icon name="people" size={22} />Circles</Link>
        <Link href={meHref} aria-current={cur(path === meHref || isLibrary)}><Icon name="user" size={22} />You</Link>
      </nav>
    </div>
  );
}
