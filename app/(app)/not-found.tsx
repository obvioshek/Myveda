import Link from "next/link";
import type { Metadata } from "next";
import BrandMark from "@/components/landing/Brand";

export const metadata: Metadata = { title: "Not found", robots: { index: false } };

// A question, note, person or community that isn't there: it may have been
// removed by its author, or the link may be wrong.
export default function AppNotFound() {
  return (
    <main className="signin">
      <div className="card">
        <Link className="brand" href="/"><BrandMark />Veda Verse</Link>
        <h1>This isn&apos;t here</h1>
        <p className="muted">The question, note, member or community may have been removed, or the link may be mistyped.</p>
        <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/home">Back to your Edition</Link>
          <Link className="btn btn-secondary" href="/discover">Search the community</Link>
        </div>
      </div>
    </main>
  );
}
