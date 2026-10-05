import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-business-economics-is",
    name: "What business economics is",
    intro: "Economic theory applied to business decisions.",
    before: {
      q: "Which decisions inside a firm can economics inform?",
      choices: [
        { label: "None, it is for governments", reveal: "Business economics applies economic principles and methods to real business situations, informing production, pricing, investment and risk management." },
        { label: "Production and pricing", reveal: "Yes, and also investment and risk management. Business economics applies economic principles and methods to real business situations." },
      ],
    },
    lead: "Business economics applies economic principles to real business decisions.",
    check: [
      ask("Business economics informs decisions on…", "Production, pricing, investment and risk management", ["Only taxation", "Only wages", "Only advertising"], "Those are the decisions the chapter lists."),
      ask("What does business economics apply?", "Economic principles and methods to real business situations", ["Marketing tricks", "Court rules", "Accounting alone"], "That is its definition."),
    ],
    lens: [
      { pairing: 4, adds: "Prices fixed and watched by a market officer, with a stated profit margin over cost.", differs: "The Arthaśāstra describes an officer who fixes prices. The chapter's economics starts from why and how much people buy." },
    ],
    reflect: "Pick one decision about price or production at your workplace. What would economics ask about it?",
    summary: {
      points: [
        "Business economics applies economic principles and methods to real business situations.",
        "It informs production, pricing, investment and risk management.",
        "Its starting point here is demand: why and how much people buy.",
      ],
      memory: "Production, pricing, investment, risk.",
    },
  },
  {
    blockId: "managerial-economics",
    name: "Managerial economics",
    intro: "Economic theory put to work on business decisions.",
    before: {
      q: "Is managerial economics mainly about the whole economy or about the firm?",
      choices: [
        { label: "The whole economy", reveal: "Not mainly. Its core is microeconomic, centred on the firm; it uses macroeconomics to understand the environment the firm works in." },
        { label: "The firm", reveal: "Right. Its core is microeconomic, centred on the firm; it uses macroeconomics to understand the environment the firm works in." },
      ],
    },
    lead: "Managerial economics integrates economic theory with business practice to help managers decide and plan ahead.",
    check: [
      ask("Who defined managerial economics as the integration of economic theory with business practice for decision-making and forward planning?", "Spencer and Siegelman", ["Joel Dean", "Edwin Mansfield", "Alfred Marshall"], "Milton Spencer and Louis Siegelman (1959). Joel Dean wrote the first textbook on the subject in 1951."),
      ask("Managerial economics is described as normative because it…", "Says what the firm should do", ["Only describes what firms do", "Deals with the whole economy", "Avoids numbers"], "It prescribes decisions, which makes it normative and pragmatic."),
      ask("Which belongs to the operational (internal) side of its scope?", "Demand forecasting", ["Government policy", "Foreign trade", "National income"], "The others belong to the environmental (macro) side."),
    ],
    lens: [],
    reflect: "Which business decision you have seen could have been made better with a demand forecast or a cost analysis?",
    summary: {
      points: [
        "Integrates economic theory with business practice (Spencer and Siegelman, 1959); Joel Dean's 1951 text was the first.",
        "Mainly micro, normative, pragmatic, decision-oriented; uses macro for the environment.",
        "Operational scope: demand, cost, pricing, profit, capital. Environmental scope: the economy and policy.",
        "Objectives beyond profit: sales (Baumol), growth (Marris), satisficing (Simon).",
      ],
      memory: "Theory meets practice, for decisions and forward planning.",
    },
  },
  {
    blockId: "how-economics-has-been-defined",
    name: "How economics has been defined",
    intro: "Five writers, five emphases.",
    before: {
      q: "Which writer defined economics around scarcity and choice?",
      choices: [
        { label: "Adam Smith", reveal: "Smith (1776) stressed wealth. Scarcity and choice is Lionel Robbins (1932): human behaviour as a relation between ends and scarce means with alternative uses." },
        { label: "Lionel Robbins", reveal: "Yes: human behaviour as a relation between ends and scarce means with alternative uses (1932)." },
      ],
    },
    lead: "Wealth, welfare, scarcity and choice, income and employment, resources and growth: five emphases over time.",
    check: [
      ask("Which writer is linked to welfare, in 1890?", "Alfred Marshall", ["Adam Smith", "Lionel Robbins", "J. M. Keynes"], "Marshall: the study of the ordinary business of life, and human welfare."),
      ask("Which writer is linked to income and employment, in 1936?", "J. M. Keynes", ["Paul Samuelson", "Adam Smith", "Alfred Marshall"], "Keynes, in The General Theory: what determines a whole economy's income, output and employment."),
      ask("Which writer wrote in 1776, on wealth creation?", "Adam Smith", ["Alfred Marshall", "Lionel Robbins", "Paul Samuelson"], "The nature and causes of the wealth of nations."),
    ],
    lens: [
      { pairing: 0, adds: "Artha defined as the livelihood of people and the land they live on, with the science as the means of acquiring and protecting it.", differs: "Kauṭilya's definition closes a manual of statecraft. The five modern definitions come from economists writing from 1776 onward." },
    ],
    reflect: "Which of the five definitions best matches how you think about economics?",
    summary: {
      points: [
        "Adam Smith (1776): wealth. Alfred Marshall (1890): welfare. Lionel Robbins (1932): scarcity and choice.",
        "J. M. Keynes (1936): income and employment. Paul Samuelson (1948): resources, choice and growth.",
      ],
      memory: "Wealth, welfare, scarcity, income and employment, resources and growth.",
    },
  },
  {
    blockId: "demand",
    name: "Demand",
    intro: "A want backed by the ability and the willingness to pay.",
    before: {
      q: "If you want a car but cannot pay for it, is that demand?",
      choices: [
        { label: "Yes", reveal: "Not in economics. Effective demand is desire plus ability to pay plus willingness to pay." },
        { label: "No", reveal: "Right. Effective demand is desire plus ability to pay plus willingness to pay." },
      ],
    },
    lead: "A want becomes demand only when the buyer can pay and intends to.",
    check: [
      ask("Effective demand equals…", "Desire + ability to pay + willingness to pay", ["Price × quantity", "Income − expenditure", "Supply + cost"], "A want becomes demand only when the buyer can pay and intends to."),
      ask("A change in price causes…", "A movement along the demand curve", ["A shift of the whole curve", "No change", "A new product"], "A change in any other determinant shifts the curve."),
      ask("Which of these does NOT determine demand?", "Cost of production", ["Income", "Tastes and preferences", "Prices of related goods"], "Cost of production is a supply-side factor."),
    ],
    lens: [
      { pairing: 1, adds: "A third test beyond desire and means: whether the purchase is fitting.", differs: "The tradition's four aims are a framework for a good life. The link to willingness to pay is a reading offered for reflection." },
    ],
    reflect: "Think of something you wanted but did not buy. Which part of effective demand was missing?",
    summary: {
      points: [
        "Effective demand = desire + ability to pay + willingness to pay.",
        "Demand is the whole relationship between price and quantity; quantity demanded is the amount at one price.",
        "A price change moves you along the curve. Any other determinant shifts the curve.",
        "Determinants: price, income, tastes, related goods, expected prices, population and government policy.",
      ],
      memory: "Desire, ability, willingness.",
    },
  },
  {
    blockId: "the-demand-function",
    name: "The demand function",
    intro: "Quantity demanded as a function of its determinants.",
    before: {
      q: "Along a straight-line demand curve, is elasticity the same at every point?",
      choices: [
        { label: "Yes, the slope is constant", reveal: "No. The slope is constant, but elasticity is slope times P/Q, which changes along the line: high near the top, low near the bottom." },
        { label: "No", reveal: "Right. The slope is constant, but elasticity is slope times P/Q, which changes along the line: high near the top, low near the bottom." },
      ],
    },
    lead: "The demand function writes demand as depending on own price, related prices, income, tastes, expectations, population and advertising.",
    check: [
      ask("In Dx = f(Px, Pr, Y, T, E, N, A), what does Y stand for?", "Income", ["Yield", "Year", "Tastes"], "T is tastes, E expectations, N population and A advertising."),
      ask("For Q = 50 − 2.5P, what is the quantity demanded at P = 12?", "20", ["5", "12", "30"], "50 − 2.5 × 12 = 50 − 30 = 20."),
      ask("Moving down a straight-line demand curve, elasticity…", "Falls", ["Rises", "Stays the same", "Becomes negative infinity"], "Elasticity = slope × P/Q, and P/Q falls as you move down the line."),
    ],
    lens: [],
    reflect: "Pick something you buy often. Which variable in the demand function moves your purchases most?",
    summary: {
      points: [
        "Dx = f(Px, Pr, Y, T, E, N, A).",
        "Schedule: a table of prices and quantities; curve: its graph.",
        "Linear functions have constant slope; non-linear ones do not.",
        "Slope is not elasticity: elasticity changes along a straight line.",
      ],
      memory: "Price plus six other forces; the slope is not the elasticity.",
    },
  },
  {
    blockId: "law-of-demand",
    name: "Law of demand",
    intro: "Other things equal, a lower price means a higher quantity demanded.",
    before: {
      q: "When the price falls, does quantity demanded usually rise or fall?",
      choices: [
        { label: "Rise", reveal: "Yes, other things equal. Three reasons explain it: the income effect, the substitution effect and diminishing marginal utility." },
        { label: "Fall", reveal: "Not normally. The law of demand says it rises, other things equal, for three reasons: the income effect, the substitution effect and diminishing marginal utility." },
      ],
    },
    lead: "The curve slopes downward for three reasons: income, substitution and diminishing marginal utility.",
    check: [
      ask("A change in income, tastes or related prices does what to the demand curve?", "Shifts the whole curve", ["Moves along it", "Flattens it", "Nothing"], "Price changes move along the curve; other changes shift it."),
      ask("Which is NOT one of the three reasons the curve slopes downward?", "A rising cost of production", ["The income effect", "The substitution effect", "Diminishing marginal utility"], "Cost of production belongs to supply."),
      ask("A lower price raises real purchasing power. Which effect is that?", "The income effect", ["The substitution effect", "The Giffen effect", "The Veblen effect"], "The substitution effect is that the good becomes cheaper relative to alternatives."),
    ],
    lens: [
      { pairing: 2, adds: "Two lines on either side of diminishing marginal utility: desire is not quenched by consuming, and contact-born pleasures have a beginning and an end.", differs: "Manu and the Gītā speak of desire and pleasure in general. They do not link price to the quantity bought." },
    ],
    reflect: "Think of a price cut that made you buy more. Which of the three effects was at work?",
    summary: {
      points: [
        "Other things equal, when price falls quantity demanded rises, and when price rises it falls.",
        "Income effect: a lower price raises real purchasing power.",
        "Substitution effect: the good becomes cheaper relative to alternatives.",
        "Diminishing marginal utility: each extra unit is worth less, so buyers pay less for more.",
      ],
      memory: "Price down, quantity up, other things equal.",
    },
  },
  {
    blockId: "exceptions-and-special-demand-effects",
    name: "Exceptions and special demand effects",
    intro: "When a higher price can raise demand.",
    before: {
      q: "Can a higher price ever make people buy more?",
      choices: [
        { label: "No, never", reveal: "Sometimes it does. Under the Veblen effect a higher price raises status, so demand rises. Under the Giffen effect a price rise raises demand for an inferior good." },
        { label: "Sometimes", reveal: "Yes. Veblen: a higher price raises status. Giffen: a strong income effect outweighs substitution for an inferior good." },
      ],
    },
    lead: "Four special effects can bend the law of demand: Veblen, Giffen, snob and bandwagon.",
    check: [
      ask("A higher price raises status, so demand rises. Which effect?", "Veblen", ["Giffen", "Snob", "Bandwagon"], "Luxury cars are the example."),
      ask("Others buy, so the consumer follows. Which effect?", "Bandwagon", ["Snob", "Veblen", "Giffen"], "Trending smartphones are the example."),
      ask("A buyer expecting prices to rise buys more now. Which exception is this?", "Speculative goods", ["Necessities", "The snob effect", "The Giffen effect"], "Necessities are the other exception: demand is very inelastic."),
    ],
    lens: [
      { pairing: 3, adds: "The motive behind status buying (“who else is my equal?”) and the habit of following what the eminent do.", differs: "The Gītā portrays pride and imitation in general. The link to Veblen and bandwagon demand is a reading offered for reflection." },
    ],
    reflect: "Have you ever bought something because of what its price said, or because others had it?",
    summary: {
      points: [
        "Veblen: a higher price raises status. Giffen: price rises, demand rises, for an inferior good.",
        "Snob: demand rises with exclusivity. Bandwagon: others buy, so the consumer follows.",
        "Speculative goods and necessities are two further exceptions.",
        "A high price can also be read as a sign of quality.",
      ],
      memory: "Veblen: status. Giffen: staple. Snob: exclusive. Bandwagon: follow.",
    },
  },
  {
    blockId: "types-of-demand",
    name: "Types of demand",
    intro: "Seven ways to describe what people want to buy.",
    before: {
      q: "Is demand for steel a demand in its own right?",
      choices: [
        { label: "Yes, independent", reveal: "It is derived demand: it depends on demand for another good, such as cars." },
        { label: "It depends on cars", reveal: "Right. Steel for cars is derived demand: it depends on demand for another good." },
      ],
    },
    lead: "Demand comes in seven types, from individual to independent.",
    check: [
      ask("Car and petrol, used together, are an example of…", "Joint demand", ["Composite demand", "Derived demand", "Direct demand"], "Joint demand is for goods used together."),
      ask("Electricity, with several uses, is an example of…", "Composite demand", ["Joint demand", "Derived demand", "Independent demand"], "Composite demand is for a good with several uses."),
      ask("Salt, unaffected by other goods, is an example of…", "Independent demand", ["Direct demand", "Derived demand", "Market demand"], "Independent demand is unaffected by other goods."),
    ],
    lens: [],
    reflect: "Find one example of derived demand in an industry you know.",
    summary: {
      points: [
        "Individual (one consumer) and market (all consumers).",
        "Joint (goods used together), composite (a good with several uses), derived (depends on another good).",
        "Direct (final consumption) and independent (unaffected by other goods).",
      ],
      memory: "Individual, market, joint, composite, derived, direct, independent.",
    },
  },
  {
    blockId: "demand-forecasting",
    name: "Demand forecasting",
    intro: "Estimating future demand, by asking people or by reading the data.",
    before: {
      q: "A firm is launching a product nobody has sold before. Can it forecast demand from past sales trends?",
      choices: [
        { label: "Yes", reveal: "It has no past sales to project. For a new product, survey methods, expert opinion or a market experiment are the usual routes." },
        { label: "No", reveal: "Right. There is no sales history to project, so survey methods, expert opinion or a market experiment are the usual routes." },
      ],
    },
    lead: "Demand forecasting estimates future demand by survey methods (asking) or statistical methods (reading the data).",
    check: [
      ask("In the Delphi method, experts…", "Answer anonymously in rounds until their estimates converge", ["Meet face to face and vote once", "Are replaced by a regression model", "Test-market the product"], "It was developed at RAND in the 1950s; seeing a summary of others' views, experts revise in rounds."),
      ask("Using building permits to predict cement demand is the…", "Barometric method", ["Trend projection method", "End-use method", "Collective opinion method"], "Building permits are a leading indicator that moves before cement demand."),
      ask("Which method assumes the past pattern of sales continues?", "Trend projection", ["Market experiment", "Delphi method", "Survey of buyers' intentions"], "It fits a trend to past sales, for example by least squares, and extends it."),
    ],
    lens: [],
    reflect: "If you had to forecast next year's demand for a product you know, which method would you trust most, and why?",
    summary: {
      points: [
        "Short-run uses: production, pricing, sales targets, finance. Long-run: capacity, investment, manpower.",
        "Survey methods: buyers' intentions, sales-force opinion, expert opinion and Delphi, market experiments.",
        "Statistical methods: trend projection, regression, barometric (leading indicators).",
        "Surveys suit new products; statistics suit established ones.",
      ],
      memory: "Ask people, or read the numbers; for something new, ask.",
    },
  },
];

export default lessons;
