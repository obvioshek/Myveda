"use client";

import { useEffect, useState } from "react";

export interface Account { href: string; label: string }

// The landing page is static, so who is signed in is asked once, from the
// browser. Until the answer arrives, or if it never does, there is no account
// link: signing in is optional and the page reads the same without it.
let pending: Promise<Account | null> | null = null;
function load(): Promise<Account | null> {
  pending ??= fetch("/api/account", { credentials: "same-origin" })
    .then(r => (r.ok ? r.json() : null))
    .then(j => (j?.account as Account | null) ?? null)
    .catch(() => null);
  return pending;
}

export function useAccount(): Account | null {
  const [account, setAccount] = useState<Account | null>(null);
  useEffect(() => {
    let live = true;
    load().then(a => { if (live) setAccount(a); });
    return () => { live = false; };
  }, []);
  return account;
}

export const signInLabel = (a: Account) => (a.label === "Sign in" ? "Sign in (optional)" : a.label);

// The account to offer as a separate link: only signing in, since a signed-in
// member reaches the app through the Community link.
export const signInOnly = (a: Account | null) => (a?.label === "Sign in" ? a : null);
