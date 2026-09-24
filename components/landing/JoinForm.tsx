"use client";

import { useActionState, useId } from "react";
import { joinEarlyList, type JoinState } from "@/actions/earlyList";
import { CONTACT_EMAIL } from "@/content/landing";

// The early-list form. "inline" sits in the hero; "box" is the join section.
export default function JoinForm({ variant }: { variant: "inline" | "box" }) {
  const [state, action, pending] = useActionState<JoinState | null, FormData>(joinEarlyList, null);
  const id = useId();
  const status = state && (
    <>
      {state.message}
      {state.fallback !== undefined && <> <a className="link" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Early list")}&body=${encodeURIComponent(`Please add me: ${state.fallback}`)}`}>email us</a>.</>}
    </>
  );
  return (
    <form className={variant === "inline" ? "join-inline" : undefined} action={action} noValidate>
      <label className={variant === "inline" ? "sr-only" : "lbl"} htmlFor={id}>Email address</label>
      <input className="field" id={id} type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
      <label className="hp" aria-hidden="true">Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="btn btn-primary" type="submit" disabled={pending || state?.ok}>
        {pending ? "Sending…" : state?.ok ? "Saved" : "Join the early list"}
      </button>
      <p className={state ? (state.ok ? "status ok" : "status warn") : "status"} role="status" aria-live="polite" style={variant === "inline" ? { flexBasis: "100%" } : undefined}>
        {status}
      </p>
    </form>
  );
}
