"use client";

// The last resort, when even a page's root layout fails: a plain document in
// the site's colours, since no stylesheet can be relied on here.
export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en-IN">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f3f2f2", color: "#201e1d", font: "16px/1.55 system-ui, sans-serif" }}>
        <title>Something went wrong · Veda Verse</title>
        <main style={{ maxWidth: 520 }}>
          <p style={{ margin: 0, color: "#ae1800", fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>Veda Verse</p>
          <h1 style={{ margin: "12px 0", fontSize: 34, lineHeight: 1.1 }}>Something went wrong.</h1>
          <p style={{ margin: "0 0 20px" }}>Your progress and notes are kept on this device, so nothing is lost. Try again, or write to admin@myvedaverse.in{error.digest ? ` and mention ${error.digest}` : ""}.</p>
          <button type="button" onClick={() => retry()} style={{ minHeight: 44, padding: "0 18px", border: 0, background: "#cf2810", color: "#f3f2f2", font: "inherit", fontWeight: 800, cursor: "pointer" }}>Try again</button>
        </main>
      </body>
    </html>
  );
}
