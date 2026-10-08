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
    lead: "Marketing finds out what people need and want, and offers them something they value, at a profit.",
    check: [
      ask("A want backed by the ability and willingness to pay is…", "Demand", ["A need", "Utility", "An exchange"], "Need, want plus buying power, demand. A need is only the felt deprivation, such as hunger; it is not yet tied to a product or to money."),
      ask("A dealer starts delivering refrigerators to villages that had no showroom nearby. Which utility does the dealer add?", "Place utility", ["Time utility", "Form utility", "Possession utility"], "Place utility makes the product available where buyers want it. Time utility is about when; possession utility comes from transferring ownership, helped by credit such as an EMI plan."),
      ask("Peter Drucker said the aim of marketing is to…", "Know the customer so well that the product sells itself", ["Make selling more persuasive and aggressive", "Produce goods as cheaply as possible", "Create needs that buyers did not have"], "Drucker argued that marketing makes selling superfluous. Aggressive selling is the selling concept, the opposite of his point; and marketers shape wants, but needs come first."),
    ],
    lens: [],
    reflect: "Think of something you bought recently. What was the need behind it, what was the want, and which kinds of utility did the seller add?",
    summary: {
      points: [
        "The AMA (2017) and Kotler define marketing as creating and exchanging value with others; Kotler and Keller: “meeting needs profitably”.",
        "Need is felt deprivation; want is the form it takes; demand is a want backed by ability and willingness to pay.",
        "Marketing works through exchange and adds form, place, time, possession and information utility.",
        "Drucker: the aim of marketing is to make selling superfluous.",
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
    lead: "Marketers manage demand: each of Kotler's eight states calls for a different task.",
    check: [
      ask("A strong need that no existing product satisfies is…", "Latent demand", ["No demand", "Negative demand", "Full demand"], "Latent demand calls for developmental marketing. No demand is different: a product exists, but buyers are unaware of it or uninterested."),
      ask("A hill-station hotel is full in December and half empty in July. Which task fits?", "Synchromarketing, to smooth demand with pricing and promotion", ["Demarketing, to reduce demand all year", "Remarketing, to reverse a decline", "Maintenance marketing, to keep demand as it is"], "Demand that varies by season is irregular, and its task is synchromarketing. Demarketing fits only overfull demand, and the hotel's problem is the swing, not a permanent excess."),
      ask("Railways face more holiday travellers than they have seats, and tobacco harms its users. Which tasks fit, in that order?", "Demarketing, then countermarketing", ["Countermarketing, then demarketing", "Synchromarketing, then conversional marketing", "Demarketing, then remarketing"], "Overfull demand for a wanted service is cut temporarily (demarketing). Unwholesome demand for a harmful product is discouraged for good (countermarketing). Swapping them is the usual slip."),
    ],
    lens: [],
    reflect: "Name a product in each of two different demand states today. What would you do as its marketer?",
    summary: {
      points: [
        "Marketing management is demand management: the level, timing and composition of demand.",
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
    lead: "Marketing thought moved from production, product and selling to the marketing, societal and holistic concepts.",
    check: [
      ask("Which concept holds that consumers will not buy enough unless persuaded?", "Selling concept", ["Product concept", "Production concept", "Marketing concept"], "The selling concept relies on aggressive selling of what the firm makes. The product concept believes buyers want the best quality and features, so it improves the product instead of pushing it."),
      ask("A bicycle maker keeps improving its frames while young buyers move to electric scooters. Its mistake is…", "Marketing myopia: defining itself by its product, not the need", ["The production concept: making bicycles too cheaply", "The selling concept: pushing bicycles too hard", "Societal marketing: caring too much about society"], "Levitt's marketing myopia is defining a business by its product rather than the need it meets, here getting around town. Nothing in the case shows cheap production or hard selling."),
      ask("A plan starts from stock in the warehouse and asks how to move it faster. Which concept is it following, and which way does it work?", "Selling concept, inside-out", ["Marketing concept, outside-in", "Selling concept, outside-in", "Marketing concept, inside-out"], "Selling starts from the factory and works inside-out, seeking profit from sales volume. The marketing concept would start from a customer group and its needs: outside-in."),
    ],
    lens: [
      { pairing: 0, adds: "A rule for traders: true trade is to guard others' goods and interests as one's own.", differs: "The couplet is moral advice to traders. The marketing concept adds the specific machinery of studying a target market and satisfying its needs better than competitors." },
    ],
    reflect: "Pick a brand you know. Does it behave more like the selling concept (inside-out) or the marketing concept (outside-in)? What shows it?",
    summary: {
      points: [
        "Six philosophies: production, product, selling, marketing, societal and holistic; all still exist today.",
        "Marketing myopia (Levitt, 1960) defines a business by its product, not the need it meets.",
        "Selling works inside-out from the seller's need; marketing works outside-in from the buyer's.",
        "Holistic marketing: relationship, integrated, internal and performance marketing (once called socially responsible).",
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
    lead: "The marketing mix is the set of tools a firm controls, product, price, place and promotion, blended for one target market.",
    check: [
      ask("Who grouped the marketing mix tools into the 4Ps in 1960?", "E. Jerome McCarthy", ["Neil Borden", "Robert Lauterborn", "Jagdish Sheth"], "McCarthy grouped the tools into the 4Ps. Borden popularised the term ‘marketing mix’ but used a much longer list; Lauterborn gave the 4Cs in 1990."),
      ask("A shampoo maker sells ₹5 sachets through village kirana stores. Which of the 4As does the choice of kirana stores serve most directly?", "Accessibility", ["Affordability", "Awareness", "Acceptability"], "Kirana stores are place decisions, and place matches accessibility: can customers readily get it? The ₹5 price serves affordability, a different A."),
      ask("A tyre maker loses sales because local mechanics recommend a rival. Which response fits the marketing mix best?", "Work with mechanics: a place and promotion fix", ["Cut the price, since sales are falling", "Redesign the tyre, since buyers must dislike it", "Raise advertising budgets on national TV only"], "The cause lies with the mechanics who advise riders, a channel and communication problem. A price cut is tempting but costs margin and leaves the cause untouched."),
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
    lead: "Technology, globalisation, competition and empowered buyers keep changing what marketers must do, and give them new tools.",
    check: [
      ask("Computing and consumer electronics merging is an example of…", "Industry convergence", ["Disintermediation", "Privatisation", "Retail transformation"], "Convergence means industry boundaries blur. Disintermediation is different: it is about bypassing middlemen in a channel, not industries merging."),
      ask("A neighbourhood electronics shop adds its own website and home delivery to compete with online sellers. This is…", "Re-intermediation: it becomes brick-and-click", ["Disintermediation: it removes the middleman", "Industry convergence: it merges two industries", "Deregulation: it opens its market to rivals"], "The shop is the traditional firm replying to online rivals by adding online channels. Disintermediation is what the online sellers did to it, not its response."),
      ask("Buyers see few real differences between brands and switch easily. Which force is this, and what does it push marketers towards?", "Consumer resistance; sharper value and less unwanted marketing", ["Industry convergence; mergers between firms", "Globalisation; selling in more countries", "Heightened competition; fewer brands in the market"], "Consumer resistance makes buyers less loyal, more price- and quality-sensitive, and less tolerant of unwanted marketing. Heightened competition is related, but it describes rival brands, not buyers' attitudes."),
    ],
    lens: [],
    reflect: "Which of these forces has most changed how you yourself shop in the last few years?",
    summary: {
      points: [
        "Forces: network technology, globalisation, deregulation and privatisation, competition, convergence, retail transformation, disintermediation.",
        "Consumers have more buying power, information and voice, and more resistance.",
        "Traditional firms answer disintermediation with re-intermediation: brick-and-click.",
        "New capabilities: online channels, richer data, social and mobile marketing, permission marketing, mass customisation, cost savings.",
      ],
      memory: "Technology, globalisation and empowered buyers keep changing the task.",
    },
  },
];

export default lessons;
