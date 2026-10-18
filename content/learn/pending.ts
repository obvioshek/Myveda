// Units keep their syllabus numbers, so some numbers may not be on the site yet.
// This words that for the places that say so ("Units 3 and 5 are being written");
// it is null when every number up to the highest is present. Kept free of the
// content itself so client components can use it.
export function pendingUnitsLabel(present: number[]): string | null {
  const have = new Set(present);
  const missing = Array.from({ length: Math.max(0, ...have) }, (_, i) => i + 1).filter(n => !have.has(n));
  if (!missing.length) return null;
  const list = missing.length === 1 ? String(missing[0]) : `${missing.slice(0, -1).join(", ")} and ${missing[missing.length - 1]}`;
  return `Unit${missing.length > 1 ? "s" : ""} ${list} ${missing.length > 1 ? "are" : "is"} being written`;
}
