"use client";

import Link from "next/link";
import { useEffect } from "react";

// Something failed while loading a screen of the community. Nothing the
// member wrote is lost by trying again: drafts stay in the composer.
export default function AppError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <main className="signin">
      <div className="card">
        <h1>That didn&apos;t load</h1>
        <p className="muted">Something went wrong on our side. Try again; if it keeps happening, tell us at admin@myvedaverse.in{error.digest ? ` and mention ${error.digest}` : ""}.</p>
        <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
          <button type="button" className="btn btn-primary" onClick={() => retry()}>Try again</button>
          <Link className="btn btn-secondary" href="/home">Back to your Edition</Link>
        </div>
      </div>
    </main>
  );
}
