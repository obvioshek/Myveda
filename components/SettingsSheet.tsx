"use client";

import { useActionState } from 'react';
import { updateProfileSettings } from '../actions/profile';

const initialState = { error: '', success: '' };

export default function SettingsSheet({ user, profile }: { user: any, profile: any }) {
  const [state, formAction, pending] = useActionState(updateProfileSettings, initialState);

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
      <p className="sheet-note">Sign-in opens with the first invitations. People on the early list receive theirs first.</p>
    )}

    {user && profile && (
      <form action={formAction} className="sheet-note" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <p><b>Your Settings</b></p>
        
        {state.success && <p style={{ color: 'green' }}>{state.success}</p>}
        {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          Timezone
          <input 
            type="text" 
            name="timezone" 
            defaultValue={profile.timezone} 
            required 
            style={{ padding: '0.5rem', background: 'var(--bg)', color: 'var(--fg)', border: '1px solid var(--fg2)' }}
          />
        </label>
        
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          Delivery Windows (hours)
          <select 
            multiple 
            name="deliveryWindows" 
            defaultValue={profile.deliveryWindows.map(String)} 
            style={{ padding: '0.5rem', background: 'var(--bg)', color: 'var(--fg)', border: '1px solid var(--fg2)', minHeight: '100px' }}
          >
            {[...Array(24)].map((_, i) => (
              <option key={i} value={i}>{i.toString().padStart(2, '0')}:00</option>
            ))}
          </select>
        </label>

        <button className="btn btn-p" type="submit" disabled={pending}>
          <span>{pending ? 'Saving...' : 'Save Settings'}</span>
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
