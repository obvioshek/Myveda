"use client";

import { signInLabel, signInOnly, useAccount } from "./account";

// The footer's optional sign-in link, shown once the browser knows there is one
// to offer and the visitor isn't signed in.
export default function AccountLink() {
  const account = signInOnly(useAccount());
  return account ? <a href={account.href}>{signInLabel(account)}</a> : null;
}
