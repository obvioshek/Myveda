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
    lead: "Relationship marketing builds long-term relationships; CRMk is the strategy and CRM is the technology that supports it.",
    check: [
      ask("Who introduced the term relationship marketing, in 1983?", "Leonard Berry", ["Frederick Reichheld", "Seth Godin", "Francis Buttle"], "Its aims are retention, engagement, loyalty and higher profitability."),
      ask("A technology-driven system for managing customer interactions and data is…", "Customer relationship management (CRM)", ["Customer relationship marketing (CRMk)", "Interruption marketing", "Mass marketing"], "CRMk is the strategy that gives direction: whom to keep and how."),
      ask("The present value of the profits a customer will bring over the whole relationship is…", "Customer lifetime value", ["Churn", "A touch point", "The retention rate"], "Churn is the rate at which customers leave."),
    ],
    lens: [],
    reflect: "List three touch points you had with one brand this week. Which of them felt personal?",
    summary: {
      points: [
        "Relationship marketing (Berry, 1983) builds long-term ties with customers, employees and partners.",
        "CRMk is the strategy; CRM records every customer touch point.",
        "Retention usually costs less than acquisition; CLV and churn measure the relationship.",
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
    lead: "One-to-one marketing treats each customer as a segment of one through the IDIC steps; permission marketing asks before it speaks.",
    check: [
      ask("In the IDIC model, ranking customers by their value and needs is…", "Differentiate", ["Identify", "Interact", "Customise"], "Identify comes first: know each customer and build the database."),
      ask("The opposite of permission marketing is…", "Interruption marketing", ["Participatory marketing", "One-to-one marketing", "Relationship marketing"], "Permission marketing makes messages anticipated, personal and relevant."),
      ask("According to the chapter, the strongest source of influence remains…", "Friends and family", ["Online reviews", "Influencers", "Advertising"], "Online reviews and influencers follow."),
    ],
    lens: [],
    reflect: "Which brand messages do you actually welcome, and did you give permission for them?",
    summary: {
      points: [
        "Peppers and Rogers (1993): IDIC, identify, differentiate, interact, customise.",
        "Permission marketing seeks consent; interruption marketing does not.",
        "In participatory marketing customers help develop and promote products.",
      ],
      memory: "Identify, Differentiate, Interact, Customise.",
    },
  },
  {
    blockId: "customer-retention-and-loyalty",
    name: "Customer retention and loyalty",
    intro: "Managing churn and binding customers more tightly.",
    before: {
      q: "Should every customer get the same attention?",
      choices: [
        { label: "Yes, equally", reveal: "Customer base management says otherwise: give high-value customers disproportionate attention, and make low-profit customers more profitable or let them go." },
        { label: "No", reveal: "Right. Customer base management gives high-value customers disproportionate attention, and makes low-profit customers more profitable or lets them go." },
      ],
    },
    lead: "Retention means reducing churn and building loyalty through financial benefits, social benefits and structural ties.",
    check: [
      ask("Which level of relationship marketing binds the customer most tightly?", "Structural ties", ["Financial benefits", "Social benefits", "Cashback"], "Each level binds more tightly: financial, social, structural."),
      ask("Exclusive events, communities and club memberships are…", "Social benefits", ["Financial benefits", "Structural ties", "Cross-selling"], "Social benefits build personal ties with staff and other customers."),
      ask("Which is named as a common cause of churn?", "Billing errors", ["Cross-selling", "Structural ties", "A marketing funnel"], "Others are poor service, unmet expectations and complex processes."),
    ],
    lens: [
      { pairing: 0, adds: "A person generous in giving and kind in speech is surrounded by kin, ring upon ring.", differs: "The couplet describes keeping relatives close. Berry and Parasuraman's levels describe how a firm binds customers, and add structural ties." },
      { pairing: 1, adds: "The knot: a recovered relationship carries a mark of the break, which is why preventing churn beats winning customers back.", differs: "Rahim speaks of love between people. Retention is measured in rates, costs and lifetime value." },
    ],
    reflect: "Which brand are you loyal to? Is it held by money, by people, or by something built into your routine?",
    summary: {
      points: [
        "Manage churn: measure retention, find why customers leave, weigh cost against profit.",
        "Customer base management: reduce churn, lengthen relationships, cross-sell and up-sell.",
        "Berry and Parasuraman (1991): financial benefits, social benefits, structural ties.",
      ],
      memory: "Financial, social, structural: each binds more tightly.",
    },
  },
  {
    blockId: "crm-value-chain-and-process",
    name: "The CRM value chain and process",
    intro: "Buttle's five stages and a five-step CRM process.",
    before: {
      q: "Is CRM just a piece of software?",
      choices: [
        { label: "Just software", reveal: "Not in Buttle's value chain. Its five stages rest on leadership and culture, data and IT, people and processes, so technology is only one support." },
        { label: "More than that", reveal: "Right. Buttle's five stages rest on four supports: leadership and culture, data and IT, people and processes." },
      ],
    },
    lead: "Buttle's CRM value chain has five primary stages resting on four supporting conditions.",
    check: [
      ask("Which stage of Buttle's value chain decides which customers to serve?", "Customer portfolio analysis", ["Customer intimacy", "Network development", "Value proposition development"], "Customer intimacy is knowing them."),
      ask("Which is one of the four supporting conditions in the value chain?", "Leadership and culture", ["Lead acquisition", "Upselling", "Customer intimacy"], "The others are data and IT, people and processes."),
      ask("The last step of the five-step CRM process is…", "Drive upselling", ["Generate brand awareness", "Acquire leads", "Convert leads into customers"], "It grows each customer's value with higher-value or added products."),
    ],
    lens: [],
    reflect: "For a business you know, which step of the CRM process is weakest: awareness, leads, conversion, support or upselling?",
    summary: {
      points: [
        "Buttle (2004): portfolio analysis, customer intimacy, network development, value proposition, lifecycle management.",
        "Supports: leadership and culture, data and IT, people, processes.",
        "Process: awareness, leads, conversion, support, upselling.",
      ],
      memory: "Awareness, leads, conversion, support, upselling.",
    },
  },
];

export default lessons;
