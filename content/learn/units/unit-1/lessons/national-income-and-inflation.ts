import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "national-income",
    name: "National income",
    intro: "The value of everything an economy produces in a year.",
    before: {
      q: "Do the four methods of measuring national income give four different answers?",
      choices: [
        { label: "Yes", reveal: "In principle they all give the same answer: output = income = expenditure = value added." },
        { label: "No", reveal: "Right. In principle all four give the same answer: output = income = expenditure = value added." },
      ],
    },
    lead: "National income is the value of all final goods and services produced in a year, at factor cost.",
    check: [
      ask("Counting only final output avoids…", "Double counting", ["Inflation", "Taxes", "Imports"], "Intermediate goods are already inside the final price."),
      ask("The expenditure method is…", "C + I + G + (X − M)", ["W + R + I + P", "Output minus intermediate consumption", "The sum of value added at each stage"], "Consumption, investment, government expenditure, and exports minus imports."),
      ask("The income method is…", "NI = W + R + I + P", ["C + I + G + (X − M)", "NI ÷ population", "Nominal GDP ÷ real GDP"], "Wages, rent, interest and profit."),
    ],
    lens: [
      { pairing: 0, adds: "A list of revenue heads (fortified cities, countryside, mines, irrigation works, forests, herds and trade routes), with an accounts office recording income and expenditure.", differs: "The Arthaśāstra records a state's revenue. National income counts the final value of what an economy produces." },
    ],
    reflect: "Which of the four methods, product, income, expenditure or value added, would be easiest to apply to your own household?",
    summary: {
      points: [
        "National income: the monetary value of all final goods and services produced over a year, at factor cost.",
        "Four methods: product (output), income, expenditure and value added.",
        "In principle all give the same answer.",
      ],
      memory: "Output = income = expenditure = value added.",
    },
  },
  {
    blockId: "concepts-and-formulas",
    name: "Concepts and formulas",
    intro: "From GDP down to disposable income.",
    before: {
      q: "Is GNP the same as GDP?",
      choices: [
        { label: "Yes", reveal: "No. GNP = GDP + net factor income from abroad (NFIA)." },
        { label: "No", reveal: "Right. GNP is GDP plus net factor income from abroad." },
      ],
    },
    lead: "The flow runs GDP, GNP, NNP, national income, personal income and disposable income.",
    check: [
      ask("GNP equals…", "GDP + net factor income from abroad", ["GDP − depreciation", "C + I", "NI ÷ population"], "GNP is income earned by a country's residents at home and abroad."),
      ask("Per capita income equals…", "NI ÷ population", ["PI − personal taxes", "GDP − NNP", "C + I + G"], "A standard-of-living indicator."),
      ask("Disposable income equals…", "PI − personal taxes", ["NI − undistributed profits", "GNP − depreciation", "GDP + NFIA"], "Income left after personal taxes."),
    ],
    lens: [],
    reflect: "Which of these measures would you use to compare living standards between two countries, and why?",
    summary: {
      points: [
        "GDP = C + I + G + (X − M). GNP = GDP + NFIA. NNP = GNP − depreciation.",
        "National income = NNP at market price − indirect taxes + subsidies.",
        "Personal income = NI − undistributed profits − corporate taxes + transfers. Disposable income = PI − personal taxes.",
        "Per capita income = NI ÷ population.",
      ],
      memory: "GDP, GNP, NNP, national income, personal income, disposable income.",
    },
  },
  {
    blockId: "inflation",
    name: "Inflation",
    intro: "A persistent rise in the general price level.",
    before: {
      q: "If prices keep rising but more slowly than before, is that deflation?",
      choices: [
        { label: "Yes", reveal: "No. That is disinflation: prices still rise, but more slowly. Deflation is when the price level falls." },
        { label: "No", reveal: "Right. That is disinflation. Deflation is when the price level falls." },
      ],
    },
    lead: "Inflation lowers purchasing power. It comes from demand-pull, cost-push or built-in causes.",
    check: [
      ask("A wage-price spiral driven by expectations of future inflation is…", "Built-in inflation", ["Demand-pull inflation", "Cost-push inflation", "Stagflation"], "Demand-pull is demand above supply; cost-push is rising costs passed on."),
      ask("An inflation rate of roughly 10 to 20% is called…", "Running inflation", ["Walking inflation", "Hyperinflation", "Disinflation"], "Walking is roughly 3 to 10%."),
      ask("High inflation with high unemployment and stagnant growth is…", "Stagflation", ["Hyperinflation", "Disinflation", "Deflation"], "An unusual combination."),
    ],
    lens: [],
    reflect: "What has risen in price most over the last few years in your own life?",
    summary: {
      points: [
        "Causes: demand-pull, cost-push, built-in (wage-price spiral).",
        "Walking: roughly 3 to 10%. Running: roughly 10 to 20%. Hyperinflation: above 50% a month.",
        "Disinflation: the rate slows. Deflation: the price level falls. Stagflation: high inflation with high unemployment and stagnant growth.",
      ],
      memory: "Demand-pull, cost-push, built-in.",
    },
  },
  {
    blockId: "measuring-inflation",
    name: "Measuring inflation",
    intro: "Three indices, three views of prices.",
    before: {
      q: "Which index tracks the cost of living at the consumer level?",
      choices: [
        { label: "CPI", reveal: "Yes. CPI tracks consumer-level prices and the cost of living." },
        { label: "WPI", reveal: "No. WPI tracks bulk and producer prices and excludes services. CPI tracks consumer prices." },
      ],
    },
    lead: "CPI, WPI and the GDP deflator each measure inflation from a different angle.",
    check: [
      ask("The GDP deflator equals…", "Nominal GDP ÷ real GDP × 100", ["Current basket price ÷ base price × 100", "Current wholesale price ÷ base price × 100", "Real GDP ÷ nominal GDP"], "The other two formulas are for CPI and WPI."),
      ask("WPI excludes…", "Services", ["Bulk prices", "Producer prices", "Goods"], "It tracks bulk and producer prices."),
      ask("Which covers every good and service in the economy, with a changing basket?", "The GDP deflator", ["CPI", "WPI", "National income"], "CPI tracks consumer-level prices; WPI tracks producers' prices."),
    ],
    lens: [],
    reflect: "Which of the three indices would matter most to a household, and which to a factory?",
    summary: {
      points: [
        "CPI = current basket price ÷ base price × 100: consumer prices and the cost of living.",
        "WPI = current wholesale price ÷ base price × 100: bulk and producer prices, no services.",
        "GDP deflator = nominal GDP ÷ real GDP × 100: every good and service, a changing basket.",
      ],
      memory: "CPI: consumers. WPI: wholesale. Deflator: the whole economy.",
    },
  },
  {
    blockId: "effects-and-control",
    name: "Effects and control",
    intro: "What inflation does, and four ways to curb it.",
    before: {
      q: "Is moderate inflation always harmful?",
      choices: [
        { label: "Yes", reveal: "Not always. Moderate inflation can lift spending, investment, production and employment. High inflation cuts purchasing power and savings." },
        { label: "No", reveal: "Right. Moderate inflation can lift spending, investment, production and employment; high inflation cuts purchasing power and savings." },
      ],
    },
    lead: "Four sets of tools control inflation: monetary, fiscal, price control and supply-side measures.",
    check: [
      ask("Raising interest rates and reserve ratios is which tool?", "Monetary policy", ["Fiscal policy", "Price control measures", "Supply-side measures"], "It is the central bank's tool."),
      ask("Lowering government spending and raising taxes is which tool?", "Fiscal policy", ["Monetary policy", "Supply-side measures", "Rationing"], "Fiscal policy is the government's tool."),
      ask("Removing supply bottlenecks and improving logistics is which tool?", "A supply-side measure", ["Price control", "Monetary policy", "Fiscal policy"], "Supply-side measures raise production and efficiency."),
    ],
    lens: [
      { pairing: 1, adds: "Taxation tied to a limit and to a return for the public: taken little by little, like the bee takes honey.", differs: "Manu and Kālidāsa speak of how a king should tax. The chapter's fiscal policy uses taxes and spending to control inflation." },
      { pairing: 2, adds: "A state expected to act on prices directly when markets fail.", differs: "The chapter offers this as a reading: the Arthaśāstra describes a superintendent fixing prices and relief in calamity, while modern policy adds ceilings, subsidies and rationing." },
    ],
    reflect: "Which of the four tools do you think works fastest, and which slowest?",
    summary: {
      points: [
        "Moderate inflation can lift spending, investment, production and employment.",
        "High inflation cuts purchasing power and savings, deepens inequality and raises uncertainty.",
        "Tools: monetary policy, fiscal policy, price control measures, supply-side measures.",
      ],
      memory: "Monetary, fiscal, price control, supply-side.",
    },
  },
];

export default lessons;
