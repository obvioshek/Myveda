import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "grand-strategies",
    name: "Grand strategies: the strategy wheel",
    intro: "The broad options of corporate strategy.",
    before: {
      q: "Can a firm expand one business while cutting back another?",
      choices: [
        { label: "No, pick one", reveal: "It can. A combination strategy follows two or more grand strategies at once or in sequence, for example expanding one business while retrenching another." },
        { label: "Yes", reveal: "Right. A combination strategy follows two or more grand strategies at once or in sequence, for example expanding one business while retrenching another." },
      ],
    },
    lead: "Corporate strategy chooses among stability, expansion, retrenchment or a combination of them.",
    check: [
      ask("Which grand strategy keeps the present business and scope with only small improvements?", "Stability", ["Growth", "Retrenchment", "Diversification"], "It suits a firm content with its position or waiting for clarity."),
      ask("Which grand strategy reduces or restructures operations to restore profitability?", "Retrenchment", ["Integration", "Cooperation", "Stability"], "Retrenchment reduces or restructures to restore efficiency and profitability."),
      ask("In Glueck's classic grouping, integration, diversification and cooperation are…", "Routes to expansion", ["Kinds of retrenchment", "Forms of stability", "Functional strategies"], "The classic grand strategies are stability, expansion, retrenchment and combination."),
    ],
    lens: [
      { pairing: 0, adds: "Six measures of foreign policy matched to the ruler's strength: peace when weaker, war when stronger, staying quiet, marching, shelter, and the double policy.", differs: "Kauṭilya's measures concern a state's relations with other powers. Grand strategy matches a firm's position to stability, expansion, retrenchment or combination; only the double policy resembles a combination strategy." },
    ],
    reflect: "Think of a company in the news. Is it following stability, expansion, retrenchment or a combination right now?",
    summary: {
      points: [
        "Corporate strategy sets which businesses to be in and how to allocate resources.",
        "The wheel: stability, growth, integration, diversification, cooperation, retrenchment, combination.",
        "Glueck's grouping: stability, expansion, retrenchment and combination.",
      ],
      memory: "Stability, expansion, retrenchment, or a combination.",
    },
  },
  {
    blockId: "expansion-and-concentration",
    name: "Expansion strategy and concentration",
    intro: "Growing by putting more into what the firm already does.",
    before: {
      q: "Is concentrating on one business always the safe option?",
      choices: [
        { label: "Yes", reveal: "Not always. Concentration builds on existing competence, but it puts many eggs in one basket: a shift in prices, customer sentiment or rival offers can undo it." },
        { label: "No", reveal: "Right. It avoids major change and uses existing competence, but a change in the market can undo it." },
      ],
    },
    lead: "Expansion redefines the business by widening its scope or intensifying effort; concentration is its most focused route.",
    check: [
      ask("Which is NOT one of the five routes to expansion?", "Liquidation", ["Concentration", "Cooperation", "Internationalisation"], "Liquidation is a retrenchment strategy; the five routes are concentration, integration, diversification, cooperation and internationalisation."),
      ask("Market penetration is usually easiest in…", "A growing market", ["A static market", "A mature market", "A declining market with no exits"], "In a growing market newcomers can gain share while leaders still grow."),
      ask("Tata Ace, which created a new category of small commercial vehicle, is an example of…", "Product development", ["Market penetration", "Market development", "Liquidation"], "Product development creates new or improved products for present markets."),
    ],
    lens: [],
    reflect: "Pick a firm you know that grew by concentration. Which of the three forms did it use, and what single market change could hurt it most?",
    summary: {
      points: [
        "Expansion seeks growth, profit, share and scale; strategists must tell desirable from undesirable expansion.",
        "Five routes: concentration, integration, diversification, cooperation, internationalisation.",
        "Concentration takes three forms: market penetration, market development and product development.",
      ],
      memory: "Concentrate: penetrate the market, develop the market, or develop the product.",
    },
  },
  {
    blockId: "ansoff-matrix",
    name: "Ansoff's product-market growth matrix",
    intro: "Four ways to grow by changing products, markets or both.",
    before: {
      q: "Which is riskier: selling more of existing products to existing customers, or new products in new markets?",
      choices: [
        { label: "Existing in existing", reveal: "No. Market penetration is the lowest-risk option. Diversification, new products for new markets, is the riskiest, since both are unfamiliar." },
        { label: "New in new", reveal: "Right. Diversification, new products for new markets, is the riskiest, since both are unfamiliar. Market penetration is the lowest risk." },
      ],
    },
    lead: "Combine existing or new products with existing or new markets; each move into a new quadrant raises the risk.",
    check: [
      ask("IKEA expanding to China, the Middle East and India is…", "Market development", ["Market penetration", "Product development", "Diversification"], "Existing products taken to new markets."),
      ask("Carmakers launching electric models for existing buyers is…", "Product development", ["Market development", "Market penetration", "Horizontal integration"], "New products for existing customers."),
      ask("Market penetration works best where the market is…", "Still growing", ["In decline", "Saturated", "Abroad"], "It sells more of existing products in existing markets."),
    ],
    lens: [
      { pairing: 1, adds: "One who climbs beyond the tip of a branch and goes on ends his life.", differs: "The couplet is about overreaching one's strength. The Ansoff matrix measures risk by how far a firm moves from known products and markets." },
    ],
    reflect: "Think of a brand that launched something new recently. Which Ansoff quadrant was that move in?",
    summary: {
      points: [
        "Ansoff (1957): grow by changing products and markets.",
        "Market penetration (lowest risk), product development, market development, diversification (highest risk).",
        "Related diversification lowers the risk.",
      ],
      memory: "Penetration, product development, market development, diversification: risk rises as you leave home.",
    },
  },
  {
    blockId: "integration-strategies",
    name: "Integration strategies",
    intro: "Combining activities along the value chain.",
    before: {
      q: "A firm buys the company that supplies its raw materials. Which way is that?",
      choices: [
        { label: "Forward", reveal: "No. Forward integration moves toward customers: distributors, retailers and sales channels. Taking over suppliers is backward integration." },
        { label: "Backward", reveal: "Right. Taking over suppliers is backward integration. Forward integration moves toward customers; horizontal integration takes over rivals." },
      ],
    },
    lead: "Integration reduces cost, secures supplies or markets and increases control along the value chain.",
    check: [
      ask("Merging with a competitor at the same stage of the value chain is…", "Horizontal integration", ["Backward integration", "Forward integration", "Unrelated diversification"], "It gives larger market share, less competition and economies of scale."),
      ask("Which gain does forward integration bring?", "Closer customer relationships", ["Reliable raw materials", "Less dependence on suppliers", "Less competition at the same stage"], "It also brings market access and higher margins."),
    ],
    lens: [
      { pairing: 2, adds: "The treasury has its source in the mines, and the army is born of the treasury, so mines are placed under state superintendents.", differs: "Kauṭilya argues for a state owning its sources. Backward integration is a firm acquiring or controlling its suppliers of inputs." },
    ],
    reflect: "Think of a brand that also owns its shops or its farms. Which kind of integration is that, and what does it gain?",
    summary: {
      points: [
        "Backward: acquire or control suppliers; reliable supply, better control of quality and cost.",
        "Forward: acquire or control distributors and retailers; market access, higher margins.",
        "Horizontal: merge with or acquire competitors; share, scale, less competition.",
      ],
      memory: "Backward to suppliers, forward to customers, horizontal to rivals.",
    },
  },
  {
    blockId: "diversification-strategies",
    name: "Diversification strategies",
    intro: "Related diversification for synergy, unrelated for spreading risk.",
    before: {
      q: "A leather-shoe maker adds leather wallets. Related or unrelated?",
      choices: [
        { label: "Related", reveal: "Right. Wallets draw on shared materials, brand and channels, so this is related (concentric) diversification. Making soap would be unrelated." },
        { label: "Unrelated", reveal: "No. Wallets draw on shared materials, brand and channels, so this is related (concentric) diversification. Making soap would be unrelated." },
      ],
    },
    lead: "Related diversification exploits synergies; unrelated diversification spreads risk across new industries.",
    check: [
      ask("Unrelated diversification is also called…", "Conglomerate", ["Concentric", "Horizontal integration", "Market penetration"], "Related diversification is also called concentric."),
      ask("Which carries relatively lower risk?", "Related diversification", ["Unrelated diversification", "Entering an unfamiliar industry", "Conglomerate expansion"], "Unrelated diversification needs new capabilities and investment."),
      ask("In Ansoff's own terms, horizontal diversification means…", "New products sold to existing customers", ["Taking over a supplier", "Old products in new regions", "Any related diversification"], "The source sheet uses ‘horizontal’ loosely for related diversification."),
    ],
    lens: [
      { pairing: 3, adds: "Accomplishing one task by means of another is like catching a wild elephant with a trained one.", differs: "The couplet is a general maxim about leverage. Related diversification applies it to choosing businesses that share technology, brand, channels and competencies." },
    ],
    reflect: "Name a company that sells something far from its original product. Is that related or unrelated diversification?",
    summary: {
      points: [
        "Related (concentric): synergies in technology, brand, channels and competencies; lower risk.",
        "Unrelated (conglomerate): spreads risk across sectors; higher risk.",
        "Ansoff's horizontal: new products for existing customers; concentric: draws on existing technology or marketing.",
      ],
      memory: "Related for synergy; unrelated for spreading risk.",
    },
  },
];

export default lessons;
