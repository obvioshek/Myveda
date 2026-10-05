// Unit 2's guided lessons, one file per chapter, keyed by chapter slug. See
// content/learn/lesson-kit.ts for what a lesson is and the rules for writing one.

import compensationManagement from "./compensation-management";
import emotionsAndStress from "./emotions-and-stress";
import groupBehaviourAndLeadership from "./group-behaviour-and-leadership";
import humanResourceManagement from "./human-resource-management";
import humanResourcePlanning from "./human-resource-planning";
import interpersonalBehaviour from "./interpersonal-behaviour";
import jobAnalysisEvaluationAndDesign from "./job-analysis-evaluation-and-design";
import organisationalBehaviour from "./organisational-behaviour";
import organisationalCultureAndClimate from "./organisational-culture-and-climate";
import organisationalJusticeAndWhistleblowing from "./organisational-justice-and-whistleblowing";
import personalityPerceptionAndAttitude from "./personality-perception-and-attitude";
import recruitmentAndSelection from "./recruitment-and-selection";
import strategicHrm from "./strategic-hrm";
import trainingAndDevelopment from "./training-and-development";
import valuesLearningAndMotivation from "./values-learning-and-motivation";
import workforceDiversity from "./workforce-diversity";
import type { Lesson } from "@/content/learn/lesson-kit";

const lessons: Record<string, Lesson[]> = {
  "organisational-behaviour": organisationalBehaviour,
  "personality-perception-and-attitude": personalityPerceptionAndAttitude,
  "values-learning-and-motivation": valuesLearningAndMotivation,
  "group-behaviour-and-leadership": groupBehaviourAndLeadership,
  "interpersonal-behaviour": interpersonalBehaviour,
  "organisational-culture-and-climate": organisationalCultureAndClimate,
  "workforce-diversity": workforceDiversity,
  "emotions-and-stress": emotionsAndStress,
  "organisational-justice-and-whistleblowing": organisationalJusticeAndWhistleblowing,
  "human-resource-management": humanResourceManagement,
  "human-resource-planning": humanResourcePlanning,
  "recruitment-and-selection": recruitmentAndSelection,
  "training-and-development": trainingAndDevelopment,
  "job-analysis-evaluation-and-design": jobAnalysisEvaluationAndDesign,
  "compensation-management": compensationManagement,
  "strategic-hrm": strategicHrm,
};

export default lessons;
