import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "social-and-green-marketing",
    name: "Social marketing and green marketing",
    intro: "Marketing behaviour change for society, and sustainability sold honestly.",
    before: {
      q: "Can marketing techniques be used to sell a behaviour rather than a product?",
      choices: [
        { label: "No", reveal: "They can. Social marketing applies commercial marketing techniques to influence behaviour that benefits individuals and society, as in the pulse polio and Swachh Bharat campaigns." },
        { label: "Yes", reveal: "Right. Social marketing applies commercial marketing techniques to influence behaviour that benefits individuals and society, as in the pulse polio and Swachh Bharat campaigns." },
      ],
    },
    lead: "Social marketing sells a behaviour for society's good; green marketing sells sustainable products, and greenwashing is its main risk.",
    check: [
      ask("Who introduced the idea of social marketing, in 1971?", "Philip Kotler and Gerald Zaltman", ["Jay Conrad Levinson", "Booms and Bitner", "Kotler and Armstrong"], "Kotler and Zaltman introduced social marketing in 1971. Kotler and Armstrong is tempting because Kotler appears in both, but they wrote the principles of sustainable marketing."),
      ask("Parents agree that handwashing matters but skip it, because soap feels costly and the habit is new. Which component of the campaign is failing?", "Exchange: the benefits do not yet outweigh the costs", ["Audience: it targets the wrong people", "Behaviour: handwashing is the wrong goal", "Promotion: nobody has heard the message"], "The parents know and agree, so awareness is not the problem. They judge the costs higher than the benefits, so the campaign must cut the costs or raise the benefits."),
      ask("A firm prints ‘eco’ and a leaf on a detergent box but leaves the formula and pack unchanged. What is the main risk?", "Greenwashing that breeds consumer scepticism", ["A green premium buyers will gladly pay", "Eco-labelling that builds lasting trust", "Social marketing that changes behaviour"], "A green claim with nothing behind it is greenwashing, and it makes buyers doubt green claims in general. Eco-labelling is tempting, but a genuine label rests on a real environmental advantage."),
    ],
    lens: [
      { pairing: 0, adds: "A prayer to the Earth that what is dug from her may quickly grow again, without wounding her vitals and heart.", differs: "It is a prayer, not a policy. Green marketing adds eco-friendly products, eco-labelling, transparency and attention to the product life cycle." },
      { pairing: 1, adds: "An image: wealth gained by deceit is like water kept in a pot of unbaked clay; it will not hold.", differs: "The couplet speaks of deceit in general. Greenwashing is a specific risk of false environmental claims in green marketing." },
    ],
    reflect: "Think of a product sold as eco-friendly. What would convince you its claim is not greenwashing?",
    summary: {
      points: [
        "Social marketing (Kotler and Zaltman, 1971): audience, behaviour change, exchange theory, marketing mix.",
        "Exchange theory: the change must offer benefits that outweigh its perceived costs.",
        "Green marketing: eco-friendly products, sustainable processes, eco-labelling, green advertising.",
        "Greenwashing breeds scepticism; social marketing is not the societal marketing concept.",
      ],
      memory: "Sell behaviour change for society; sell sustainability honestly.",
    },
  },
  {
    blockId: "green-marketing-in-practice",
    name: "Green marketing in practice",
    intro: "The green mix, practices, strategies and principles, across a product's whole life.",
    before: {
      q: "Will buyers always pay more for a green product?",
      choices: [
        { label: "Always", reveal: "Only when they see added value, such as better performance, design or health benefits." },
        { label: "Only for added value", reveal: "Right. Green pricing works when buyers see added value." },
      ],
    },
    lead: "Green marketing applies the marketing mix across a product's life, from materials to disposal, and every claim must be backed.",
    check: [
      ask("Which three things do companies check for eco-friendliness?", "Raw materials, the product and its packaging", ["Price, promotion and place", "Staff, suppliers and shareholders", "Advertising, PR and sales"], "Materials, product and packaging cover what a product is made of, what it is and what it comes in. The 4Ps are tempting, but they are the tools for marketing it, not what is checked."),
      ask("A green cleaner costs more than the usual brand but works no better and looks the same. Why does it sell poorly?", "Buyers pay a premium only for added value they see", ["Green products cannot be sold through shops", "Green claims are not allowed on packs", "Buyers never pay more for any product"], "Green pricing works only when buyers see added value, such as performance, design or health benefits. ‘Buyers never pay more’ is too strong: they do pay a premium when they see that value."),
      ask("A plant's power bill is ₹4 lakh a month, and solar panels cut it by a quarter. What is the saving in a year?", "₹12 lakh", ["₹1 lakh", "₹48 lakh", "₹4 lakh"], "A quarter of ₹4 lakh is ₹1 lakh a month, and 12 × ₹1 lakh = ₹12 lakh a year. ₹1 lakh is tempting, but it is the monthly saving, not the yearly one."),
    ],
    lens: [],
    reflect: "Find a product that claims to be green. Which part of its mix supports the claim, and is there any sign of greenwashing?",
    summary: {
      points: [
        "Green products conserve resources and avoid pollution; firms check materials, product and packaging.",
        "Green 4Ps: a premium only for visible added value; availability shapes who buys.",
        "Strategies: green design, positioning, pricing and disposal.",
        "Kotler and Armstrong's five principles are of sustainable marketing, which green marketing applies; beware greenwashing.",
      ],
      memory: "Green product, price, place and promotion.",
    },
  },
  {
    blockId: "online-and-direct-marketing",
    name: "Online and direct marketing",
    intro: "Targeted, measurable marketing that asks for a response, and how to measure it.",
    before: {
      q: "In performance marketing, when does the advertiser pay?",
      choices: [
        { label: "For every view", reveal: "Not in performance marketing. The advertiser pays only when a measurable action occurs, such as a click, lead or sale." },
        { label: "Only for results", reveal: "Right. The advertiser pays only when a measurable action occurs, such as a click, lead or sale." },
      ],
    },
    lead: "Online marketing uses digital platforms for targeted, measurable engagement; direct marketing asks each customer for an immediate, measurable response.",
    check: [
      ask("Improving where a site appears in search rankings is the purpose of…", "Search engine optimisation (SEO)", ["Pay-per-click advertising", "Content marketing", "Email marketing"], "SEO works on search rankings. Pay-per-click is tempting because it also involves search, but it buys paid clicks and traffic instead."),
      ask("A company sends sales agents door to door to sell its products. This is…", "Direct selling", ["Direct marketing", "Inbound marketing", "Affiliate marketing"], "Selling face to face away from a shop is direct selling. Direct marketing is tempting, but it reaches customers through media such as mail, phone or email."),
      ask("₹50,000 of pay-per-click ads brings 10,000 clicks, and 2% of visitors buy. What is the cost per order?", "₹250", ["₹5", "₹500", "₹2,500"], "10,000 × 2% = 200 orders, and ₹50,000 ÷ 200 = ₹250. ₹5 is tempting, but it is the cost per click (₹50,000 ÷ 10,000), not per order."),
    ],
    lens: [],
    reflect: "Recall an online ad that made you click. Which component of online marketing was it, and would you have bought anyway?",
    summary: {
      points: [
        "Online components: SEO, content, social media, email, PPC.",
        "Strategies: inbound, affiliate, influencer and performance marketing; challenges include data privacy.",
        "Cost per order = ad spend ÷ orders; ads pay while it stays below the margin per order.",
        "Direct marketing: one-to-one, immediate measurable response; not the same as direct selling.",
      ],
      memory: "Targeted, measurable and paid for by results.",
    },
  },
  {
    blockId: "digital-marketing",
    name: "Digital marketing",
    intro: "Internet, e- and digital marketing, its methods and how to plan it.",
    before: {
      q: "Is an electronic billboard part of digital marketing?",
      choices: [
        { label: "No", reveal: "It is. Digital marketing covers all marketing through digital interfaces, online or not." },
        { label: "Yes", reveal: "Right. Digital marketing is the widest term and includes offline digital channels." },
      ],
    },
    lead: "Digital marketing is the widest of three nested terms, and offers reach, targeting and measurable results.",
    check: [
      ask("Which term adds relationship building, email and CRM to internet marketing?", "E-marketing", ["Digital marketing", "Native advertising", "Search engine marketing"], "E-marketing is internet marketing plus relationships. Digital marketing is tempting, but it is wider still, adding offline digital channels such as electronic billboards."),
      ask("A sweet shop pays to appear at the top of search results for ‘sweets near me’. This is…", "Search engine marketing (SEM)", ["Search engine optimisation (SEO)", "Native advertising", "Marketing automation"], "Paying for placement in search results is SEM. SEO is tempting, but it improves a site's place in the free results, with no fee per click."),
      ask("The sweet shop has a goal, personas and channels, but no number to judge its results against. Which step is missing?", "Set clear benchmarks", ["Identify marketing goals", "Define buyer personas", "Settle the sales process"], "A benchmark, such as 30 office orders by mid-October, shows whether a channel works, so the shop can adjust. Goals are tempting, but the shop already has one: a goal says what it wants, a benchmark how much."),
    ],
    lens: [],
    reflect: "Pick a small business you know. Which basic digital methods would you start it with, and what benchmark would show they work?",
    summary: {
      points: [
        "Internet marketing sits within e-marketing, which sits within digital marketing.",
        "Methods include SEO, SEM, PPC, social media, email, affiliate, content, native ads and automation.",
        "Benefits: reach, low entry cost, measurable ROI, targeting, flexibility; budgets scale from basic to advanced.",
        "Strategy: goals, sales process, personas, channels, benchmarks, adjustment.",
      ],
      memory: "Goals, sales process, personas, channels, benchmarks, adjustment.",
    },
  },
  {
    blockId: "rural-marketing",
    name: "Rural marketing",
    intro: "Reaching rural consumers on their own terms.",
    before: {
      q: "Can a firm sell in villages just as it sells in cities?",
      choices: [
        { label: "Just the same", reveal: "Not really. Rural marketing needs efficient distribution, small affordable packs, adapted products and promotion in local languages." },
        { label: "It must adapt", reveal: "Right. Rural marketing needs efficient distribution, small affordable packs, adapted products and promotion in local languages." },
      ],
    },
    lead: "Rural marketing designs strategies for rural consumers, framed in India as the four As: availability, affordability, acceptability and awareness.",
    check: [
      ask("The four As of rural marketing are availability, affordability, acceptability and…", "Awareness", ["Advertising", "Assurance", "Adaptation"], "Awareness completes the four: people must know the product exists and what it does. Advertising is tempting, but it is one way to build awareness, not one of the four As."),
      ask("A firm launches its shampoo in villages in sachets costing a few rupees each. Which A is it addressing?", "Affordability", ["Availability", "Acceptability", "Awareness"], "Small packs let buyers pay out of daily income: affordability. Availability is tempting, but it is about getting the product to the village, not the price of one purchase."),
      ask("A place that is not a statutory town has 6,000 people, 500 people per sq km, and 60% of male main workers outside farming. How does the Census class it?", "Rural: it fails the 75% test", ["Urban: it has over 5,000 people", "Urban: its density is over 400", "Rural: it has under 10,000 people"], "A census town must pass all three tests. This place passes population and density but fails the 75% test, so it is rural. Treating one passed test as enough is the tempting mistake."),
    ],
    lens: [
      { pairing: 2, adds: "However the world turns, it follows the plough, so farming, though hard, is foremost.", differs: "The couplet praises agriculture and does not speak of markets. Rural marketing adds distribution, small packs, local-language promotion and the four As." },
    ],
    reflect: "Think of a product sold in villages near you. How does it meet each of the four As?",
    summary: {
      points: [
        "Needs: efficient distribution, affordable small packs and sachets, adapted products, local languages.",
        "Four As: availability, affordability, acceptability, awareness.",
        "Census: urban means a statutory town, or 5,000+ people, 400+ per sq km and 75%+ of male main workers outside farming.",
        "Rural marketing runs both ways; agricultural marketing moves farm produce to buyers.",
      ],
      memory: "Available, affordable, acceptable, known.",
    },
  },
  {
    blockId: "guerrilla-and-roadblock-marketing",
    name: "Guerrilla and roadblock marketing",
    intro: "Cheap surprise against expensive saturation.",
    before: {
      q: "Does creating buzz always need a big media budget?",
      choices: [
        { label: "Always", reveal: "Not always. Guerrilla marketing uses creative, low-cost tactics that surprise people. Roadblock marketing is the expensive route, advertising on many channels at once." },
        { label: "Not always", reveal: "Right. Guerrilla marketing uses creative, low-cost tactics that surprise people. Roadblock marketing is the expensive route, advertising on many channels at once." },
      ],
    },
    lead: "Guerrilla marketing surprises people cheaply; roadblock marketing meets them on every channel at once.",
    check: [
      ask("Who wrote Guerrilla Marketing (1984)?", "Jay Conrad Levinson", ["Philip Kotler", "Seth Godin", "Gerald Zaltman"], "Jay Conrad Levinson's book popularised the idea. Kotler and Zaltman are tempting because they appear in this chapter, but they introduced social marketing."),
      ask("A phone brand books the same 9 pm ad break on all the major channels for its launch. This is…", "Roadblock marketing", ["Guerrilla marketing", "Ambush marketing", "Native advertising"], "The same message on many channels at the same time is a roadblock. Guerrilla marketing is tempting because both aim at recall, but guerrilla tactics are cheap and surprising, not saturating."),
      ask("A new café with almost no budget wants local buzz. Which approach fits, and what is its main weakness?", "Guerrilla; its effect on sales is hard to measure", ["Roadblock; it may cause ad fatigue", "Guerrilla; it costs too much to run", "Roadblock; it reaches too few people"], "Guerrilla tactics suit a small budget and a local audience, but their returns are hard to measure. A roadblock does risk ad fatigue, but the café cannot afford one."),
    ],
    lens: [],
    reflect: "Recall a campaign that seemed to be everywhere at once, or one that surprised you on the street. Which kind was it?",
    summary: {
      points: [
        "Guerrilla (Levinson, 1984): street, viral and experiential tactics for attention and recall; hard to measure.",
        "Roadblock: the same message on many channels at once for maximum reach; costly, risk of ad fatigue.",
        "Ambush marketing is one guerrilla tactic: linking a brand to an event without sponsoring it.",
        "Choose by budget and goal: guerrilla for local buzz, a roadblock for one big moment.",
      ],
      memory: "Guerrilla surprises cheaply; roadblock saturates expensively.",
    },
  },
];

export default lessons;
