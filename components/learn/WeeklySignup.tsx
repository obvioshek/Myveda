"use client";

import { useActionState } from "react";
import { subscribeWeekly, type WeeklyState } from "@/actions/weekly";

// The sign-up for "One idea a week": one field, and a confirmation email
// before anything is sent (actions/weekly.ts).
export default function WeeklySignup() {
  const [state, action, pending] = useActionState<WeeklyState | null, FormData>(subscribeWeekly, null);
  return (
    <form action={action} className="wk-sign">
      <label className="rp-lab" htmlFor="wk-email">Your email</label>
      <div className="wk-sign-row">
        <input id="wk-email" name="email" type="email" className="input" required autoComplete="email" maxLength={254} placeholder="name@example.com" />
        <button type="submit" className="btn btn-primary" disabled={pending}>{pending ? "Signing up…" : "Send me one a week"}</button>
      </div>
      <input className="rp-hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className={state && !state.ok ? "rp-err" : "ci-fine"} role="status">
        {state?.message ?? "One email each Monday morning. You confirm first, and every email has a link to stop them. Your address is used for nothing else."}
      </p>
    </form>
  );
}
