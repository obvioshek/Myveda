import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "promotion-mix",
    name: "The promotion mix",
    intro: "The tools a firm uses to communicate customer value.",
    before: {
      q: "A producer advertises to consumers so that they ask shops for the product. Is that a push strategy?",
      choices: [
        { label: "Yes, push", reveal: "That is pull. Push promotes to channel members, who promote to final buyers; pull promotes to consumers, who ask channel members for the product." },
        { label: "No, pull", reveal: "Right. Pull uses advertising and consumer promotion; push uses personal selling and trade promotion through channel members." },
      ],
    },
    lead: "The promotion mix blends advertising, sales promotion, personal selling, PR and direct marketing into one consistent message.",
    check: [
      ask("Any paid form of non-personal presentation by an identified sponsor is…", "Advertising", ["Public relations", "Sales promotion", "Personal selling"], "It reaches large audiences at low cost per exposure."),
      ask("Which tool is best at the stage of conviction and purchase?", "Personal selling", ["Advertising", "Public relations", "Direct marketing"], "It is two-way and adaptable."),
      ask("AIDA stands for attention, interest, desire and…", "Action", ["Awareness", "Adoption", "Advocacy"], "Usually credited to E. St. Elmo Lewis (1898)."),
    ],
    lens: [
      { pairing: 0, adds: "The ideal of speech that binds its hearers and makes even those who did not hear it long to.", differs: "The couplet is about eloquence. The promotion mix adds paid media and other tools, coordinated through IMC into one message." },
    ],
    reflect: "Think of a recent purchase. Which promotion tools reached you before you bought, and which one tipped the decision?",
    summary: {
      points: [
        "Five tools: advertising, sales promotion, personal selling, public relations, direct and digital marketing.",
        "Kotler and Keller list eight modes, adding events and experiences, interactive and word-of-mouth marketing; IMC keeps every brand contact consistent.",
        "Push works through channel members; pull works through final consumers.",
      ],
      memory: "Advertising, sales promotion, personal selling, PR, direct marketing.",
    },
  },
  {
    blockId: "developing-effective-communications",
    name: "Developing effective communications",
    intro: "From target audience to measuring results.",
    before: {
      q: "Is getting consumers to recognise a brand harder than getting them to recall it unprompted?",
      choices: [
        { label: "Harder", reveal: "It is the other way round. Recognition is easier to achieve than recall." },
        { label: "Easier", reveal: "Right. Recognition is easier to achieve than recall." },
      ],
    },
    lead: "Effective communication moves from audience and objectives to message, channels, budget, mix and results.",
    check: [
      ask("A new-to-the-world product must first establish…", "Category need", ["Brand purchase intention", "Brand attitude", "Brand loyalty"], "Buyers must first see a need for the category."),
      ask("An ad that shows what kind of person uses a brand uses…", "A transformational appeal", ["An informational appeal", "A demonstration", "A comparison"], "Informational appeals elaborate on attributes and benefits."),
      ask("Neighbours, friends and family talking to buyers form…", "Social channels", ["Advocate channels", "Expert channels", "Media channels"], "Advocate channels are company salespeople; expert channels are independent experts."),
    ],
    lens: [],
    reflect: "Recall an advertisement that persuaded you. Was its appeal informational or transformational, and who was the source?",
    summary: {
      points: [
        "Steps: audience, objectives, design, channels, budget, mix, results.",
        "Objectives: category need, brand awareness, brand attitude, brand purchase intention.",
        "Design: message, creative (informational or transformational) and source; channels are personal or non-personal.",
      ],
      memory: "Audience, objectives, design, channels, budget, mix, results.",
    },
  },
  {
    blockId: "promotion-budget",
    name: "Setting the promotion budget",
    intro: "Four ways to decide how much to spend.",
    before: {
      q: "Is matching what competitors spend the most logical way to set a budget?",
      choices: [
        { label: "Yes", reveal: "That is competitive parity, and competitors' needs and wisdom may differ. The objective and task method is the most logical." },
        { label: "No", reveal: "Right. The objective and task method is the most logical: define objectives, set the tasks, cost them, and the total is the budget." },
      ],
    },
    lead: "Firms set the promotion budget by the affordable, percentage-of-sales, competitive-parity or objective-and-task method.",
    check: [
      ask("Which method treats sales as the cause of promotion rather than its result?", "Percentage of sales", ["Affordable", "Competitive parity", "Objective and task"], "It spends a set share of current or forecast sales."),
      ask("Which method ignores promotion's effect on sales and varies year to year?", "Affordable", ["Objective and task", "Percentage of sales", "Competitive parity"], "It spends what is left after other costs."),
      ask("Which method is demanding to estimate but the most logical?", "Objective and task", ["Competitive parity", "Affordable", "Percentage of sales"], "It costs the tasks needed to reach the objectives."),
    ],
    lens: [
      { pairing: 1, adds: "The counsel to give according to the measure of one's means, so as to give while guarding one's wealth.", differs: "The couplet concerns a ruler's or householder's gifts. The chapter treats the affordable method as weak, since it ignores promotion's effect on sales." },
    ],
    reflect: "If you ran promotion for a small business you know, which budget method would you use, and what would its weakness be?",
    summary: {
      points: [
        "Affordable: what is left after other costs; ignores the effect on sales.",
        "Percentage of sales and competitive parity are simple but flawed.",
        "Objective and task costs the tasks needed to reach objectives.",
      ],
      memory: "Objective and task is the most logical method.",
    },
  },
  {
    blockId: "advertising",
    name: "Advertising",
    intro: "Its qualities, the 5 Ms, objectives and media.",
    before: {
      q: "Is advertising only an expense?",
      choices: [
        { label: "Only an expense", reveal: "It is treated as a current expense, but part of it is really an investment in brand equity and loyalty." },
        { label: "Partly an investment", reveal: "Right. Part of advertising builds brand equity and customer loyalty." },
      ],
    },
    lead: "Advertising decisions follow the 5 Ms: mission, money, message, media and measurement.",
    check: [
      ask("Advertising that aims to convince current buyers they made the right choice is…", "Reinforcement advertising", ["Reminder advertising", "Informative advertising", "Persuasive advertising"], "Reminder advertising stimulates repeat purchase."),
      ask("The number of people exposed to an ad at least once is its…", "Reach", ["Frequency", "Impact", "Clutter"], "Frequency is how often the average person is exposed."),
      ask("Which is NOT one of the 5 Ms of advertising?", "Market", ["Mission", "Media", "Measurement"], "The fifth M is money."),
    ],
    lens: [],
    reflect: "Pick a current advertisement. Is its objective to inform, persuade, remind or reinforce, and how would you measure whether it worked?",
    summary: {
      points: [
        "Paid, non-personal, by an identified sponsor; pervasive, expressive, impersonal and controlled.",
        "5 Ms: mission, money, message, media, measurement.",
        "Objectives: inform, persuade, remind, reinforce; media weigh reach, frequency and impact.",
      ],
      memory: "Mission, money, message, media, measurement.",
    },
  },
  {
    blockId: "sales-promotion-and-personal-selling",
    name: "Sales promotion and personal selling",
    intro: "Short-term incentives, and selling face to face.",
    before: {
      q: "Is ‘buy two, get one free’ a coupon?",
      choices: [
        { label: "A coupon", reveal: "It is a price pack, a reduced-price pack. A coupon is a certificate giving a stated saving." },
        { label: "A price pack", reveal: "Right. It is a reduced-price pack; a banded pack bundles related products." },
      ],
    },
    lead: "Sales promotion gives a reason to buy now; personal selling persuades buyers one at a time.",
    check: [
      ask("A contest differs from a sweepstakes because a contest…", "Has entries judged by a panel", ["Is a draw of names", "Gives cash back on proof of purchase", "Is a trade promotion"], "A sweepstakes is a draw."),
      ask("A payment to retailers for setting up a special display is a…", "Display allowance", ["Price-off", "Free goods offer", "Rebate"], "It is a trade promotion tool."),
      ask("A main disadvantage of personal selling is that it…", "Reaches relatively few people at high cost", ["Gives no feedback", "Builds no trust", "Cannot be adapted to the buyer"], "Its strengths are feedback, trust and persuasion."),
    ],
    lens: [],
    reflect: "Which sales promotion last made you buy something sooner than you planned? Which of the three benefits did it use?",
    summary: {
      points: [
        "Sales promotion: consumer, trade and sales-force promotions; benefits are attention, incentive and invitation.",
        "Consumer tools include samples, coupons, rebates, price packs, premiums, prizes; trade tools include price-offs, allowances and free goods.",
        "Personal selling: two-way, trusted and persuasive, but costly, labour-intensive and limited in reach.",
      ],
      memory: "Sales promotion buys action now; personal selling builds conviction.",
    },
  },
];

export default lessons;
