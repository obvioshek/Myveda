"use client";

import { useState } from "react";
import { BASIS_HELP, LABELS, SHARE_BASES, type Basis, type ShareBasis } from "@/lib/app/labels";

// The community, shown rather than described: one example thread laid out the
// way the app lays out a question (/q/[id]). Replies are grouped by how they
// relate, each says what it rests on, a disagreement carries its reason, and
// Helpful is private. The small numbered squares point at the notes beside it.
// Everything here follows rules the app enforces (see actions/app/); keep it so.

type Reply = { id: string; who: string; initials: string; basis: ShareBasis; body: string; source?: string; reason?: string; mark?: number };

const GROUPS: { name: string; mark?: number; items: Reply[] }[] = [
  {
    name: "Answers", mark: 1, items: [
      { id: "meera", who: "Meera", initials: "MK", basis: "lived", mark: 2, body: "I asked him what he would change first, before saying what I would. He had been waiting a long time for someone to ask." },
      { id: "asha", who: "Asha", initials: "AR", basis: "documented", body: "Teams where people feel safe to speak up report more learning behaviour, so make the first conversation one where he can push back.", source: "Edmondson, Administrative Science Quarterly 44(2), 1999" },
    ],
  },
  {
    name: "Builds on Meera’s answer", items: [
      { id: "kabir", who: "Kabir", initials: "KS", basis: "told", body: "My first manager’s rule: praise in public, correct in private, and never in front of his juniors." },
    ],
  },
  {
    name: "Disagrees", items: [
      { id: "rohan", who: "Rohan", initials: "RD", basis: "view", mark: 3, reason: "age isn’t the issue", body: "Give it like any other feedback. Making his seniority the topic is what makes it awkward." },
    ],
  },
];

function Label({ basis }: { basis: Basis }) {
  const l = LABELS[basis];
  return <span className={`vtag ${basis}`}><span aria-hidden="true">{l.glyph}</span>{l.name}</span>;
}

const Mark = ({ n }: { n: number }) => <i className="tmark" aria-hidden="true">{n}</i>;

export default function ThreadPreview() {
  const [helpful, setHelpful] = useState<string | null>(null);
  const [basis, setBasis] = useState<ShareBasis>("lived");
  return (
    <figure className="thread">
      <div className="th-sheet">
        <header className="th-q">
          <div className="th-meta"><Label basis="asking" /><span>Work and leadership</span><span>in First-time managers</span></div>
          <p className="th-title">How do you give feedback to someone older than you on your team?</p>
          <p className="th-ctx">He has been here eight years. I have been a manager for three months. <span className="th-by">Sana</span></p>
        </header>

        {GROUPS.map(g => (
          <section key={g.name} className="th-group" aria-label={g.name}>
            <p className="th-gname">{g.mark && <Mark n={g.mark} />}{g.name}</p>
            {g.items.map(r => (
              <article key={r.id} className="th-reply">
                <span className="th-av" aria-hidden="true">{r.initials}</span>
                <div className="th-main">
                  <div className="th-meta"><b>{r.who}</b>{r.mark && <Mark n={r.mark} />}<Label basis={r.basis} /></div>
                  {r.reason && <p className="th-reason">Disagrees because {r.reason}</p>}
                  <p className="th-body">{r.body}</p>
                  {r.source && <p className="th-src"><span className="label">Source</span>{r.source}</p>}
                  <div className="th-acts">
                    <span>Reply</span>
                    <button type="button" aria-pressed={helpful === r.id} onClick={() => setHelpful(h => (h === r.id ? null : r.id))}>
                      {helpful === r.id ? "Marked helpful" : "Helpful"}
                    </button>
                    {r.id === "meera" && <Mark n={4} />}
                    {helpful === r.id && <span className="th-priv" role="status">Only {r.who} sees this. There is no count.</span>}
                  </div>
                </div>
              </article>
            ))}
          </section>
        ))}

        <div className="th-compose">
          <p className="th-gname" id="th-rest"><Mark n={5} />Your answer rests on</p>
          <div className="th-bases" role="group" aria-labelledby="th-rest">
            {SHARE_BASES.map(b => (
              <button key={b} type="button" aria-pressed={basis === b} onClick={() => setBasis(b)}><span aria-hidden="true">{LABELS[b].glyph}</span>{LABELS[b].name}</button>
            ))}
          </div>
          <p className="th-help" aria-live="polite">{BASIS_HELP[basis]}</p>
        </div>
      </div>
      <figcaption className="th-cap">An example thread, written to show how answers work. Try Helpful, or pick what your answer would rest on.</figcaption>
    </figure>
  );
}
