"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NewTab } from "@/components/landing/Arrow";
import { useLayer } from "@/components/landing/layer";

// "Share" on a passage: its image (the modern idea, the classical one, the
// translation and reference), with the browser's own share sheet where there
// is one, WhatsApp, LinkedIn, a copied link and a download. The link opens
// the lesson at the passage. Like ReportProblem, the dialog exists only while
// open.
export default function SharePassage({ href, image, title }: { href: string; image: string; title: string }) {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (open && dialog.current && !dialog.current.open) dialog.current.showModal(); }, [open]);

  const url = () => new URL(href, window.location.origin).toString();
  const text = `${title}, on Veda Verse`;
  const copy = async () => { try { await navigator.clipboard.writeText(url()); setNote("Link copied."); } catch { setNote("Couldn't copy; the link is in the address bar once you open it."); } };
  const native = async () => {
    try {
      const blob = await (await fetch(image)).blob();
      const file = new File([blob], "veda-verse-passage.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) await navigator.share({ files: [file], title, text: `${text}: ${url()}` });
      else await navigator.share({ title, text, url: url() });
    } catch { /* closed the share sheet */ }
  };
  const close = () => dialog.current?.close();
  useLayer(open, close);
  // The dialog only renders after a click, so this never runs on the server.
  const sheet = open && typeof navigator !== "undefined" && "share" in navigator;

  return (
    <>
      <button type="button" className="rp-btn" aria-haspopup="dialog" onClick={() => { setNote(""); setOpen(true); }}>Share</button>
      {open && createPortal(
        <dialog ref={dialog} className="rp sh" aria-label="Share this passage" onClose={() => setOpen(false)} onClick={e => { if (e.target === dialog.current) close(); }}>
          <div className="rp-in">
            <div className="rp-head"><h2 className="h-xs">Share this passage</h2><button type="button" className="rp-x" aria-label="Close" title="Close (Esc)" onClick={close}>×</button></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-img" src={image} alt={`${title}: the passage as an image`} width={1200} height={630} />
            {/* One way leads: the device's own share sheet where there is one
                (it holds WhatsApp and LinkedIn already), else copying the link. */}
            <div className="btn-row">
              {sheet ? <button type="button" className="btn btn-primary" onClick={native}>Share…</button> : (
                <>
                  <button type="button" className="btn btn-primary" onClick={copy}>Copy link</button>
                  <a className="btn btn-secondary" href={`https://wa.me/?text=${encodeURIComponent(`${text}: ${url()}`)}`} target="_blank" rel="noopener noreferrer">WhatsApp<NewTab /></a>
                  <a className="btn btn-secondary" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`} target="_blank" rel="noopener noreferrer">LinkedIn<NewTab /></a>
                </>
              )}
              {sheet && <button type="button" className="btn btn-secondary" onClick={copy}>Copy link</button>}
              <a className="btn btn-ghost" href={image} download="veda-verse-passage.png">Download image</a>
            </div>
            <p className="ci-fine" aria-live="polite">{note || "The link opens the lesson at this passage."}</p>
          </div>
        </dialog>, document.body)}
    </>
  );
}
