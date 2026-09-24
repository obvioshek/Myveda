import { useState } from "react";

// Local state that answers a click at once, and falls back in line when the
// server sends a new value (after a refresh). Uses React's "adjust state
// while rendering" pattern instead of an effect.
export function useServerState<T>(server: T) {
  const [state, setState] = useState(server);
  const [seen, setSeen] = useState(server);
  if (!Object.is(seen, server)) {
    setSeen(server);
    setState(server);
  }
  return [state, setState] as const;
}
