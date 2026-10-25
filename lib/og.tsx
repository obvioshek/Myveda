import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared pieces for the share images (chapter cards and passage cards): the
// site's colours, and Archivo at two weights as static TTFs (assets/og), made
// from the site's own font files (public/fonts) because the image renderer
// can't read WOFF2: each is the variable font fixed at one weight, with the
// Latin and Latin Extended subsets merged into one file.
// Images are drawn when the site is built.

export const OG = { BG: "#F3F2F2", SURFACE: "#EAE9E9", INK: "#201E1D", RED: "#EC3013", RED_FILL: "#CF2810", RED_D: "#AE1800", SOFT: "#5B5857" };
export const OG_SIZE = { width: 1200, height: 630 };

let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 800; style: "normal" }[]> | null = null;

export function ogFonts() {
  fonts ??= Promise.all(
    ([400, 800] as const).map(async weight => ({
      name: "Archivo",
      data: await readFile(join(process.cwd(), `assets/og/archivo-${weight}.ttf`)),
      weight,
      style: "normal" as const,
    })),
  );
  return fonts;
}

/** Plain text from a passage's HTML: the translation in quotes, without the original script. */
export function translationOf(quote: string): string {
  const m = quote.match(/“[^”]*”/);
  return (m ? m[0] : quote.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

export const clip = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

// The characters the two Archivo files cover (their unicode ranges in
// landing.css). Anything else would make the renderer fetch a font from the
// network, so it is swapped for a near equivalent or dropped.
const COVERED = /[\u0000-\u024F\u02BB-\u02C7\u02CE-\u02DD\u0304\u0308\u0329\u1D00-\u1DBF\u1E00-\u1EFF\u2000-\u206F\u20A0-\u20C0\u2113\u2122\u2191\u2193\u2212\u2215]/u;
const NEAR: Record<string, string> = { "→": "->", "←": "<-", "↔": "<->", "×": "x", "≈": "~", "≤": "<=", "≥": ">=" };
// Archivo has no ṛ, ḷ, ṇ or ṟ, and the image renderer can't place a combining
// dot, so those are written as their familiar spellings: Rigveda, Manusmriti,
// Tirukkural.
const PLAIN: Record<string, string> = { "ṛ": "ri", "Ṛ": "Ri", "ṝ": "ri", "ḷ": "l", "Ḷ": "L", "ṇ": "n", "Ṇ": "N", "ṟ": "r", "Ṟ": "R" };
export function ogText(s: string): string {
  return [...s].map(ch => PLAIN[ch] ?? (COVERED.test(ch) ? ch : NEAR[ch] ?? "")).join("").replace(/\s+/g, " ").trim();
}
