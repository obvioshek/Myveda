import type { ChapterSource, TermSource, UnitSource } from "@/content/learn/types";
import data from "./chapters.json";
import glossary from "./glossary.json";
import lessons from "./lessons";

// Unit 2: Organisational Behaviour and Human Resource Management. The chapter text
// is in chapters.json, the glossary in glossary.json and the guided lessons in
// lessons/.
const unit: UnitSource = {
  id: "unit-2",
  n: 2,
  title: "Organisational Behaviour and Human Resource Management",
  short: "Organisational Behaviour and HRM",
  blurb: "From personality and motivation to leadership, culture and justice, and on to planning, hiring, training, pay and strategic HR.",
  groups: [
    { key: "ob", label: "Organisational behaviour", blurb: "How people think, feel and act at work: alone, in groups and across cultures." },
    { key: "hrm", label: "Human resource management", blurb: "How organisations plan for, find, develop, reward and keep their people." },
  ],
  textsUsed: data.textsUsed,
  chapters: data.chapters as ChapterSource[],
  glossary: glossary as TermSource[],
  lessons,
};

export default unit;
