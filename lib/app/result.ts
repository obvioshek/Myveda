// Server actions return a result instead of throwing: in production Next.js
// replaces thrown messages with a generic one, and the member deserves to
// know why something was refused.
export type Result<T = object> = ({ ok: true } & T) | { ok: false; error: string };

export class Refusal extends Error {}

export async function attempt<T extends object>(fn: () => Promise<T | void>): Promise<Result<T>> {
  try {
    const value = await fn();
    return { ok: true, ...(value || {}) } as Result<T>;
  } catch (err) {
    if (err instanceof Refusal || (err instanceof Error && err.message === "Sign in to do that.")) {
      return { ok: false, error: err.message };
    }
    console.error("[action]", err);
    return { ok: false, error: "That did not go through. Try again in a moment." };
  }
}

export function refuse(message: string): never {
  throw new Refusal(message);
}
