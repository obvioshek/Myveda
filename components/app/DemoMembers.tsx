"use client";

import { useState } from "react";
import { Avatar } from "@/components/app/bits";
import { demoSignIn } from "@/actions/app/profile";
import type { PersonRef } from "@/lib/app/types";

export default function DemoMembers({ people }: { people: (PersonRef & { line: string })[] }) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  return (
    <div className="people">
      {people.map(p => (
        <button
          key={p.id}
          type="button"
          disabled={!!busy}
          onClick={async () => {
            setBusy(p.id);
            const r = await demoSignIn(p.id);
            if (r && !r.ok) { setError(r.error); setBusy(null); }
          }}
        >
          <Avatar person={p} link={false} />
          <span style={{ flex: 1, minWidth: 0 }}>
            <b>{p.name}</b>
            <span className="sub">{busy === p.id ? "Signing in…" : p.line}</span>
          </span>
        </button>
      ))}
      {error && <p className="error" role="alert">{error}</p>}
    </div>
  );
}
