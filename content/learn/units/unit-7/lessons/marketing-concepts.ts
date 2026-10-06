import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-marketing-is",
    name: "What marketing is",
    intro: "Creating, communicating, delivering and exchanging value.",
    before: {
      q: "You are hungry and want a dosa. Does that alone make you part of the demand for dosas?",
      choices: [
        { label: "Yes", reveal: "Not yet. A want becomes demand only when it is backed by the ability and willingness to pay, as when you buy a ₹120 dosa at a restaurant." },
        { label: "Not yet", reveal: "Right. Hunger is the need and the dosa is the want; it becomes demand only when backed by the ability and willingness to pay." },
      ],
    },
    lead: "Marketing creates and exchanges value, turning needs into wants and, with buying power, into demand.",
    check: [
      ask("A want backed by the ability and willingness to pay is…", "Demand", ["A need", "Utility", "An exchange"], "Need, want plus buying power, demand."),
      ask("Which utility comes from making the product available when buyers want it?", "Time utility", ["Place utility", "Form utility", "Possession utility"], "Place utility is about where; time utility is about when."),
      ask("The form a need takes, shaped by culture and personality, is a…", "Want", ["Demand", "Need", "Offering"], "Hunger is the need; a dosa or a burger is the want."),
    ],
    lens: [],
    reflect: "Think of something you bought recently. What was the need behind it, what was the want, and which kinds of utility did the seller add?",
    summary: {
      points: [
        "The AMA (2017) and Kotler define marketing as creating and exchanging value with others.",
        "Need is felt deprivation; want is the form it takes; demand is a want backed by ability and willingness to pay.",
        "Marketing works through exchange and adds form, place, time, possession and information utility.",
      ],
      memory: "Need, want plus buying power, demand.",
    },
  },
  {
    blockId: "states-of-demand",
    name: "States of demand",
    intro: "Kotler's eight states of demand and the task each sets.",
    before: {
      q: "Do marketers ever try to reduce demand?",
      choices: [
        { label: "Never", reveal: "They do. With overfull demand, demarketing reduces demand temporarily; with unwholesome demand, countermarketing tries to end it." },
        { label: "Sometimes", reveal: "Right. Demarketing answers overfull demand, and countermarketing answers unwholesome demand." },
      ],
    },
    lead: "Marketers manage demand: each of eight states calls for a different task.",
    check: [
      ask("A strong need that no existing product satisfies is…", "Latent demand", ["No demand", "Negative demand", "Full demand"], "The task is developmental marketing."),
      ask("Smoothing seasonal swings in demand with flexible pricing is…", "Synchromarketing", ["Demarketing", "Remarketing", "Countermarketing"], "It answers irregular demand."),
      ask("The task for unwholesome demand, as with tobacco, is…", "Countermarketing", ["Maintenance marketing", "Stimulational marketing", "Conversional marketing"], "It persuades people to give the product up."),
    ],
    lens: [],
    reflect: "Name a product in each of two different demand states today. What would you do as its marketer?",
    summary: {
      points: [
        "Negative demand needs conversional marketing; no demand, stimulational; latent, developmental; declining, remarketing.",
        "Irregular demand needs synchromarketing; full demand, maintenance marketing.",
        "Overfull demand needs demarketing; unwholesome demand, countermarketing.",
      ],
      memory: "Negative, none, latent, declining, irregular, full, overfull, unwholesome.",
    },
  },
  {
    blockId: "marketing-philosophies",
    name: "How marketing philosophies evolved",
    intro: "From making and selling to sensing and responding.",
    before: {
      q: "A railway company sees itself as being in the railroad business. Is that a problem?",
      choices: [
        { label: "No, it is accurate", reveal: "Levitt called this marketing myopia: defining a business by its product rather than by the need it meets. The railways were really in transport." },
        { label: "Yes, it is narrow", reveal: "Right. Levitt called this marketing myopia: defining a business by its product rather than by the need it meets. The railways were really in transport." },
      ],
    },
    lead: "Marketing thought moved from production, product and selling to marketing, societal and holistic concepts.",
    check: [
      ask("Which concept holds that consumers will not buy enough unless persuaded?", "Selling concept", ["Product concept", "Production concept", "Marketing concept"], "It relies on aggressive selling and promotion of what the firm makes."),
      ask("‘Sense and respond’ rather than ‘make and sell’ describes the…", "Marketing concept", ["Selling concept", "Production concept", "Product concept"], "The marketing concept starts from the target market's needs."),
      ask("Which is not one of the four components of holistic marketing?", "Production marketing", ["Relationship marketing", "Internal marketing", "Integrated marketing"], "The four are relationship, integrated, internal and performance marketing."),
    ],
    lens: [
      { pairing: 0, adds: "A rule for traders: true trade is to guard others' goods and interests as one's own.", differs: "The couplet is moral advice to traders. The marketing concept adds the specific machinery of studying a target market and satisfying its needs better than competitors." },
    ],
    reflect: "Pick a brand you know. Does it behave more like the selling concept (inside-out) or the marketing concept (outside-in)? What shows it?",
    summary: {
      points: [
        "Six philosophies: production, product, selling, marketing, societal and holistic.",
        "Marketing myopia (Levitt, 1960) defines a business by its product, not the need it meets.",
        "Selling works inside-out from the seller's need; marketing works outside-in from the buyer's.",
        "Holistic marketing: relationship, integrated, internal and performance marketing.",
      ],
      memory: "Production, product, selling, marketing, societal, holistic.",
    },
  },
  {
    blockId: "the-marketing-mix",
    name: "The marketing mix: 4Ps, 4Cs and 4As",
    intro: "The controllable tools, seen from the seller's and the buyer's side.",
    before: {
      q: "Is ‘price’ the same thing from the seller's side and the customer's side?",
      choices: [
        { label: "Yes, just price", reveal: "Lauterborn restated price as customer cost, and Sheth and Sisodia as affordability: are customers able and willing to pay?" },
        { label: "It looks different", reveal: "Right. Lauterborn restated price as customer cost, and Sheth and Sisodia as affordability: are customers able and willing to pay?" },
      ],
    },
    lead: "The marketing mix is the blend of controllable tools a firm uses to get the response it wants from its target market.",
    check: [
      ask("Who grouped the marketing mix tools into the 4Ps in 1960?", "E. Jerome McCarthy", ["Neil Borden", "Robert Lauterborn", "Jagdish Sheth"], "Borden popularised the term; McCarthy grouped the tools into the 4Ps."),
      ask("In Lauterborn's 4Cs, place becomes…", "Convenience", ["Communication", "Customer cost", "Customer solution"], "Product is customer solution, price is customer cost, promotion is communication."),
      ask("In the 4As, ‘do customers know about it and what it does?’ is…", "Awareness", ["Acceptability", "Accessibility", "Affordability"], "Awareness matches promotion."),
    ],
    lens: [],
    reflect: "Take a product you use often. How would you rate it on acceptability, affordability, accessibility and awareness?",
    summary: {
      points: [
        "The marketing mix is a set of controllable tools; Borden popularised the term, McCarthy (1960) gave the 4Ps.",
        "Lauterborn's 4Cs (1990): customer solution, customer cost, convenience, communication.",
        "Sheth and Sisodia's 4As: acceptability, affordability, accessibility, awareness.",
        "Services add people, process and physical evidence.",
      ],
      memory: "Product, price, place, promotion, seen from the buyer's side.",
    },
  },
  {
    blockId: "forces-reshaping-marketing",
    name: "Forces reshaping marketing",
    intro: "The societal forces that keep changing the marketer's job.",
    before: {
      q: "When shoppers order directly from a website and skip the local dealer, what is it called?",
      choices: [
        { label: "Disintermediation", reveal: "Right. Online sellers bypass traditional channels; traditional firms respond with re-intermediation, becoming ‘brick-and-click’." },
        { label: "Integration", reveal: "It is disintermediation: online sellers bypass the traditional flow of goods through channels." },
      ],
    },
    lead: "Technology, globalisation, competition and empowered consumers keep changing what marketers must do, and give them new tools.",
    check: [
      ask("Buyers who see few real differences between products and become less loyal show…", "Consumer resistance", ["Industry convergence", "Deregulation", "Consumer participation"], "They become more price- and quality-sensitive and less tolerant of unwanted marketing."),
      ask("Computing and consumer electronics merging is an example of…", "Industry convergence", ["Disintermediation", "Privatisation", "Retail transformation"], "Industry boundaries blur."),
      ask("Traditional retailers that add online selling become…", "‘Brick-and-click’ firms", ["‘Pure-click’ firms", "Conglomerates", "Wholesalers"], "That is re-intermediation."),
    ],
    lens: [],
    reflect: "Which of these forces has most changed how you yourself shop in the last few years?",
    summary: {
      points: [
        "Forces: network technology, globalisation, deregulation and privatisation, competition, convergence, retail transformation, disintermediation.",
        "Consumers have more buying power, information and voice, and more resistance.",
        "New capabilities: online channels, richer data, social and mobile marketing, permission marketing, mass customisation, cost savings.",
      ],
      memory: "Technology, globalisation and empowered buyers keep changing the task.",
    },
  },
];

export default lessons;
