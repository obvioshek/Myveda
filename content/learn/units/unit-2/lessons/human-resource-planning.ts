import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-of-hrp",
    name: "Meaning of human resource planning",
    intro: "Right people, right place, right time: forecasting need against what you will have.",
    before: {
      q: "Is having too many staff a planning failure?",
      choices: [
        { label: "No, more is safer", reveal: "It is a failure too. HRP aims at balance between people available and people required; a surplus means paying wages for idle people." },
        { label: "Yes", reveal: "Right. HRP aims at balance: shortages and surpluses are both failures of planning." },
      ],
    },
    lead: "HRP forecasts the people the organisation will need and the people it will have, and plans to bring the two into balance in time.",
    check: [
      ask("The core objective of HRP is…", "Balance between the people available and the people required", ["Hiring as many people as the budget allows", "Cutting the wage bill a little every year", "Training every employee once a year"], "HRP aims at balance. Hiring as many as the budget allows creates a surplus, which HRP treats as a failure just as it does a shortage."),
      ask("A bank expects a new digital service to need fewer counter clerks next year, and few clerks are expected to leave. What does HRP call this, and what is a typical response?", "A surplus: freeze hiring, and retrain and redeploy clerks", ["A shortage: recruit more clerks before the service starts", "A balance: replace leavers and take no other action", "A shortage: give the present clerks paid overtime"], "Supply will be greater than demand, so it is a surplus. Recruiting or overtime would answer a shortage and would make the surplus bigger."),
      ask("The Pune plant needs 40 new operators trained by 1 April. Hiring takes about three months and training one month. When should it start recruiting?", "By early December", ["By early March", "By early February", "By early January"], "Work backwards: one month of training means hiring must be done by 1 March, and three months of hiring means starting by early December. Starting in January would leave the line short until May."),
    ],
    lens: [
      { pairing: 0, adds: "Three things to weigh together before acting: the doer, the work and the time.", differs: "The Kuṟaḷ advises a single decision. HRP applies the same questions to a whole workforce through forecasting." },
    ],
    reflect: "What staffing shortage or surplus have you seen, and could planning have prevented it?",
    summary: {
      points: [
        "HRP: forecasting and managing the demand for and supply of human resources.",
        "The right number and kind of people, at the right place, at the right time.",
        "Objective: balance. A shortage calls for recruiting, training or overtime; a surplus for a hiring freeze or redeployment.",
        "HRP comes before recruitment, selection and training, which follow from it.",
      ],
      memory: "Right people, right place, right time.",
    },
  },
  {
    blockId: "the-hrp-process",
    name: "The HRP process",
    intro: "Eight steps from strategy to review, and the arithmetic of the gap.",
    before: {
      q: "Where should HR planning start: with the number of vacancies, or with the business's goals?",
      choices: [
        { label: "Vacancies", reveal: "With the goals. Step 1 is analysing organisational objectives; counting vacancies only replaces the people who left." },
        { label: "Business goals", reveal: "Right. Step 1 is analysing organisational objectives: mission, strategy and future goals." },
      ],
    },
    lead: "Strategy, forecast demand and supply, find the gap, act, and review: net requirement = demand − supply.",
    check: [
      ask("Which step comes first in the HRP process?", "Analyse organisational objectives", ["Forecast HR demand", "Identify skill gaps", "Develop HR action plans"], "Everything else follows from the business's goals. Forecasting demand is step 2, because demand can only be estimated once the plan for the business is known."),
      ask("To close a gap of 34 operators, a plant decides to recruit 30 and retrain 4 people from packing. Which step is this?", "Develop HR action plans", ["Match demand and supply", "Analyse HR supply", "Monitor and control"], "Matching demand and supply (step 6) finds the gap of 34. Deciding how to close it, by recruiting and retraining, is the action plan (step 7)."),
      ask("A store chain has 50 sales staff and will need 60 next year. About 20% of staff leave each year, and 2 will be promoted to store manager. How many must it recruit or move in?", "22", ["10", "12", "20"], "Supply = 50 − 10 leavers − 2 promoted = 38. Need = 60 − 38 = 22. Answering 20 forgets the promotions; 12 forgets the leavers."),
    ],
    lens: [],
    reflect: "Which step of the HRP process do you think organisations most often skip?",
    summary: {
      points: [
        "Analyse objectives; forecast demand; analyse supply; identify skill gaps.",
        "Determine requirements; match demand and supply; develop action plans.",
        "Monitor and control, and update the plan as conditions change.",
        "Net requirement = forecast demand − forecast supply (present staff, less leavers and moves out, plus moves in).",
      ],
      memory: "Strategy, forecast, analyse, match, act, review.",
    },
  },
  {
    blockId: "methods-of-supply-analysis",
    name: "Methods of supply analysis",
    intro: "Six ways to see the people you have, and how to measure turnover.",
    before: {
      q: "Can past resignations help forecast future staffing?",
      choices: [
        { label: "No", reveal: "They can. Turnover analysis studies exit patterns to see what they mean for future staffing." },
        { label: "Yes", reveal: "Right. That is turnover analysis." },
      ],
    },
    lead: "Supply analysis looks at the skills, potential, movement and exits of the people already there, and at the outside labour market.",
    check: [
      ask("A record of each employee's qualifications, skills and experience is…", "A skills inventory", ["Job analysis", "Succession planning", "Scenario planning"], "A skills inventory describes people. Job analysis is tempting, but it describes jobs: the duties and competencies each job needs."),
      ask("A hospital lists, for each department head, two nurses who could step into the post within two years. This is…", "Succession planning", ["Turnover analysis", "A skills inventory", "Scenario planning"], "Naming potential successors for critical positions is succession planning. A skills inventory records what everyone can do, but does not name who will take which key post."),
      ask("A branch starts the year with 38 staff and ends with 42. Six people leave during the year. What is its labour turnover rate?", "15%", ["14.3%", "15.8%", "6%"], "Average staff = (38 + 42) ÷ 2 = 40, and 6 ÷ 40 × 100 = 15%. Dividing by the closing figure, 42, gives 14.3%, which is the wrong base."),
    ],
    lens: [],
    reflect: "If your manager left tomorrow, who would step in? What does that tell you about succession planning?",
    summary: {
      points: [
        "Skills inventory; succession planning; turnover analysis.",
        "Promotion and mobility analysis; job analysis; scenario planning.",
        "Turnover rate = separations ÷ average number of employees × 100.",
        "Supply also comes from the outside labour market.",
      ],
      memory: "Skills, succession, turnover, mobility, jobs, scenarios.",
    },
  },
];

export default lessons;
