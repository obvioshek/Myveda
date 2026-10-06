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
    lead: "Social marketing sells behaviour change for the good of society; green marketing sells sustainable products and practices.",
    check: [
      ask("Who introduced the idea of social marketing, in 1971?", "Philip Kotler and Gerald Zaltman", ["Jay Conrad Levinson", "Seth Godin", "Peppers and Rogers"], "Levinson wrote on guerrilla marketing."),
      ask("In social marketing, exchange theory means the change must…", "Offer benefits that outweigh its perceived costs", ["Be paid for by the audience", "Use only government media", "Cost nothing to make"], "It sits with a target audience, a desired change and a marketing mix."),
      ask("False or exaggerated environmental claims are called…", "Greenwashing", ["Eco-labelling", "Green advertising", "Exchange theory"], "Greenwashing breeds consumer scepticism."),
    ],
    lens: [
      { pairing: 0, adds: "A prayer to the Earth that what is dug from her may quickly grow again, without wounding her vitals and heart.", differs: "It is a prayer, not a policy. Green marketing adds eco-friendly products, eco-labelling, transparency and attention to the product life cycle." },
      { pairing: 1, adds: "An image: wealth gained by deceit is like water kept in a pot of unbaked clay; it will not hold.", differs: "The couplet speaks of deceit in general. Greenwashing is a specific risk of false environmental claims in green marketing." },
    ],
    reflect: "Think of a product sold as eco-friendly. What would convince you its claim is not greenwashing?",
    summary: {
      points: [
        "Social marketing (Kotler and Zaltman, 1971): audience, behaviour change, exchange theory, marketing mix.",
        "Green marketing: eco-friendly products, sustainable processes, eco-labelling, green advertising.",
        "Greenwashing breeds scepticism; green products may cost more to make.",
      ],
      memory: "Sell behaviour change for society; sell sustainability honestly.",
    },
  },
  {
    blockId: "online-and-direct-marketing",
    name: "Online and direct marketing",
    intro: "Targeted, measurable marketing that asks for a response.",
    before: {
      q: "In performance marketing, when does the advertiser pay?",
      choices: [
        { label: "For every view", reveal: "Not in performance marketing. The advertiser pays only when a measurable action occurs, such as a click, lead or sale." },
        { label: "Only for results", reveal: "Right. The advertiser pays only when a measurable action occurs, such as a click, lead or sale." },
      ],
    },
    lead: "Online marketing uses digital platforms for targeted, measurable engagement; direct marketing seeks an immediate, measurable response.",
    check: [
      ask("Improving search rankings is the purpose of…", "Search engine optimisation (SEO)", ["Pay-per-click advertising", "Content marketing", "Email marketing"], "PPC buys paid clicks and traffic instead."),
      ask("Drawing customers with useful content is…", "Inbound marketing", ["Affiliate marketing", "Performance marketing", "Telemarketing"], "Affiliate and influencer marketing are other strategies."),
      ask("Which is a challenge of direct marketing?", "Intrusiveness", ["A strong call to action", "Tracking return on investment", "Personalisation"], "The others named are managing the database and complying with regulations."),
    ],
    lens: [],
    reflect: "Recall an online ad that made you click. Which component of online marketing was it?",
    summary: {
      points: [
        "Online components: SEO, content, social media, email, PPC.",
        "Strategies: inbound, affiliate, influencer and performance marketing; challenges include data privacy.",
        "Direct marketing: one-to-one, immediate and measurable response, strong call to action.",
      ],
      memory: "Targeted, measurable and paid for by results.",
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
    lead: "Rural marketing designs strategies for rural consumers, framed in India as the four As.",
    check: [
      ask("The four As of rural marketing are availability, affordability, acceptability and…", "Awareness", ["Advertising", "Assurance", "Adaptation"], "Indian practitioners often frame rural marketing this way."),
      ask("Weekly rural markets are called…", "Haats", ["Kiranas", "Malls", "Buying services"], "Strategies also use opinion leaders, folk media and street campaigns."),
      ask("Which is named as a challenge of rural marketing?", "Poor infrastructure", ["Too many opinion leaders", "Uniform language", "Lack of weekly markets"], "Others are logistics and cultural and linguistic diversity."),
    ],
    lens: [
      { pairing: 2, adds: "However the world turns, it follows the plough, so farming, though hard, is foremost.", differs: "The couplet praises agriculture and does not speak of markets. Rural marketing adds distribution, small packs, local-language promotion and the four As." },
    ],
    reflect: "Think of a product sold in villages near you. How does it meet each of the four As?",
    summary: {
      points: [
        "Needs: efficient distribution, affordable small packs and sachets, adapted products, local languages.",
        "Four As: availability, affordability, acceptability, awareness.",
        "Tools: opinion leaders, haats, agriculture-linked and folk media; challenges: logistics, infrastructure, diversity.",
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
      ask("Who wrote Guerrilla Marketing (1984)?", "Jay Conrad Levinson", ["Philip Kotler", "Seth Godin", "Gerald Zaltman"], "Guerrilla tactics are creative, unconventional and low-cost."),
      ask("Prime-time TV, digital and radio roadblocks with coordinated media buying are tactics of…", "Roadblock marketing", ["Guerrilla marketing", "Permission marketing", "Rural marketing"], "It aims at maximum reach, high recall and strong visibility."),
      ask("Which is a challenge of roadblock marketing?", "Ad fatigue", ["Legal permissions for street stunts", "Low cost", "Too little reach"], "Also high cost and keeping the message consistent."),
    ],
    lens: [],
    reflect: "Recall a campaign that seemed to be everywhere at once, or one that surprised you on the street. Which kind was it?",
    summary: {
      points: [
        "Guerrilla: street, viral and experiential tactics for attention and recall; hard to measure.",
        "Roadblock: many channels at once for maximum reach; costly, risk of ad fatigue.",
      ],
      memory: "Guerrilla surprises cheaply; roadblock saturates expensively.",
    },
  },
];

export default lessons;
