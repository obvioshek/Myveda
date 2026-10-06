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
        "Kotler and Keller add events and experiences, online and social, mobile, and word of mouth; IMC coordinates them.",
        "Push works through channel members; pull works through final consumers.",
      ],
      memory: "Advertising, sales promotion, personal selling, PR, direct marketing.",
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
];

export default lessons;
