"use client";

import Link from "next/link";
import { useEffect } from "react";

// A learning page failed to load. Progress, notes and the review list live on
// the device, so nothing is lost; trying again usually works.
export default function LearnError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <main id="main" className="wrap nf">
      <span className="eyebrow"><i className="sq" aria-hidden="true" />Something went wrong</span>
      <h1><span>This page didn&apos;t load.</span><span className="red">Your progress is safe.</span></h1>
      <p className="lede">What you have done here is kept on this device, so nothing is lost. Try again, and if it keeps happening, tell us at <a className="link" href="mailto:admin@myvedaverse.in">admin@myvedaverse.in</a>{error.digest ? <> and mention <code>{error.digest}</code></> : null}.</p>
      <div className="btn-row">
        <button type="button" className="btn btn-primary btn-lg" onClick={() => retry()}>Try again</button>
        <Link className="btn btn-secondary btn-lg" href="/learn">All chapters</Link>
      </div>
    </main>
  );
}
