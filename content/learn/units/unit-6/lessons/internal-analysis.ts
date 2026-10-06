import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-internal-analysis-is",
    name: "What internal analysis is",
    intro: "Examining the organisation's own resources, assets and processes.",
    before: {
      q: "Where do threats to a company usually come from?",
      choices: [
        { label: "From inside", reveal: "Usually not. Internal analysis also notes likely threats, but these usually come from outside; inside, it finds strengths and structural weaknesses." },
        { label: "From outside", reveal: "Right. Threats usually come from outside. Inside, internal analysis finds strengths, such as people and brand, and structural weaknesses, such as outdated technology." },
      ],
    },
    lead: "Internal analysis examines the firm's own resources, assets and processes to find where it can grow or must change.",
    check: [
      ask("Which tool finds the gap between a business goal and the current state?", "Gap analysis", ["VRIO analysis", "OCAT", "Value chain analysis"], "It is used to locate weaknesses."),
      ask("In Porter's value chain, which is a support activity?", "Procurement", ["Inbound logistics", "Operations", "Marketing and sales"], "Support activities: firm infrastructure, HRM, technology development and procurement."),
      ask("Outdated technology and weak communication between departments are examples of…", "Structural weaknesses", ["Strengths", "Opportunities", "Threats"], "Strengths include the quality of people, resources and brand recognition."),
    ],
    lens: [
      { pairing: 0, adds: "An examination of the calamities that can befall each constituent of the state, ranked by how serious each is, so the ruler knows where to act first.", differs: "The passage audits a state's constituents: ruler, ministers, countryside, fort, treasury, army and ally. Internal analysis audits a firm with tools such as gap analysis, VRIO and the value chain." },
    ],
    reflect: "Think of an organisation you have worked or studied in. What is one strength and one structural weakness an internal analysis would find?",
    summary: {
      points: [
        "Internal analysis covers tangible and intangible resources, assets and processes.",
        "It identifies strengths, weaknesses, opportunities, likely threats and viability.",
        "Tools include gap analysis, SWOT, VRIO, OCAT, 7-S, core competencies and the value chain.",
      ],
      memory: "Look inside to find where to grow and what to change.",
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
    lead: "The RBV holds that lasting advantage comes from the firm's own resources and capabilities rather than its industry position.",
    check: [
      ask("The RBV's two assumptions are that resources are heterogeneous and…", "Immobile", ["Tangible", "Cheap", "Easily bought"], "Immobile resources do not move easily between firms, at least in the short run."),
      ask("Which is one of Prahalad and Hamel's three tests of a core competence?", "Difficult for competitors to imitate", ["Owned by every rival", "Limited to one market", "Easy to buy"], "It also gives access to many markets and adds to perceived customer benefits."),
      ask("Who wrote ‘A Resource-Based View of the Firm’ (1984)?", "Birger Wernerfelt", ["Jay Barney", "Robert Grant", "Michael Porter"], "Prahalad, Hamel, Spender, Grant and Barney also shaped the view."),
    ],
    lens: [
      { pairing: 1, adds: "Nothing is out of reach for those who know what they can do, learn what must be known and hold to it.", differs: "The couplet speaks of a person's capacities. The RBV adds the tests of rarity and imitability and the assumptions of heterogeneous, immobile resources." },
    ],
    reflect: "Name a brand you trust. Which of its resources do you think a rival could not buy or copy quickly?",
    summary: {
      points: [
        "Advantage comes from inside: resources and capabilities, not industry position.",
        "Tangible resources can be bought; intangible ones are hard to imitate and give lasting advantage.",
        "Resources are heterogeneous and immobile; core competences pass three tests.",
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
    lead: "A resource gives a sustained advantage only if it is valuable, rare, costly to imitate and the firm is organised to use it.",
    check: [
      ask("Valuable and rare but easy to imitate gives…", "Temporary competitive advantage", ["Sustained competitive advantage", "Competitive parity", "Competitive disadvantage"], "If rivals can copy it, any advantage is temporary."),
      ask("Valuable, rare and costly to imitate, but the firm is not organised to use it, gives…", "Unused competitive advantage", ["Sustained competitive advantage", "Temporary competitive advantage", "Competitive parity"], "Structure, systems and processes must be set up to capture the value."),
      ask("In moving from VRIN to VRIO, Barney replaced non-substitutability with…", "Organisation", ["Imitability", "Rarity", "Value"], "VRIN: valuable, rare, inimitable, non-substitutable."),
    ],
    lens: [],
    reflect: "Take one resource of a company you know well. Put it through the four VRIO questions. Where does it stop?",
    summary: {
      points: [
        "Barney (1991): VRIN; later recast as VRIO.",
        "Not valuable: disadvantage; not rare: parity; easy to imitate: temporary; not organised: unused.",
        "Identify key resources, test each, then develop those that pass.",
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
    lead: "An organisation is effective when strategy, structure, systems, shared values, style, staff and skills are aligned.",
    check: [
      ask("Which element sits at the centre as the glue?", "Shared values", ["Strategy", "Structure", "Style"], "The core beliefs link all the others."),
      ask("Which of these is a hard element?", "Systems", ["Style", "Staff", "Skills"], "The hard elements are strategy, structure and systems."),
      ask("Why are soft elements harder to change?", "They are intangible and shaped by culture", ["They are written in contracts", "They are set by law", "They are tangible assets"], "Hard elements are tangible and easier to define and manage."),
    ],
    lens: [],
    reflect: "Think of a team or club you belong to. Which of the seven S's is out of line with the others?",
    summary: {
      points: [
        "Waterman, Peters and Phillips (1980): seven interdependent elements.",
        "Hard: strategy, structure, systems. Soft: shared values, style, staff, skills.",
        "Shared values are the glue; alignment helps strategy get implemented.",
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
    lead: "SWOT sums up strengths, weaknesses, opportunities and threats; TOWS pairs them to generate strategies.",
    check: [
      ask("In a SWOT, opportunities and threats are…", "External factors", ["Internal factors", "Financial ratios", "Functional strategies"], "Strengths and weaknesses come from the internal audit."),
      ask("Using strengths to counter threats is which TOWS strategy?", "ST (maxi-mini)", ["SO (maxi-maxi)", "WO (mini-maxi)", "WT (mini-mini)"], "SO uses strengths to seize opportunities."),
      ask("Who developed the TOWS matrix?", "Heinz Weihrich", ["Jay Barney", "Michael Porter", "Igor Ansoff"], "Weihrich (1982)."),
    ],
    lens: [
      { pairing: 2, adds: "Before a campaign, know the relative strength and weakness of oneself and the enemy in power, place and time.", differs: "The passage prepares a military campaign against an enemy. SWOT and TOWS are a firm's grid of internal and external factors, paired to generate strategies." },
    ],
    reflect: "Draw a quick SWOT for a café or shop you visit. Which one TOWS strategy would you suggest to it?",
    summary: {
      points: [
        "SWOT: internal strengths and weaknesses, external opportunities and threats.",
        "It bridges analysis and strategy formulation.",
        "TOWS: SO, ST, WO and WT strategies.",
      ],
      memory: "SWOT lists the factors; TOWS turns them into strategies.",
    },
  },
];

export default lessons;
