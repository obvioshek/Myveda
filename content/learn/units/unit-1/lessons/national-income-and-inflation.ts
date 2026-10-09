import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "national-income",
    name: "National income",
    intro: "The value of everything an economy produces in a year, counted once.",
    before: {
      q: "Do the three methods of measuring national income give three different answers?",
      choices: [
        { label: "Yes", reveal: "In principle all three give the same answer: output (value added) = income = expenditure." },
        { label: "No", reveal: "Right. In principle all three give the same answer: output (value added) = income = expenditure." },
      ],
    },
    lead: "National income is the value of all final goods and services a country's residents produce in a year, counted once, by output, income or spending.",
    check: [
      ask("The income method measures national income as…", "W + R + I + P: wages, rent, interest and profit", ["C + I + G + (X − M): spending on final output", "Output minus intermediate consumption at each stage", "National income divided by the population"], "The income method adds the payments to the factors of production. C + I + G + (X − M) is the expenditure method, which reaches the same total from the spending side."),
      ask("A bakery buys flour, and a family buys the same flour for its kitchen. Which purchase counts as final output?", "Only the family's", ["Only the bakery's", "Both of them", "Neither of them"], "What matters is the use. The bakery's flour is used up in making bread, so it is intermediate and is counted inside the price of the bread. Counting it again would be double counting."),
      ask("Wheat sells for ₹10,000, the flour made from it for ₹15,000, and the bread made from the flour for ₹22,000. The farmer buys no inputs. What does this chain add to national income?", "₹22,000", ["₹47,000", "₹15,000", "₹7,000"], "Value added is ₹10,000 + ₹5,000 + ₹7,000 = ₹22,000, the value of the final bread. ₹47,000 adds every sale and counts the wheat three times."),
    ],
    lens: [
      { pairing: 0, adds: "A list of revenue heads (fortified cities, countryside, mines, irrigation works, forests, herds and trade routes), with an accounts office recording income and expenditure.", differs: "The Arthaśāstra records a state's revenue. National income counts the final value of what an economy produces." },
    ],
    reflect: "Which of the three methods, product (value added), income or expenditure, would be easiest to apply to your own household?",
    summary: {
      points: [
        "National income: the money value of all final goods and services produced by a country's residents in a year, at factor cost (NNP at factor cost).",
        "Only final goods count, to avoid double counting; value added at each stage sums to the final value.",
        "Three methods: product (value added), income (W + R + I + P) and expenditure (C + I + G + X − M); in principle all agree.",
        "Excluded: transfer payments, second-hand sales and purely financial transactions.",
      ],
      memory: "Output = income = expenditure.",
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
    lead: "Each aggregate starts from GDP and adds or takes away one item: net factor income from abroad, depreciation, net indirect taxes, and then what households keep.",
    check: [
      ask("GNP equals…", "GDP + net factor income from abroad", ["GDP − depreciation", "GDP − net indirect taxes", "NNP + depreciation"], "GNP counts what residents earn, wherever they earn it. Subtracting depreciation turns gross into net, which is a different switch."),
      ask("A foreign-owned factory in Pune makes a profit for its owners abroad. That profit is…", "Part of India's GDP, but subtracted to reach its GNP", ["Part of India's GNP, but not its GDP", "Left out of both GDP and GNP", "Counted twice, in GDP and in GNP"], "GDP counts what is produced inside the borders, whoever owns it. GNP counts what residents earn, so profit earned for non-residents is taken away."),
      ask("NNP at market price is ₹900 crore, indirect taxes are ₹110 crore and subsidies ₹10 crore. National income is…", "₹800 crore", ["₹1,000 crore", "₹780 crore", "₹790 crore"], "National income = NNP at market price − indirect taxes + subsidies = 900 − 110 + 10 = ₹800 crore. ₹790 crore wrongly subtracts the subsidies; ₹1,000 crore adds the taxes."),
    ],
    lens: [],
    reflect: "Which of these measures would you use to compare living standards between two countries, and why?",
    summary: {
      points: [
        "GDP = C + I + G + (X − M). GNP = GDP + NFIA. NNP = GNP − depreciation.",
        "National income = NNP at market price − indirect taxes + subsidies.",
        "Personal income = NI − undistributed profits − corporate taxes + transfers. Disposable income = PI − personal taxes.",
        "Per capita income = NI ÷ population.",
        "Three switches: domestic to national (NFIA), gross to net (depreciation), market price to factor cost (net indirect taxes).",
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
    lead: "Inflation is a persistent rise in the general price level, so each rupee buys less; demand can pull it, costs can push it, and expectations can build it in.",
    check: [
      ask("A wage-price spiral driven by expectations of future inflation is…", "Built-in inflation", ["Demand-pull inflation", "Cost-push inflation", "Stagflation"], "Workers ask for more pay because they expect prices to rise, and firms raise prices to cover it. Cost-push is the tempting choice, but it starts from a cost shock such as oil, not from expectations."),
      ask("A poor monsoon raises food prices, and output falls while prices rise. Which kind of inflation is this most like?", "Cost-push, which can lead to stagflation", ["Demand-pull, from heavy spending", "Disinflation, as the rate slows", "Built-in, from wage expectations"], "A supply shock shifts supply left: prices rise while output falls. Demand-pull would raise prices and output together."),
      ask("Prices rise 25%. By how much does the purchasing power of ₹100 fall?", "By 20%: it now buys what ₹80 did", ["By 25%: it now buys what ₹75 did", "By 125%: it buys nothing", "Not at all, since ₹100 is still ₹100"], "₹100 ÷ 1.25 = ₹80, so purchasing power falls by a fifth. Taking 25% off ₹100 is the common slip: a 25% rise in prices cuts what money buys by 1 − 1 ÷ 1.25, which is 20%."),
    ],
    lens: [],
    reflect: "What has risen in price most over the last few years in your own life?",
    summary: {
      points: [
        "Inflation: a persistent rise in the general price level, which lowers purchasing power.",
        "Causes: demand-pull (AD shifts right), cost-push (AS shifts left), built-in (wage-price spiral).",
        "Creeping below about 3%; walking roughly 3 to 10%; running roughly 10 to 20%; hyperinflation above 50% a month (Cagan).",
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
    lead: "A price index tracks the cost of a basket against a base year of 100; CPI, WPI and the GDP deflator watch different baskets.",
    check: [
      ask("Which measure covers every good and service in the economy, with a changing basket?", "The GDP deflator", ["The consumer price index", "The wholesale price index", "Per capita income"], "The deflator compares nominal and real GDP, so its basket is this year's whole output. CPI and WPI use fixed baskets, and WPI leaves out services."),
      ask("A firm wants to link a contract to the cost of its raw materials, all bought in bulk. Which index fits best?", "The wholesale price index", ["The consumer price index", "The GDP deflator", "Per capita income"], "WPI tracks bulk and producer prices of goods. CPI is the tempting choice, but it tracks what households pay, including services the firm does not buy."),
      ask("The CPI rises from 120 to 126. What is the inflation rate?", "5%", ["6%", "126%", "4.8%"], "(126 − 120) ÷ 120 × 100 = 5%. The index rose 6 points, but points equal per cent only when the starting index is 100."),
    ],
    lens: [],
    reflect: "Which of the three indices would matter most to a household, and which to a factory?",
    summary: {
      points: [
        "CPI = current basket price ÷ base price × 100: consumer prices and the cost of living, including services.",
        "WPI = current wholesale price ÷ base price × 100: bulk and producer prices, no services.",
        "GDP deflator = nominal GDP ÷ real GDP × 100: every good and service, a changing basket.",
        "Inflation rate = change in the index ÷ last period's index × 100.",
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
    lead: "Inflation moves wealth from lenders to borrowers and from fixed incomes to rising ones; monetary, fiscal, price control and supply-side tools slow it.",
    check: [
      ask("Raising the repo rate and the cash reserve ratio is which kind of tool?", "Monetary policy", ["Fiscal policy", "A price control measure", "A supply-side measure"], "Both are set by the central bank, the RBI. Fiscal policy is the tempting slip, but it means the government's taxes and spending."),
      ask("Prices are rising mainly because a poor monsoon has cut the harvest. Which tool is likely to work least well on its own?", "Raising interest rates", ["Releasing buffer stocks of food", "Removing transport bottlenecks", "Improving logistics and storage"], "Higher interest rates cool demand, but this inflation comes from a supply shock. The other options add supply, which is what is short."),
      ask("A deposit pays 7% a year and inflation is 9%. Roughly what is the real interest rate?", "About −2%", ["About 16%", "About 2%", "About 7%"], "Real rate ≈ nominal rate − inflation = 7% − 9% = −2%. 7% is the nominal rate on paper; what it buys is shrinking."),
    ],
    lens: [
      { pairing: 1, adds: "Taxation tied to a limit and to a return for the public: taken little by little, like the bee takes honey.", differs: "Manu and Kālidāsa speak of how a king should tax. The chapter's fiscal policy uses taxes and spending to control inflation." },
      { pairing: 2, adds: "A state expected to act on prices directly when markets fail.", differs: "The chapter offers this as a reading: the Arthaśāstra describes a superintendent fixing prices and relief in calamity, while modern policy adds ceilings, subsidies and rationing." },
    ],
    reflect: "Which of the four tools do you think works fastest, and which slowest?",
    summary: {
      points: [
        "Moderate inflation can lift spending, investment, production and employment.",
        "High inflation cuts purchasing power and savings, deepens inequality and raises uncertainty; borrowers gain, lenders and fixed incomes lose.",
        "Real interest rate ≈ nominal rate − inflation.",
        "Tools: monetary policy (RBI: repo rate, CRR, SLR, open market operations), fiscal policy, price control measures, supply-side measures.",
      ],
      memory: "Monetary, fiscal, price control, supply-side.",
    },
  },
];

export default lessons;
