"use client";

import { useState } from "react";
import { useApp } from "@/components/app/AppProvider";
import { setOpenTo } from "@/actions/app/profile";
import { OPEN_TO } from "@/lib/app/labels";

export default function OpenTo({ value }: { value: string }) {
  const { run } = useApp();
  const [v, setV] = useState(value);
  return (
    <section>
      <div className="kicker" id="openToLab">Open to</div>
      <div className="stack" style={{ gap: 8 }} role="radiogroup" aria-labelledby="openToLab">
        {OPEN_TO.map(o => (
          <label className="radio" key={o}>
            <input type="radio" name="opento" checked={v === o} onChange={async () => {
              const prev = v; setV(o);
              const r = await run(setOpenTo(o));
              if (!r.ok) setV(prev);
            }} />
            <span className="dot" />{o}
          </label>
        ))}
      </div>
      <p className="muted" style={{ fontSize: 13 }}>Decides which questions are sent to you. Not shown on your profile.</p>
    </section>
  );
}
