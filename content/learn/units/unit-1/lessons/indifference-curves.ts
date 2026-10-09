import { ask, type Lesson } from "@/content/learn/lesson-kit";

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
    lead: "The ordinal approach ranks bundles instead of counting utils, and finds the choice with an indifference curve and a budget line.",
    check: [
      ask("Which assumption says a consumer can compare any two bundles?", "Complete preferences", ["Transitivity", "Non-satiation", "Consistency"], "Completeness means every pair can be ranked or judged equal. Transitivity, the tempting choice, is about a chain of three: A over B and B over C means A over C."),
      ask("A shopper prefers a masala dosa to a plate of idli but cannot say by how much. Which approach can still explain her choice?", "The ordinal approach, which needs only rankings", ["The cardinal approach, which needs utils", "Neither, because satisfaction is unmeasured", "The cardinal approach, once money measures it"], "The ordinal approach asks only which bundle she prefers. The cardinal approach needs her to say by how much, in utils or in money, which she cannot."),
      ask("A shopper prefers tea to coffee, coffee to juice, and juice to tea. Which assumption has she broken?", "Transitivity", ["Completeness", "Non-satiation", "Divisibility"], "Preferring tea to coffee and coffee to juice should mean preferring tea to juice. Completeness still holds: she has ranked every pair."),
    ],
    lens: [
      { pairing: 0, adds: "A ranking, not a measurement: the good and the pleasant both present themselves, and the wise person examines them and chooses.", differs: "The Kaṭha Upaniṣad concerns the choice between the good and the pleasant. The chapter's ordinal choice is between bundles of two goods." },
    ],
    reflect: "Rank three things you could spend a free evening on. Could you say by how much one beats another?",
    summary: {
      points: [
        "The ordinal approach ranks bundles; it never measures satisfaction.",
        "Hicks and Allen set it out in 1934. Its tools are the indifference curve and the budget line.",
        "Assumptions: a rational consumer, ordinal utility, complete, transitive and consistent preferences, non-satiation, diminishing MRS and divisible goods.",
        "Revealed preference (Samuelson, 1938) reads preferences from what consumers actually buy.",
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
    lead: "An indifference curve joins every bundle of two goods that gives the same satisfaction; it slopes down, bows toward the origin and never crosses another.",
    check: [
      ask("An indifference curve shows…", "Bundles of two goods that give equal satisfaction", ["Bundles of two goods that cost the same amount", "Bundles a consumer has actually bought", "How satisfaction rises with income"], "Equal cost describes the budget line, the usual mix-up. An indifference curve is about tastes, not money."),
      ask("A consumer sees two brands of packaged water as identical and swaps them one for one. What shape is her indifference curve?", "A straight downward-sloping line", ["An L-shape", "A curve convex to the origin", "A vertical line"], "Perfect substitutes have a constant MRS, so the curve is straight. An L-shape belongs to perfect complements, such as left and right shoes."),
      ask("Why can two indifference curves not cross?", "The shared bundle would make two different satisfaction levels equal", ["The curves would then have to slope upward", "Each curve must be convex to the origin", "Budget lines would then intersect too"], "A bundle on both curves ranks equal to each, so by transitivity the two levels would be equal, a contradiction. Convexity is a separate property: crossing curves could each be convex."),
    ],
    lens: [
      { pairing: 2, adds: "Treating pleasure and pain, gain and loss, victory and defeat alike: steadiness of mind under outcomes.", differs: "The resemblance is in the word only. The text is about steadiness under outcomes, not about equal-satisfaction trade-offs." },
    ],
    reflect: "Name two different bundles of things that would leave you equally happy. What would you give up for each?",
    summary: {
      points: [
        "An indifference curve joins bundles of two goods that give equal satisfaction; a set of them is an indifference map.",
        "Downward sloping, convex to the origin (diminishing MRS), never intersecting, and higher is better.",
        "Curves cannot cross: by transitivity, two levels of satisfaction would be equal.",
        "Perfect substitutes: a straight line. Perfect complements: an L-shape.",
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
    lead: "MRS is how much of one good a consumer will give up for one more unit of another while staying equally satisfied, and it diminishes.",
    check: [
      ask("MRSxy equals…", "MUx ÷ MUy", ["Px ÷ Py", "MUy ÷ MUx", "ΔX ÷ ΔY"], "MRSxy = −ΔY ÷ ΔX = MUx ÷ MUy. Px ÷ Py is the price ratio: the market's rate, which equals MRS only at equilibrium."),
      ask("A student moves from 3 samosas and 6 cups of chai to 4 samosas and 4 cups, equally satisfied. What is her MRSxy?", "2 cups per samosa", ["4 cups per samosa", "0.5 cups per samosa", "1 cup per samosa"], "She gives up 6 − 4 = 2 cups for 1 more samosa, so MRS = 2. 0.5 divides the wrong way round: MRSxy is ΔY ÷ ΔX."),
      ask("Why does MRS diminish as she gets more samosas?", "Each extra samosa adds less, and each cup left matters more", ["Samosas cost more as she buys more of them", "Her income falls as she buys more samosas", "The budget line becomes steeper as she moves"], "MRS = MUx ÷ MUy: MUx falls as samosas pile up, and MUy rises as chai gets scarce. Prices and income play no part along an indifference curve."),
    ],
    lens: [],
    reflect: "Think of a trade you would make easily at first and refuse later. What changed?",
    summary: {
      points: [
        "MRSxy: the amount of Y a consumer gives up for one more unit of X, satisfaction held constant.",
        "MRSxy = −ΔY ÷ ΔX = MUx ÷ MUy.",
        "In the schedule MRS falls 4, 3, 2, 1: diminishing MRS.",
        "MRS is the slope of the indifference curve; as it diminishes, the curve becomes convex.",
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
    lead: "The budget line shows every bundle of two goods a consumer can buy by spending all her income; its slope is −Px ÷ Py.",
    check: [
      ask("The slope of the budget line is…", "−Px ÷ Py", ["−Py ÷ Px", "−MUx ÷ MUy", "Px × Py"], "Each extra unit of X costs Px ÷ Py units of Y. −Py ÷ Px is the tempting inversion; MUx ÷ MUy is MRS, the slope of the indifference curve."),
      ask("Income is ₹120, samosas cost ₹20 and chai ₹10 a cup. Which bundle lies outside the budget line?", "5 samosas and 4 cups", ["3 samosas and 6 cups", "2 samosas and 5 cups", "6 samosas and no chai"], "5 × ₹20 + 4 × ₹10 = ₹140, more than ₹120. 3 samosas and 6 cups cost exactly ₹120, as do 6 samosas alone: both lie on the line."),
      ask("The samosa price falls from ₹20 to ₹15; income (₹120) and the chai price stay the same. What happens to the budget line?", "It pivots out along the samosa axis to 8 samosas", ["It shifts out in parallel to 9 samosas", "It pivots out along the chai axis to 16 cups", "It stays put, since income has not changed"], "Only the samosa end moves: ₹120 ÷ ₹15 = 8. A parallel shift needs a change in income, or in both prices in the same proportion."),
    ],
    lens: [
      { pairing: 1, adds: "An allocation across competing goods under a constraint, with the constraint stated in moral terms.", differs: "Kauṭilya's advice is about pleasure, right conduct and wealth. The budget line is about money and two goods." },
    ],
    reflect: "What are the two things you most often trade off with the same money or time?",
    summary: {
      points: [
        "Px × X + Py × Y = M: every bundle affordable at a given income and prices.",
        "Conditions: income fixed, prices constant, entire income spent, two goods.",
        "Slope −Px ÷ Py: the opportunity cost of one good in units of the other. The ends are M ÷ Py and M ÷ Px.",
        "A change in income shifts the line in parallel; a change in one price pivots it.",
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
    lead: "The consumer is in equilibrium on the highest indifference curve her budget line reaches, where MRS = Px ÷ Py.",
    check: [
      ask("At consumer equilibrium in the ordinal approach…", "MRS equals the price ratio, Px ÷ Py", ["The prices of the two goods are equal", "The consumer buys the cheapest bundle", "MRS falls to zero"], "The slope of the indifference curve equals the slope of the budget line. Equal prices are not needed: only the ratio of prices must match her MRS."),
      ask("Samosas cost ₹20 and chai ₹10. At her current bundle a student would give 3 cups of chai for one more samosa. What should she do?", "Buy more samosas and less chai", ["Buy more chai and fewer samosas", "Stay put: she is in equilibrium", "Spend less in total on both goods"], "Her MRS (3) is above the price ratio (2): a samosa is worth 3 cups to her but costs only 2. She gains by moving toward samosas until her MRS falls to 2."),
      ask("With ₹120, samosas at ₹20 and chai at ₹10, which bundles on her curve can she afford: A (1, 13), B (2, 9), C (3, 6), D (4, 4), E (5, 3)?", "C and D, which cost ₹120 each", ["B and C, which cost ₹130 and ₹120", "A only, which has the most chai", "D and E, which cost ₹120 each"], "C costs ₹60 + ₹60 and D ₹80 + ₹40: ₹120 each. B and E cost ₹130 and A ₹150, all above her budget. Between C and D her MRS is 2, equal to the price ratio."),
    ],
    lens: [],
    reflect: "Think of a choice you made within a budget. Was your choice at the highest level you could reach?",
    summary: {
      points: [
        "Equilibrium: the highest affordable indifference curve, where it touches the budget line.",
        "Conditions: MRS = Px ÷ Py, and the curve convex at that point.",
        "Example: ₹120, samosas at ₹20 and chai at ₹10 give C (3, 6) or D (4, 4), where MRS = 2.",
        "Cardinal: MU per rupee equalised. Ordinal: MRS = price ratio. Since MRS = MUx ÷ MUy, they are the same condition.",
      ],
      memory: "Cardinal asks how much. Ordinal asks which is preferred.",
    },
  },
];

export default lessons;
