"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/app/Icon";
import { useApp } from "@/components/app/AppProvider";
import { setMembership } from "@/actions/app/community";
import type { CommunityCard } from "@/lib/app/community";

export default function CommunityCards({ items }: { items: CommunityCard[] }) {
  return <div className="cards">{items.map(c => <Card key={c.id} c={c} />)}</div>;
}

function Card({ c }: { c: CommunityCard }) {
  const { run, toast } = useApp();
  const [status, setStatus] = useState(c.status);
  const label = status === "member" ? "Joined" : status === "applied" ? "Applied" : c.format === "Cohort" ? "Apply" : "Join";
  return (
    <div className="ccard">
      <div className="top-line"><span className="chip rel">{c.format}</span><span className="muted" style={{ fontSize: 12, fontWeight: 600 }}>{c.memory}</span></div>
      <Link className="name" href={`/c/${c.slug}`}>{c.name}</Link>
      {c.week && <div className="wk"><span>{c.week}</span></div>}
      {c.note && <p className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>{c.note}</p>}
      {c.hosts && <div className="muted" style={{ fontSize: 13 }}>Hosted by {c.hosts}</div>}
      <div className="foot">
        <button className="btn btn-secondary" type="button" aria-pressed={status !== "none"} title={status !== "none" ? "Leave" : undefined} onClick={async () => {
          const r = await run(setMembership(c.id, status === "none"));
          if (!r.ok) return;
          setStatus(r.status);
          toast(r.status === "applied" ? `Applied. The hosts of ${c.name} will decide.` : r.status === "member" ? `You joined ${c.name}.` : `You left ${c.name}.`);
        }}>{status === "member" && <Icon name="check" size={14} />}{label}</button>
      </div>
    </div>
  );
}
