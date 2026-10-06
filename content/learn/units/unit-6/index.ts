import type { ChapterSource, TermSource, UnitSource } from "@/content/learn/types";
import data from "./chapters.json";
import glossary from "./glossary.json";
import lessons from "./lessons";

// Unit 6: Strategic Management. The chapter text is in chapters.json, the glossary
// in glossary.json and the guided lessons in lessons/.
const unit: UnitSource = {
  id: "unit-6",
  n: 6,
  title: "Strategic Management",
  short: "Strategic Management",
  blurb: "From vision and mission to PESTEL, five forces, VRIO, the BCG and GE matrices, growth strategies and implementation.",
  groups: [
    { key: "foundations", label: "Concept and direction", blurb: "What strategy is, the purpose behind it, and the decisions and levels at which it is made." },
    { key: "analysis", label: "Strategic analysis", blurb: "Reading the environment, the firm's own resources, and its portfolio of businesses." },
    { key: "choice", label: "Choice and execution", blurb: "The strategies a firm can choose, and how it carries them out and checks them." },
  ],
  textsUsed: data.textsUsed,
  chapters: data.chapters as ChapterSource[],
  glossary: glossary as TermSource[],
  lessons,
};

export default unit;
