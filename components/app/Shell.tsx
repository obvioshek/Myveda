"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Icon from "@/components/app/Icon";
import BrandMark from "@/components/landing/Brand";
import TextSize from "@/components/learn/TextSize";
import Theme from "@/components/learn/Theme";
import AppProvider, { useApp } from "@/components/app/AppProvider";
import { signOutMember } from "@/actions/app/profile";
import type { ComposeAudience, PersonRef } from "@/lib/app/types";
import { decoded } from "@/lib/app/params";

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
  if (path.startsWith("/t/")) return decoded(path.slice(3)) ?? "Topic";
  if (path.startsWith("/library")) return "Library";
  if (path.startsWith("/inbox")) return "Inbox";
  return "";
}

// The learning pages, a step away from every screen.
const LEARN = [["Chapters", "/learn"], ["Practice", "/learn/practice"], ["Glossary", "/learn/glossary"]] as const;

function Frame({ me, circles, hasUnread, children }: ShellProps) {
  const path = usePathname() ?? "";
  const router = useRouter();
  const { openCompose } = useApp();
  const meHref = `/u/${encodeURIComponent(me.handle ?? me.id)}`;

  const cur = (on: boolean) => (on ? ("page" as const) : undefined);
  const isHome = path.startsWith("/home") || path.startsWith("/read") || path.startsWith("/note") || path.startsWith("/q/");
  const isDiscover = path.startsWith("/discover") || path.startsWith("/t/");
  const isCommunity = path.startsWith("/c");
  const isLibrary = path.startsWith("/library");
  const isReader = path.startsWith("/read") || path.startsWith("/note");
  const showBack = !["/home", "/discover", "/c"].includes(path) && path !== meHref;

  return (
    <div className={`shell${isReader ? " has-mbar" : ""}`}>
      <a className="skip" href="#main">Skip to the content</a>
      <header className="top">
        <Link className="brand" href="/home"><BrandMark />Veda Verse</Link>
        <Link className="top-search" href="/discover"><Icon name="search" size={16} />Search questions, posts, people, circles</Link>
        <div className="top-actions">
          <button className="btn btn-primary" type="button" onClick={() => openCompose()}><Icon name="plus" size={16} />Ask or post</button>
          <Link className="btn btn-secondary btn-icon bell" href="/inbox" aria-label={hasUnread ? "Inbox, new items" : "Inbox"}>
            <Icon name="bell" />{hasUnread && <span className="dot" />}
          </Link>
          <Account me={me} meHref={meHref} path={path} />
        </div>
      </header>

      <header className="mtop">
        {showBack && (
          <button className="btn btn-ghost btn-icon" type="button" aria-label="Back" onClick={() => router.back()}>
            <Icon name="back" size={20} />
          </button>
        )}
        {path.startsWith("/home") ? <Link className="brand" href="/home"><BrandMark />Veda Verse</Link> : <span className="title">{titleFor(path)}</span>}
        <Link className="btn btn-ghost btn-icon bell" href="/inbox" aria-label={hasUnread ? "Inbox, new items" : "Inbox"}>
          <Icon name="bell" size={20} />{hasUnread && <span className="dot" />}
        </Link>
        <Account me={me} meHref={meHref} path={path} />
      </header>

      <div className="body">
        <nav className="rail" aria-label="Main">
          <Link href="/home" aria-current={cur(isHome)}><Icon name="home" size={19} />Home</Link>
          <Link href="/discover" aria-current={cur(isDiscover)}><Icon name="compass" size={19} />Discover</Link>
          <Link href="/c" aria-current={cur(isCommunity)}><Icon name="people" size={19} />Communities</Link>
          <Link href="/library" aria-current={cur(isLibrary)}><Icon name="library" size={19} />Library</Link>
          {circles.length > 0 && <div className="kicker">Your circles</div>}
          {circles.map(c => (
            <Link key={c.slug} className="small" href={`/c/${c.slug}`} aria-current={cur(path === `/c/${c.slug}`)}>{c.name}</Link>
          ))}
          <div className="kicker">Learn</div>
          {LEARN.map(([name, href]) => <Link key={href} className="small" href={href}>{name}</Link>)}
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

// The account button and its panel: where to go, the reader's text size and
// theme (shared with the learning pages), and signing out.
function Account({ me, meHref, path }: { me: PersonRef; meHref: string; path: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const id = useId();

  const [openPath, setOpenPath] = useState(path);
  if (openPath !== path) { setOpenPath(path); setOpen(false); }
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button ref={btn} className="me-btn av" style={{ "--s": "40px" } as React.CSSProperties} type="button" aria-label="Your account and display settings" aria-expanded={open} aria-controls={id} onClick={() => setOpen(o => !o)}>
        {me.initials}
      </button>
      {open && (
        <div className="menu acct" id={id}>
          <Link href={meHref}>Your profile</Link>
          <Link href="/library">Library</Link>
          <Link href="/learn">Chapters</Link>
          <Link href="/learn/practice">Practice</Link>
          <div className="menu-sec">
            <TextSize />
            <Theme />
          </div>
          <Link href="/welcome?replay=1">Replay onboarding</Link>
          <Link href="/">About Veda Verse</Link>
          <form action={signOutMember}><button type="submit">Sign out</button></form>
        </div>
      )}
    </div>
  );
}
