import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "going-international",
    name: "Going international",
    intro: "Why firms cross borders, the risks, and the stages they pass through.",
    before: {
      q: "Do most firms jump straight to building factories abroad?",
      choices: [
        { label: "Usually", reveal: "Not usually. Firms tend to move in stages: domestic only, exports through agents, an export department and sales subsidiaries, then production abroad." },
        { label: "They go in stages", reveal: "Right. Firms move from domestic only, to exports through agents, to sales subsidiaries, to production abroad, with commitment and risk rising at each stage." },
      ],
    },
    lead: "International marketing is marketing in more than one country; most firms go abroad in stages, committing more as they learn.",
    check: [
      ask("Which is a risk of going international, rather than a reason for it?", "Currency fluctuations", ["Economies of scale", "Spreading risk across markets", "Higher market growth"], "A change in exchange rates can wipe out the profit on a foreign order, so it is a risk. Spreading risk across markets sounds like a risk, but it is a reason to go abroad: a slump in one country is offset by others."),
      ask("A Pune auto-parts maker stops using an export agent. It sets up its own export department and a sales office in Germany. Which stage has it reached?", "Stage 3", ["Stage 2", "Stage 4", "Stage 1"], "Stage 3 is an export department and sales subsidiaries abroad. Stage 2 is exporting through independent agents, which the firm has just left behind. Stage 4 would need production facilities abroad."),
      ask("A Bengaluru software start-up sells to customers in thirty countries in its first year. What does this show about the stage model?", "It is a born global, which skips the stages", ["It has reached stage 4 of the stage model", "It proves firms must go abroad in stages", "It is still at stage 1, domestic only"], "Born globals sell abroad from their first years, so the stages describe many firms but not all. Stage 4 is tempting, but it means production and marketing facilities abroad, which the start-up does not have."),
    ],
    lens: [
      { pairing: 0, adds: "A director of trade who compares price and value, reckons duties, road cess, escort charges and ferry dues before judging profit, and seeks officials' friendship.", differs: "The passage concerns a state's trade in a foreign land. International marketing adds the stages of internationalisation and a global marketing process." },
    ],
    reflect: "Pick an Indian brand that sells abroad. Which stage has it reached, and what would it need to learn before the next one?",
    summary: {
      points: [
        "International marketing: planning, pricing, promoting and directing goods to buyers in more than one nation for a profit (Cateora and Graham).",
        "Reasons: growth, scale, spreading risk, competitive advantage, following global customers. Risks: preferences, culture, regulation, instability, currency.",
        "Uppsala stages (Johanson and Wiedersheim-Paul, 1975): domestic, agents, export department and subsidiaries, production abroad. Born globals skip them.",
        "Global marketing process: opportunities, entry strategy, marketing programme, implementation, monitoring and control.",
      ],
      memory: "Domestic, agents, subsidiaries, production abroad.",
    },
  },
  {
    blockId: "selecting-foreign-markets",
    name: "Selecting foreign markets",
    intro: "Which countries to enter, and in what order.",
    before: {
      q: "Do firms usually enter the biggest foreign market first?",
      choices: [
        { label: "The biggest", reveal: "Not necessarily. Many prefer psychic proximity: countries with a similar language, culture and legal system." },
        { label: "The most similar", reveal: "Often, yes. Many prefer psychic proximity: countries with a similar language, culture and legal system." },
      ],
    },
    lead: "Firms score markets on suitability, proximity, potential and stability, then enter them one by one (waterfall) or all at once (sprinkler).",
    check: [
      ask("Psychic distance is…", "How foreign a market feels: language, culture, laws and business ways", ["The number of kilometres between home and the foreign market", "The time a firm takes to enter a market after deciding to", "The gap between a country's incomes and the firm's prices"], "Psychic distance covers whatever disturbs the flow of information between firm and market. Kilometres are geographic distance: a far country such as Australia can feel close to US firms."),
      ask("A Kolhapur footwear maker has little money and wants to learn from each market before entering the next. Which approach fits?", "Waterfall: one country after another", ["Sprinkler: many countries at once", "Direct investment in every market", "Entering the largest market first"], "The waterfall approach is lower in risk and investment, and the firm learns in each market. The sprinkler approach gives a first-mover advantage but needs the money to support every market at once."),
      ask("Two criteria are weighted 50% each. Country X scores 4 on economic potential and 2 on proximity. Country Y scores 3 and 4. Which ranks higher?", "Y, with 3.5 against 3.0", ["X, because its potential is higher", "X, with 3.5 against 3.0", "They tie at 3.0 each"], "X = 4 × 0.5 + 2 × 0.5 = 3.0. Y = 3 × 0.5 + 4 × 0.5 = 3.5. Picking X for its potential alone ignores the weight the firm gave to proximity."),
    ],
    lens: [
      { pairing: 1, adds: "A rule: begin no undertaking and scorn no foe until you have found the place to act from.", differs: "The couplet is military advice about ground. Market selection weighs countries on product suitability, proximity, economic potential and political stability." },
    ],
    reflect: "If a business you know went abroad, which country would feel psychically closest, and is it also the best market?",
    summary: {
      points: [
        "Criteria: product suitability, geographic proximity, economic potential, political stability; a weighted score compares them.",
        "Psychic proximity: similar language, culture and legal system. It differs from geographic distance, and can hide real differences.",
        "Waterfall: one by one, lower risk, learning. Sprinkler: many at once, first-mover advantage, higher investment.",
        "Emerging markets such as the BRICS need affordable prices, adapted products and local marketing.",
      ],
      memory: "Similar markets first, or many at once.",
    },
  },
  {
    blockId: "modes-of-entry",
    name: "Modes of entry",
    intro: "From exporting to direct investment, in order of commitment.",
    before: {
      q: "Does licensing give a firm full control abroad?",
      choices: [
        { label: "Full control", reveal: "No. Licensing is low investment and low control, and the licensee may become a competitor. Full control comes with direct investment." },
        { label: "Little control", reveal: "Right. Licensing is low investment and low control, and the licensee may become a competitor. Full control comes with direct investment." },
      ],
    },
    lead: "Entry modes run from indirect exporting to direct investment; each step puts more at stake and gives more control.",
    check: [
      ask("Which list runs from least to most commitment, in Kotler and Keller's order?", "Indirect exporting, direct exporting, licensing, joint venture, direct investment", ["Licensing, indirect exporting, direct exporting, joint venture, direct investment", "Indirect exporting, licensing, direct exporting, direct investment, joint venture", "Direct exporting, indirect exporting, joint venture, licensing, direct investment"], "Commitment, risk, control and profit potential rise in that order. Licensing is easy to place too early, because it needs little investment; it still sits third, after both kinds of exporting."),
      ask("A Pune firm's main advantage is a design that is easy to copy. Which entry mode most directly risks creating a future competitor?", "Licensing, because the licensee learns to make the part", ["Direct investment, because it carries the highest risk", "Indirect exporting, because intermediaries handle sales", "Direct exporting, because the firm runs its own exports"], "A licence hands the foreign firm the know-how, so it may compete later. Direct investment is riskier in money and politics, but it keeps the design under the firm's own control."),
      ask("A foreign licensee sells ₹8 crore a year of parts made to your design and pays a 5% royalty. What do you earn each year?", "₹40 lakh", ["₹4 lakh", "₹4 crore", "₹80 lakh"], "₹8 crore × 5% = ₹0.4 crore, and ₹0.4 crore is ₹40 lakh. ₹4 lakh slips a decimal place; ₹80 lakh would be a 10% royalty."),
    ],
    lens: [],
    reflect: "Think of a foreign brand in India. Did it enter by exporting, licensing or franchising, a joint venture, or direct investment, and why might it have chosen that?",
    summary: {
      points: [
        "Indirect exporting (through intermediaries at home) and direct exporting (own export department or branches): low to medium commitment.",
        "Licensing, including franchising and contract manufacturing: low investment and control; the licensee may become a competitor.",
        "Joint venture: shared ownership, risk and profit, plus local know-how. Direct investment: full control at very high investment.",
        "A franchise is a fuller licence: the brand plus the whole way of running the business.",
      ],
      memory: "Export, license, joint venture, invest: more commitment, more control.",
    },
  },
];

export default lessons;
