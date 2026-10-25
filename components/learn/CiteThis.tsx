"use client";

import { useState } from "react";

// "Cite this page" for students: APA, MLA and Chicago forms of a page's
// citation, each with a copy button. The date is when the content last changed.
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MLA_MONTHS = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

export function citations(title: string, url: string, updated: string) {
  const [y, m, d] = updated.split("-").map(Number);
  const month = MONTHS[m - 1];
  const bare = url.replace(/^https?:\/\//, "");
  return [
    { style: "APA", text: `Veda Verse. (${y}, ${month} ${d}). ${title}. ${url}` },
    { style: "MLA", text: `“${title}.” Veda Verse, ${d} ${MLA_MONTHS[m - 1]} ${y}, ${bare}.` },
    { style: "Chicago", text: `Veda Verse. “${title}.” Last modified ${month} ${d}, ${y}. ${url}.` },
  ];
}

export default function CiteThis({ title, url, updated }: { title: string; url: string; updated: string }) {
  const [copied, setCopied] = useState("");
  const copy = async (style: string, text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(style); setTimeout(() => setCopied(""), 2000); } catch { setCopied(""); }
  };
  return (
    <details className="cite no-print">
      <summary>Cite this page</summary>
      <ul>
        {citations(title, url, updated).map(c => (
          <li key={c.style}>
            <span className="label">{c.style}</span>
            <p>{c.text}</p>
            <button type="button" className="btn btn-secondary cite-copy" onClick={() => copy(c.style, c.text)} aria-live="polite">{copied === c.style ? "Copied" : "Copy"}</button>
          </li>
        ))}
      </ul>
      <p className="ci-fine">Check the form your course asks for. The date is when this page&apos;s content last changed.</p>
    </details>
  );
}
