import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-a-decision-rests-on",
    name: "What a decision rests on",
    intro: "Choosing one course of action from two or more alternatives.",
    before: {
      q: "Does a good decision rest on analysis alone?",
      choices: [
        { label: "Yes", reveal: "Not alone. Decisions rest on three foundations: logic, analysis and intuition." },
        { label: "No", reveal: "Right. Decisions rest on three foundations: logic, analysis and intuition." },
      ],
    },
    lead: "A decision is the choice of one option from at least two; it rests on logic, analysis and intuition.",
    check: [
      ask("Which are the three foundations of a decision?", "Logic, analysis and intuition", ["Planning, organising and control", "Technical, human and conceptual", "Strategic, tactical and operational"], "Logic, analysis and intuition are what a decision rests on. Strategic, tactical and operational are levels of decision, not its foundations."),
      ask("Before stocking a new atta brand, a kirana owner checks how many customers asked for it last month and the margin per bag. Which foundation is she using?", "Analysis", ["Intuition", "Logic", "Commitment"], "Checking the facts and figures is analysis. Intuition would be her sense, from years at the counter, of whether her regulars will switch."),
      ask("A manager considers renewing a supplier contract and chooses to do nothing for now. Is that a decision?", "Yes: choosing not to act is a decision", ["No: nothing was chosen", "No: a decision must lead to an action", "Only if it is written down"], "A decision can be negative: not acting is one of the alternatives, and it is selected. \"Nothing was chosen\" misses that waiting has been chosen over renewing."),
    ],
    lens: [
      { pairing: 4, adds: "A named stage of concentrated insight that carries truth: disciplined intuition, not a hunch.", differs: "The Yoga Sūtras describe a stage of meditative practice. The chapter offers the link as a reading, not as what the text says about management." },
    ],
    reflect: "Think of a decision you made recently. How much of it was logic, how much analysis and how much intuition?",
    summary: {
      points: [
        "A decision is the choice of one course of action from two or more alternatives, to solve a problem or reach a goal.",
        "Drucker: whatever a manager does, he does through making decisions.",
        "It rests on logic, analysis and intuition; each has a weakness.",
        "It is selective, purposive and made at every level, and not acting can itself be a decision.",
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
    lead: "Programmed decisions follow a rule; non-programmed ones need judgement. Decisions are also sorted by level, purpose and who decides.",
    check: [
      ask("A routine, repetitive decision handled by rules, such as travel approval, is…", "Programmed", ["Non-programmed", "Strategic", "Major"], "A rule already exists for it, so it is programmed. Launching a new product is the non-programmed kind: novel and needing judgement."),
      ask("A bank's credit committee approves a large loan to a local factory. Classified by who decides, this is…", "A group, organisational decision", ["An individual, personal decision", "An individual, organisational decision", "A group, personal decision"], "A committee decides together, so it is a group decision, and it is an official decision of the bank, so it is organisational. Personal decisions are made outside an official role."),
      ask("A bank's standard home-loan approval follows set rules, yet each loan runs to lakhs of rupees. How is it best classified by programmability?", "Programmed, because a rule exists for it", ["Non-programmed, because the stakes are high", "Minor, because it happens often", "Strategic, because large sums are involved"], "Programmability is about whether a rule exists, not about the stakes. High stakes do not make a rule-based decision non-programmed."),
    ],
    lens: [],
    reflect: "Name one programmed and one non-programmed decision from your own week.",
    summary: {
      points: [
        "Programmability (Herbert Simon): programmed (routine, by rules) or non-programmed (novel, needing judgement).",
        "Level: strategic (long-term), tactical (turns strategy into action) or operational (day-to-day).",
        "Purpose: routine, major (high risk, high return) or minor (low risk).",
        "Decision maker: individual, group, personal or organisational. One decision carries several labels at once.",
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
    lead: "Nine steps, from defining the problem to monitoring the result; short form: identify, inform, alternatives, evaluate, select, implement, review.",
    check: [
      ask("Which step of the rational process comes first?", "Define the problem and its urgency", ["Develop alternatives", "Identify the criteria", "Gather information"], "Everything else depends on knowing what the problem is and how urgent it is. Gathering information comes second, once you know what to look for."),
      ask("A firm choosing a warehouse decides to judge sites on rent, distance to customers and labour available. These three are its…", "Criteria", ["Alternatives", "Results to monitor", "Implementation steps"], "Criteria are what you judge by. The alternatives are the sites themselves, the things you choose between."),
      ask("Weights: rent 0.40, distance 0.35, labour 0.25. A site scores 5 on rent, 9 on distance and 7 on labour. What is its weighted score?", "6.90", ["7.00", "6.45", "6.25"], "5 × 0.40 + 9 × 0.35 + 7 × 0.25 = 2.00 + 3.15 + 1.75 = 6.90. 7.00 is the plain average, which ignores the weights."),
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
        "Implement by assigning responsibility and resources; monitor results and correct where needed.",
        "A weighted score multiplies each criterion's score by its weight and adds them up.",
        "Herbert Simon: bounded rationality leads real managers to satisfice, taking the first option that is good enough.",
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
        { label: "Yes", reveal: "No. Each technique is best for something, such as SWOT for strategy and cost-benefit analysis for investment." },
        { label: "No", reveal: "Right. Each technique is best for something: SWOT for strategy, cost-benefit analysis for investment, the Delphi method for forecasting." },
      ],
    },
    lead: "Match the technique to the decision, and remember a tool is only as good as its inputs.",
    check: [
      ask("Which technique uses anonymous expert rounds until consensus forms?", "Delphi method", ["Multi-voting", "Conjoint analysis", "PEST analysis"], "In the Delphi method experts never meet and answer anonymously, so no one voice dominates. Multi-voting also works in rounds, but its rounds narrow a long list of options by votes, not expert forecasts."),
      ask("A plant manager wants to find the few causes behind most of the rejected parts. Which technique fits?", "Pareto analysis", ["Conjoint analysis", "Payback analysis", "PEST analysis"], "Pareto analysis finds the vital few causes behind most problems, for quality improvement. Conjoint analysis is about how customers trade off product features."),
      ask("Stocking 200 Diwali hampers earns ₹60,000 if demand is high (probability 0.6) and loses ₹20,000 if it is low (0.4). What is the expected value?", "₹28,000", ["₹40,000", "₹36,000", "₹44,000"], "0.6 × ₹60,000 + 0.4 × (−₹20,000) = ₹36,000 − ₹8,000 = ₹28,000. ₹36,000 forgets the possible loss."),
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
        "Expected value weights each payoff by its probability; payback ignores what comes after the cost is recovered.",
      ],
      memory: "Match the tool to the decision.",
    },
  },
];

export default lessons;
