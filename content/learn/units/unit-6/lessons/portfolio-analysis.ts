import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "designing-the-business-portfolio",
    name: "Designing the business portfolio",
    intro: "Deciding which businesses get more, less or no investment.",
    before: {
      q: "Should every business in a portfolio get an equal share of resources?",
      choices: [
        { label: "Equal shares", reveal: "No. Strong resources go to the more profitable businesses; weaker ones are phased down or dropped." },
        { label: "Unequal shares", reveal: "Right. Strong resources go to the more profitable businesses; weaker ones are phased down or dropped." },
      ],
    },
    lead: "A company's businesses do not deserve equal money. Portfolio analysis rates each one on how attractive its market is and how strong it is there.",
    check: [
      ask("In portfolio analysis, which of these is a strategic business unit (SBU)?", "A product line with its own customers, rivals and plan", ["The finance department that serves the whole firm", "The company's board of directors", "A single factory shift"], "An SBU has its own market, mission and objectives and can be planned on its own. A department such as finance serves the whole firm and has no market of its own, so it is not an SBU."),
      ask("A consumer goods company leads the slow-growing packaged tea market. How would portfolio analysis rate this business?", "Low market attractiveness, high strength", ["High market attractiveness, high strength", "Low market attractiveness, low strength", "High market attractiveness, low strength"], "Slow growth makes the market less attractive, while leading it shows strength. Being the leader does not make the market itself attractive."),
      ask("The company has ₹100 crore for four businesses. Which approach fits portfolio analysis?", "Give more to strong businesses in attractive markets, less to weak ones", ["Give each business ₹25 crore to be fair", "Give the most to the business with the most staff", "Give the most to the business that is losing most"], "Portfolio analysis directs strong resources to the more profitable businesses and phases down weaker ones. Equal shares look fair but ignore where the money will earn most."),
    ],
    lens: [],
    reflect: "Pick a large company with many brands. Which of its businesses do you think deserves more investment, and which less?",
    summary: {
      points: [
        "The business portfolio is the collection of businesses and products that make up the company (Kotler and Armstrong).",
        "Two steps: analyse the current portfolio, then shape the future one with growth and downsizing strategies.",
        "The unit of analysis is the SBU: a division, product line or brand that can be planned on its own.",
        "Each SBU is rated on market attractiveness and the strength of its position; businesses also share costs, so ratings start the argument, not end it.",
      ],
      memory: "Rate each business on market attractiveness and its own strength.",
    },
  },
  {
    blockId: "bcg-matrix",
    name: "The BCG growth-share matrix",
    intro: "Placing each SBU by market growth and relative market share.",
    before: {
      q: "A business with high market share in a slow-growing market: does it need heavy investment?",
      choices: [
        { label: "Heavy investment", reveal: "No. That is a cash cow: established, needing little investment and producing surplus cash to fund other SBUs." },
        { label: "Little investment", reveal: "Right. That is a cash cow: established, needing little investment and producing surplus cash to fund other SBUs." },
      ],
    },
    lead: "The BCG matrix places each business by market growth and relative market share, so cash from cash cows can fund stars and question marks.",
    check: [
      ask("A business in a fast-growing market has a small share next to the leader. In the BCG matrix it is a…", "Question mark", ["Star", "Cash cow", "Dog"], "High growth with low share is a question mark: it needs a lot of cash just to hold its share. A star also has high growth, but with high share."),
      ask("A ready-to-eat meals business grows at 20% a year, but the leader is five times its size and the firm sees no way to close the gap. What does BCG logic suggest?", "Phase it out and move the money to its star", ["Harvest it as a cash cow", "Hold its share at the current level", "Invest more because the market is growing"], "A question mark that cannot become a star should be phased out. Market growth alone does not justify investing; it is not a cash cow because its share is low."),
      ask("A firm has a 30% market share; the next largest rival has 15%. What is its relative market share?", "2.0", ["0.5", "0.3", "1.5"], "Relative share is the firm's share divided by its largest rival's: 30 ÷ 15 = 2.0. For a leader, the rival is the next largest firm. 0.5 is the ratio upside down."),
    ],
    lens: [
      { pairing: 0, adds: "Even a narrow income does no harm so long as the outflow is not wider than the inflow.", differs: "The couplet speaks of a ruler's or household's treasury. The BCG matrix sorts business units so that cash cows' surplus covers what stars and question marks consume." },
    ],
    reflect: "Think of a company's product range you know. Which product would you call its cash cow, and which a question mark?",
    summary: {
      points: [
        "Axes: market growth rate (attractiveness) and relative market share, own share ÷ largest rival's (strength).",
        "Star: build or hold; cash cow: hold or harvest; question mark: build or phase out; dog: harvest or divest.",
        "SBUs often move from question mark to star to cash cow to dog; cash cows fund the rest.",
        "Limits: one measure per axis, share is not always profit, a dog may still have strategic value, and market definition shifts the result.",
      ],
      memory: "Stars, cash cows, question marks, dogs: build, hold, harvest, divest.",
    },
  },
  {
    blockId: "ge-mckinsey-matrix",
    name: "The GE–McKinsey nine-cell matrix",
    intro: "Composite scores on two axes, nine cells and three zones.",
    before: {
      q: "Compared with the BCG matrix, is the GE–McKinsey matrix simpler?",
      choices: [
        { label: "Simpler", reveal: "No. It uses composite, weighted scores and nine cells, so it is richer than the BCG's four, though more subjective." },
        { label: "Richer", reveal: "Right. It uses composite, weighted scores and nine cells, so it is richer than the BCG's four, though more subjective." },
      ],
    },
    lead: "The GE–McKinsey matrix scores each business on many weighted factors, for industry attractiveness and business unit strength, and places it in one of nine cells.",
    check: [
      ask("What sets the GE–McKinsey matrix apart from the BCG matrix?", "Each axis is a weighted score of several factors", ["It uses market growth and relative share", "It has four cells instead of nine", "It needs no judgement from managers"], "The GE–McKinsey builds each axis from many weighted factors and has nine cells. Market growth and relative share are the BCG's single measures."),
      ask("A business is in a highly attractive industry, but its competitive position is only average. Which zone is it in?", "Invest / grow", ["Selectivity / hold", "Harvest / divest", "Outside the grid"], "One high and the other medium falls in the invest/grow zone. The hold zone is the diagonal of average overall position, such as medium and medium."),
      ask("Weights 0.5, 0.3, 0.2 and ratings 4, 4, 3 give what business unit strength score?", "3.8", ["3.7", "11.0", "4.0"], "0.5 × 4 + 0.3 × 4 + 0.2 × 3 = 2.0 + 1.2 + 0.6 = 3.8. Adding the ratings without weights gives 11, which ignores how much each factor matters."),
    ],
    lens: [
      { pairing: 1, adds: "Keep still like the heron when the time is not ripe; strike like its beak when the moment comes.", differs: "The couplet is about timing an attack. The GE–McKinsey zones are about allocating capital across business units by attractiveness and strength." },
    ],
    reflect: "If you had to split investment across three ventures you know, which would sit in the invest zone, and why?",
    summary: {
      points: [
        "Developed by McKinsey for General Electric in the early 1970s.",
        "Axes are weighted scores: industry attractiveness (external) and business unit strength (internal).",
        "Each score: multiply weight by rating for every factor, add, then call it high, medium or low.",
        "Zones: invest/grow, selectivity/hold, harvest/divest; richer but more subjective than BCG.",
      ],
      memory: "Nine cells, three zones: grow, hold, harvest.",
    },
  },
];

export default lessons;
