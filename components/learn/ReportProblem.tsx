"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { reportProblem, type ReportResult } from "@/actions/report";
import { REPORT_KINDS } from "@/lib/report-kinds";
import { useRouter } from "next/navigation";
import { useLayer } from "@/components/landing/layer";

// "Report a problem": a small button that opens a form in a dialog. `what`
// says what the report is about (a question, a passage's reference); the page
// address is added when the form is sent. The report goes to the site's own
// inbox (actions/report.ts); fixes are listed on /learn/corrections. The
// dialog exists only while open, attached to <body>, so a page with many
// passages carries one button each and nothing more. The form is submitted by
// hand, not as a form action, so what the reader wrote stays if sending fails.
export default function ReportProblem({ what, label = "Report a problem", kind }: { what: string; label?: string; kind?: (typeof REPORT_KINDS)[number] }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<ReportResult | null>(null);
  const [busy, setBusy] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const show = () => { setResult(null); setOpen(true); };
  const close = () => dialog.current?.close();
  // Back closes it on touch screens; the corrections link then replaces its
  // history entry (components/landing/layer.ts).
  const leave = useLayer(open, close);
  const router = useRouter();
  // Shown as a modal once attached; closing it (Esc, × or Cancel) removes it.
  useEffect(() => {
    if (open && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [open]);

  const send = async (form: FormData) => {
    setBusy(true);
    const r = await reportProblem({
      kind: String(form.get("kind") ?? ""),
      details: String(form.get("details") ?? ""),
      email: String(form.get("email") ?? ""),
      website: String(form.get("website") ?? ""),
      where: location.pathname + location.hash,
      what,
    }).catch((): ReportResult => ({ ok: false, error: "The report didn't send. Check your connection and try again." }));
    setBusy(false);
    setResult(r);
  };

  return (
    <>
      <button type="button" className="rp-btn" aria-haspopup="dialog" onClick={show}>{label}</button>
      {open && createPortal(
      <dialog ref={dialog} className="rp" aria-labelledby={`${id}-h`} onClose={() => setOpen(false)} onClick={e => { if (e.target === dialog.current) close(); }}>
        <div className="rp-in">
          <div className="rp-head">
            <h2 id={`${id}-h`} className="h-xs">Report a problem</h2>
            <button type="button" className="rp-x" aria-label="Close" title="Close (Esc)" onClick={close}>×</button>
          </div>
          {result?.ok ? (
            <div className="rp-done" role="status">
              <p><b>Thank you.</b> The report has reached the editors. Fixes are listed, with the date, on <Link className="link" href="/learn/corrections" prefetch={false} onClick={e => { if (leave()) { e.preventDefault(); router.replace("/learn/corrections"); } }}>the corrections page</Link>.</p>
              <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
            </div>
          ) : (
            <form className="rp-form" onSubmit={e => { e.preventDefault(); send(new FormData(e.currentTarget)); }}>
              <p className="rp-what"><span className="label">About</span>{what}</p>
              <fieldset className="rp-kinds">
                <legend className="label">What&apos;s wrong</legend>
                {REPORT_KINDS.map((k, i) => (
                  <label key={k} className="rp-kind"><input type="radio" name="kind" value={k} required defaultChecked={kind ? k === kind : i === 0} />{k}</label>
                ))}
              </fieldset>
              <label className="rp-lab" htmlFor={`${id}-d`}>What should it say, or what did you notice?</label>
              <textarea id={`${id}-d`} name="details" className="input" required minLength={10} maxLength={2000} rows={4} placeholder="For example: the answer should be B, because… or: Kangle numbers this verse 2.1.4" />
              <label className="rp-lab" htmlFor={`${id}-e`}>Your email, if you&apos;d like a reply <span className="ci-fine">(optional; used only to reply)</span></label>
              <input id={`${id}-e`} name="email" type="email" className="input" autoComplete="email" inputMode="email" enterKeyHint="send" maxLength={254} />
              <input className="rp-hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {result && !result.ok && (
                <p className="rp-err" role="alert">
                  {result.error}{" "}
                  {result.mailto && <a className="link" href={result.mailto}>Open it in your email app</a>}
                </p>
              )}
              <div className="btn-row">
                <button type="submit" className="btn btn-primary" disabled={busy}>{busy ? "Sending…" : "Send report"}</button>
                <button type="button" className="btn btn-secondary" onClick={close}>Cancel</button>
              </div>
            </form>
          )}
        </div>
      </dialog>, document.body)}
    </>
  );
}
