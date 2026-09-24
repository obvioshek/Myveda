import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const css = readFileSync("app/styles/mvv.css");
const expected = readFileSync("app/styles/mvv.css.sha256", "utf8").split(/\s+/)[0];
const actual = createHash("sha256").update(css).digest("hex");
if (actual !== expected) {
  console.error("FIDELITY GATE FAILED: app/styles/mvv.css was modified.");
  console.error("The stylesheet is frozen. Revert your change and log the issue in docs/DESIGN-QUERIES.md.");
  process.exit(1);
}

// token presence check — every Five Registers + live variable must still be declared
const required = [
  "--turmeric:#F8C94F","--gerua:#E07A2F","--gerua-lit:#F09A55","--terra:#B44B2A",
  "--terra-lit:#D98A5F","--parchment:#F5E9D6","--indigo:#A3B0EE","--leaf:#A8C58C",
  "--leaf-ink:#344C2B","--umber:#2A1F19","--void:#161022","--warm:0","--breath:.5",
  "--ink:#F5E9D6","--ink-2:#E0D0BE","--ink-3:#C9B79B","--accent:var(--turmeric)",
  "--on-accent:#2A1F19","--ease:cubic-bezier(.22,1,.28,1)",
  "--spring:cubic-bezier(.34,1.4,.5,1)",
  '@property --breath'
];
const text = css.toString();
const missing = required.filter(t => !text.includes(t));
if (missing.length) { console.error("MISSING TOKENS:", missing); process.exit(1); }
console.log("Fidelity gate passed.");
