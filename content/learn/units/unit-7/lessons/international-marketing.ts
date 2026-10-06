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
    lead: "International marketing applies marketing principles across borders, and firms usually internationalise step by step.",
    check: [
      ask("Which is a risk of going international, rather than a reason for it?", "Currency fluctuations", ["Economies of scale", "Spreading risk across markets", "Higher market growth"], "Other risks are cultural differences, regulatory complexity and instability."),
      ask("The stepwise internationalisation pattern follows studies of firms from which country?", "Sweden", ["Japan", "The United States", "Germany"], "The Uppsala studies (Johanson and Wiedersheim-Paul, 1975)."),
      ask("In the internationalisation process, what is stage 2?", "Exports through independent agents", ["Production facilities abroad", "Domestic operations only", "Sales subsidiaries abroad"], "Stage 3 adds an export department and sales subsidiaries."),
    ],
    lens: [
      { pairing: 0, adds: "A director of trade who compares price and value, reckons duties, road cess, escort charges and ferry dues before judging profit, and seeks officials' friendship.", differs: "The passage concerns a state's trade in a foreign land. International marketing adds the stages of internationalisation and a global marketing process." },
    ],
    reflect: "Pick a brand from your country that sells abroad. Which stage of internationalisation has it reached?",
    summary: {
      points: [
        "Reasons: growth, scale, spreading risk, competitive advantage, following global customers.",
        "Risks: preferences, culture, regulation, instability, currency.",
        "Stages: domestic, agents, subsidiaries, production abroad; then a global marketing process from opportunity to control.",
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
        { label: "The most similar", reveal: "Right. Many prefer psychic proximity: countries with a similar language, culture and legal system." },
      ],
    },
    lead: "Firms choose markets by suitability, proximity, potential and stability, and enter them in sequence (waterfall) or all at once (sprinkler).",
    check: [
      ask("Entering many countries at once is the…", "Sprinkler approach", ["Waterfall approach", "Psychic proximity approach", "Uppsala approach"], "It needs higher investment but gives a first-mover advantage."),
      ask("Which is an advantage of the waterfall approach?", "Controlled expansion and learning", ["First-mover advantage", "A simultaneous worldwide launch", "Higher investment"], "Risk and investment are lower, and the firm learns from each market."),
      ask("Winning in emerging markets calls for…", "Affordable prices, adapted products and local marketing", ["Premium prices only", "Unchanged home products", "Global advertising alone"], "The chapter gives small sachets and rural video vans as examples."),
    ],
    lens: [
      { pairing: 1, adds: "A rule: begin no undertaking and scorn no foe until you have found the place to act from.", differs: "The couplet is military advice about ground. Market selection weighs countries on product suitability, proximity, economic potential and political stability." },
    ],
    reflect: "If a local business you know went abroad, which country would be its psychically closest first market?",
    summary: {
      points: [
        "Criteria: product suitability, geographic proximity, economic potential, political stability.",
        "Psychic proximity: similar language, culture and legal system.",
        "Waterfall: one by one, lower risk. Sprinkler: many at once, first-mover advantage. BRICS offer growth.",
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
    lead: "Entry modes run from exporting through licensing and joint ventures to direct investment, with commitment, risk, control and profit potential rising.",
    check: [
      ask("Selling through independent intermediaries at home is…", "Indirect exporting", ["Direct exporting", "Licensing", "Joint venture"], "In direct exporting the company handles its own exports."),
      ask("Which mode brings local expertise and easier government approval, with shared risk?", "Joint venture", ["Direct investment", "Indirect exporting", "Licensing"], "Joint ventures have been common in China and India."),
      ask("Which mode needs very high investment but gives full control?", "Direct investment (FDI)", ["Joint venture", "Direct exporting", "Licensing"], "It means building or buying production facilities abroad."),
    ],
    lens: [],
    reflect: "Think of a foreign brand in your country. Did it enter by exporting, licensing or franchising, a joint venture, or direct investment?",
    summary: {
      points: [
        "Indirect and direct exporting: low to medium commitment.",
        "Licensing (and franchising, contract manufacturing): low risk, low control.",
        "Joint venture shares ownership; FDI gives full control at very high investment.",
      ],
      memory: "Export, license, joint venture, invest: more commitment, more control.",
    },
  },
];

export default lessons;
