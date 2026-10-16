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
    blockId: "objectives-features-of-hrp",
    name: "Objectives and features of HRP",
    intro: "What a plan aims at, its five features, and why it counts skills as well as heads.",
    before: {
      q: "A firm has 96 posts and 96 employees. Is the plan certainly in balance?",
      choices: [
        { label: "Yes, the numbers match", reveal: "Not certainly. HRP describes people as well as counting them: if the 96 lack the skills the posts need, the plan has failed." },
        { label: "Not necessarily", reveal: "Right. Human resources mean skills, knowledge and commitment as well as numbers, so a matching headcount is not enough." },
      ],
    },
    lead: "HRP aims at balance between people available and required, shows five features, and plans for skills and well-being as well as numbers.",
    check: [
      ask("Which statement best fits the textbook view of \"human resources\" in HRP?", "Skill, knowledge, values, ability, commitment and motivation, as well as the number of employees", ["Only the number of employees on the payroll", "Only the managers who will be promoted", "Only the wages paid in a year"], "HRP plans for the quality of people as well as their number. The headcount-only answer is the common mistake, and it is why a plan can match on paper and still fail."),
      ask("A bank will open 12 branches in two years and starts campus hiring a year before the first opening, because enough trained people will not be available later. Which feature of HRP is this?", "Adjusting demand and supply", ["Keeping a manpower inventory", "Creating a proper work environment", "Well-defined objectives"], "Starting recruitment well ahead because supply will fall short is adjusting demand and supply. An inventory would record present staff, which is a different feature."),
      ask("A firm lists which assistant managers could run a branch within a year. A colleague says this is the most important part of the plan. What is the best reply?", "It is one feature, the manpower inventory; the plan also needs objectives, needs, adjustment and work environment", ["It is the whole plan, because HRP is only a record of staff", "It is not part of HRP, because inventories belong to recruitment", "It replaces the forecast of needs, so the forecast can be dropped"], "The list is the manpower inventory, one of five features. Treating it as the whole plan ignores that needs must still be forecast and balanced with supply."),
    ],
    lens: [],
    reflect: "Think of a team you know that had the right number of people but the wrong skills. What would a fuller plan have asked?",
    summary: {
      points: [
        "Main objective: balance between the people available and the people required.",
        "Human resources include skill, knowledge, values, commitment and motivation, not only headcount.",
        "Five features: defined objectives, determining needs, an inventory, adjusting demand and supply, a proper work environment.",
        "Planning controls cost, gives recruitment and training a target, and shows skill gaps early.",
      ],
      memory: "Goals, needs, inventory, adjust, environment.",
    },
  },
  {
    blockId: "the-hrp-process",
    name: "The HRP process",
    intro: "Seven steps from strategy to review, and the arithmetic of the gap.",
    before: {
      q: "Where should HR planning start: with the number of vacancies, or with the business's goals?",
      choices: [
        { label: "Vacancies", reveal: "With the goals. Step 1 is analysing organisational objectives; counting vacancies only replaces the people who left." },
        { label: "Business goals", reveal: "Right. Step 1 is analysing organisational objectives: mission, strategy and future goals." },
      ],
    },
    lead: "Strategy, forecast demand and supply, find the gap, act, and review: net requirement = demand − supply.",
    check: [
      ask("Which step comes first in the HRP process?", "Analyse organisational objectives", ["Forecast HR demand", "Analyse skill gaps", "Develop HR action plans"], "Everything else follows from the business's goals. Forecasting demand is step 2, because demand can only be estimated once the plan for the business is known."),
      ask("To close a gap of 34 operators, a plant decides to recruit 30 and retrain 4 people from packing. Which step is this?", "Develop HR action plans", ["Match demand and supply", "Analyse HR supply", "Monitor and control"], "Matching demand and supply (step 4) finds the gap of 34. Deciding how to close it, by recruiting and retraining, is the action plan (step 6)."),
      ask("A store chain has 50 sales staff and will need 60 next year. About 20% of staff leave each year, and 2 will be promoted to store manager. How many must it recruit or move in?", "22", ["10", "12", "20"], "Supply = 50 − 10 leavers − 2 promoted = 38. Need = 60 − 38 = 22. Answering 20 forgets the promotions; 12 forgets the leavers."),
    ],
    lens: [],
    reflect: "Which step of the HRP process do you think organisations most often skip?",
    summary: {
      points: [
        "Analyse objectives; forecast demand (number and type, by department); analyse supply.",
        "Match demand and supply; analyse skill gaps; develop action plans.",
        "Monitor and control, and update the plan as conditions change.",
        "Net requirement = forecast demand − forecast supply (present staff, less leavers and moves out, plus moves in).",
      ],
      memory: "Strategy, forecast, analyse, match, act, review.",
    },
  },
  {
    blockId: "methods-of-supply-analysis",
    name: "Methods of supply analysis",
    intro: "Four ways to see the people you have, and how to measure turnover.",
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
        "Promotion and mobility analysis, which shows internal movement; Markov analysis and replacement charts refine it.",
        "Turnover rate = separations ÷ average number of employees × 100.",
        "Supply also comes from the outside labour market.",
      ],
      memory: "Skills, succession, turnover, mobility.",
    },
  },
  {
    blockId: "factors-and-barriers-in-hrp",
    name: "Factors and barriers in HRP",
    intro: "What shapes a plan, how far ahead it looks, and what stops it from working.",
    before: {
      q: "Is a union's distrust of a staffing plan a condition the planner must accept, or a problem to solve?",
      choices: [
        { label: "A condition to accept", reveal: "It is a barrier, and it can be reduced by explaining the purpose early and involving the union." },
        { label: "A problem to solve", reveal: "Right. It is a barrier, a failure in how the plan is carried out, not a fixed factor like the labour market." },
      ],
    },
    lead: "Factors such as strategy, uncertainty and time horizon shape a plan; barriers such as stale records and resistance can be fixed.",
    check: [
      ask("Which is a barrier to effective HRP rather than a factor affecting it?", "Out-of-date records of staff skills and turnover", ["The stage of growth of the organisation", "The strategy the organisation follows", "The length of the planning period"], "Poor records are a failure in how planning is done, and can be fixed. Stage of growth, strategy and time horizon are conditions that shape the plan."),
      ask("Staff at a firm fear that the new staffing plan is a cover for job cuts, and they resist giving information. What is the best remedy?", "Explain the purpose early, involve employees and unions, and prefer voluntary methods", ["Hide the plan until it is complete", "Cut the planning period to one month", "Replace the forecast with the manager's guess"], "Resistance comes from fear, so openness and involvement address it. Hiding the plan feeds the fear."),
      ask("A manager fills each vacancy as it arises and never looks at where the business is heading. Which barrier is this, and what should HR do?", "Short-term pressure; report staffing gaps against the long-term plan", ["Inaccurate forecasts; add a third scenario", "Weak top-management support; cut the budget", "Treating people as numbers; hire by headcount only"], "Filling only today's vacancy is short-term pressure. Reporting gaps against the long-term plan makes tomorrow's need visible. Hiring by headcount only is the opposite of the remedy."),
    ],
    lens: [],
    reflect: "Which barrier is most likely to damage a staffing plan in a workplace you know?",
    summary: {
      points: [
        "Factors: type and strategy, stage of growth, environmental uncertainty, time horizon, information, nature of jobs, outsourcing.",
        "Plans are commonly short-term (about a year), medium-term and long-term (several years); limits vary.",
        "Barriers: inaccurate forecasts, poor records, resistance, weak support, treating people as numbers, short-term pressure.",
        "A factor is a condition to account for; a barrier is a failure in planning that can be fixed.",
      ],
      memory: "Factors shape the plan; barriers block it; review often.",
    },
  },
];

export default lessons;
