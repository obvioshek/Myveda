// The glossary as files to take elsewhere: a CSV for spreadsheets and a
// tab-separated file Anki imports as flashcards (front, back, tags). Served
// as static files (/glossary.csv, /glossary-anki.txt).

import { GLOSSARY } from "./index";

const csvCell = (s: string) => (/[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);
// Anki reads tabs as field breaks, so none may appear inside a field.
const tsvCell = (s: string) => s.replace(/[\t\r\n]+/g, " ").trim();
const tag = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function glossaryCsv(): string {
  const rows = [["Term", "Meaning", "Unit", "Chapter"], ...GLOSSARY.map(t => [t.term, t.def, `Unit ${t.unitN}`, t.chapterTitle])];
  // A byte-order mark, so spreadsheet apps read the diacritics as UTF-8.
  return "﻿" + rows.map(r => r.map(csvCell).join(",")).join("\r\n") + "\r\n";
}

export function glossaryAnki(): string {
  const head = ["#separator:tab", "#html:false", "#columns:Front\tBack\tTags", "#tags column:3"];
  const rows = GLOSSARY.map(t => [tsvCell(t.term), tsvCell(t.def), `veda-verse unit-${t.unitN} ${tag(t.chapterTitle)}`].join("\t"));
  return [...head, ...rows].join("\n") + "\n";
}
