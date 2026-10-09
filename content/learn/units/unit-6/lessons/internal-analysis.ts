import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-internal-analysis-is",
    name: "What internal analysis is",
    intro: "Examining the organisation's own resources, assets and processes.",
    before: {
      q: "Where do threats to a company usually come from?",
      choices: [
        { label: "From inside", reveal: "Usually not. Threats usually come from outside. Internal analysis asks how well placed the firm is to meet them, and finds strengths and structural weaknesses inside." },
        { label: "From outside", reveal: "Right. Threats usually come from outside. Inside, internal analysis finds strengths, such as people and brand, and structural weaknesses, such as outdated technology." },
      ],
    },
    lead: "Internal analysis is a firm's look at itself: its resources, assets and processes, to find where it can grow or must change.",
    check: [
      ask("In Porter's value chain, which is a support activity?", "Procurement", ["Inbound logistics", "Operations", "Service"], "The support activities are firm infrastructure, human resource management, technology development and procurement. Inbound logistics sounds like buying, but it is a primary activity: receiving and handling the inputs."),
      ask("A Pune plant's late deliveries trace back to a production plan that nobody updates. Where in the value chain is the weakness?", "Firm infrastructure, a support activity", ["Outbound logistics, where trucks leave late", "Operations, where machining happens", "Marketing and sales, where orders are lost"], "Planning belongs to firm infrastructure. Outbound logistics is where the delay shows, not where it starts."),
      ask("A chai stall aims to serve 95 of every 100 customers within three minutes. It manages 80. What gap does a gap analysis show?", "15 percentage points", ["80 percentage points", "5 percentage points", "20 percentage points"], "The gap is the goal minus the current state: 95 − 80 = 15. Twenty is the distance from 80 to a perfect 100, not to the goal the stall set."),
    ],
    lens: [
      { pairing: 0, adds: "An examination of the calamities that can befall each constituent of the state, ranked by how serious each is, so the ruler knows where to act first.", differs: "The passage audits a state's constituents: ruler, ministers, countryside, fort, treasury, army and ally. Internal analysis audits a firm with tools such as gap analysis, VRIO and the value chain." },
    ],
    reflect: "Think of an organisation you have worked or studied in. What is one strength and one structural weakness an internal analysis would find, and where in the value chain does each sit?",
    summary: {
      points: [
        "Internal analysis examines the firm's own resources, assets and processes, tangible and intangible.",
        "It finds strengths and structural weaknesses, and how ready the firm is for opportunities and threats.",
        "Tools: gap analysis, strategy evaluation, SWOT, VRIO, OCAT, 7-S, core competencies, value chain.",
        "Value chain (Porter, 1985): five primary and four support activities; margin is what customers pay minus what the activities cost.",
      ],
      memory: "Find the gap, then trace it along the chain.",
    },
  },
  {
    blockId: "resource-based-view",
    name: "The resource-based view",
    intro: "Lasting advantage comes mainly from inside the firm.",
    before: {
      q: "Which gives more lasting advantage: a new factory or a trusted brand?",
      choices: [
        { label: "The factory", reveal: "Tangible resources such as plant can usually be bought, so rivals match them quickly. Intangibles such as a brand are built over time and hard to imitate." },
        { label: "The brand", reveal: "Right. Intangible resources such as brands and reputation are built over time and not for sale, so they are the main source of lasting advantage." },
      ],
    },
    lead: "The RBV holds that lasting advantage comes from what the firm has and can do that rivals cannot buy or copy, rather than from its industry position.",
    check: [
      ask("The RBV's two assumptions are that resources are heterogeneous and…", "Immobile", ["Tangible", "Freely traded", "Identical across firms"], "Immobile resources do not move easily between firms, at least in the short run. Tangible is tempting, but tangibles can usually be bought, so they give little lasting advantage."),
      ask("A firm's skill in small, efficient motors serves its fans, pumps and mixer-grinders, and rivals find it hard to copy. This is…", "A core competence", ["A tangible resource", "Competitive parity", "A support activity"], "A bundle of skills that opens many markets, adds to what customers value and is hard to imitate passes Prahalad and Hamel's three tests. It is a skill, not a machine, so it is not a tangible resource."),
      ask("A kirana owner facing a new supermarket has ₹5 lakh to spend. Which choice does the RBV favour?", "A phone-ordering service built on his customers' trust", ["A new air-conditioned shopfront", "More shelves and a larger stock", "A billing machine like the supermarket's"], "The RBV says build on what rivals cannot buy. The shopfront, shelves and machine are tangible, and the supermarket already has better ones."),
    ],
    lens: [
      { pairing: 1, adds: "Nothing is out of reach for those who know what they can do, learn what must be known and hold to it.", differs: "The couplet speaks of a person's capacities. The RBV adds the tests of rarity and imitability and the assumptions of heterogeneous, immobile resources." },
    ],
    reflect: "Name a brand you trust. Which of its resources do you think a rival could not buy or copy quickly?",
    summary: {
      points: [
        "Advantage comes from inside: resources and capabilities, not industry position.",
        "Tangible resources can be bought; intangible ones are hard to imitate and give lasting advantage.",
        "Resources are heterogeneous and immobile; core competences pass three tests (Prahalad and Hamel).",
        "Criticism: the argument comes close to a circle, and it says little about building resources.",
      ],
      memory: "Look inside: lasting advantage lies in what rivals cannot buy or copy.",
    },
  },
  {
    blockId: "vrio-framework",
    name: "The VRIO framework",
    intro: "Four tests of whether a resource can sustain an advantage.",
    before: {
      q: "If a resource is valuable but many firms have it, what does it bring?",
      choices: [
        { label: "An advantage", reveal: "Not quite. A valuable resource that is not rare brings only competitive parity." },
        { label: "Only parity", reveal: "Right. A valuable resource that is not rare brings only competitive parity." },
      ],
    },
    lead: "Ask four questions in order: valuable, rare, costly to imitate, organised. The first \"no\" gives the result; four yeses give a sustained advantage.",
    check: [
      ask("Valuable, rare and costly to imitate, but the firm is not organised to use it, gives…", "Unused competitive advantage", ["Sustained competitive advantage", "Temporary competitive advantage", "Competitive parity"], "The resource passes the first three tests, so it could give a sustained advantage. Without structure and systems to use it, the advantage stays unused."),
      ask("Most of a firm's rivals own the same ₹5 crore testing rig. Under VRIO, the rig gives…", "Competitive parity", ["Temporary competitive advantage", "Sustained competitive advantage", "Competitive disadvantage"], "The rig is valuable but not rare, so it only keeps the firm level. A temporary advantage needs the resource to be rare as well."),
      ask("A firm's engineers have rare, hard-to-copy ties with customers' design teams, but they never join bids. What is the best next step?", "Put the engineers on bid teams so the ties are used", ["Buy a second testing rig to add a rare resource", "Drop the ties, since they are not valuable", "Hire more engineers so the ties become common"], "The ties fail only the organisation test. Fixing how the firm uses them turns an unused advantage into a sustained one; buying equipment rivals already own adds nothing."),
    ],
    lens: [],
    reflect: "Take one resource of a company you know well. Put it through the four VRIO questions. Where does it stop?",
    summary: {
      points: [
        "Barney (1991): VRIN; later recast as VRIO, with organisation replacing non-substitutability.",
        "Not valuable: disadvantage; not rare: parity; easy to imitate: temporary; not organised: unused.",
        "Ask the questions in order; the first \"no\" gives the result.",
        "Answers are judgements, and the result holds only until the market changes.",
      ],
      memory: "Valuable, Rare, costly to Imitate, Organised.",
    },
  },
  {
    blockId: "mckinsey-7s",
    name: "The McKinsey 7-S framework",
    intro: "Seven interdependent elements that must be aligned.",
    before: {
      q: "Can a firm change its strategy without touching anything else?",
      choices: [
        { label: "Yes", reveal: "Usually not. The seven elements are interdependent, so a change in one usually needs changes in the others; misalignment causes friction." },
        { label: "No", reveal: "Right. The seven elements are interdependent, so a change in one usually needs changes in the others; misalignment causes friction." },
      ],
    },
    lead: "Strategy, structure, systems, shared values, style, staff and skills must fit together; change one and the others usually have to follow.",
    check: [
      ask("Which element sits at the centre as the glue?", "Shared values", ["Strategy", "Structure", "Style"], "Shared values are the core beliefs that link all the others. Strategy is tempting because it comes first in the list, but it is one of the three hard elements around the centre."),
      ask("A bank's new strategy is to lend to small businesses, but staff targets still count only deposits. Which S is out of line?", "Systems", ["Shared values", "Structure", "Style"], "Targets and incentives are procedures of daily work, which is systems. Shared values are beliefs, not targets."),
      ask("A firm reorganises into divisions but changes nothing else. What does the 7-S model predict?", "Friction, since the other six elements no longer fit", ["Smooth change, since structure is a hard element", "No effect, since structure is outside the model", "Better results, since the soft elements adjust by themselves"], "The elements are interdependent, so a change in one needs changes in the others. Hard elements are easier to change, but changing one alone still causes misalignment."),
    ],
    lens: [],
    reflect: "Think of a team or club you belong to. Which of the seven S's is out of line with the others?",
    summary: {
      points: [
        "Waterman, Peters and Phillips (1980): seven interdependent elements.",
        "Hard: strategy, structure, systems. Soft: shared values, style, staff, skills.",
        "Shared values are the glue; a change in one element needs changes in the others.",
        "The model says what must fit, not how or in what order to change it.",
      ],
      memory: "Hard: strategy, structure, systems. Soft: shared values, style, staff, skills.",
    },
  },
  {
    blockId: "swot-and-tows",
    name: "SWOT and TOWS",
    intro: "Summing up the internal and external audits, then turning them into strategies.",
    before: {
      q: "Does a SWOT list by itself tell a firm what strategy to follow?",
      choices: [
        { label: "Yes", reveal: "Not quite. SWOT lists the factors. The TOWS matrix pairs internal and external factors to generate strategies." },
        { label: "Not by itself", reveal: "Right. SWOT lists the factors. The TOWS matrix pairs internal and external factors to generate strategies." },
      ],
    },
    lead: "SWOT sums up strengths, weaknesses, opportunities and threats; TOWS pairs them to generate strategy options.",
    check: [
      ask("In a SWOT, opportunities and threats are…", "External factors", ["Internal factors", "Financial ratios", "Functional strategies"], "Opportunities and threats come from the external audit. Strengths and weaknesses come from the internal audit."),
      ask("A chai chain rewards its loyal college regulars so they stay when a national café chain arrives. Which TOWS cell is this?", "ST (maxi-mini)", ["SO (maxi-maxi)", "WO (mini-maxi)", "WT (mini-mini)"], "It uses a strength, loyal regulars, to counter a threat, the new rival. SO would use a strength to seize an opportunity."),
      ask("For a chai chain with no online ordering, the growing use of food-delivery apps is…", "An opportunity, outside the firm", ["A strength, since demand is rising", "A weakness, since the chain is not on them", "A threat, since rivals may use them"], "App use is a condition outside the firm that it can exploit. The weakness is its own lack of online ordering, not the apps' growth."),
    ],
    lens: [
      { pairing: 2, adds: "Before a campaign, know the relative strength and weakness of oneself and the enemy in power, place and time.", differs: "The passage prepares a military campaign against an enemy. SWOT and TOWS are a firm's grid of internal and external factors, paired to generate strategies." },
    ],
    reflect: "Draw a quick SWOT for a café or shop you visit. Which one TOWS strategy would you suggest to it, and why that one first?",
    summary: {
      points: [
        "SWOT: internal strengths and weaknesses, external opportunities and threats.",
        "TOWS (Weihrich, 1982): SO maxi-maxi, ST maxi-mini, WO mini-maxi, WT mini-mini.",
        "SWOT gives no weights; lists are often long, vague and unused.",
        "Build it from external analysis, the value chain and VRIO, not from opinion.",
      ],
      memory: "SWOT lists the factors; TOWS turns them into strategies.",
    },
  },
];

export default lessons;
