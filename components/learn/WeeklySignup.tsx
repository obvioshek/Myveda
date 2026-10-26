"use client";

import { useActionState, useState } from "react";
import { subscribeWeekly, type WeeklyState } from "@/actions/weekly";

// The sign-up for "One idea a week": one field, and a confirmation email
// before anything is sent (actions/weekly.ts). The address is held in state,
// so a failed attempt keeps what was typed (a form action otherwise clears
// it), and the field is cleared only once the sign-up has gone through.
export default function WeeklySignup() {
  const [email, setEmail] = useState("");
  const [state, action, pending] = useActionState<WeeklyState | null, FormData>(async (prev, form) => {
    const res = await subscribeWeekly(prev, form);
    if (res.ok) setEmail("");
    return res;
  }, null);
  const failed = !!state && !state.ok;
  return (
    <form action={action} className="wk-sign">
      <label className="rp-lab" htmlFor="wk-email">Your email</label>
      <div className="wk-sign-row">
        <input id="wk-email" name="email" type="email" className="input" required autoComplete="email" inputMode="email" enterKeyHint="send" maxLength={254} placeholder="name@example.com"
          value={email} onChange={e => setEmail(e.target.value)} aria-invalid={failed || undefined} aria-describedby="wk-msg" />
        <button type="submit" className="btn btn-primary" disabled={pending}>{pending ? "Signing up…" : "Send me one a week"}</button>
      </div>
      <input className="rp-hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p id="wk-msg" className={failed ? "rp-err" : "ci-fine"} role="status">
        {state?.message ?? "One email each Monday morning. You confirm first, and every email has a link to stop them. Your address is used for nothing else."}
      </p>
    </form>
  );
}
