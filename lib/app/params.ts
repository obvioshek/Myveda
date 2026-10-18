// Route segments and query strings come straight from the address bar, so read
// them defensively: a repeated parameter (?tab=a&tab=b) arrives as an array,
// a malformed escape (%E0%A4) makes decodeURIComponent throw, and a key such
// as "toString" or "__proto__" is "in" every object.

export type Param = string | string[] | undefined;

// The first value of a query parameter.
export function one(v: Param): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

// A decoded route segment, or null when it isn't valid percent-encoding.
export function decoded(segment: string): string | null {
  try {
    return decodeURIComponent(segment);
  } catch {
    return null;
  }
}

// The value a lookup table holds for a key it really has (not one it inherits).
export function pick<T extends Record<string, unknown>>(table: T, key: string | undefined): T[keyof T] | undefined {
  return key !== undefined && Object.hasOwn(table, key) ? table[key as keyof T] : undefined;
}
