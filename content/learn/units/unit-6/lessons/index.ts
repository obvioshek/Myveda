// Unit 6's guided lessons, one file per chapter, keyed by chapter slug. See
// content/learn/lesson-kit.ts for what a lesson is and the rules for writing one.

import cooperationInternationalisationAndRetrenchment from "./cooperation-internationalisation-and-retrenchment";
import externalAnalysis from "./external-analysis";
import growthStrategies from "./growth-strategies";
import internalAnalysis from "./internal-analysis";
import portfolioAnalysis from "./portfolio-analysis";
import strategicDecisionsAndLevelsOfStrategy from "./strategic-decisions-and-levels-of-strategy";
import strategicIntent from "./strategic-intent";
import strategyAndStrategicManagement from "./strategy-and-strategic-management";
import strategyImplementationAndEvaluation from "./strategy-implementation-and-evaluation";
import type { Lesson } from "@/content/learn/lesson-kit";

const lessons: Record<string, Lesson[]> = {
  "strategy-and-strategic-management": strategyAndStrategicManagement,
  "strategic-intent": strategicIntent,
  "strategic-decisions-and-levels-of-strategy": strategicDecisionsAndLevelsOfStrategy,
  "external-analysis": externalAnalysis,
  "internal-analysis": internalAnalysis,
  "portfolio-analysis": portfolioAnalysis,
  "growth-strategies": growthStrategies,
  "cooperation-internationalisation-and-retrenchment": cooperationInternationalisationAndRetrenchment,
  "strategy-implementation-and-evaluation": strategyImplementationAndEvaluation,
};

export default lessons;
