"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

// Every key the site answers to, in one list. "?" opens it from any page (as
// on most sites with shortcuts), so does the footer's "Keyboard shortcuts"
// where there is a keyboard, and so does search, by sending the reader to
// #keys. The keys themselves live where they work: / in SiteSearch, J and K
// in ReadingBar, the practice keys in Practice.
const GROUPS: { title: string; keys: [string[], string][] }[] = [
  { title: "Anywhere", keys: [[["/"], "Search the site"], [["?"], "This list"], [["Esc"], "Close a menu, panel, card or search"]] },
  { title: "Reading a chapter", keys: [[["J"], "Next concept"], [["K"], "Previous concept"]] },
  { title: "Practice questions", keys: [[["1", "4"], "Choose an answer"], [["G"], "Mark it a guess before answering"], [["Enter"], "Next question"]] },
  { title: "Term cards", keys: [[["Space"], "Turn the card"], [["1"], "Not yet"], [["2"], "Knew it"], [["Enter"], "Next card"]] },
  { title: "Mock test", keys: [[["←", "→"], "Previous or next question"], [["1", "4"], "Choose or change an answer"]] },
];

const HASH = "#keys";
const CLEARED = "vv-keys-closed";
function subscribe(on: () => void) {
  window.addEventListener("hashchange", on);
  window.addEventListener(CLEARED, on);
  return () => { window.removeEventListener("hashchange", on); window.removeEventListener(CLEARED, on); };
}

export default function Shortcuts() {
  const id = useId();
  const [asked, setAsked] = useState(false);
  const byHash = useSyncExternalStore(subscribe, () => location.hash === HASH, () => false);
  const open = asked || byHash;
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "?" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable)) return;
      e.preventDefault();
      setAsked(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [open]);

  const closed = () => {
    setAsked(false);
    if (location.hash === HASH) {
      history.replaceState(history.state, "", location.pathname + location.search);
      window.dispatchEvent(new Event(CLEARED));
    }
  };

  return (
    <>
      <button type="button" className="rp-btn sc-btn" aria-haspopup="dialog" aria-keyshortcuts="?" onClick={() => setAsked(true)}>Keyboard shortcuts</button>
      {open && createPortal(
        <dialog ref={dialog} className="rp sc" aria-labelledby={`${id}-h`} onClose={closed} onClick={e => { if (e.target === dialog.current) dialog.current?.close(); }}>
          <div className="rp-in">
            <div className="rp-head">
              <h2 id={`${id}-h`} className="h-xs">Keyboard shortcuts</h2>
              <button type="button" className="rp-x" aria-label="Close" title="Close (Esc)" onClick={() => dialog.current?.close()}>×</button>
            </div>
            <div className="sc-groups">
              {GROUPS.map(g => (
                <section key={g.title} className="sc-group" aria-label={g.title}>
                  <span className="label red">{g.title}</span>
                  <dl>
                    {g.keys.map(([k, what]) => (
                      <div key={what}>
                        <dt>{k.map((x, i) => <span key={x}>{i > 0 && (k.length === 2 && /\d/.test(x) ? " to " : " ")}<kbd>{x}</kbd></span>)}</dt>
                        <dd>{what}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}
