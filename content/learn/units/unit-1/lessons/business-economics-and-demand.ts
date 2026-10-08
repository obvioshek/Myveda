import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-business-economics-is",
    name: "What business economics is",
    intro: "Economic ideas put to work on a firm's choices.",
    before: {
      q: "Which decisions inside a firm can economics inform?",
      choices: [
        { label: "None, it is for governments", reveal: "In fact many. Business economics applies economic principles and methods to real business situations: production, pricing, investment and risk management." },
        { label: "Production and pricing", reveal: "Yes, and also investment and risk management. Business economics applies economic principles and methods to real business situations." },
      ],
    },
    lead: "Business economics uses the ideas and tools of economics to help a firm choose what to produce, what to charge, where to invest and how to handle risk.",
    check: [
      ask("Business economics is best described as…", "Applying economic principles and methods to real business decisions", ["Recording a firm's past income and spending in its books", "Studying only the national economy, not single firms", "Setting the rules for how companies are taxed"], "It looks ahead at the choices a firm must make. Recording past income and spending is accounting, which looks back."),
      ask("A kirana owner asks whether a second fridge will pay for itself through extra cold-drink sales. Which kind of decision is this?", "Investment", ["Pricing", "Risk management", "Production"], "Spending money now for returns later is an investment decision. Pricing would ask what to charge for the drinks, not whether to buy the fridge."),
      ask("The owner's ₹50,000 could earn ₹4,000 a year as extra stock. She buys a fridge with it instead. What is the ₹4,000?", "The opportunity cost of the fridge", ["An expense shown in her accounts", "The fridge's yearly running cost", "The profit the fridge has made"], "It is the value of the best alternative given up. No account shows it, so it is not an accounting expense, yet it is a real cost of the choice."),
    ],
    lens: [
      { pairing: 4, adds: "Prices fixed and watched by a market officer, with a stated profit margin over cost.", differs: "The Arthaśāstra describes an officer who fixes prices. The chapter's economics starts from why and how much people buy." },
    ],
    reflect: "Pick one decision about price or production at your workplace. What would economics ask about it, and what would it be giving up?",
    summary: {
      points: [
        "Business economics applies economic principles and methods to real business situations; it is the same subject as managerial economics.",
        "It informs four kinds of decision: production, pricing, investment and risk management.",
        "Opportunity cost, the value of the best alternative given up, is a real cost even though no account shows it.",
        "Accounting records the past; business economics looks ahead at choices.",
      ],
      memory: "Production, pricing, investment, risk.",
    },
  },
  {
    blockId: "managerial-economics",
    name: "Managerial economics",
    intro: "Economic theory put to work on a manager's decisions and plans.",
    before: {
      q: "Is managerial economics mainly about the whole economy or about the firm?",
      choices: [
        { label: "The whole economy", reveal: "Not mainly. Its core is microeconomic, centred on the firm; it uses macroeconomics to understand the environment the firm works in." },
        { label: "The firm", reveal: "Right. Its core is microeconomic, centred on the firm; it uses macroeconomics to understand the environment the firm works in." },
      ],
    },
    lead: "Managerial economics integrates economic theory with business practice to help managers decide and plan ahead: mainly micro, normative and forward-looking.",
    check: [
      ask("Who defined managerial economics as the integration of economic theory with business practice for decision-making and forward planning?", "Spencer and Siegelman", ["Joel Dean", "Edwin Mansfield", "Brigham and Pappas"], "Spencer and Siegelman (1959) gave that wording. Joel Dean wrote the first textbook (1951), but defined the subject as the use of economic analysis in formulating business policies."),
      ask("Before adding a second shift, a Pune auto-parts plant asks whether interest rates will rise. Which side of the scope is this?", "Environmental: the external, macro side", ["Operational: the internal, micro side", "Neither: it is a question for accountants", "Operational, because it affects cost"], "Interest rates belong to the financial sector and the wider economy, so the question is environmental. The cost of the second shift itself would be an operational question."),
      ask("A firm takes any order that keeps total profit above a set minimum, to push its revenue as high as possible. Which model of objectives fits?", "Baumol's sales revenue maximisation", ["Marris's growth maximisation", "Simon's satisficing", "Traditional profit maximisation"], "Baumol's firm maximises sales revenue subject to a minimum profit. Marris is tempting, but his firm maximises its rate of growth, not its revenue."),
    ],
    lens: [],
    reflect: "Which business decision you have seen could have been made better with a demand forecast or a cost analysis?",
    summary: {
      points: [
        "Integrates economic theory with business practice for decision-making and forward planning (Spencer and Siegelman, 1959); Joel Dean's 1951 book was the first textbook.",
        "Nature: mainly micro, normative, pragmatic, forward-looking, conceptual and quantitative; it uses macro to read the environment.",
        "Scope: operational (demand, cost, pricing, profit, capital) and environmental (the economy, policy, finance, trade).",
        "Objectives beyond profit: sales revenue (Baumol), growth (Marris), satisficing (Simon).",
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
        { label: "Adam Smith", reveal: "Smith (1776) stressed wealth. Scarcity and choice is Lionel Robbins (1932): human behaviour as a relationship between ends and scarce means which have alternative uses." },
        { label: "Lionel Robbins", reveal: "Yes: human behaviour as a relationship between ends and scarce means which have alternative uses (1932)." },
      ],
    },
    lead: "Five classic definitions put the weight on wealth, welfare, scarcity and choice, income and employment, and growth.",
    check: [
      ask("Economics as “human behaviour as a relationship between ends and scarce means which have alternative uses” is the definition of…", "Lionel Robbins (1932)", ["Alfred Marshall (1890)", "Adam Smith (1776)", "Paul Samuelson (1948)"], "Robbins put scarcity and choice at the centre. Marshall is tempting because his definition is as famous, but he stressed welfare: the material requisites of well-being."),
      ask("A fest committee has ₹2 lakh. A band costs ₹1.5 lakh and food stalls ₹1 lakh, and it books the band. In Robbins's terms, the food stalls are…", "The opportunity cost of the band", ["The scarce means", "The ends the committee chose", "A cost already paid"], "The scarce means are the ₹2 lakh. The food stalls are the best alternative given up, which is the opportunity cost of booking the band."),
      ask("Robbins criticised Marshall's welfare definition. What was his objection?", "“Material” leaves out scarce, paid services, such as a teacher's", ["It left out the income and employment of the whole economy", "It said nothing about how nations create wealth", "It described the government's welfare benefits"], "Services are scarce and paid for, yet not material. The neglect of unemployment was Keynes's later concern, and Robbins's own definition says little about it."),
    ],
    lens: [
      { pairing: 0, adds: "Artha defined as the livelihood of people and the land they live on, with the science as the means of acquiring and protecting it.", differs: "Kauṭilya's definition closes a manual of statecraft. The five modern definitions come from economists writing from 1776 onward." },
    ],
    reflect: "Which of the five definitions best matches how you think about economics, and what does it leave out?",
    summary: {
      points: [
        "Adam Smith (1776): wealth. Alfred Marshall (1890): welfare, the ordinary business of life.",
        "Lionel Robbins (1932): scarcity and choice, ends and scarce means with alternative uses.",
        "J. M. Keynes (1936): income and employment. Paul Samuelson (1948): resources, choice and growth.",
        "Robbins objected that “material” welfare leaves out services; modern textbooks combine the definitions.",
      ],
      memory: "Smith wealth, Marshall welfare, Robbins scarcity, Keynes employment, Samuelson growth.",
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
    lead: "Demand is how much buyers are willing and able to buy at each price over a period; a price change moves along the curve, anything else shifts it.",
    check: [
      ask("Effective demand equals…", "Desire + ability to pay + willingness to pay", ["Desire + income + price of the good", "Desire + supply + willingness to pay", "Ability to pay + price + time period"], "A want becomes demand only when the buyer can pay and intends to. Desire and income alone miss the willingness to pay."),
      ask("A housing society opens near a kirana store. At the same ₹20, biscuit sales rise from 100 to 130 packets a week. This is…", "An increase in demand: the curve shifts right", ["An expansion of quantity demanded along the curve", "A contraction of quantity demanded", "A decrease in demand: the curve shifts left"], "The price did not change; population, another determinant, did, so the whole curve shifted. An expansion would need a fall in the good's own price."),
      ask("A firm's raw-material costs rise, so it raises its price and buyers buy less. How is this best described?", "A contraction of quantity demanded, through the price", ["A decrease in demand, since cost determines demand", "An increase in demand, since the price rose", "A shift of the demand curve to the left"], "Cost of production is a supply-side factor. It reached buyers only through the good's own price, which moves along the curve. Calling it a decrease in demand treats cost as a determinant of demand."),
    ],
    lens: [
      { pairing: 1, adds: "A third test beyond desire and means: whether the purchase is fitting.", differs: "The tradition's four aims are a framework for a good life. The link to willingness to pay is a reading offered for reflection." },
    ],
    reflect: "Think of something you wanted but did not buy. Which part of effective demand was missing?",
    summary: {
      points: [
        "Effective demand = desire + ability to pay + willingness to pay, over a stated period.",
        "Demand is the whole price–quantity relationship; quantity demanded is the amount at one price.",
        "Own price: a movement along the curve (expansion or contraction). Any other determinant: a shift (increase or decrease).",
        "Determinants: price, income, tastes, related goods, expected prices, population and government policy. Cost of production is not one.",
      ],
      memory: "Desire, ability, willingness.",
    },
  },
  {
    blockId: "the-demand-function",
    name: "The demand function",
    intro: "Quantity demanded written as a formula of its drivers.",
    before: {
      q: "Along a straight-line demand curve, is elasticity the same at every point?",
      choices: [
        { label: "Yes, the slope is constant", reveal: "No. The slope is constant, but elasticity is the slope term times P/Q, which changes along the line: high near the top, low near the bottom." },
        { label: "No", reveal: "Right. The slope is constant, but elasticity is the slope term times P/Q, which changes along the line: high near the top, low near the bottom." },
      ],
    },
    lead: "A demand function links quantity demanded to its drivers; on a straight line the slope stays fixed while elasticity falls down the line.",
    check: [
      ask("In Dx = f(Px, Pr, Y, T, E, N, A), what does Y stand for?", "Income", ["Yearly sales", "Tastes and preferences", "Expected future prices"], "Y is income. Tastes and preferences are T, expectations are E, population is N and advertising is A."),
      ask("A snack stall's demand is Q = 50 − 2.5P plates a day. How many plates does it sell at ₹16?", "10", ["40", "34", "25"], "50 − 2.5 × 16 = 50 − 40 = 10. 40 is the amount taken away, not the plates sold."),
      ask("For Q = 50 − 2.5P, what is the price elasticity at P = 12, sign ignored?", "1.5", ["2.5", "9", "0.6"], "Q = 20 at ₹12, so elasticity = 2.5 × 12 ÷ 20 = 1.5. 2.5 is the slope term alone, which is the same at every price; elasticity is not. 9 is the value at ₹18."),
    ],
    lens: [],
    reflect: "Pick something you buy often. Which variable in the demand function moves your purchases most?",
    summary: {
      points: [
        "Dx = f(Px, Pr, Y, T, E, N, A): own price, related prices, income, tastes, expectations, population, advertising.",
        "A demand schedule is a table of prices and quantities; the demand curve graphs it.",
        "Linear (Q = 50 − 2.5P): constant slope. Non-linear Q = aP⁻ᵇ: constant elasticity b.",
        "Slope is not elasticity: on Q = 50 − 2.5P elasticity is 9 at ₹18, 1 at the midpoint (₹10) and 0.25 at ₹4.",
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
    lead: "Other things equal, price and quantity demanded move in opposite directions, because of the income effect, the substitution effect and diminishing marginal utility.",
    check: [
      ask("A lower price raises buyers' real purchasing power, so they buy more. Which reason for the downward slope is this?", "The income effect", ["The substitution effect", "Diminishing marginal utility", "The bandwagon effect"], "Being able to afford more because the price fell is the income effect. The substitution effect is about the good becoming cheaper relative to alternatives."),
      ask("A kirana store sells 60 packets of biscuits a week at ₹25, 100 at ₹20 and 150 at ₹15. What does this schedule show?", "The law of demand: lower price, more packets sold", ["A shift of the demand curve at each price", "An exception: buyers want more at higher prices", "That demand rises whenever the price rises"], "Quantity rises as price falls, along one curve, with other things equal. A shift would mean more sold at the same price, which the table does not show."),
      ask("A sweet shop cuts prices in a Diwali sale, and sales jump. Why can't the owner credit the whole rise to the lower price?", "Festival demand rose too, so other things were not equal", ["The law of demand does not apply to sweets", "A price cut always shifts the demand curve", "Sweets are a Giffen good for most buyers"], "The law holds only with other things equal. At Diwali, demand itself rises, so a movement and a shift arrive together. A price cut alone moves along the curve; it never shifts it."),
    ],
    lens: [
      { pairing: 2, adds: "Two lines on either side of diminishing marginal utility: desire is not quenched by consuming, and contact-born pleasures have a beginning and an end.", differs: "Manu and the Gītā speak of desire and pleasure in general. They do not link price to the quantity bought." },
    ],
    reflect: "Think of a price cut that made you buy more. Which of the three effects was at work, and was anything else changing at the same time?",
    summary: {
      points: [
        "Other things equal, when price falls quantity demanded rises, and when price rises it falls.",
        "Income effect: a lower price raises real purchasing power. Substitution effect: the good becomes cheaper relative to alternatives.",
        "Diminishing marginal utility: each extra unit is worth less, so buyers pay less for more.",
        "Income and substitution effects together make the price effect. The law gives direction; elasticity gives size.",
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
        { label: "No, never", reveal: "Sometimes it does. Under the Veblen effect a higher price raises status. A Giffen good, a staple of the very poor, is bought more when its price rises." },
        { label: "Sometimes", reveal: "Yes. Veblen: a higher price raises status. Giffen: a strong income effect outweighs substitution for an inferior staple." },
      ],
    },
    lead: "In a few cases more is bought at a higher price: Veblen goods (status) and Giffen goods (a staple of the poor), with snob, bandwagon, speculation and necessities often listed alongside.",
    check: [
      ask("A higher price raises a good's status, so demand rises. Which effect is this?", "Veblen", ["Giffen", "Snob", "Bandwagon"], "Status from a high price is the Veblen effect. Snob is tempting, but it is about exclusivity: demand falls as others buy."),
      ask("A poor household buys 10 meals a day with ₹70: rice at ₹4 a meal and dal at ₹10, 5 of each. Rice rises to ₹5. To still eat 10 meals, how many rice meals must it buy?", "6", ["5", "4", "7"], "With r rice meals: 5r + 10(10 − r) = 70, so 5r = 30 and r = 6. Keeping 5 of each would cost ₹75, more than it has. It buys more rice at a higher price: the Giffen case."),
      ask("Salt's price rises and people buy almost as much as before. Is this an exception to the law of demand?", "No: quantity still falls a little, so the curve is steep", ["Yes: salt is a Giffen good, a staple of the poor", "Yes: salt is a Veblen good, bought for status", "No: the demand curve for salt has shifted right"], "Very inelastic demand still slopes down. A Giffen good needs people to buy more, not almost as much, and it must take a large share of the budget, which salt does not."),
    ],
    lens: [
      { pairing: 3, adds: "The motive behind status buying (“who else is my equal?”) and the habit of following what the eminent do.", differs: "The Gītā portrays pride and imitation in general. The link to Veblen and bandwagon demand is a reading offered for reflection." },
    ],
    reflect: "Have you ever bought something because of what its price said, or because others had it?",
    summary: {
      points: [
        "Veblen: a higher price raises status (The Theory of the Leisure Class, 1899). Giffen: a staple of the poor, bought more as its price rises.",
        "A Giffen good is strongly inferior, takes a large share of the budget and has no close substitute.",
        "Snob: demand rises with exclusivity. Bandwagon: others buy, so the consumer follows. Leibenstein named both in 1950.",
        "Speculation and necessities are often listed, but are not true exceptions: expectations shift the curve, and necessities have a steep one.",
      ],
      memory: "Veblen: status. Giffen: staple. Snob: exclusive. Bandwagon: follow.",
    },
  },
  {
    blockId: "types-of-demand",
    name: "Types of demand",
    intro: "Ways to classify demand, and what each tells a firm to watch.",
    before: {
      q: "Is demand for steel a demand in its own right?",
      choices: [
        { label: "Yes, independent", reveal: "It is derived demand: it depends on demand for another good, such as cars." },
        { label: "It depends on cars", reveal: "Right. Steel for cars is derived demand: it depends on demand for another good." },
      ],
    },
    lead: "Demand is grouped by who buys, how goods are linked and how long buyers have to adjust; each type tells a firm what to watch.",
    check: [
      ask("Electricity, used for lights, fans and machines, is an example of…", "Composite demand", ["Joint demand", "Derived demand", "Independent demand"], "One good wanted for several uses is composite demand. Joint demand is the reverse: two goods wanted together for one purpose, such as a car and petrol."),
      ask("A Pune firm's brake-pad sales rise and fall with car sales. Its demand is mainly…", "Derived demand", ["Direct demand", "Composite demand", "Independent demand"], "Nobody wants brake pads for their own sake; the demand comes from demand for cars. Direct demand is for final consumption, such as food."),
      ask("At ₹60 a litre, three families buy 2, 1 and 3 litres of milk a day. What is market demand at ₹60?", "6 litres a day", ["2 litres a day", "3 litres a day", "₹360 a day"], "Market demand adds every buyer's quantity at the same price: 2 + 1 + 3 = 6. ₹360 is the spending on that milk, not the quantity demanded."),
    ],
    lens: [],
    reflect: "Find one example of derived demand in an industry you know. Whose market would that firm need to watch?",
    summary: {
      points: [
        "Individual and market (all buyers added at each price); firm and industry.",
        "Joint (used together), composite (several uses), derived (depends on another good), direct (final consumption), independent (unaffected).",
        "Short-run and long-run: long-run demand is usually more elastic. Durables can be postponed and are partly replacements.",
        "A firm with derived demand watches its customers' markets, not only its own.",
      ],
      memory: "Car and petrol joint, electricity composite, steel for cars derived, salt independent.",
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
    lead: "Demand forecasting estimates future sales so a firm can plan, by asking people (survey methods) or reading past data (statistical methods).",
    check: [
      ask("In the Delphi method, experts…", "Answer anonymously in rounds until their estimates converge", ["Meet face to face and settle one figure by vote", "Feed past sales into a regression model", "Run a test market in a few towns"], "Experts see a summary of the others' views and revise, round by round, without names attached. A face-to-face vote is what Delphi replaces."),
      ask("A cement dealer watches building permits to judge demand months ahead. Which method is this?", "The barometric method", ["Trend projection", "The end-use method", "Collective opinion"], "Building permits are a leading indicator: they move before cement demand does. Trend projection would extend past sales instead of reading an indicator."),
      ask("A dealer's trend is Y = 50 + 5.4T thousand bags, where this year is T = 2. What is next year's forecast?", "66.2 thousand bags", ["60.8 thousand bags", "55.4 thousand bags", "71.6 thousand bags"], "Next year is T = 3: 50 + 5.4 × 3 = 50 + 16.2 = 66.2. 60.8 is the trend value for this year, T = 2, not a forecast."),
    ],
    lens: [],
    reflect: "If you had to forecast next year's demand for a product you know, which method would you trust most, and how would you check it?",
    summary: {
      points: [
        "Short-run uses: production, pricing, sales targets, working finance. Long-run uses: capacity, investment, manpower.",
        "Survey methods: buyers' intentions, sales-force opinion, expert opinion and Delphi, market experiments.",
        "Statistical methods: trend projection (Y = a + bT), regression, barometric (leading indicators).",
        "Surveys suit new products; statistics suit established ones. A forecast is not a target; forecast a range.",
      ],
      memory: "Ask people, or read the numbers; for something new, ask.",
    },
  },
];

export default lessons;
