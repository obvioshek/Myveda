// Unit 4's guided lessons, one file per chapter, keyed by chapter slug. See
// content/learn/lesson-kit.ts for what a lesson is and the rules for writing one.

import accountingPrinciplesConceptsAndConventions from "./accounting-principles-concepts-and-conventions";
import budgetingAndBudgetaryControl from "./budgeting-and-budgetary-control";
import capitalStructureTheories from "./capital-structure-theories";
import cashFlowStatement from "./cash-flow-statement";
import costAccountingAndCostSheet from "./cost-accounting-and-cost-sheet";
import costOfCapital from "./cost-of-capital";
import financialManagement from "./financial-management";
import fundFlowStatement from "./fund-flow-statement";
import marginalCostingAndCvpAnalysis from "./marginal-costing-and-cvp-analysis";
import preparationOfFinancialStatements from "./preparation-of-financial-statements";
import ratioAnalysis from "./ratio-analysis";
import sourcesOfFinance from "./sources-of-finance";
import standardCostingAndVarianceAnalysis from "./standard-costing-and-variance-analysis";
import type { Lesson } from "@/content/learn/lesson-kit";

const lessons: Record<string, Lesson[]> = {
  "accounting-principles-concepts-and-conventions": accountingPrinciplesConceptsAndConventions,
  "preparation-of-financial-statements": preparationOfFinancialStatements,
  "ratio-analysis": ratioAnalysis,
  "fund-flow-statement": fundFlowStatement,
  "cash-flow-statement": cashFlowStatement,
  "cost-accounting-and-cost-sheet": costAccountingAndCostSheet,
  "marginal-costing-and-cvp-analysis": marginalCostingAndCvpAnalysis,
  "standard-costing-and-variance-analysis": standardCostingAndVarianceAnalysis,
  "budgeting-and-budgetary-control": budgetingAndBudgetaryControl,
  "financial-management": financialManagement,
  "sources-of-finance": sourcesOfFinance,
  "cost-of-capital": costOfCapital,
  "capital-structure-theories": capitalStructureTheories,
};

export default lessons;
