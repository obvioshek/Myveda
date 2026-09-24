'use client';

import { useActionState } from 'react';
import { signInWithEmail } from '../actions/auth';

const initialState = {
  success: '',
  error: '',
};

export default function SignInForm() {
  const [state, formAction, pending] = useActionState(signInWithEmail, initialState);

  if (state.success) {
    return <p role="status"><b>{state.success}</b> The link signs you in on this device.</p>;
  }

  return (
    <form action={formAction} noValidate>
      <p><b>Sign in with your email.</b> We send a one-time link — no password to remember.</p>
      <label className="jlab" htmlFor="signinMail" style={{ marginTop: '.85em' }}>Your email address</label>
      <input
        id="signinMail"
        className="cin"
        type="email"
        name="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
        disabled={pending}
        aria-invalid={state.error ? true : undefined}
        aria-describedby={state.error ? 'signinErr' : undefined}
      />
      {state.error && <p id="signinErr" role="alert" style={{ marginTop: '.6em', color: 'var(--gerua-lit)' }}>{state.error}</p>}
      <button className="btn btn-p" type="submit" disabled={pending}>
        <span>{pending ? 'Sending…' : 'Email me a sign-in link'}</span>
      </button>
    </form>
  );
}
