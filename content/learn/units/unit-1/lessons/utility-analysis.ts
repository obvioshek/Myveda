import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "core-idea-and-assumptions",
    name: "Core idea and assumptions",
    intro: "Satisfaction counted in utils, spent from a fixed budget.",
    before: {
      q: "Can satisfaction be measured in numbers?",
      choices: [
        { label: "Yes, in utils", reveal: "That is the cardinal approach's assumption: utility can be quantified in numbers called utils, or in the money a person would pay." },
        { label: "No", reveal: "The ordinal approach says so, but the cardinal approach assumes satisfaction can be measured in numbers called utils." },
      ],
    },
    lead: "The cardinal approach treats satisfaction as countable in utils, and assumes a consumer spends a fixed income to get the most of it.",
    check: [
      ask("Which assumption of the cardinal approach does the ordinal approach drop?", "Utility can be measured in numbers (utils)", ["The consumer is rational and seeks the most", "Goods can be bought in small units", "Income and prices are given"], "The ordinal approach only ranks bundles, so it drops cardinal measurement. It keeps a rational consumer, the tempting answer: both approaches assume one."),
      ask("Near the end of the month a student's money runs low, and each remaining rupee matters more to her. Which cardinal assumption does this challenge?", "Constant marginal utility of money", ["Diminishing marginal utility of goods", "Divisibility of goods", "Independence of utilities"], "The cardinal approach assumes each rupee is worth the same to her, so money can measure utility. Diminishing marginal utility is about units of a good, not about money."),
      ask("Tea and sugar are usually consumed together. Which cardinal assumption does this weaken?", "Independent utilities, so utilities can be added", ["Rational consumer, so choices are consistent", "Divisible goods, so units can be small", "Cardinal measurement, so utils exist"], "If tea's utility depends on having sugar, utilities cannot simply be added. Cardinal measurement is a separate problem: whether utils exist at all."),
    ],
    lens: [
      { pairing: 0, adds: "Pleasure and pain from the senses are named as impermanent: they come and go.", differs: "Cardinal theory assumes utility can be measured. The Gītā verse says sensations come and go, which is why measuring in utils is an assumption and not a fact." },
    ],
    reflect: "How would you put a number on how much you enjoy your favourite meal? What gets in the way?",
    summary: {
      points: [
        "The cardinal approach measures utility in utils (or in money) and assumes the consumer seeks the most total utility from a given income.",
        "Assumptions: rational consumer, cardinal measurement, divisible goods, diminishing marginal utility, constant marginal utility of money, independent utilities.",
        "Utility is want-satisfying power, not usefulness: a cigarette has utility for a smoker.",
        "The ordinal approach (Hicks and Allen, 1934) drops measurement and only ranks bundles.",
      ],
      memory: "Cardinal counts satisfaction; ordinal only ranks it.",
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
    lead: "Total utility is all the satisfaction so far; marginal utility is what the last unit added, and it is what explains price.",
    check: [
      ask("Marginal utility (MU) is…", "The change in total utility from one more unit", ["The total satisfaction from all units", "The satisfaction per rupee spent", "The average satisfaction per unit"], "MUₙ = TUₙ − TUₙ₋₁. The satisfaction from all units is TU, the usual mix-up. Satisfaction per rupee is MU ÷ P, used in the equi-marginal law."),
      ask("A player's total utility from glasses of water is 20 after one, 32 after two and 36 after three. What is the MU of the third glass?", "4 utils", ["36 utils", "12 utils", "16 utils"], "MU of the third = 36 − 32 = 4. 36 is the total after three glasses, and 12 is the MU of the second glass."),
      ask("Water is vital yet cheap; diamonds are inessential yet dear. Which explanation fits utility analysis?", "Price follows marginal utility, which is low for plentiful water", ["Price follows total utility, which is higher for diamonds", "Water's utility is zero because most people have plenty", "Diamonds give more total utility than water does"], "Water's total utility is enormous, but the last litre adds little because water is plentiful. Price follows that marginal utility, not total utility."),
    ],
    lens: [],
    reflect: "Think of a food you love. After how many helpings does the next one add very little?",
    summary: {
      points: [
        "Total utility (TU): the sum of utility from all units consumed. Marginal utility (MU): the change in TU from one more unit.",
        "MUₙ = TUₙ − TUₙ₋₁; TU is the running sum of MU.",
        "MU positive: TU rises. MU zero: TU is at its maximum. MU negative: TU falls.",
        "Paradox of value: price follows marginal, not total, utility (water and diamonds).",
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
    lead: "Each extra unit of the same good, taken one after another, adds less satisfaction than the one before.",
    check: [
      ask("Which statement is the law of diminishing marginal utility?", "Each extra unit of a good adds less satisfaction than the one before", ["Each extra unit of an input adds less output than the one before", "Total satisfaction falls with every extra unit consumed", "Each extra rupee of income buys fewer units of a good"], "The law is about a consumer's satisfaction. Extra output from an input is the law of diminishing returns, about producers. TU does not fall while MU is positive."),
      ask("A collector values the stamp that completes his set more than the one before. Why do textbooks not treat this as breaking the law?", "The final stamp is not an identical unit, so an assumption fails", ["The law applies only to food and drink", "Collectors are not rational consumers", "Marginal utility always rises for rare items"], "The law assumes identical units, and the stamp that completes a set is not like the others. The law is not limited to food, so that option is wrong."),
      ask("In the roti table, MU runs 12, 8, 5, 3, 0, −2. What is TU after the sixth roti?", "26; it peaked at 28 when MU reached 0", ["30; it peaked at 30 after the sixth", "−2; it peaked at 12 after the first", "28; it is still at its peak"], "TU is the running sum: 12 + 8 + 5 + 3 + 0 − 2 = 26. It peaked at 28 when MU reached zero. 30 adds 2 for the sixth roti instead of subtracting it."),
    ],
    lens: [
      { pairing: 1, adds: "Two halves of the consumer: appetite remains while the satisfaction per unit declines.", differs: "Manu and the Gītā make general points about desire and pleasure. The law of diminishing marginal utility is about the units of one good." },
    ],
    reflect: "When did you last keep consuming something past the point where it gave you much?",
    summary: {
      points: [
        "Marshall: the additional benefit from a thing diminishes with every increase in the stock already held.",
        "It holds if units are identical and of sensible size, consumption is continuous, and tastes and income do not change.",
        "TU rises while MU is positive, peaks when MU = 0 (28 in the table), and falls when MU turns negative.",
        "Apparent exceptions (collections, addiction, money) mostly break an assumption. The law underlies the downward-sloping demand curve.",
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
    lead: "Total utility is highest when the last rupee spent on each good brings the same marginal utility.",
    check: [
      ask("Consumer equilibrium in the cardinal approach requires…", "Equal MU per rupee across goods, with the budget fully spent", ["Equal MU across goods, with the budget fully spent", "Equal spending on every good in the budget", "The highest possible MU from each good bought"], "The condition is MU₁ ÷ P₁ = MU₂ ÷ P₂. Equal MU is the tempting answer, but a good that costs twice as much must give twice the MU at the margin."),
      ask("Chai costs ₹10 and samosas ₹20. The next cup of chai gives 30 utils and the next samosa 40. Which should the student buy next?", "Chai: 3 utils per rupee against 2", ["The samosa: 40 utils against 30", "Either: both are worth buying", "The samosa: it costs more, so it is worth more"], "Compare MU per rupee: chai 30 ÷ 10 = 3, samosa 40 ÷ 20 = 2. The samosa's higher MU is the trap, because it costs twice as much."),
      ask("Using the chapter's chai and samosa table and a ₹100 budget, what is total utility at equilibrium?", "350 utils, with 4 chai and 3 samosas", ["320 utils, with 2 chai and 4 samosas", "330 utils, with 3 chai and 3 samosas", "370 utils, with 4 chai and 4 samosas"], "Chai 50 + 40 + 30 + 20 = 140 and samosas 100 + 70 + 40 = 210: 350 utils for ₹100. 2 chai and 4 samosas also cost ₹100 but give 320; 4 and 4 would cost ₹120."),
    ],
    lens: [
      { pairing: 2, adds: "Balance across food, recreation, work and sleep: not too much and not too little of any.", differs: "The Gītā verse is advice about a way of life. The rule of marginal utility per rupee is about spending a budget." },
    ],
    reflect: "Where could you move some time or money from where it adds little to where it adds more?",
    summary: {
      points: [
        "MU₁ ÷ P₁ = MU₂ ÷ P₂ = MU₃ ÷ P₃ = MU of a rupee, with the whole budget spent.",
        "Spend each next rupee where MU per rupee is highest; buying more lowers MU until the ratios are equal.",
        "Example: ₹100 buys 4 chai and 3 samosas, 2 utils per rupee each, 350 utils in all.",
        "Limits: indivisible goods, habit and impulse, unmeasurable utility. Managers use it as the equi-marginal principle.",
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
    lead: "Consumer surplus is what a buyer would have been willing to pay minus what they actually paid.",
    check: [
      ask("Consumer surplus is…", "What a buyer would pay minus what they actually pay", ["The printed price minus the discounted price", "The price received minus the seller's lowest price", "Total spending minus the cost of production"], "Marshall measures it from the buyer's own willingness to pay. A discount is measured from the printed price instead. Price received minus the lowest acceptable price is producer surplus."),
      ask("Willingness to pay for a pair of shoes is ₹1,500. The price rises from ₹1,200 to ₹1,300. What happens to consumer surplus?", "It falls from ₹300 to ₹200", ["It rises from ₹300 to ₹400", "It stays at ₹300", "It falls from ₹1,500 to ₹1,300"], "Surplus = ₹1,500 − price: ₹300 at ₹1,200 and ₹200 at ₹1,300. A higher price leaves less of the buyer's value unpaid, so the surplus cannot rise."),
      ask("Mangoes cost ₹20 each. A buyer would pay ₹50, ₹40, ₹30 and ₹20 for the first four. What is her consumer surplus?", "₹60", ["₹140", "₹80", "₹100"], "Total utility in money, ₹140, minus spending, 4 × ₹20 = ₹80, gives ₹60. ₹140 is the total value to her, not the surplus, and ₹80 is what she pays."),
    ],
    lens: [
      { pairing: 3, adds: "Satisfaction located in what is received, not in the price.", differs: "Consumer surplus measures the value received above the price paid. The chapter offers contentment as a reading: both locate satisfaction in what is received." },
    ],
    reflect: "Think of something you bought that was worth far more to you than you paid. What was the surplus?",
    summary: {
      points: [
        "Consumer surplus = total utility in money − total expenditure (Marshall).",
        "One unit: ₹1,500 − ₹1,200 = ₹300; at a price of ₹1,300 it falls to ₹200.",
        "Several units: mangoes worth ₹50, ₹40, ₹30 and ₹20 at ₹20 each give ₹140 − ₹80 = ₹60. On a graph it is the area below demand and above price.",
        "Limits: unmeasurable utility, a changing MU of money, necessities. Sellers try to capture it; governments use it to weigh public projects.",
      ],
      memory: "Willingness to pay minus price paid.",
    },
  },
];

export default lessons;
