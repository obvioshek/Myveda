"use client";

import { signInLabel, useAccount } from "./account";

// The footer's optional sign-in link, shown once the browser knows what to offer.
export default function AccountLink() {
  const account = useAccount();
  return account ? <a href={account.href}>{signInLabel(account)}</a> : null;
}
