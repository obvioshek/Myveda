import type { ComponentType } from "react";
import BreakEven from "./BreakEven";
import CapitalBudgeting from "./CapitalBudgeting";
import Elasticity from "./Elasticity";
import Eoq from "./Eoq";
import Wacc from "./Wacc";

// Calculators, keyed "<chapter slug>#<block id>": each appears in that concept
// as a "Try it" step after the core idea, starting from the chapter's own
// worked example and using the formulas the chapter gives. Only the pages that
// show one load its code.
export const TOOLS: Record<string, ComponentType> = {
  "elasticity-of-demand#methods-of-measuring-price-elasticity": Elasticity,
  "marginal-costing-and-cvp-analysis#break-even-and-cvp-analysis": BreakEven,
  "cost-of-capital#weighted-average-cost-of-capital": Wacc,
  "financial-management#capital-budgeting-and-dividend-policy": CapitalBudgeting,
  "distribution-logistics-and-supply-chain#logistics-decisions": Eoq,
};
