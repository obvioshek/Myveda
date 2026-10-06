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
    lead: "Portfolio analysis rates each business on market attractiveness and its own strength, then decides where to invest.",
    check: [
      ask("The units analysed in portfolio analysis are…", "Strategic business units (SBUs)", ["Individual employees", "Departments of one factory", "Shareholders"], "An SBU has its own mission and objectives and can be planned independently."),
      ask("Portfolio analysis rates each SBU on market attractiveness and…", "The strength of its position", ["The age of its managers", "Its number of employees", "Its tax rate"], "Two dimensions: attractiveness of the market and strength of position there."),
      ask("What is the second step in designing the portfolio?", "Shaping the future portfolio with growth and downsizing strategies", ["Analysing the current portfolio", "Writing the vision", "Hiring new managers"], "The first step analyses the current portfolio."),
    ],
    lens: [],
    reflect: "Pick a large company with many brands. Which of its businesses do you think deserves more investment, and which less?",
    summary: {
      points: [
        "The portfolio is the collection of businesses and products that make up the company.",
        "Two steps: analyse the current portfolio, then shape the future one.",
        "Each SBU is rated on market attractiveness and the strength of its position.",
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
    lead: "The BCG matrix sorts SBUs into stars, cash cows, question marks and dogs, and suggests build, hold, harvest or divest.",
    check: [
      ask("High growth and low share is a…", "Question mark", ["Star", "Cash cow", "Dog"], "It needs a lot of cash just to hold its share."),
      ask("What does the horizontal axis of the BCG matrix measure?", "Relative market share", ["Market growth rate", "Profit margin", "Number of employees"], "Share compared with the largest competitor, a measure of strength."),
      ask("Which is a limit of the BCG matrix?", "High market share does not always mean high profit", ["It has nine cells", "It ignores market growth", "It uses weighted scores"], "Also, two single measures stand in for attractiveness and strength."),
    ],
    lens: [
      { pairing: 0, adds: "Even a narrow income does no harm so long as the outflow is not wider than the inflow.", differs: "The couplet speaks of a ruler's or household's treasury. The BCG matrix sorts business units so that cash cows' surplus covers what stars and question marks consume." },
    ],
    reflect: "Think of a company's product range you know. Which product would you call its cash cow, and which a question mark?",
    summary: {
      points: [
        "Axes: market growth rate (attractiveness) and relative market share (strength).",
        "Star: build or hold; cash cow: hold or harvest; question mark: build or phase out; dog: harvest or divest.",
        "SBUs often move from question mark to star to cash cow to dog.",
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
    lead: "The GE–McKinsey matrix plots industry attractiveness against business unit strength in nine cells and three zones: grow, hold, harvest.",
    check: [
      ask("What is plotted on the horizontal axis?", "Business unit strength", ["Industry attractiveness", "Market growth rate", "Relative market share"], "Industry attractiveness is on the vertical axis."),
      ask("For the three diagonal cells of average position, the strategy is…", "Selectivity: invest selectively and manage for earnings", ["Invest to grow", "Harvest or divest", "Liquidate at once"], "This is the hold zone."),
      ask("Market share, profit margins and brand strength are factors in…", "Business unit strength", ["Industry attractiveness", "PESTEL", "The value chain"], "Industry attractiveness uses external factors such as market size and growth."),
    ],
    lens: [
      { pairing: 1, adds: "Keep still like the heron when the time is not ripe; strike like its beak when the moment comes.", differs: "The couplet is about timing an attack. The GE–McKinsey zones are about allocating capital across business units by attractiveness and strength." },
    ],
    reflect: "If you had to split investment across three ventures you know, which would sit in the invest zone, and why?",
    summary: {
      points: [
        "Developed by McKinsey for General Electric in the early 1970s.",
        "Axes are weighted scores: industry attractiveness (external) and business unit strength (internal).",
        "Zones: invest/grow, selectivity/hold, harvest/divest; richer but more subjective than BCG.",
      ],
      memory: "Nine cells, three zones: grow, hold, harvest.",
    },
  },
];

export default lessons;
