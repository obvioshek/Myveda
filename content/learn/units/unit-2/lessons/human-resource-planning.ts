import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-of-hrp",
    name: "Meaning of human resource planning",
    intro: "Right people, right place, right time.",
    before: {
      q: "Is having too many staff a planning failure?",
      choices: [
        { label: "No, more is safer", reveal: "It is. HRP aims at balance between people available and people required; surpluses cost as much as shortages." },
        { label: "Yes", reveal: "Right. HRP aims at balance: shortages and surpluses are both failures of planning." },
      ],
    },
    lead: "HRP forecasts and manages demand for and supply of people.",
    check: [
      ask("The core objective of HRP is…", "Balance between HR available and organisational requirements", ["Hiring as many people as possible", "Cutting costs only", "Training everyone"], "Right people, right place, right time."),
      ask("HRP manages…", "Both the demand for and the supply of human resources", ["Only demand", "Only supply", "Only pay"], "Forecasting both is the heart of it."),
    ],
    lens: [
      { pairing: 0, adds: "Three things to weigh together before acting: the doer, the work and the time.", differs: "The Kuṟaḷ advises a single decision. HRP applies the same questions to a whole workforce through forecasting." },
    ],
    reflect: "What staffing shortage or surplus have you seen, and could planning have prevented it?",
    summary: {
      points: [
        "HRP: forecasting and managing the demand for and supply of human resources.",
        "Right people, right place, right time.",
        "Objective: balance between availability and requirements.",
      ],
      memory: "Right people, right place, right time.",
    },
  },
  {
    blockId: "the-hrp-process",
    name: "The HRP process",
    intro: "Eight steps from strategy to review.",
    before: {
      q: "Where should HR planning start: with the number of vacancies, or with the business's goals?",
      choices: [
        { label: "Vacancies", reveal: "With the goals. Step 1 is analysing organisational objectives; vacancies follow from them." },
        { label: "Business goals", reveal: "Right. Step 1 is analysing organisational objectives: mission, strategy and future goals." },
      ],
    },
    lead: "Strategy, forecast, analyse, match, act, review.",
    check: [
      ask("Comparing existing skills with required skills is which step?", "Identify skill gaps", ["Forecast HR demand", "Match demand and supply", "Monitor and control"], "Step 4."),
      ask("Recruitment, training, redeployment and retention are part of…", "HR action plans", ["Supply analysis", "Demand forecasting", "Objective analysis"], "Step 7."),
    ],
    lens: [],
    reflect: "Which step of the HRP process do you think organisations most often skip?",
    summary: {
      points: [
        "Analyse objectives; forecast demand; analyse supply; identify skill gaps.",
        "Determine requirements; match demand and supply; develop action plans.",
        "Monitor and control, and update the plan as conditions change.",
      ],
      memory: "Strategy, forecast, analyse, match, act, review.",
    },
  },
  {
    blockId: "methods-of-supply-analysis",
    name: "Methods of supply analysis",
    intro: "Six ways to see the people you have.",
    before: {
      q: "Can past resignations help forecast future staffing?",
      choices: [
        { label: "No", reveal: "They can. Turnover analysis studies exit patterns to see what they mean for future staffing." },
        { label: "Yes", reveal: "Right. That is turnover analysis." },
      ],
    },
    lead: "Supply analysis looks at the skills, potential and movement of the people already there.",
    check: [
      ask("A record of employees' qualifications, skills and experience is…", "A skills inventory", ["Succession planning", "Scenario planning", "Job analysis"], "It shows what talent is available inside."),
      ask("Identifying potential future leaders for critical posts is…", "Succession planning", ["Turnover analysis", "Mobility analysis", "Skills inventory"], "It prepares for leadership continuity."),
    ],
    lens: [],
    reflect: "If your manager left tomorrow, who would step in? What does that tell you about succession planning?",
    summary: {
      points: [
        "Skills inventory; succession planning; turnover analysis.",
        "Promotion and mobility analysis; job analysis; scenario planning.",
      ],
      memory: "Skills, succession, turnover, mobility, jobs, scenarios.",
    },
  },
];

export default lessons;
