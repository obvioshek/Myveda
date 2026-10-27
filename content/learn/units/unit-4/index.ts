import type { ChapterSource, TermSource, UnitSource } from "@/content/learn/types";
import data from "./chapters.json";
import glossary from "./glossary.json";
import lessons from "./lessons";

// Unit 4: Managerial Accounting. The chapter text is in chapters.json, the glossary
// in glossary.json and the guided lessons in lessons/. The syllabus number is kept,
// so Units 3 and 5 are simply not written yet.
const unit: UnitSource = {
  id: "unit-4",
  n: 4,
  title: "Managerial Accounting",
  short: "Managerial Accounting",
  blurb: "From accounting rules and financial statements to ratios, cash flows, costing, budgets and financing decisions.",
  groups: [
    { key: "accounting", label: "Accounting foundations", blurb: "The rules every set of accounts follows, and how the final accounts are prepared." },
    { key: "statements", label: "Reading the statements", blurb: "Ratios, and the fund flow and cash flow statements that explain where money came from and went." },
    { key: "costing", label: "Costing and control", blurb: "What things cost, what a rupee of sales adds, and how plans and standards keep spending in check." },
    { key: "finance", label: "Financial management", blurb: "Choosing investments, raising money, what it costs, and the mix of debt and equity." },
  ],
  textsUsed: data.textsUsed,
  chapters: data.chapters as ChapterSource[],
  glossary: glossary as TermSource[],
  lessons,
};

export default unit;
