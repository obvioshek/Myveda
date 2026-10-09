import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "strategy-implementation",
    name: "Strategy implementation",
    intro: "Turning a formulated strategy into actions, tasks and programmes.",
    before: {
      q: "Once a good strategy is formulated, does success follow by itself?",
      choices: [
        { label: "Yes", reveal: "No. Implementation turns the strategy into concrete actions; when it fails, resources are wasted and the organisation drifts." },
        { label: "No", reveal: "Right. Implementation turns the strategy into concrete actions; when it fails, resources are wasted and the organisation drifts." },
      ],
    },
    lead: "Implementation turns a chosen strategy into daily work, through structure, resources, policies, people, culture and rewards.",
    check: [
      ask("Chandler's finding from the history of large American firms was that…", "Structure follows strategy", ["Strategy follows structure", "Culture follows pay", "Budgets follow sales"], "Firms changed strategy first, by moving into many product lines, and then adopted structures to fit. Strategy follows structure reverses his finding."),
      ask("A bus operator wants most tickets sold online, but depot managers still earn bonuses only on counter sales. What should it fix first?", "The reward system", ["The strategy itself", "The organisation's mission", "The choice of grand strategy"], "The strategy may be sound; people follow what they are paid for. Implementation includes setting up reward systems that fit the strategy."),
      ask("Compared with formulation, implementation is mainly…", "Operational, needing motivation, coordination and leadership", ["Intellectual, needing analysis and intuition", "Done before any action is taken", "Carried out by a few senior people"], "Formulation positions forces before action and needs analysis and intuition. Implementation manages forces during action, across many people."),
    ],
    lens: [
      { pairing: 0, adds: "Saying is easy for anyone; doing as one has said is hard.", differs: "The couplet is about a person's word and deed. Implementation adds the organisational work of structure, resources, policies, people, culture and reward systems." },
    ],
    reflect: "Think of a plan announced by an organisation you know that never quite happened. Where did implementation break down: structure, money, people or rewards?",
    summary: {
      points: [
        "Implementation turns strategy into actions, tasks and programmes.",
        "It involves structure, resources, policies, people, culture, leadership, and information and reward systems.",
        "Formulation is intellectual and before action; implementation is operational and during action.",
        "The two overlap: what is learned in implementing reshapes the strategy.",
      ],
      memory: "A strategy is only as good as its execution.",
    },
  },
  {
    blockId: "challenges-and-forms-of-implementation",
    name: "Challenges and forms of implementation",
    intro: "Where execution usually goes wrong, and the three forms it takes.",
    before: {
      q: "If a strategy fails, is the plan usually the only thing to blame?",
      choices: [
        { label: "Usually", reveal: "Often it is the execution: unclear goals, poor alignment, weak training, too few resources, poor communication, no follow-through or no measures." },
        { label: "Not usually", reveal: "Right. Many failures come from execution: goals, alignment, training, resources, communication, follow-through and measures." },
      ],
    },
    lead: "Execution fails in predictable ways, each with a remedy, and it runs through three forms: structural, behavioural and functional.",
    check: [
      ask("OKRs and SMART goals are remedies for…", "Poor goal-setting", ["Lack of resources", "Lack of follow-through", "Ineffective training"], "One goal-setting method across the organisation gives clarity on priorities. Follow-through is fixed by regular formal reviews, not by a goal method."),
      ask("A supermarket's store managers gain nothing when online orders rise, so they treat them as a chore. Which challenge is this?", "People not connected to the strategy", ["Weak strategy", "Lack of resources", "Lack of communication"], "The managers know the goal, so it is not communication. Their own interests are not linked to it; the remedy is to put online orders in their targets."),
      ask("Which is a leading indicator for the supermarket's online-orders goal?", "The weekly share of orders placed online", ["Last year's total sales", "Annual profit reported to shareholders", "The number of stores opened last year"], "A leading indicator moves before the result and warns early. Annual sales and profit show the problem only after a year is lost."),
    ],
    lens: [],
    reflect: "Think of a change your school, college or workplace announced that never quite happened. Which of the nine challenges explains it best?",
    summary: {
      points: [
        "Common challenges: weak strategy, poor goals, misalignment, poor training, lack of resources, poor communication, no follow-through, people not connected, no measures.",
        "‘You manage what you measure’: set measurable goals and leading indicators.",
        "Three forms: structural, behavioural (leadership) and functional and operational.",
      ],
      memory: "Clear goals, alignment, training, resources, communication, follow-through, measures.",
    },
  },
  {
    blockId: "approaches-to-implementation",
    name: "Five approaches to implementation",
    intro: "Five ways chief executives go about implementing strategy.",
    before: {
      q: "Are commander, collaborative and cultural best called challenges of implementation?",
      choices: [
        { label: "Challenges", reveal: "No. They are sometimes listed as four ‘challenges’, but Bourgeois and Brodwin described them as approaches, and there are five." },
        { label: "Approaches", reveal: "Right. Bourgeois and Brodwin (1984) described five approaches: commander, organisational change, collaborative, cultural and crescive." },
      ],
    },
    lead: "Bourgeois and Brodwin's five approaches run from the commander, who decides and instructs, to the crescive, where strategy grows from below.",
    check: [
      ask("In which approach does strategy ‘grow’ from ideas proposed by lower-level employees?", "Crescive", ["Commander", "Collaborative", "Organisational change"], "‘Crescive’ means growing; top management judges and supports ideas from below. In the collaborative approach, senior managers shape strategy together."),
      ask("A chief executive backs a cloud-security proposal from a team of engineers who have already won a small contract. She acts as the judge. Which approach is this?", "Crescive", ["Collaborative", "Commander", "Cultural"], "The idea came from lower-level staff and the top judged it, which is crescive. Collaborative would mean she and her senior managers designed the move together."),
      ask("A firm faces a sudden crisis and must act within weeks. Which approach fits best?", "Commander, because it is clear and quick", ["Crescive, because it encourages innovation", "Cultural, because it builds deep commitment", "Collaborative, because it brings better information"], "A crisis may need a commander. The cultural and collaborative approaches build commitment, but they take time the firm does not have."),
    ],
    lens: [
      { pairing: 1, adds: "Those who plan will gain what they planned, as they planned it, if they are firm of will.", differs: "The couplet speaks of an individual's resolve. The five approaches describe how a leader builds commitment in others, from instruction to empowerment." },
    ],
    reflect: "Think of a team you have been part of. Which of the five approaches did its leader use, and how committed were people?",
    summary: {
      points: [
        "Commander and organisational change: top management decides and drives it through.",
        "Collaborative: senior managers formulate together; cultural: employees empowered, managers coach.",
        "Crescive: strategy grows from lower-level ideas; top management judges.",
        "They are five approaches, not four challenges; real leaders mix them.",
      ],
      memory: "Commander, change, collaborative, cultural, crescive.",
    },
  },
  {
    blockId: "applying-the-7s-model",
    name: "Applying the McKinsey 7-S model",
    intro: "Using the seven S's to carry a strategy through.",
    before: {
      q: "Can a firm change its strategy without touching its structure or skills?",
      choices: [
        { label: "Yes", reveal: "Rarely. The seven elements are interdependent, so a change in one usually needs changes in the others." },
        { label: "Rarely", reveal: "Right. A change in one element affects the others, so they must be realigned together." },
      ],
    },
    lead: "Use the 7-S questions to find where the organisation no longer fits its strategy, then design, plan, make and keep reviewing the changes.",
    check: [
      ask("The first step in using the 7-S model is to…", "Identify the areas that are not aligned", ["Make the changes", "Hire outside consultants", "Review continuously"], "The steps are identify, design, plan, change, review. Making changes before finding the misfits risks fixing the wrong element."),
      ask("At an appliance maker, designers answer to three bosses and decisions stall. Which element is misaligned?", "Structure", ["Shared values", "Skills", "Style"], "Structure covers how the organisation is divided, the hierarchy and coordination. Style is how leaders behave, not who reports to whom."),
      ask("Compared with the hard elements, the soft elements are…", "Harder to manage but more likely to give sustained advantage", ["Easier to manage and less important", "Unimportant during a merger", "The same as systems"], "Hard elements are easier to see and change, so plans often stop at them. The soft elements are the foundation and decide whether people use the new structure or system."),
    ],
    lens: [],
    reflect: "Choose one element of the 7-S model in an organisation you know. If its strategy changed tomorrow, what would have to change in that element?",
    summary: {
      points: [
        "Uses: organisational change, implementing a new strategy, anticipating future change, aligning units in a merger.",
        "Each element has diagnostic questions; all seven deserve equal attention.",
        "Steps: identify misalignment, design the optimum, plan changes, make them, review continuously.",
        "The model shows what must fit, not how or in what order to change it.",
      ],
      memory: "Find the misfits, design the fit, plan, change, keep reviewing.",
    },
  },
  {
    blockId: "strategy-evaluation-and-control",
    name: "Strategy evaluation and control",
    intro: "Reviewing, measuring and correcting while the strategy runs.",
    before: {
      q: "Are financial results the only test of a strategy?",
      choices: [
        { label: "Only financial", reveal: "No. The balanced scorecard adds customer, internal business process and learning and growth perspectives to the financial one." },
        { label: "Not only", reveal: "Right. The balanced scorecard adds customer, internal business process and learning and growth perspectives to the financial one." },
      ],
    },
    lead: "Evaluation reviews the premises, measures performance and corrects the course; strategic control and the balanced scorecard keep watch while the strategy runs.",
    check: [
      ask("Checking whether the strategy's assumptions are still valid is…", "Premise control", ["Implementation control", "Strategic surveillance", "Special alert control"], "Premise control checks named assumptions. Strategic surveillance is a broad, unfocused watch for anything that may affect the strategy."),
      ask("A flood shuts a café chain's central kitchen without warning. Responding quickly to it is…", "Special alert control", ["Strategic surveillance", "Premise control", "Implementation control"], "Special alert control is the rapid response to a sudden, unexpected event. Surveillance is the ongoing broad watch, not the response to one shock."),
      ask("A café chain's profit per outlet is on target, but repeat visits have fallen for two quarters. What does the scorecard suggest?", "Act now, since repeat visits are a leading measure", ["Carry on, since profit is the measure that counts", "Ignore it, since customer measures lag profit", "Wait until annual profit falls, then act"], "Financial results lag; customer measures lead. Falling repeat visits warn that profit is likely to follow, so waiting for profit to fall loses time."),
    ],
    lens: [
      { pairing: 2, adds: "The physician examines the disease, then its cause, then the remedy, and acts accordingly.", differs: "The couplet is about medicine. Strategy evaluation applies the same order to reviewing premises, measuring performance and taking corrective action in an organisation." },
    ],
    reflect: "Pick an organisation you know. Which balanced scorecard perspective do you think it neglects, and what leading measure would you add?",
    summary: {
      points: [
        "Fred David: review the factors, measure performance, take corrective action.",
        "Strategic control: premise, implementation, surveillance, special alert.",
        "Balanced scorecard (Kaplan and Norton, 1992): financial, customer, internal process, learning and growth.",
        "Financial measures lag; the other three perspectives give early warning.",
      ],
      memory: "Review the premises, measure the results, correct the course.",
    },
  },
];

export default lessons;
