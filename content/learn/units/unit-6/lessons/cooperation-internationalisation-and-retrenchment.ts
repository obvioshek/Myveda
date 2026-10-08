import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "cooperative-strategies",
    name: "Cooperative strategies",
    intro: "Growing with other firms through mergers, acquisitions, joint ventures and alliances.",
    before: {
      q: "In a joint venture, do the parent firms stop existing?",
      choices: [
        { label: "Yes", reveal: "No. In a joint venture two or more firms create a new, jointly owned entity, and the parents continue in business." },
        { label: "No", reveal: "Right. In a joint venture two or more firms create a new, jointly owned entity, sharing investment, risk and profit, and the parents continue." },
      ],
    },
    lead: "A cooperative strategy grows a firm by working with others: merging, acquiring, forming a joint venture or allying.",
    check: [
      ask("A + B = A describes…", "An acquisition", ["A merger", "A joint venture", "A strategic alliance"], "One company buys a controlling interest and the other loses its independent identity. A merger is A + B = C: both combine into a new entity."),
      ask("Two firms each put ₹40 crore into a new company to make EV drives, and both carry on their old businesses. This is…", "A joint venture", ["A strategic alliance", "A merger", "An acquisition"], "A new company owned by both partners, with the parents continuing, is a joint venture. An alliance creates no new company: the partners only agree to work together."),
      ask("A firm needs a partner's technology for one two-year project and wants to keep its independence. Which form fits best?", "A strategic alliance", ["An acquisition", "A merger", "A joint venture"], "A narrow, short-term need suits an alliance, which leaves both firms legally independent. A joint venture would create a whole new company for a temporary need."),
    ],
    lens: [
      { pairing: 0, adds: "Rules for undertakings in partnership: partners divide earnings as agreed or equally, with rules for when a partner withdraws.", differs: "The passage sets rules for people working together in an undertaking. A joint venture creates a new, jointly owned entity whose parent firms share investment, risk and profit." },
      { pairing: 1, adds: "Winning over those not yet allied is more urgent than doing good to friends.", differs: "The couplet is advice to a ruler about enemies. A strategic alliance is firms cooperating on specific objectives while staying legally independent." },
    ],
    reflect: "Think of two brands that have worked together on a product. Was it a merger, acquisition, joint venture or alliance?",
    summary: {
      points: [
        "Merger: A + B = C. Acquisition: A + B = A.",
        "Joint venture: a new jointly owned company, parents continue. Alliance: cooperation with no new company.",
        "Co-opetition (Brandenburger and Nalebuff, 1996): competing and cooperating at once.",
        "On average, acquisitions do little for the buyer's own performance; buyers often overpay.",
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
    lead: "Firms go abroad step by step, and choose one of four strategies according to two pressures: cost reduction and local responsiveness.",
    check: [
      ask("High pressure for cost reduction and low pressure for local responsiveness suggests…", "A global strategy", ["A multi-domestic strategy", "An international strategy", "A transnational strategy"], "Standardised products worldwide give maximum efficiency. Transnational is the cell where both pressures are high."),
      ask("A snacks firm changes its recipes and pack sizes for each country it sells in, and cost pressure is low. Its strategy is…", "Multi-domestic", ["Global", "International", "Transnational"], "Tailoring to each local market under low cost pressure is multi-domestic. International would export the home product with little change."),
      ask("Which entry mode gives a firm the most control abroad, and also the most risk?", "A wholly owned subsidiary", ["Exporting", "Licensing", "A joint venture"], "It sits at the top of the ladder: the firm owns and runs the foreign business alone. A joint venture shares control and risk with a partner."),
    ],
    lens: [],
    reflect: "Think of a global food or clothing brand in your country. Does it sell the same product everywhere or adapt it locally?",
    summary: {
      points: [
        "Entry ladder: exporting, licensing, joint venture, local manufacturing, wholly owned subsidiary.",
        "Two pressures (after Bartlett and Ghoshal): cost reduction and local responsiveness.",
        "Global (cost high, local low); multi-domestic (local high, cost low); international (both low); transnational (both high).",
        "Many firms skip stages; born-global firms sell abroad from the start.",
      ],
      memory: "Global, multi-domestic, international, transnational.",
    },
  },
  {
    blockId: "retrenchment-and-combination",
    name: "Retrenchment and combination strategies",
    intro: "Shrinking parts of a firm to save the rest, or mixing strategies across units.",
    before: {
      q: "Is closing the business down the first response to a crisis?",
      choices: [
        { label: "First step", reveal: "No. Liquidation is the last resort, used when recovery is impossible. The other options are turnaround, divestment and harvest." },
        { label: "Last resort", reveal: "Right. Liquidation is the last resort, used when recovery is impossible. The other options are turnaround, divestment and harvest." },
      ],
    },
    lead: "Retrenchment shrinks a firm to save it: turnaround, divestment, harvest or liquidation, scaled to the crisis.",
    check: [
      ask("Selling a business unit as a running business because it no longer fits the corporate strategy is…", "Divestment", ["Liquidation", "Harvest", "Turnaround"], "In a divestment the buyer carries the unit on. Liquidation ends the business and sells its assets piece by piece."),
      ask("A mill's turnaround has failed and no buyer will take it as a running business. What is left?", "Liquidation: close it and sell the assets", ["Harvest: invest more for growth", "Divestment: sell it as a going concern", "A second merger"], "With no buyer for the running business, divestment is off the table, so liquidation is the last resort. Harvest means cutting investment, not adding it."),
      ask("A group grows its EV-parts unit, holds its forging unit steady and shrinks its textile mill. Its strategy is…", "A combination strategy", ["A turnaround", "A stability strategy", "Harvest"], "Different strategies in different units at the same time is combination. Stability would hold all units steady."),
    ],
    lens: [
      { pairing: 2, adds: "Even a cart of peacock feathers breaks its axle if loaded too heavily.", differs: "The couplet warns against excess in general. Retrenchment is a set of business options, turnaround, divestment, harvest and liquidation, often used after overexpansion." },
    ],
    reflect: "Think of a company that closed stores or sold a division. Which retrenchment strategy was it following?",
    summary: {
      points: [
        "Turnaround (minor crisis), divestment (moderate), liquidation (serious, the last resort).",
        "Harvest: cut investment and draw cash before exit.",
        "Divestment sells a running business; liquidation sells assets piece by piece.",
        "Combination (Glueck): stability, expansion and retrenchment in different units or over time.",
      ],
      memory: "Turn around, divest, harvest, or liquidate; or combine.",
    },
  },
];

export default lessons;
