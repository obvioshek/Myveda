import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-a-decision-rests-on",
    name: "What a decision rests on",
    intro: "Selecting the best course of action from the available alternatives.",
    before: {
      q: "Does a good decision rest on analysis alone?",
      choices: [
        { label: "Yes", reveal: "The chapter names three foundations: logic, analysis and intuition." },
        { label: "No", reveal: "Right. Decisions rest on three foundations: logic, analysis and intuition." },
      ],
    },
    lead: "Decisions rest on three foundations: logic, analysis and intuition.",
    check: [
      ask("Which are the three foundations of a decision?", "Logic, analysis and intuition", ["Plan, organise and control", "Technical, human and conceptual", "Strategic, tactical and operational"], "Those are the foundations. The others are functions, skills and levels."),
      ask("Done well, decisions improve…", "Efficiency, effectiveness, adaptability, competitiveness and organisational performance", ["Taxation", "The span of control", "Wage rates"], "These are the benefits the chapter lists."),
    ],
    lens: [
      { pairing: 4, adds: "A named stage of concentrated insight that carries truth: disciplined intuition, not a hunch.", differs: "The Yoga Sūtras describe a stage of meditative practice. The chapter offers the link as a reading, not as what the text says about management." },
    ],
    reflect: "Think of a decision you made recently. How much of it was logic, how much analysis and how much intuition?",
    summary: {
      points: [
        "Decision making is selecting the best course of action from the available alternatives to reach a goal.",
        "It rests on logic, analysis and intuition.",
        "Done well it improves efficiency, effectiveness, adaptability, competitiveness and organisational performance.",
      ],
      memory: "Logic, analysis, intuition.",
    },
  },
  {
    blockId: "types-of-decision",
    name: "Types of decision",
    intro: "Four ways to sort decisions.",
    before: {
      q: "Is every decision a fresh, one-off judgement?",
      choices: [
        { label: "Yes", reveal: "No. Programmed decisions are routine and repetitive, handled by rules and procedures. Non-programmed ones are novel and complex." },
        { label: "No", reveal: "Right. Programmed decisions are routine and handled by rules and procedures; non-programmed ones are novel and need judgement and creativity." },
      ],
    },
    lead: "Decisions can be sorted by programmability, management level, purpose and decision maker.",
    check: [
      ask("A routine, repetitive decision handled by rules, such as travel approval, is…", "Programmed", ["Non-programmed", "Strategic", "Major"], "Launching a new product is the non-programmed example."),
      ask("Which level of decision turns strategy into action?", "Tactical", ["Strategic", "Operational", "Personal"], "Tactical decisions sit in the middle. Strategic ones are long-term; operational ones are day-to-day."),
      ask("A high-risk, high-return, long-term decision is…", "Major", ["Minor", "Routine", "Operational"], "Classified by purpose: routine, major or minor."),
    ],
    lens: [],
    reflect: "Name one programmed and one non-programmed decision from your own week.",
    summary: {
      points: [
        "Programmability: programmed (routine, by rules) or non-programmed (novel, needing judgement).",
        "Level: strategic (long-term), tactical (turns strategy into action) or operational (day-to-day).",
        "Purpose: routine, major (high risk, high return) or minor (low risk).",
        "Decision maker: individual, group, personal or organisational.",
      ],
      memory: "Programmed or not. Strategic, tactical or operational.",
    },
  },
  {
    blockId: "the-rational-decision-process",
    name: "The rational decision process",
    intro: "From defining the problem to reviewing the result.",
    before: {
      q: "Once you have chosen the best option, is the decision finished?",
      choices: [
        { label: "Yes", reveal: "Not yet. The process goes on: implement by assigning responsibility and resources, then monitor results and correct where needed." },
        { label: "No", reveal: "Right. After the choice you implement it, assigning responsibility and resources, then monitor results and correct where needed." },
      ],
    },
    lead: "Identify, inform, find alternatives, evaluate, select, implement, review.",
    check: [
      ask("Which step comes first?", "Define the problem and its urgency", ["Develop alternatives", "Choose the best balance", "Monitor results"], "Then gather information, identify and weight the criteria, and develop alternatives."),
      ask("Alternatives are evaluated against the criteria on…", "Feasibility, cost, risk and outcome", ["Age, rank, tenure and pay", "Span, scale, speed and size", "Price, quantity, income and taste"], "Then the best balance of benefit and risk is chosen."),
      ask("What is the short form of the process?", "Identify, inform, alternatives, evaluate, select, implement, review", ["Plan, organise, staff, direct, control", "Sender, message, channel, receiver", "Define, delegate, decentralise, direct"], "That is the chapter's short form."),
    ],
    lens: [
      { pairing: 0, adds: "Five parts to deliberation: the means of starting the work, men and material, the division of place and time, remedies against failure, and the accomplishment of the aim.", differs: "Kauṭilya's five limbs frame deliberation for a ruler. The chapter's process adds weighted criteria for comparing alternatives." },
      { pairing: 1, adds: "The decision stays with the one who decides, after advice and full reflection.", differs: "Kṛṣṇa hands the choice to Arjuna at the end of a teaching. The chapter's process is a method any manager can follow." },
      { pairing: 2, adds: "A checklist for action: the seat or base, the doer, the instruments, the effort, and circumstance beyond control.", differs: "The Gītā lists the factors behind any action. The chapter's implementation step is about assigning responsibility and resources." },
      { pairing: 3, adds: "The clear kind of judgement tells what should be done from what should not, what to fear from what not, and what binds from what frees.", differs: "The Gītā classifies the deciding faculty by its quality. It does not set out steps for reaching a decision." },
    ],
    reflect: "Take a decision you are facing now. Which step of the process have you skipped?",
    summary: {
      points: [
        "Define the problem and its urgency; gather information; identify and weight the criteria; develop alternatives.",
        "Evaluate alternatives on feasibility, cost, risk and outcome; choose the best balance of benefit and risk.",
        "Implement by assigning responsibility and resources.",
        "Monitor results and correct where needed.",
      ],
      memory: "Identify, inform, alternatives, evaluate, select, implement, review.",
    },
  },
  {
    blockId: "techniques-and-tools",
    name: "Techniques and tools",
    intro: "Twelve techniques, each suited to a kind of decision.",
    before: {
      q: "Is there one tool that suits every decision?",
      choices: [
        { label: "Yes", reveal: "No. The chapter pairs each technique with what it is best for, such as SWOT for strategy and cost-benefit analysis for investment." },
        { label: "No", reveal: "Right. Each technique is best for something: SWOT for strategy, cost-benefit analysis for investment, the Delphi method for forecasting." },
      ],
    },
    lead: "Match the technique to the decision.",
    check: [
      ask("Which technique maps alternatives to possible outcomes, for risk analysis?", "Decision tree", ["Delphi method", "Pareto analysis", "Payback analysis"], "A decision tree maps alternatives to possible outcomes."),
      ask("Which technique uses anonymous expert rounds until consensus forms?", "Delphi method", ["Multi-voting", "Conjoint analysis", "PEST analysis"], "The Delphi method, best for forecasting."),
      ask("What does Pareto analysis point to?", "The vital few causes behind most problems (the 80/20 principle)", ["The time taken to recover an investment", "Political, economic, social and technological factors", "How customers trade off product features"], "Pareto analysis is used for quality improvement."),
    ],
    lens: [
      { pairing: 5, adds: "An inventory of strengths and weaknesses, used before deciding whether to act.", differs: "The chapter offers this as a reading: Kauṭilya's seven elements are a state's inventory, while SWOT also names opportunities and threats." },
    ],
    reflect: "Which of these techniques could you use on a decision you face now?",
    summary: {
      points: [
        "Decision tree: risk analysis. Delphi method: forecasting. Decision matrix: selection. Cost-benefit analysis: investment.",
        "PEST analysis: market entry. SWOT analysis: strategy. Conjoint analysis: product and pricing.",
        "Pareto analysis: quality improvement. Multi-voting: project selection. Linear programming: production planning.",
        "Payback analysis: capital decisions. Feasibility study: new projects.",
      ],
      memory: "Match the tool to the decision.",
    },
  },
];

export default lessons;
