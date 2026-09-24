"use client";

import { useEffect, useRef, useState } from "react";
import SignInForm from './SignInForm';

import { signOut } from '../actions/auth';

export default function SiteChrome({ user, signInOpen = false, appOpen = false }: { user: { email: string | null } | null; signInOpen?: boolean; appOpen?: boolean }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

  /* 34. SIGN IN — the popover closes on an outside click or Escape, and
     Escape hands focus back to the button that opened it. */
  useEffect(() => {
    if (!open) return;
    const first = popRef.current?.querySelector<HTMLElement>("input, a, button");
    try { first?.focus({ preventScroll: true }); } catch { first?.focus(); }
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!popRef.current?.contains(t) && !btnRef.current?.contains(t)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="top">
  <a className="brand" href="#top">
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M1.8 10.6C1.8 21.4 22.2 21.4 22.2 10.6" fill="none" stroke="var(--terra)" strokeWidth="1.1" opacity=".75"/>
      <path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" fill="none" stroke="var(--accent)" strokeWidth="2.1" strokeLinecap="round"/>
      <circle cx="12" cy="6.3" r="2.5" fill="var(--accent)"/>
    </svg>
    <span><b>My Veda Verse</b></span>
  </a>
  <nav aria-label="Main">
    <a href="#explore">Explore</a>
    <a href="#how">How it works</a>
    <a href="#communities">Communities</a>
    <a href="#house">From the house</a>
    <a href="#principles">Principles</a>
  </nav>
  <div className="acct">
    {user ? (
      <>
        {appOpen && <a className="signin" href="/home">Open Veda Verse</a>}
        <form action={signOut}>
          <button className="signin" type="submit" title={user.email ?? undefined}>Sign out</button>
        </form>
      </>
    ) : (
      <>
        <button ref={btnRef} className="signin" id="signin" type="button" aria-expanded={open} aria-controls="signinPop" onClick={() => setOpen(o => !o)}>Sign in</button>
        <a className="join" href="#join">Join</a>
      </>
    )}
  </div>
  <button className="stopbtn" id="stopBtn" type="button" aria-expanded="false" aria-controls="sheet">
    <span className="segbar" id="segbar" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
    <span id="stopNow">Menu</span>
  </button>
  <span className="hprog" aria-hidden="true"><i id="hprog"></i></span>
  {!user && (
    <div
      ref={popRef}
      className="signpop"
      id="signinPop"
      role="region"
      aria-label="Sign in"
      hidden={!open}
      onClick={e => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}
    >
      {appOpen ? (
        <>
          <p><b>Veda Verse is open.</b> Sign in with a one-time email link and pick up your daily Edition.</p>
          <a className="btn btn-p" href="/signin"><span>Sign in to Veda Verse</span></a>
        </>
      ) : signInOpen ? (
        <SignInForm />
      ) : (
        <>
          <p><b>Sign-in opens with the first invitations.</b> People on the early list receive theirs first.</p>
          <a className="btn btn-p" href="#join"><span>Join the early list</span></a>
        </>
      )}
    </div>
  )}
</header>
  );
}
