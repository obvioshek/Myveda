import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "core-idea-and-assumptions",
    name: "Core idea and assumptions",
    intro: "Satisfaction counted in utils, spent from a fixed budget.",
    before: {
      q: "Can satisfaction be measured in numbers?",
      choices: [
        { label: "Yes, in utils", reveal: "That is the cardinal approach's assumption: utility can be quantified in numbers called utils." },
        { label: "No", reveal: "The ordinal approach says so, but the cardinal approach assumes satisfaction can be measured in numbers called utils." },
      ],
    },
    lead: "The cardinal approach assumes satisfaction can be counted in utils.",
    check: [
      ask("The cardinal approach assumes the consumer is…", "Rational, with quantifiable utility, divisible goods and diminishing marginal utility", ["Irrational, with only ranked preferences", "Indifferent to income", "Spending everything on one good"], "Those are its four assumptions."),
      ask("What does the cardinal approach ignore?", "Ordinal ranking of bundles", ["Income", "Prices", "Utils"], "It counts satisfaction; it does not compare bundles."),
      ask("Goods are assumed to be…", "Divisible into small units", ["Indivisible", "Free", "Identical"], "Divisibility lets utility be counted unit by unit."),
    ],
    lens: [
      { pairing: 0, adds: "Pleasure and pain from the senses are named as impermanent: they come and go.", differs: "Cardinal theory assumes utility can be measured. The Gītā verse says sensations come and go, which is why measuring in utils is an assumption and not a fact." },
    ],
    reflect: "How would you put a number on how much you enjoy your favourite meal? What gets in the way?",
    summary: {
      points: [
        "A consumer with a fixed budget spreads income across goods to get the most total utility.",
        "Assumptions: a rational consumer, utility quantified in utils, divisible goods and diminishing marginal utility.",
        "It ignores ordinal ranking: it counts satisfaction, it does not compare bundles.",
      ],
      memory: "Rational, quantifiable, divisible, diminishing.",
    },
  },
  {
    blockId: "total-and-marginal-utility",
    name: "Total and marginal utility",
    intro: "The whole satisfaction and the last unit's addition.",
    before: {
      q: "Does total utility always rise when you consume more?",
      choices: [
        { label: "Yes", reveal: "Not always. Total utility rises while marginal utility is positive, is at its maximum when marginal utility is zero, and falls when it turns negative." },
        { label: "No", reveal: "Right. Total utility rises while marginal utility is positive, peaks when it is zero, and falls when it turns negative." },
      ],
    },
    lead: "Total utility is the whole. Marginal utility is what the last unit adds.",
    check: [
      ask("Total utility (TU) is…", "The overall satisfaction from all units consumed", ["The extra satisfaction from one more unit", "The satisfaction per rupee", "The price paid"], "Marginal utility is the extra satisfaction from one more unit."),
      ask("As consumption rises, marginal utility…", "Falls", ["Rises", "Stays constant", "Doubles"], "That is the law of diminishing marginal utility."),
      ask("Marginal utility (MU) is…", "The additional satisfaction from one more unit", ["The total satisfaction", "The price", "Income"], "TU is the whole; MU is the addition."),
    ],
    lens: [],
    reflect: "Think of a food you love. After how many helpings does the next one add very little?",
    summary: {
      points: [
        "Total utility (TU): the overall satisfaction from all units consumed.",
        "Marginal utility (MU): the additional satisfaction from one more unit.",
        "As consumption rises, MU falls.",
      ],
      memory: "TU is satisfaction in total. MU is satisfaction at the margin.",
    },
  },
  {
    blockId: "law-of-diminishing-marginal-utility",
    name: "Law of diminishing marginal utility",
    intro: "Each extra unit adds less.",
    before: {
      q: "When the next unit adds nothing (MU = 0), is total utility at its peak?",
      choices: [
        { label: "Yes", reveal: "Yes. In the table, TU is at its maximum, 28, when MU = 0 at the fifth unit." },
        { label: "No", reveal: "In the table TU is at its maximum, 28, when MU = 0 at the fifth unit, and it falls once MU turns negative." },
      ],
    },
    lead: "As a person consumes more of a good, the extra satisfaction from each additional unit decreases.",
    check: [
      ask("While MU is positive but falling, what does TU do?", "Rises at a diminishing rate", ["Falls", "Stays constant", "Is zero"], "TU rises while MU is positive."),
      ask("In the table, what is TU when MU is −2?", "26", ["28", "30", "−2"], "TU falls from 28 to 26 once MU turns negative."),
      ask("TU is at its maximum when…", "MU = 0", ["MU is at its highest", "MU is negative", "The price is zero"], "That is the fifth unit in the table."),
    ],
    lens: [
      { pairing: 1, adds: "Two halves of the consumer: appetite remains while the satisfaction per unit declines.", differs: "Manu and the Gītā make general points about desire and pleasure. The law of diminishing marginal utility is about the units of one good." },
    ],
    reflect: "When did you last keep consuming something past the point where it gave you much?",
    summary: {
      points: [
        "MU is continuously falling as units rise (12, 8, 5, 3, 0, −2 in the table).",
        "TU rises while MU is positive, and at a diminishing rate.",
        "TU is maximum when MU = 0, and falls when MU turns negative.",
      ],
      memory: "MU above 0: TU rises. MU = 0: TU peaks. MU below 0: TU falls.",
    },
  },
  {
    blockId: "law-of-equi-marginal-utility",
    name: "Law of equi-marginal utility",
    intro: "Spending a budget so the last rupee does equal work everywhere.",
    before: {
      q: "If the last rupee spent on tea gives more satisfaction than on coffee, where should the next rupee go?",
      choices: [
        { label: "Coffee", reveal: "To tea: shift spending toward the good with the higher marginal utility per rupee until the ratios level out." },
        { label: "Tea", reveal: "Yes. Shift spending toward the good with the higher marginal utility per rupee until the ratios level out." },
      ],
    },
    lead: "Total utility is highest when the marginal utility per rupee is equal across all goods.",
    check: [
      ask("The rule is…", "MU₁ ÷ P₁ = MU₂ ÷ P₂ = MU₃ ÷ P₃", ["TU = MU", "P₁ = P₂", "MU₁ = MU₂ only"], "Marginal utility per rupee, equal across goods."),
      ask("If MU per rupee is higher for good A, the consumer should…", "Shift spending to A until the ratios level out", ["Buy less of A", "Spend equally on every good", "Stop buying"], "That raises total utility."),
      ask("At consumer equilibrium in the cardinal approach…", "No further reallocation raises total utility", ["Utility is zero", "All prices are equal", "Income is zero"], "That is what equilibrium means here."),
    ],
    lens: [
      { pairing: 2, adds: "Balance across food, recreation, work and sleep: not too much and not too little of any.", differs: "The Gītā verse is advice about a way of life. The rule of marginal utility per rupee is about spending a budget." },
    ],
    reflect: "Where could you move some time or money from where it adds little to where it adds more?",
    summary: {
      points: [
        "MU₁ ÷ P₁ = MU₂ ÷ P₂ = MU₃ ÷ P₃.",
        "If MU per rupee is higher for one good, shift spending to it until the ratios level out.",
        "Consumer equilibrium: no further reallocation raises total utility.",
      ],
      memory: "Marginal utility per rupee, equal across goods.",
    },
  },
  {
    blockId: "consumer-surplus",
    name: "Consumer surplus",
    intro: "What you would pay minus what you pay.",
    before: {
      q: "You would pay ₹1,500 and the price is ₹1,200. What is your surplus?",
      choices: [
        { label: "₹300", reveal: "Yes: willingness to pay minus price paid is ₹300. If the price rose to ₹1,300, the surplus would fall to ₹200." },
        { label: "₹1,200", reveal: "No: the surplus is the gap, ₹1,500 − ₹1,200 = ₹300." },
      ],
    },
    lead: "Consumer surplus is the gap between what a buyer is willing to pay and what is paid.",
    check: [
      ask("Willingness to pay is ₹1,500 and the price rises to ₹1,300. The surplus is…", "₹200", ["₹300", "₹100", "₹1,300"], "₹1,500 − ₹1,300."),
      ask("Consumer surplus equals…", "Total utility in money − total expenditure", ["Price × quantity", "MU ÷ P", "TU − MU"], "That is the formula."),
      ask("Consumer surplus is the gap between…", "What a buyer is willing to pay and what is paid", ["Price and cost", "Income and tax", "TU and MU"], "It rises when the price falls."),
    ],
    lens: [
      { pairing: 3, adds: "Satisfaction located in what is received, not in the price.", differs: "Consumer surplus measures the value received above the price paid. The chapter offers contentment as a reading: both locate satisfaction in what is received." },
    ],
    reflect: "Think of something you bought that was worth far more to you than you paid. What was the surplus?",
    summary: {
      points: [
        "Consumer surplus = total utility in money − total expenditure.",
        "Example: willingness to pay ₹1,500, price paid ₹1,200, surplus ₹300.",
        "If the price rises to ₹1,300, the surplus falls to ₹200.",
      ],
      memory: "Willingness to pay minus price paid.",
    },
  },
];

export default lessons;
