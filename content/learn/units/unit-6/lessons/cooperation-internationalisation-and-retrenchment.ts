import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "cooperative-strategies",
    name: "Cooperative strategies",
    intro: "Working with other firms for growth, innovation, market access and shared resources.",
    before: {
      q: "In a joint venture, do the parent firms stop existing?",
      choices: [
        { label: "Yes", reveal: "No. In a joint venture two or more firms create a new, jointly owned entity, and the parents continue in business." },
        { label: "No", reveal: "Right. In a joint venture two or more firms create a new, jointly owned entity, sharing investment, risk and profit, and the parents continue." },
      ],
    },
    lead: "Firms can merge, acquire, form joint ventures or ally to expand, enter new markets and share risk.",
    check: [
      ask("A + B = A describes…", "An acquisition", ["A merger", "A joint venture", "A strategic alliance"], "One company buys a controlling interest and the other loses its independent identity."),
      ask("Firms cooperating on specific objectives while remaining legally independent form…", "A strategic alliance", ["A merger", "An acquisition", "A conglomerate"], "In a merger two companies combine into one entity."),
      ask("Brandenburger and Nalebuff's term for mixing competing and cooperating is…", "Co-opetition", ["Coalition", "Collusion", "Combination"], "Co-opetition (1996)."),
    ],
    lens: [
      { pairing: 0, adds: "Rules for undertakings in partnership: partners divide earnings as agreed or equally, with rules for when a partner withdraws.", differs: "The passage sets rules for people working together in an undertaking. A joint venture creates a new, jointly owned entity whose parent firms share investment, risk and profit." },
      { pairing: 1, adds: "Winning over those not yet allied is more urgent than doing good to friends.", differs: "The couplet is advice to a ruler about enemies. A strategic alliance is firms cooperating on specific objectives while staying legally independent." },
    ],
    reflect: "Think of two brands that have worked together on a product. Was it a merger, acquisition, joint venture or alliance?",
    summary: {
      points: [
        "Merger: A + B = C. Acquisition: A + B = A.",
        "Joint venture: a new jointly owned entity, parents continue. Alliance: cooperation while independent.",
        "They let a firm expand quickly, enter new markets, share risk and strengthen its position.",
      ],
      memory: "Merge, acquire, venture jointly, or ally.",
    },
  },
  {
    blockId: "internationalisation-strategies",
    name: "Internationalisation strategies",
    intro: "Expanding beyond the home market, balancing cost and local responsiveness.",
    before: {
      q: "Do firms usually start going abroad by setting up wholly owned subsidiaries?",
      choices: [
        { label: "Usually", reveal: "Not usually. Firms typically progress from exporting, through licensing and joint ventures, to local manufacturing and wholly owned subsidiaries, with more commitment and risk at each stage." },
        { label: "Not usually", reveal: "Right. Firms typically progress from exporting, through licensing and joint ventures, to local manufacturing and wholly owned subsidiaries, with more commitment and risk at each stage." },
      ],
    },
    lead: "International strategies are classified by two pressures: for cost reduction and for local responsiveness.",
    check: [
      ask("High pressure for cost reduction and low pressure for local responsiveness suggests…", "A global strategy", ["A multi-domestic strategy", "An international strategy", "A transnational strategy"], "Standardised products worldwide for maximum efficiency."),
      ask("Tailoring products and marketing to each local market is…", "Multi-domestic", ["Global", "International", "Transnational"], "It suits high pressure for local responsiveness and low pressure for cost reduction."),
      ask("Which strategy seeks high efficiency and high responsiveness together?", "Transnational", ["Global", "International", "Multi-domestic"], "It also learns across countries."),
    ],
    lens: [],
    reflect: "Think of a global food or clothing brand in your country. Does it sell the same product everywhere or adapt it locally?",
    summary: {
      points: [
        "Firms move from exporting to licensing, joint ventures, local manufacturing and subsidiaries.",
        "Two pressures (after Bartlett and Ghoshal): cost reduction and local responsiveness.",
        "Global, multi-domestic, international and transnational strategies.",
      ],
      memory: "Global, multi-domestic, international, transnational.",
    },
  },
  {
    blockId: "retrenchment-and-combination",
    name: "Retrenchment and combination strategies",
    intro: "Reducing scope or size to stabilise a firm in crisis.",
    before: {
      q: "Is closing the business down the first response to a crisis?",
      choices: [
        { label: "First step", reveal: "No. Liquidation is the last resort, used when recovery is impossible. The other options are turnaround, divestment and harvest." },
        { label: "Last resort", reveal: "Right. Liquidation is the last resort, used when recovery is impossible. The other options are turnaround, divestment and harvest." },
      ],
    },
    lead: "Retrenchment cuts the scope or size of activities through turnaround, divestment, harvest or liquidation.",
    check: [
      ask("Selling a business unit that no longer fits the corporate strategy is…", "Divestment", ["Turnaround", "Harvest", "Liquidation"], "It raises cash and focus."),
      ask("Deliberately reducing investment to maximise short-term cash before exit is…", "Harvest", ["Turnaround", "Divestment", "Combination"], "Turnaround restructures to return to profitability."),
      ask("Expanding a promising business while retrenching a declining one is…", "A combination strategy", ["A turnaround", "A stability strategy", "Liquidation"], "Combination applies several strategies at once across different units."),
    ],
    lens: [
      { pairing: 2, adds: "Even a cart of peacock feathers breaks its axle if loaded too heavily.", differs: "The couplet warns against excess in general. Retrenchment is a set of business options, turnaround, divestment, harvest and liquidation, often used after overexpansion." },
    ],
    reflect: "Think of a company that closed stores or sold a division. Which retrenchment strategy was it following?",
    summary: {
      points: [
        "Turnaround: restructure to return to profit; divestment: sell a unit that no longer fits.",
        "Harvest: cut investment for short-term cash; liquidation: the last resort.",
        "Combination: different strategies at once across different units.",
      ],
      memory: "Turn around, divest, harvest, or liquidate.",
    },
  },
];

export default lessons;
