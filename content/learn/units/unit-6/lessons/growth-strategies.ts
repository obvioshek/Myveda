import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "grand-strategies",
    name: "Grand strategies: the strategy wheel",
    intro: "The broad options of corporate strategy: hold, grow, shrink, or mix them.",
    before: {
      q: "Can a firm expand one business while cutting back another?",
      choices: [
        { label: "No, pick one", reveal: "It can. A combination strategy follows two or more grand strategies at once or in sequence, for example expanding one business while retrenching another." },
        { label: "Yes", reveal: "Right. A combination strategy follows two or more grand strategies at once or in sequence, for example expanding one business while retrenching another." },
      ],
    },
    lead: "Corporate strategy decides which businesses to be in; its grand strategies are stability, expansion, retrenchment or a combination.",
    check: [
      ask("In Glueck's classic grouping, the four grand strategies are…", "Stability, expansion, retrenchment and combination", ["Growth, integration, diversification and cooperation", "Penetration, development, diversification and combination", "Stability, growth, cooperation and internationalisation"], "Glueck's four are stability, expansion, retrenchment and combination. Integration, diversification and cooperation are spokes of the strategy wheel, but in his grouping they are routes to expansion."),
      ask("In the same year, a family firm grows its textile mill and sells its loss-making sugar mill. Which grand strategy is that?", "Combination", ["Retrenchment", "Expansion", "Stability"], "Selling the sugar mill alone would be retrenchment, and growing the textile mill alone would be expansion. Doing both at once is a combination strategy."),
      ask("A firm keeps its business and scope, making only small improvements while it waits for clarity. Which risk should its managers watch most?", "Falling behind if the market changes while it holds still", ["Losing synergy between unrelated businesses", "Competition-law review of a large merger", "Running short of funds through fast growth"], "Stability can hide drift: a firm that holds still while its market changes may slowly fall behind. Merger review and overstretched funds are risks of expansion, not of standing still."),
    ],
    lens: [
      { pairing: 0, adds: "Six measures of foreign policy matched to the ruler's strength: peace when weaker, war when stronger, staying quiet, marching, shelter, and the double policy.", differs: "Kauṭilya's measures concern a state's relations with other powers. Grand strategy matches a firm's position to stability, expansion, retrenchment or combination; only the double policy resembles a combination strategy." },
    ],
    reflect: "Think of a company in the news. Is it following stability, expansion, retrenchment or a combination right now, and in which of its businesses?",
    summary: {
      points: [
        "Corporate strategy sets which businesses to be in and how to allocate resources among them.",
        "The wheel: stability, growth, integration, diversification, cooperation, retrenchment, combination.",
        "Glueck's grouping: stability, expansion, retrenchment and combination; the other options are routes to expansion.",
        "Grand strategy chooses businesses; business strategy chooses how to compete in one.",
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
    lead: "Expansion makes the business bigger or wider; concentration, its most focused route, puts more effort into the present business through penetration, market development or product development.",
    check: [
      ask("Concentration is also called…", "Intensification, focus or specialisation", ["Integration, merger or takeover", "Diversification, synergy or spread", "Retrenchment, turnaround or divestment"], "Concentration converges resources on one or a few present businesses, hence intensification, focus or specialisation. Integration and mergers are separate routes to expansion."),
      ask("A Rajkot engine-parts maker starts selling its existing parts to pump-set makers, a new kind of buyer. Which form of concentration is this?", "Market development", ["Market penetration", "Product development", "Unrelated diversification"], "The product is the same and the buyers are new, so it is market development. Penetration would mean winning more orders from the buyers it already has."),
      ask("A firm has ₹50 crore of sales, ₹40 crore of them from one buyer. That buyer moves a quarter of its orders to a rival. By how much does the firm's turnover fall?", "20%", ["25%", "10%", "80%"], "A quarter of ₹40 crore is ₹10 crore, and ₹10 crore is 20% of ₹50 crore. 25% is the share of that one buyer's orders lost, not the share of total turnover."),
    ],
    lens: [],
    reflect: "Pick a firm you know that grew by concentration. Which of the three forms did it use, and what single market change could hurt it most?",
    summary: {
      points: [
        "Expansion seeks growth, profit, share and scale; strategists must tell desirable from undesirable expansion.",
        "Five routes: concentration, integration, diversification, cooperation, internationalisation.",
        "Concentration takes three forms: market penetration, market development and product development.",
        "Its risk is dependence: one shift in the market can undo it.",
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
    lead: "Ask two questions, is the product new and is the market new, to place a growth move in one of four cells; risk rises the further it moves from home.",
    check: [
      ask("In the Ansoff matrix, new products for new markets is…", "Diversification, the highest-risk option", ["Market development, a medium-risk option", "Product development, a medium-risk option", "Market penetration, the lowest-risk option"], "Both the product and the market are unfamiliar, so it is diversification and carries the most risk. Market development changes only the market."),
      ask("A Jaipur mithai shop starts shipping its usual boxes of sweets to buyers in Delhi. Which strategy is this?", "Market development", ["Market penetration", "Product development", "Diversification"], "The sweets are the same; the buyers are in a new region. Penetration would mean selling more to the shop's existing customers."),
      ask("Which statement about the Ansoff matrix is accurate?", "It shows the direction of a move, not whether it will pay", ["It predicts which move will earn the most profit", "It ranks moves by how competitors will react", "It treats every new product as equally new"], "The grid classifies moves by product and market. It leaves out profit, competitors' reactions and the firm's resources, and ‘new’ is a matter of degree."),
    ],
    lens: [
      { pairing: 1, adds: "One who climbs beyond the tip of a branch and goes on ends his life.", differs: "The couplet is about overreaching one's strength. The Ansoff matrix measures risk by how far a firm moves from known products and markets." },
    ],
    reflect: "Think of a brand that launched something new recently. Which Ansoff quadrant was that move in, and what was new to the firm?",
    summary: {
      points: [
        "Ansoff (1957): grow by changing products, markets or both.",
        "Market penetration (lowest risk), product development, market development, diversification (highest risk).",
        "Penetration sells more to the same buyers; development finds new buyers for the same product.",
        "The grid shows direction, not payoff; related diversification lowers the risk.",
      ],
      memory: "Penetration, product development, market development, diversification: risk rises as you leave home.",
    },
  },
  {
    blockId: "integration-strategies",
    name: "Integration strategies",
    intro: "Taking over more of the value chain, or a rival at the same stage.",
    before: {
      q: "A firm buys the company that supplies its raw materials. Which way is that?",
      choices: [
        { label: "Forward", reveal: "No. Forward integration moves toward customers: distributors, retailers and sales channels. Taking over suppliers is backward integration." },
        { label: "Backward", reveal: "Right. Taking over suppliers is backward integration. Forward integration moves toward customers; horizontal integration takes over rivals." },
      ],
    },
    lead: "Integration moves a firm backward to its suppliers, forward to its buyers, or sideways to its rivals, to cut cost, secure supply or markets and gain control.",
    check: [
      ask("Merging with a competitor at the same stage of the value chain is…", "Horizontal integration", ["Backward integration", "Forward integration", "Unrelated diversification"], "It stays at the firm's own stage, giving larger market share, less competition and economies of scale. Backward and forward integration move along the chain."),
      ask("A Ludhiana bicycle maker that keeps missing deliveries buys its steel-tube supplier. This is…", "Backward integration", ["Forward integration", "Horizontal integration", "Related diversification"], "The supplier sits upstream, towards the inputs, so this is backward integration. Forward integration would mean opening its own showrooms."),
      ask("Which is a real drawback of vertical integration?", "It ties up capital and locks the firm into its own unit", ["It always needs competition-law clearance", "It weakens control over quality and cost", "It cuts the firm off from its customers"], "An owned unit is hard to drop if a cheaper supplier appears, and it can grow inefficient. Competition-law clearance is mainly a concern for large horizontal combinations."),
    ],
    lens: [
      { pairing: 2, adds: "The treasury has its source in the mines, and the army is born of the treasury, so mines are placed under state superintendents.", differs: "Kauṭilya argues for a state owning its sources. Backward integration is a firm acquiring or controlling its suppliers of inputs." },
    ],
    reflect: "Think of a brand that also owns its shops or its farms. Which kind of integration is that, and what does it give up in flexibility?",
    summary: {
      points: [
        "Backward: acquire or control suppliers; reliable supply, better control of quality and cost.",
        "Forward: acquire or control distributors and retailers; market access, higher margins.",
        "Horizontal: merge with or acquire competitors; share, scale, less competition.",
        "Costs: capital tied up, less flexibility, and competition-law review for large horizontal deals.",
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
    lead: "Diversification enters new products and new markets at once: related diversification exploits synergies, unrelated diversification spreads risk across industries.",
    check: [
      ask("Unrelated diversification is also called…", "Conglomerate", ["Concentric", "Horizontal integration", "Market penetration"], "Unrelated is conglomerate; related is concentric. Horizontal integration is buying a rival, not entering a new industry."),
      ask("A shoe maker in Agra adds belts made from the same leather and sold in the same shops. This is…", "Related (concentric) diversification", ["Unrelated (conglomerate) diversification", "Horizontal integration", "Market penetration"], "The belts share materials, craftsmen and channels with the shoes, which is the synergy of related diversification. Penetration would mean selling more shoes."),
      ask("In Ansoff's own terms, horizontal diversification means…", "New products sold to existing customers", ["Taking over a supplier", "Old products in new regions", "Any related diversification"], "‘Horizontal’ is often used loosely for any related diversification; Ansoff meant new products, often technologically unrelated, for existing customers."),
    ],
    lens: [
      { pairing: 3, adds: "Accomplishing one task by means of another is like catching a wild elephant with a trained one.", differs: "The couplet is a general maxim about leverage. Related diversification applies it to choosing businesses that share technology, brand, channels and competencies." },
    ],
    reflect: "Name a company that sells something far from its original product. Is that related or unrelated diversification, and what, if anything, do the businesses share?",
    summary: {
      points: [
        "Related (concentric): synergies in technology, brand, channels and competencies; lower risk.",
        "Unrelated (conglomerate): spreads risk across sectors; higher risk, and new skills needed.",
        "Ansoff's horizontal: new products for existing customers; concentric: draws on existing technology or marketing.",
        "Judge an example by what the new business shares with the old.",
      ],
      memory: "Related for synergy; unrelated for spreading risk.",
    },
  },
];

export default lessons;
