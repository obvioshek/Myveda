// A struck note from the page's sound engine (public/engine.js). Silent unless
// the visitor has turned sound on, and a no-op before the engine loads.
export function ping(i: number) {
  if (typeof window === "undefined") return;
  (window as unknown as { __mvvPing?: (i: number) => void }).__mvvPing?.(i);
}
