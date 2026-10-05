// Unit 1's guided lessons, one file per chapter, keyed by chapter slug. See
// content/learn/lesson-kit.ts for what a lesson is and the rules for writing one.

import businessEconomicsAndDemand from "./business-economics-and-demand";
import businessEthicsAndCsr from "./business-ethics-and-csr";
import communication from "./communication";
import corporateGovernance from "./corporate-governance";
import decisionMaking from "./decision-making";
import elasticityOfDemand from "./elasticity-of-demand";
import functionsOfManagement from "./functions-of-management";
import indifferenceCurves from "./indifference-curves";
import marketStructures from "./market-structures";
import nationalIncomeAndInflation from "./national-income-and-inflation";
import organisationStructure from "./organisation-structure";
import principlesOfManagement from "./principles-of-management";
import theoriesOfManagement from "./theories-of-management";
import utilityAnalysis from "./utility-analysis";
import type { Lesson } from "@/content/learn/lesson-kit";

const lessons: Record<string, Lesson[]> = {
  "principles-of-management": principlesOfManagement,
  "functions-of-management": functionsOfManagement,
  "theories-of-management": theoriesOfManagement,
  "communication": communication,
  "decision-making": decisionMaking,
  "organisation-structure": organisationStructure,
  "business-economics-and-demand": businessEconomicsAndDemand,
  "elasticity-of-demand": elasticityOfDemand,
  "utility-analysis": utilityAnalysis,
  "indifference-curves": indifferenceCurves,
  "market-structures": marketStructures,
  "national-income-and-inflation": nationalIncomeAndInflation,
  "business-ethics-and-csr": businessEthicsAndCsr,
  "corporate-governance": corporateGovernance,
};

export default lessons;
