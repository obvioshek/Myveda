import type { ChapterSource, TermSource, UnitSource } from "@/content/learn/types";
import data from "./chapters.json";
import glossary from "./glossary.json";
import lessons from "./lessons";

// Unit 1: Business Management and Managerial Economics. The chapter text is in
// chapters.json, the glossary in glossary.json and the guided lessons in lessons/.
const unit: UnitSource = {
  id: "unit-1",
  n: 1,
  title: "Business Management and Managerial Economics",
  short: "Management and Managerial Economics",
  blurb: "From Fayol and Taylor to elasticity, market structures, national income and governance.",
  groups: [
    { key: "management", label: "Management", blurb: "What managers do, how they communicate and decide, and how work is organised." },
    { key: "economics", label: "Economics", blurb: "Why people buy, how markets set prices, and how an economy is measured." },
    { key: "ethics", label: "Ethics and governance", blurb: "What a business owes the people it serves, and who answers for it." },
  ],
  textsUsed: data.textsUsed,
  chapters: data.chapters as ChapterSource[],
  glossary: glossary as TermSource[],
  lessons,
};

export default unit;
