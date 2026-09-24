"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Composer from "@/components/app/Composer";
import { report } from "@/actions/app/marks";
import { REPORT_REASONS } from "@/lib/app/labels";
import type { ComposeAudience, DraftInput } from "@/lib/app/types";

type Undo = (() => void | Promise<unknown>) | undefined;
interface PromptSpec { title: string; body?: string; placeholder?: string; submit: string; multiline?: boolean; initial?: string }

interface AppApi {
  toast: (text: string, undo?: Undo) => void;
  openCompose: (prefill?: Partial<DraftInput>) => void;
  openReport: (targetType: string, targetId: string) => void;
  prompt: (spec: PromptSpec) => Promise<string | null>;
  // runs a server action result: shows its error, returns whether it worked
  run: <R extends { ok: boolean; error?: string }>(p: Promise<R>) => Promise<R>;
}

const Ctx = createContext<AppApi | null>(null);

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp outside AppProvider");
  return v;
}

export default function AppProvider({
  children, topics, audiences,
}: { children: React.ReactNode; topics: string[]; audiences: ComposeAudience[] }) {
  const [toastState, setToast] = useState<{ text: string; undo?: Undo; n: number } | null>(null);
  const [compose, setCompose] = useState<Partial<DraftInput> | null>(null);
  const [reporting, setReporting] = useState<{ type: string; id: string } | null>(null);
  const [reason, setReason] = useState<string | null>(null);
  const [promptState, setPrompt] = useState<(PromptSpec & { resolve: (v: string | null) => void }) | null>(null);
  const [promptValue, setPromptValue] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toast = useCallback((text: string, undo?: Undo) => {
    setToast(t => ({ text, undo, n: (t?.n ?? 0) + 1 }));
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 5000);
  }, []);

  const run = useCallback(async <R extends { ok: boolean; error?: string }>(p: Promise<R>) => {
    try {
      const r = await p;
      if (!r.ok && r.error) toast(r.error);
      return r;
    } catch {
      toast("That did not go through. Try again in a moment.");
      return { ok: false, error: "failed" } as unknown as R;
    }
  }, [toast]);

  const prompt = useCallback((spec: PromptSpec) => new Promise<string | null>(resolve => {
    setPromptValue(spec.initial ?? "");
    setPrompt({ ...spec, resolve });
  }), []);

  const api: AppApi = {
    toast, run, prompt,
    openCompose: (prefill) => setCompose(prefill ?? {}),
    openReport: (type, id) => { setReason(null); setReporting({ type, id }); },
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (promptState) { promptState.resolve(null); setPrompt(null); }
      else if (reporting) setReporting(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [promptState, reporting]);

  const sendReport = async () => {
    if (!reporting || !reason) return;
    const r = await run(report(reporting.type, reporting.id, reason));
    if (r.ok) { setReporting(null); toast("Report sent. You'll get an update in your Inbox."); }
  };

  return (
    <Ctx.Provider value={api}>
      {children}

      {compose && (
        <Composer
          prefill={compose}
          topics={topics}
          audiences={audiences}
          onClose={() => setCompose(null)}
        />
      )}

      {reporting && (
        <div className="backdrop" onClick={() => setReporting(null)}>
          <div className="dialog report" role="dialog" aria-modal="true" aria-labelledby="reportT" onClick={e => e.stopPropagation()}>
            <div className="dialog-title" id="reportT">Report this</div>
            <div className="dialog-body">Hosts see it first. Trust &amp; Safety reviews anything hosts can&apos;t resolve, and you can appeal any decision.</div>
            <div className="stack" style={{ gap: 10 }} role="radiogroup" aria-label="Reason">
              {REPORT_REASONS.map(r => (
                <label className="radio" key={r}>
                  <input type="radio" name="reason" checked={reason === r} onChange={() => setReason(r)} />
                  <span className="dot" />{r}
                </label>
              ))}
            </div>
            <div className="dialog-actions">
              <button className="btn btn-secondary" type="button" onClick={() => setReporting(null)}>Cancel</button>
              <button className="btn btn-primary" type="button" disabled={!reason} onClick={sendReport}>Send report</button>
            </div>
          </div>
        </div>
      )}

      {promptState && (
        <div className="backdrop" onClick={() => { promptState.resolve(null); setPrompt(null); }}>
          <form
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="promptT"
            onClick={e => e.stopPropagation()}
            onSubmit={e => { e.preventDefault(); const v = promptValue.trim(); if (!v) return; promptState.resolve(v); setPrompt(null); }}
          >
            <div className="dialog-title" id="promptT">{promptState.title}</div>
            {promptState.body && <div className="dialog-body">{promptState.body}</div>}
            {promptState.multiline ? (
              <textarea className="input" autoFocus rows={4} placeholder={promptState.placeholder} value={promptValue} onChange={e => setPromptValue(e.target.value)} />
            ) : (
              <input className="input" autoFocus placeholder={promptState.placeholder} value={promptValue} onChange={e => setPromptValue(e.target.value)} />
            )}
            <div className="dialog-actions">
              <button className="btn btn-secondary" type="button" onClick={() => { promptState.resolve(null); setPrompt(null); }}>Cancel</button>
              <button className="btn btn-primary" type="submit" disabled={!promptValue.trim()}>{promptState.submit}</button>
            </div>
          </form>
        </div>
      )}

      {toastState && (
        <div className="toast" role="status" key={toastState.n}>
          <span>{toastState.text}</span>
          {toastState.undo && (
            <button type="button" onClick={async () => { const u = toastState.undo; setToast(null); await u?.(); }}>Undo</button>
          )}
        </div>
      )}
    </Ctx.Provider>
  );
}
