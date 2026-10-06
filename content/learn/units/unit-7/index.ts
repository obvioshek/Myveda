import type { ChapterSource, TermSource, UnitSource } from "@/content/learn/types";
import data from "./chapters.json";
import glossary from "./glossary.json";
import lessons from "./lessons";

// Unit 7: Marketing Management. The chapter text is in chapters.json, the glossary
// in glossary.json and the guided lessons in lessons/.
const unit: UnitSource = {
  id: "unit-7",
  n: 7,
  title: "Marketing Management",
  short: "Marketing Management",
  blurb: "From the marketing concept and STP to the 4Ps, buyer behaviour, services, CRM, retail, international markets and new trends.",
  groups: [
    { key: "foundations", label: "Marketing foundations", blurb: "What marketing is, and how a firm chooses its customers and its place in their minds." },
    { key: "mix", label: "The marketing mix", blurb: "Product, brand, price, place and promotion." },
    { key: "buyers", label: "Buyers and relationships", blurb: "How consumers and organisations buy, and how services and relationships keep them." },
    { key: "markets", label: "Markets and trends", blurb: "Retail, international markets, and the newer kinds of marketing." },
  ],
  textsUsed: data.textsUsed,
  chapters: data.chapters as ChapterSource[],
  glossary: glossary as TermSource[],
  lessons,
};

export default unit;
