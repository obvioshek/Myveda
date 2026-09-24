"use client";

import { useActionState } from 'react';
import { updateProfileSettings } from '../actions/profile';

const initialState = { error: '', success: '' };

const WINDOW_HOURS = [7, 9, 11, 13, 15, 18, 20, 22];

function hourLabel(h: number) {
  const ap = h >= 12 ? 'pm' : 'am';
  return `${h % 12 || 12}:00 ${ap}`;
}

export default function SettingsSheet({ user, profile, signInOpen = false }: {
  user: { email: string | null } | null;
  profile: { timezone?: string | null; deliveryWindows?: readonly number[] | null } | null;
  signInOpen?: boolean;
}) {
  const [state, formAction, pending] = useActionState(updateProfileSettings, initialState);
  const windows = new Set(profile?.deliveryWindows ?? [9, 13, 18]);

  return (
    <div className="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetT" hidden>
  <div className="sheet-scrim" data-close></div>
  <div className="sheet-in">
    <div className="sheet-h"><b id="sheetT">My Veda Verse</b><button className="sheet-x" type="button" data-close aria-label="Close the menu">×</button></div>
    <ol className="sheet-l">
      <li><a href="#explore">Explore</a></li>
      <li><a href="#why">Why we are building this</a></li>
      <li><a href="#how">How it works</a></li>
      <li><a href="#communities">Communities</a></li>
      <li><a href="#house">From the house of Veda Verse</a></li>
      <li><a href="#principles">Principles</a></li>
      <li><a href="#join">Join</a></li>
    </ol>

    {!user && (
      <p className="sheet-note">
        {signInOpen
          ? 'Sign in from the top of the page with a one-time email link.'
          : 'Sign-in opens with the first invitations. People on the early list receive theirs first.'}
      </p>
    )}

    {user && profile && (
      <form action={formAction} className="sheet-note">
        <p><b>Your delivery windows</b> — messages to you arrive together at these times.</p>

        {state.success && <p role="status" style={{ color: 'var(--leaf)' }}>{state.success}</p>}
        {state.error && <p role="alert" style={{ color: 'var(--gerua-lit)' }}>{state.error}</p>}

        <label className="jlab" htmlFor="sheetTz" style={{ marginTop: '.8em' }}>Time zone</label>
        <input
          id="sheetTz"
          className="cin"
          type="text"
          name="timezone"
          defaultValue={profile.timezone ?? 'Asia/Kolkata'}
          required
        />

        <fieldset style={{ border: 0, padding: 0, margin: '.8em 0 0' }}>
          <legend className="jlab">Windows</legend>
          <div className="chips">
            {WINDOW_HOURS.map(h => (
              <label key={h} style={{ display: 'inline-flex', alignItems: 'center', gap: '.35em', marginRight: '.8em' }}>
                <input type="checkbox" name="deliveryWindows" value={h} defaultChecked={windows.has(h)} />
                {hourLabel(h)}
              </label>
            ))}
          </div>
        </fieldset>

        <button className="btn btn-p" type="submit" disabled={pending} style={{ marginTop: '.9em' }}>
          <span>{pending ? 'Saving…' : 'Save'}</span>
        </button>
      </form>
    )}

    <div className="sheet-ctl">
      <button type="button" id="sheetTone" aria-pressed="false">Sound: off</button>
      <button type="button" id="sheetStill" aria-pressed="false">Motion: on</button>
    </div>
  </div>
</div>
  );
}
