"use client";

import { useEffect } from "react";
import { useServerState } from "@/components/app/useServerState";
import { usePathname, useRouter } from "next/navigation";
import { useApp } from "@/components/app/AppProvider";

// The search box writes the query into the URL, so results are shareable
// and the server does the searching.
export default function DiscoverSearch({ q, doc, empty }: { q: string; doc: boolean; empty: boolean }) {
  const router = useRouter();
  const path = usePathname();
  const { openCompose } = useApp();
  const [value, setValue] = useServerState(q);
  useEffect(() => {
    if (value === q) return;
    const t = setTimeout(() => {
      const p = new URLSearchParams();
      if (value.trim()) p.set("q", value.trim());
      if (doc && value.trim()) p.set("doc", "1");
      router.replace(`${path}${p.size ? `?${p}` : ""}`, { scroll: false });
    }, 300);
    return () => clearTimeout(t);
  }, [value, q, doc, path, router]);

  const go = (nextDoc: boolean) => {
    const p = new URLSearchParams({ q: value.trim() });
    if (nextDoc) p.set("doc", "1");
    router.replace(`${path}?${p}`, { scroll: false });
  };

  return (
    <div className="stack" style={{ gap: 10 }}>
      <input
        className="input"
        type="search"
        aria-label="Search"
        placeholder="Search questions, posts, people, topics, circles"
        value={value}
        onChange={e => setValue(e.target.value)}
        autoFocus
        style={{ minHeight: 48, fontSize: 16, paddingInline: 16 }}
      />
      {q && (
        <div><button type="button" className="pill" aria-pressed={doc} onClick={() => go(!doc)}>{doc ? "✓ " : ""}Only Documented</button></div>
      )}
      {q && empty && (
        <div className="panel" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
          <div style={{ fontSize: 16 }}>No good matches for “{q}”.</div>
          <button className="btn btn-primary" type="button" onClick={() => openCompose({ intent: "asking", text: q.replace(/\?*$/, "?") })}>Ask this as a question</button>
        </div>
      )}
    </div>
  );
}
