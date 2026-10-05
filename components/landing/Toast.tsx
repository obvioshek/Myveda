"use client";

import { useEffect, useRef, useState } from "react";
import { onToast } from "./device";

// A short confirmation at the foot of the page. It is a polite status region,
// so a screen reader announces it without stealing focus.
export default function Toast() {
  const [text, setText] = useState("");
  const [on, setOn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const off = onToast(message => {
      clearTimeout(timer.current);
      setText(message);
      setOn(true);
      timer.current = setTimeout(() => setOn(false), 2400);
    });
    return () => { off(); clearTimeout(timer.current); };
  }, []);

  return (
    <div className={on ? "toast on" : "toast"} role="status" aria-live="polite">
      {on && (
        <>
          <span className="toast-tick" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          {text}
        </>
      )}
    </div>
  );
}
