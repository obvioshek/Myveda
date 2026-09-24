"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/app/AppProvider";
import { setMembership } from "@/actions/app/community";
import type { CommunityCard } from "@/lib/app/community";

export default function CommunityCards({ items }: { items: CommunityCard[] }) {
  return <div className="cards">{items.map(c => <Card key={c.id} c={c} />)}</div>;
}

function Card({ c }: { c: CommunityCard }) {
  const { run, toast } = useApp();
  const [status, setStatus] = useState(c.status);
  const label = status === "member" ? "✓ Joined" : status === "applied" ? "Applied" : c.format === "Cohort" ? "Apply" : "Join";
  return (
    <div className="ccard">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span className="chip rel">{c.format}</span><span className="muted" style={{ fontSize: 12 }}>{c.memory}</span></div>
      <Link className="name" href={`/c/${c.slug}`}>{c.name}</Link>
      <div style={{ fontSize: 14 }}>{c.week}</div>
      <div className="muted" style={{ fontSize: 14, fontStyle: "italic" }}>{c.note}</div>
      {c.hosts && <div className="muted" style={{ fontSize: 13 }}>Hosts: {c.hosts}</div>}
      <div>
        <button className="btn btn-secondary" type="button" aria-pressed={status !== "none"} style={{ marginTop: 6 }} onClick={async () => {
          const r = await run(setMembership(c.id, status === "none"));
          if (!r.ok) return;
          setStatus(r.status);
          toast(r.status === "applied" ? `Applied. The hosts of ${c.name} will decide.` : r.status === "member" ? `You joined ${c.name}.` : `You left ${c.name}.`);
        }}>{label}</button>
      </div>
    </div>
  );
}
