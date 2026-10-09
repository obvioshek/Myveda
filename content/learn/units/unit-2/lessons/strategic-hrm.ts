import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-of-shrm",
    name: "Meaning of strategic HRM",
    intro: "HR decisions made around what the business is trying to achieve.",
    before: {
      q: "Is HR's job mainly administration: payroll, records and leave?",
      choices: [
        { label: "Mainly", reveal: "Strategic HRM shifts the focus from routine administration to strategic people management, treating employees as long-term assets." },
        { label: "Much more", reveal: "Right. Strategic HRM makes HR proactive, shaping the organisation's growth and capability." },
      ],
    },
    lead: "SHRM aligns hiring, training, appraisal and development with the strategy, so that the workforce becomes an advantage rivals find hard to copy.",
    check: [
      ask("Wright and McMahan define strategic HRM as…", "The pattern of planned HR deployments and activities meant to help the organisation achieve its goals", ["The forecast of how many people of each kind the firm will need", "The routine administration of payroll, records and leave", "The study of why people behave as they do at work"], "SHRM is about planned HR activities serving the firm's goals. Forecasting numbers is HR planning, which is only one tool inside SHRM."),
      ask("A Pune auto-parts firm wins an export order that demands almost zero defects. Which HR change shows strategic HRM at work?", "Appraising operators on defects prevented, not only on parts made", ["Hiring the cheapest operators to protect the margin", "Keeping the old training, since it worked before", "Leaving HR to process the new joiners' paperwork"], "Aligning appraisal with the quality strategy is SHRM. Hiring the cheapest operators serves an old cost goal, not the new quality strategy."),
      ask("A firm aligns every HR practice tightly with a low-cost strategy. What risk does the chapter point to?", "If the strategy changes, the workforce may be hard to redirect", ["Alignment guarantees better results, so there is no risk", "HR will slide back into pure administration", "The firm will no longer need any HR planning"], "Tight fit to today's strategy can become rigidity tomorrow, so firms also need flexibility. Alignment does not guarantee results; the link between HR and performance is hard to prove."),
    ],
    lens: [],
    reflect: "Name one HR activity in an organisation you know that is clearly linked to its strategy, and one that is not.",
    summary: {
      points: [
        "SHRM: the pattern of planned HR deployments and activities that help the organisation achieve its goals (Wright and McMahan, 1992).",
        "Chain: HR activities → strategic alignment → workforce capability → competitive advantage.",
        "Employees are long-term strategic assets; HR is proactive; the focus moves from administration to strategy.",
        "HR planning, which forecasts numbers, is one tool inside SHRM.",
      ],
      memory: "HR activities, alignment, capability, advantage.",
    },
  },
  {
    blockId: "key-strategic-dimensions",
    name: "Key strategic dimensions",
    intro: "Five areas where HR shapes strategy.",
    before: {
      q: "Can a company's reputation as an employer reduce bad hires?",
      choices: [
        { label: "No", reveal: "It can. A strong employer brand brings better applicants and fewer mismatches." },
        { label: "Yes", reveal: "Right. A strong employer brand brings better applicants and fewer mismatches." },
      ],
    },
    lead: "Employer branding, the employee lifecycle, performance and learning, retention and engagement, and culture and change are where HR moves results.",
    check: [
      ask("Onboarding, development, engagement and retention together make up…", "Employee lifecycle management", ["Employer branding", "Culture and change management", "Performance and learning"], "Lifecycle management follows the employee from joining to staying, which lowers turnover. Employer branding works before people join, by attracting the right applicants."),
      ask("Exit interviews at a call centre show night transport is a top reason agents quit. Fixing it belongs to which dimension?", "Retention and engagement", ["Employer branding and talent acquisition", "Performance and learning", "Culture and change management"], "Analysing why people leave and removing the cause is retention. Employer branding is about attracting applicants, not keeping current staff."),
      ask("A firm has 500 staff, 40% leave each year, and replacing one costs ₹60,000. What does cutting attrition to 30% save each year?", "₹30 lakh", ["₹1.2 crore", "₹90 lakh", "₹6 lakh"], "Leavers fall from 200 to 150, and 50 × ₹60,000 = ₹30 lakh. ₹1.2 crore is the total cost at 40%, and ₹90 lakh is the total cost at 30%, not the saving."),
    ],
    lens: [],
    reflect: "Which of the five dimensions is your organisation weakest in?",
    summary: {
      points: [
        "Employer branding and talent acquisition: a strong brand brings better applicants and fewer mismatches.",
        "Employee lifecycle management: onboarding, development, engagement, retention.",
        "Performance and learning: growth, not fault-finding. Retention and engagement: recognition, fairness, and why people leave.",
        "Culture and change management: people-focused change meets less resistance.",
        "Retention is staying; engagement is the energy people bring while they stay.",
      ],
      memory: "Brand, lifecycle, performance, retention, culture.",
    },
  },
  {
    blockId: "components-and-objectives-of-shrm",
    name: "Components and objectives of SHRM",
    intro: "What SHRM is made of, what it aims at, and what fit means.",
    before: {
      q: "Is ‘high-commitment management’ about pay?",
      choices: [
        { label: "Yes", reveal: "It is about trust and employee dedication, one of SHRM's five objectives." },
        { label: "No", reveal: "Right. High-commitment management aims at trust and dedication." },
      ],
    },
    lead: "SHRM combines people capability, HR systems and strategic direction, and seeks HR practices that fit the strategy and each other.",
    check: [
      ask("Which SHRM objective treats specialised talent as a competitive advantage?", "Resource-based strategy", ["Strategic fit", "High-involvement management", "High-commitment management"], "The resource-based objective sees hard-to-copy talent as the advantage itself. Strategic fit is the tempting answer, but it is about aligning HR with the strategy, not about the talent as a resource."),
      ask("A firm trains its staff to work in teams but pays bonuses only for individual sales. Which kind of fit is missing?", "Horizontal fit: the practices work against each other", ["Vertical fit: HR does not serve the strategy", "Resource-based strategy: the talent is not rare", "No fit is missing, since each practice is sound"], "Training and pay pull in opposite directions, so the practices are inconsistent with one another. Vertical fit concerns HR and the strategy, which this case does not test."),
      ask("A budget highway-hotel chain competes on cost. Which set of HR practices fits its strategy best?", "Local staff who can do several jobs, with short standard training", ["Long guest-service training for every employee", "Higher pay with rewards tied to guest feedback", "Careful selection for service attitude, whatever it costs"], "A cost strategy needs lean, flexible staffing and standard procedures. The other options suit a premium chain competing on service: right for that strategy, wrong for this one."),
    ],
    lens: [],
    reflect: "Which of the five objectives would matter most in a start-up, and which in a large bank?",
    summary: {
      points: [
        "Components: human resources as core capital, HR policies and programmes, plans and patterns, unified direction.",
        "SHRM = people capability + HR systems + strategic direction.",
        "Vertical fit: HR serves the strategy. Horizontal fit: HR practices support each other.",
        "Objectives: strategic fit, resource-based strategy, high performance (measures), high involvement (ideas), high commitment (trust).",
      ],
      memory: "Fit, resource, performance, involvement, commitment.",
    },
  },
  {
    blockId: "implementing-shrm",
    name: "Implementing SHRM",
    intro: "Six steps, and strategic HR planning.",
    before: {
      q: "Is SHRM a one-time project?",
      choices: [
        { label: "Yes", reveal: "No. The last step is to evaluate and iterate: monitor outcomes and keep policies relevant." },
        { label: "No", reveal: "Right. The last step is to evaluate and iterate, continuously." },
      ],
    },
    lead: "Turn the plan into people decisions in a loop: vision, measures and data, readiness, talent forecast, HR systems, then evaluate and start again.",
    check: [
      ask("Which implementation step uses people analytics?", "Identify measures and data", ["Understand the business vision", "Assess HR systems", "Evaluate and iterate"], "Step 2 sets the measures and gathers the data. Assessing HR systems, step 5, is about making HR tools efficient and integrated, not about analysing people data."),
      ask("Six months after opening rural branches, a bank finds they are losing staff fastest, and revises its posting allowance. Which step is this?", "Evaluate and iterate", ["Forecast talent needs", "Assess HR readiness", "Understand the business vision"], "Monitoring outcomes and changing a policy in response is step 6. Forecasting talent needs comes earlier, before the branches open."),
      ask("A bank opens 20 branches that need 6 staff each, and 40 current staff can transfer. How many people must it hire or train?", "80", ["120", "40", "26"], "20 × 6 = 120 people needed, and 120 − 40 = 80 must come from hiring or training. 120 is the total need, not the gap."),
    ],
    lens: [
      { pairing: 0, adds: "Daily review of those who do the work, so that the whole does not swerve.", differs: "The Kuṟaḷ asks a ruler to watch his officers' conduct. SHRM reviews people practices against strategy using measures and data." },
    ],
    reflect: "What one measure would tell you whether your organisation's people strategy is working?",
    summary: {
      points: [
        "Implementation: vision, measures and data, HR readiness, talent forecast, HR systems, evaluate and iterate.",
        "The steps form a loop: evaluation feeds the next round.",
        "Strategic HR planning: SMART goals, capabilities, workforce skills, departmental needs, strategic recruitment.",
        "Data reduce bias only when the data are sound; reporting counts the past, analytics explains and predicts.",
      ],
      memory: "Right people, right capabilities, right strategy, right time.",
    },
  },
];

export default lessons;
