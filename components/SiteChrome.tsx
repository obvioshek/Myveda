"use client";

import SignInForm from './SignInForm';

import { signOut } from '../actions/auth';

export default function SiteChrome({ user }: { user: any }) {
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
      <form action={signOut}>
        <button className="signin" type="submit">Sign out</button>
      </form>
    ) : (
      <>
        <button className="signin" id="signin" type="button" aria-expanded="false" aria-controls="signinPop">Sign in</button>
        <a className="join" href="#join">Join</a>
      </>
    )}
  </div>
  <button className="stopbtn" id="stopBtn" type="button" aria-expanded="false" aria-controls="sheet">
    <span className="segbar" id="segbar" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
    <span id="stopNow">Menu</span>
  </button>
  <span className="hprog" aria-hidden="true"><i id="hprog"></i></span>
  <div className="signpop" id="signinPop" role="region" aria-label="Sign in" hidden>
    <SignInForm />
  </div>
</header>
  );
}
