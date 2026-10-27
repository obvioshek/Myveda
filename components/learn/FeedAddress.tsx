"use client";

import { useState } from "react";

// The feed's address, ready to copy into a feed reader: the same field and
// button as the quiz maker's link.
export default function FeedAddress({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); } catch { setCopied(false); }
  };
  return (
    <div className="tl-f fd-addr">
      <label htmlFor="fd-url">Feed address</label>
      <div className="tl-in qz-link"><input id="fd-url" type="text" readOnly value={url} onFocus={e => e.currentTarget.select()} /></div>
      <div className="btn-row">
        <button type="button" className="btn btn-primary" onClick={copy}>{copied ? "Address copied" : "Copy the address"}</button>
      </div>
      <p className="ci-fine" role="status">{copied ? "Copied. " : ""}Paste it into your reader where it asks for a feed, or a site to follow.</p>
    </div>
  );
}
