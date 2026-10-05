import { ask, type Lesson } from "./types";

const lessons: Lesson[] = [
  {
    blockId: "the-ordinal-approach",
    name: "The ordinal approach",
    intro: "Utility is ranked, not measured.",
    before: {
      q: "Do we need to measure satisfaction in utils to explain a consumer's choice?",
      choices: [
        { label: "Yes", reveal: "Not in the ordinal approach: it drops utils and asks only whether a consumer prefers bundle A to bundle B." },
        { label: "No", reveal: "Right. The ordinal approach drops utils and asks only whether a consumer prefers one bundle to another." },
      ],
    },
    lead: "The ordinal approach ranks bundles instead of counting utils.",
    check: [
      ask("What does transitivity mean?", "If A is preferred to B and B to C, then A is preferred to C", ["A and B are always equal", "More is worse than less", "Prices never change"], "It is one of the ordinal approach's assumptions."),
      ask("Which two tools does the ordinal approach use?", "The indifference curve and the budget constraint", ["TU and MU", "Supply and cost", "Elasticity and income"], "Together they find the consumer's choice."),
      ask("What does non-satiation mean?", "More is preferred to less", ["Less is preferred", "Goods are indivisible", "Income is unlimited"], "Another of the assumptions."),
    ],
    lens: [
      { pairing: 0, adds: "A ranking, not a measurement: the good and the pleasant both present themselves, and the wise person examines them and chooses.", differs: "The Kaṭha Upaniṣad concerns the choice between the good and the pleasant. The chapter's ordinal choice is between bundles of two goods." },
    ],
    reflect: "Rank three things you could spend a free evening on. Could you say by how much one beats another?",
    summary: {
      points: [
        "The ordinal approach drops utils and asks whether a consumer prefers A to B.",
        "Assumptions: a rational consumer who prefers more to less, complete preferences, transitivity, divisible goods and non-satiation.",
        "Tools: the indifference curve and the budget constraint.",
      ],
      memory: "Cardinal asks how much. Ordinal asks which is preferred.",
    },
  },
  {
    blockId: "indifference-curve",
    name: "Indifference curve",
    intro: "All the bundles that give the same satisfaction.",
    before: {
      q: "Can two indifference curves cross?",
      choices: [
        { label: "Yes", reveal: "No. Each curve represents one distinct level of utility, so they never intersect." },
        { label: "No", reveal: "Right. Each curve represents one distinct level of utility, so they never intersect." },
      ],
    },
    lead: "An indifference curve joins every combination of two goods that gives the same satisfaction.",
    check: [
      ask("An indifference curve slopes…", "Downward", ["Upward", "Horizontally", "Vertically"], "More of X requires less of Y to keep satisfaction the same."),
      ask("A higher indifference curve means…", "Higher utility", ["Lower utility", "The same utility", "A cheaper bundle"], "Curves farther from the origin are preferred."),
      ask("The curve is convex to the origin because of…", "A diminishing marginal rate of substitution", ["Rising prices", "A fixed income", "The Giffen effect"], "That is what makes it convex."),
    ],
    lens: [
      { pairing: 2, adds: "Treating pleasure and pain, gain and loss, victory and defeat alike: steadiness of mind under outcomes.", differs: "The resemblance is in the word only. The text is about steadiness under outcomes, not about equal-satisfaction trade-offs." },
    ],
    reflect: "Name two different bundles of things that would leave you equally happy. What would you give up for each?",
    summary: {
      points: [
        "Downward sloping: more of X requires less of Y to keep satisfaction the same.",
        "Convex to the origin: it reflects a diminishing marginal rate of substitution.",
        "Never intersect: each curve is one level of utility.",
        "Higher curve, higher utility.",
      ],
      memory: "Downward, convex, never crossing, higher is better.",
    },
  },
  {
    blockId: "marginal-rate-of-substitution-mrs",
    name: "Marginal rate of substitution (MRS)",
    intro: "How much of one good you will give up for another.",
    before: {
      q: "As you have more of X and less of Y, do you give up Y more readily or less readily?",
      choices: [
        { label: "More readily", reveal: "Less readily. Your willingness to give up Y falls, so MRS diminishes and the curve becomes convex." },
        { label: "Less readily", reveal: "Yes. Willingness to give up Y falls, so MRS diminishes and the curve becomes convex." },
      ],
    },
    lead: "MRS is the rate at which a consumer will trade one good for another while staying equally satisfied.",
    check: [
      ask("MRS holds which thing constant?", "Satisfaction", ["Income", "Price", "Quantity of X"], "The consumer gives up one good for another at the same level of satisfaction."),
      ask("As the consumer has more X and less Y, MRS…", "Diminishes", ["Rises", "Stays constant", "Becomes infinite"], "Willingness to give up Y falls."),
      ask("A diminishing MRS makes the indifference curve…", "Convex to the origin", ["Concave", "A straight line", "Vertical"], "That is why the curve bows in toward the origin."),
    ],
    lens: [],
    reflect: "Think of a trade you would make easily at first and refuse later. What changed?",
    summary: {
      points: [
        "MRS is the rate at which a consumer gives up one good to gain one more unit of another, holding satisfaction constant.",
        "As the consumer has more of X and less of Y, willingness to give up Y falls.",
        "So MRS diminishes and the curve becomes convex.",
      ],
      memory: "A diminishing MRS gives the convex curve.",
    },
  },
  {
    blockId: "budget-line",
    name: "Budget line",
    intro: "Every bundle you can afford.",
    before: {
      q: "Can a consumer afford a bundle that lies outside the budget line?",
      choices: [
        { label: "Yes", reveal: "No. Bundles on or inside the line are affordable; those outside are not." },
        { label: "No", reveal: "Right. Bundles on or inside the line are affordable; those outside are not." },
      ],
    },
    lead: "The budget line shows every bundle of two goods the consumer can buy with a given income at given prices.",
    check: [
      ask("The slope of the budget line is…", "−Px/Py", ["Px × Py", "The income", "The MRS"], "It is the opportunity cost of one good in units of the other."),
      ask("Which conditions go with the budget line?", "Fixed income, constant prices, the whole income spent, and two goods", ["Rising income and falling prices", "Three goods", "Savings only"], "Those are the stated conditions."),
      ask("What does the slope show?", "The opportunity cost of one good in units of the other", ["Total utility", "Income", "Profit"], "Its size is the price ratio."),
    ],
    lens: [
      { pairing: 1, adds: "An allocation across competing goods under a constraint, with the constraint stated in moral terms.", differs: "Kauṭilya's advice is about pleasure, right conduct and wealth. The budget line is about money and two goods." },
    ],
    reflect: "What are the two things you most often trade off with the same money or time?",
    summary: {
      points: [
        "The budget line shows every bundle of two goods affordable at a given income and prices.",
        "Conditions: income fixed, prices constant, entire income spent, two goods.",
        "Its slope is −Px/Py, the opportunity cost of one good in units of the other.",
        "Bundles on or inside the line are affordable; those outside are not.",
      ],
      memory: "Slope: −Px/Py.",
    },
  },
  {
    blockId: "consumer-equilibrium",
    name: "Consumer equilibrium",
    intro: "The highest curve the budget can reach.",
    before: {
      q: "Where on the budget line does a consumer reach the highest satisfaction?",
      choices: [
        { label: "At the cheapest bundle", reveal: "No. The consumer reaches the highest affordable indifference curve, where it touches the budget line, and there MRS equals Px/Py." },
        { label: "Where a curve touches the line", reveal: "Yes. At the tangency the slope of the indifference curve equals the slope of the budget line, so MRS = Px/Py." },
      ],
    },
    lead: "Equilibrium is the highest affordable indifference curve, touching the budget line.",
    check: [
      ask("At consumer equilibrium…", "MRS = Px/Py", ["MRS = 0", "Px = Py", "MU = 0"], "The slope of the indifference curve equals the slope of the budget line."),
      ask("In the figure, why can IC₃ not be reached?", "It lies above the budget line", ["It lies below the line", "It crosses IC₁", "It is convex"], "IC₁ is affordable but not the best; E on IC₂ is the highest attainable."),
      ask("In the ordinal approach, equilibrium is where…", "MRS equals the price ratio (Px/Py)", ["MU per rupee is equalised", "TU equals MU", "Price equals marginal cost"], "MU per rupee equalised is the cardinal condition."),
    ],
    lens: [],
    reflect: "Think of a choice you made within a budget. Was your choice at the highest level you could reach?",
    summary: {
      points: [
        "The consumer reaches the highest affordable indifference curve where it touches the budget line.",
        "At the point of tangency MRS = Px/Py.",
        "Cardinal: utility measured in utils; equilibrium where MU per rupee is equalised.",
        "Ordinal: utility ranked; equilibrium where MRS = Px/Py.",
      ],
      memory: "Cardinal asks how much. Ordinal asks which is preferred.",
    },
  },
];

export default lessons;
