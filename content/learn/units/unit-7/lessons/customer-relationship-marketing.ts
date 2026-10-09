import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "relationship-marketing-and-crm",
    name: "Relationship marketing and CRM",
    intro: "Long-term relationships rather than single transactions.",
    before: {
      q: "Is it usually cheaper to win a new customer than to keep an old one?",
      choices: [
        { label: "Cheaper to win", reveal: "Usually not. Keeping customers costs less than winning new ones; Reichheld and Sasser (1990) found that cutting defections by 5 per cent could raise profits by 25 to 85 per cent." },
        { label: "Cheaper to keep", reveal: "Right. Keeping customers usually costs less; Reichheld and Sasser (1990) found that cutting defections by 5 per cent could raise profits by 25 to 85 per cent." },
      ],
    },
    lead: "Relationship marketing treats a customer as a long relationship, not a single sale; CRM is the system that carries the strategy out.",
    check: [
      ask("How does relationship marketing (CRMk) differ from customer relationship management (CRM)?", "CRMk is the strategy; CRM is the system that carries it out", ["CRMk is the software; CRM is the strategy behind it", "CRMk covers partners; CRM covers only employees", "CRMk wins new buyers; CRM only handles complaints"], "Relationship marketing decides whom to keep and how; CRM records data and touch points to do it. The reverse is the common slip: a firm can buy CRM software and still have no relationship strategy."),
      ask("A hotel guest books online, checks in, orders room service and uses the gym. In CRM terms, each of these is a…", "Touch point", ["Segment of one", "Structural tie", "Churn event"], "A touch point is any occasion on which a customer meets the brand, and CRM records them all. A segment of one is the one-to-one idea of treating each customer separately, not a single contact."),
      ask("A family brings a store ₹3,600 of profit a year and will stay two more years. Discounting at 10% a year, what is its CLV, roughly?", "About ₹6,250", ["₹7,200", "About ₹5,950", "₹3,600"], "CLV = 3,600 ÷ 1.1 + 3,600 ÷ 1.21 = 3,273 + 2,975 ≈ ₹6,250. ₹7,200 adds the two years without discounting, but CLV is a present value: a rupee earned later is worth less today."),
    ],
    lens: [],
    reflect: "List three touch points you had with one brand this week. Which of them made you feel like a client rather than a customer?",
    summary: {
      points: [
        "Relationship marketing (Berry, 1983): attracting, maintaining and enhancing customer relationships.",
        "CRMk is the strategy; CRM manages detailed information about customers and every touch point to maximise loyalty (Kotler and Keller).",
        "Retention usually costs less than acquisition: cutting defections 5 per cent raised profits 25 to 85 per cent (Reichheld and Sasser, 1990).",
        "CLV is the present value of a customer's future profits; churn is the rate at which customers leave.",
      ],
      memory: "CRMk is the strategy; CRM is the technology.",
    },
  },
  {
    blockId: "one-to-one-and-permission-marketing",
    name: "One-to-one and permission marketing",
    intro: "Each customer as a segment of one, and messages sent with consent.",
    before: {
      q: "Should a marketer send messages whenever it likes?",
      choices: [
        { label: "Yes, reach is all", reveal: "That is interruption marketing. Permission marketing asks for consent first, so messages are anticipated, personal and relevant." },
        { label: "Ask first", reveal: "Right. Permission marketing (Seth Godin, 1999) asks for consent first, so messages are anticipated, personal and relevant." },
      ],
    },
    lead: "One-to-one marketing tailors the offer to each customer through IDIC; permission marketing speaks only to customers who agreed to listen.",
    check: [
      ask("The opposite of permission marketing is…", "Interruption marketing", ["Participatory marketing", "One-to-one marketing", "Relationship marketing"], "Interruption marketing pushes messages at people who did not ask for them. One-to-one marketing is not the opposite: it is about tailoring the offer, and can be done with or without consent."),
      ask("A two-wheeler dealer ranks its customers by lifetime value to decide whom to give the most attention. Which IDIC step is this?", "Differentiate", ["Identify", "Interact", "Customise"], "Differentiate ranks customers by value and needs. Identify comes first and is tempting, but it only builds the database of who each customer is."),
      ask("A firm sells one low-priced product, once, to buyers it rarely sees again. Should it invest heavily in one-to-one marketing?", "Probably not: the payoff needs rich data and products to cross-sell", ["Yes: every firm should treat each buyer as a segment of one", "Yes, as long as it sends more messages without consent", "Only if it first switches to interruption marketing"], "One-to-one marketing suits firms with much individual data and many high-value products that can be cross-sold or upgraded. For others, the investment may exceed the payoff."),
    ],
    lens: [],
    reflect: "Which brand messages do you actually welcome, and did you give permission for them?",
    summary: {
      points: [
        "Peppers and Rogers (1993): IDIC, identify, differentiate, interact, customise; focus on most valuable customers.",
        "Permission marketing (Godin, 1999): anticipated, personal and relevant messages to people who want them; the opposite of interruption marketing.",
        "Participatory marketing: firm and customer work out together how to satisfy the customer.",
        "Friends and family remain the strongest influence; reviews and influencers matter more and more, and favours should be disclosed.",
      ],
      memory: "Identify, Differentiate, Interact, Customise.",
    },
  },
  {
    blockId: "customer-retention-and-loyalty",
    name: "Customer retention and loyalty",
    intro: "Measuring and reducing churn, and binding customers more tightly.",
    before: {
      q: "Should every customer get the same attention?",
      choices: [
        { label: "Yes, equally", reveal: "Customer base management says otherwise: give high-value customers disproportionate attention, and make low-profit customers more profitable or let them go." },
        { label: "No", reveal: "Right. Customer base management gives high-value customers disproportionate attention, and makes low-profit customers more profitable or lets them go." },
      ],
    },
    lead: "Retention means plugging the leaking bucket: measure churn, fix its causes, and bind customers through financial, social and structural ties.",
    check: [
      ask("Which level of relationship marketing binds the customer most tightly?", "Structural ties", ["Financial benefits", "Social benefits", "Cashback"], "Berry and Parasuraman's levels bind more tightly in turn: financial, social, structural. Financial benefits are the loosest, because a rival can copy a discount easily."),
      ask("A supplier links its ordering system to a hospital's inventory system, so supplies are reordered automatically. Which level of relationship marketing is this?", "Structural ties", ["Financial benefits", "Social benefits", "Cross-selling"], "The link is built into the customer's own systems, so leaving would mean rebuilding them. Social benefits come from personal ties with staff and other customers, not from systems."),
      ask("A shop starts the year with 1,000 customers. During the year 150 of them leave, and it wins 200 new ones. What is its retention rate?", "85%", ["105%", "15%", "80%"], "Retention follows the starting group: (1,000 − 150) ÷ 1,000 = 85%. 105% wrongly adds the new customers; 15% is the churn rate."),
    ],
    lens: [
      { pairing: 0, adds: "A person generous in giving and kind in speech is surrounded by kin, ring upon ring.", differs: "The couplet describes keeping relatives close. Berry and Parasuraman's levels describe how a firm binds customers, and add structural ties." },
      { pairing: 1, adds: "The knot: a recovered relationship carries a mark of the break, which is why preventing churn beats winning customers back.", differs: "Rahim speaks of love between people. Retention is measured in rates, costs and lifetime value." },
    ],
    reflect: "Which brand are you loyal to? Is it held by money, by people, or by something built into your routine?",
    summary: {
      points: [
        "Retention rate: the share of customers at the start of a period still buying at its end; churn is the share who leave.",
        "Customer base management: reduce churn, lengthen relationships, raise share of wallet by cross-selling and up-selling, focus on high-value customers.",
        "The marketing funnel and conversion rates show where customers drop out.",
        "Loyalty activities: interaction, loyalty programmes, institutional ties. Berry and Parasuraman (1991): financial, social, structural.",
      ],
      memory: "Financial, social, structural: each binds more tightly.",
    },
  },
  {
    blockId: "crm-value-chain-and-process",
    name: "The CRM value chain and process",
    intro: "Buttle's five stages and four supports, and a five-step CRM process.",
    before: {
      q: "Is CRM just a piece of software?",
      choices: [
        { label: "Just software", reveal: "Not in Buttle's value chain. Its five stages rest on leadership and culture, data and IT, people and processes, so technology is only one support." },
        { label: "More than that", reveal: "Right. Buttle's five stages rest on four supports: leadership and culture, data and IT, people and processes." },
      ],
    },
    lead: "Buttle's CRM value chain runs five stages, from choosing customers to managing their lifecycle, on four supports of which software is only one.",
    check: [
      ask("Which is one of the four supporting conditions in Buttle's value chain?", "Leadership and culture", ["Lead acquisition", "Upselling", "Customer intimacy"], "The four supports are leadership and culture, data and IT, people and processes. Customer intimacy is tempting, but it is the second of the five primary stages."),
      ask("A dealership buys CRM software, but a year later staff still keep leads in notebooks. What does Buttle's value chain suggest fixing first?", "The supports: leadership, people and processes", ["The software, by buying a better system", "Lead generation, by finding more leads", "The value proposition, by cutting prices"], "Software is only one of four supports; it fails when leaders do not use it and staff are not trained or required to. More leads would only pile up in the same notebooks."),
      ask("A dealership gets 500 leads in a month, and 40 of them buy. What is its conversion rate?", "8%", ["12.5%", "40%", "0.8%"], "Conversion rate = buyers ÷ leads = 40 ÷ 500 = 8%. 12.5% divides the wrong way round (500 ÷ 40)."),
    ],
    lens: [],
    reflect: "For a business you know, which step of the CRM process is weakest: awareness, leads, conversion, support or upselling? Which support would you fix first?",
    summary: {
      points: [
        "Buttle (2004): portfolio analysis, customer intimacy, network development, value proposition, customer lifecycle management.",
        "Supports: leadership and culture, data and IT, people, processes. Shorter versions often leave out customer intimacy.",
        "Process: awareness, leads, conversion, support, upselling; tools include buyer personas and lead scoring.",
        "CRM systems keep one shared customer history, and raise conversion and productivity.",
      ],
      memory: "Awareness, leads, conversion, support, upselling.",
    },
  },
];

export default lessons;
