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
    return (
      <div style={{ padding: '1rem' }}>
        <p><b>{state.success}</b></p>
      </div>
    );
  }

  return (
    <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      <p><b>Sign-in to your account.</b></p>
      
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      
      <input 
        type="email" 
        name="email" 
        placeholder="Email address" 
        required 
        disabled={pending}
        style={{ 
          padding: '0.8rem', 
          background: 'var(--bg)', 
          color: 'var(--fg)', 
          border: '1px solid var(--fg2)', 
          borderRadius: '8px' 
        }} 
      />
      
      <button className="btn btn-p" type="submit" disabled={pending}>
        <span>{pending ? 'Sending...' : 'Send Magic Link'}</span>
      </button>
    </form>
  );
}
