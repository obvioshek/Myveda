import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "promotion-mix",
    name: "The promotion mix",
    intro: "The tools a firm uses to talk to its market, and how they are combined.",
    before: {
      q: "A producer advertises to consumers so that they ask shops for the product. Is that a push strategy?",
      choices: [
        { label: "Yes, push", reveal: "That is pull. Push promotes to channel members, who promote to final buyers; pull promotes to consumers, who ask channel members for the product." },
        { label: "No, pull", reveal: "Right. Pull uses advertising and consumer promotion; push uses personal selling and trade promotion through channel members." },
      ],
    },
    lead: "The promotion mix is the set of tools a firm uses to inform, persuade and remind, combined through IMC into one consistent message.",
    check: [
      ask("Any paid form of non-personal presentation of ideas, goods or services by an identified sponsor is…", "Advertising", ["Public relations", "Sales promotion", "Personal selling"], "Paid, non-personal and openly sponsored is advertising. Public relations relies largely on publicity the firm does not pay for or control."),
      ask("A cement maker's salespeople visit dealers and offer them extra cases for bulk orders, so that dealers recommend the brand to builders. This is…", "A push strategy", ["A pull strategy", "Integrated marketing communications", "Interactive marketing"], "Personal selling and trade promotion to channel members push the product down the channel. Pull would mean advertising to builders so they ask dealers for it."),
      ask("A brand's TV ads promise luxury while its shop staff push discounts and its website looks cheap. Which idea is it failing at?", "Integrated marketing communications", ["The push strategy", "The AIDA model", "Competitive parity"], "IMC aims to make every brand contact relevant and consistent over time. AIDA describes how a buyer responds to one message, not consistency across contacts."),
    ],
    lens: [
      { pairing: 0, adds: "The ideal of speech that binds its hearers and makes even those who did not hear it long to.", differs: "The couplet is about eloquence. The promotion mix adds paid media and other tools, coordinated through IMC into one message." },
    ],
    reflect: "Think of a recent purchase. Which promotion tools reached you before you bought, and which one tipped the decision?",
    summary: {
      points: [
        "Five tools: advertising, sales promotion, personal selling, public relations, direct and digital marketing.",
        "Kotler and Keller list eight modes, adding events and experiences, interactive and word-of-mouth marketing.",
        "IMC keeps every brand contact relevant and consistent over time.",
        "Push works through channel members; pull works through final consumers.",
      ],
      memory: "Advertising, sales promotion, personal selling, PR, direct marketing.",
    },
  },
  {
    blockId: "developing-effective-communications",
    name: "Developing effective communications",
    intro: "Seven steps, from target audience to measuring results.",
    before: {
      q: "Is getting consumers to recognise a brand harder than getting them to recall it unprompted?",
      choices: [
        { label: "Harder", reveal: "It is the other way round. Recognition is easier to achieve than recall." },
        { label: "Easier", reveal: "Right. Recognition is easier to achieve than recall." },
      ],
    },
    lead: "Plan communication backwards: audience and objectives first, then message, channels, budget, mix and results.",
    check: [
      ask("A new-to-the-world product must first establish…", "Category need", ["Brand purchase intention", "Brand attitude", "Brand awareness"], "Buyers must see a need for the whole category before any brand matters. Brand awareness comes after people want the category at all."),
      ask("A bank's ad shows a pensioner checking her pension in three taps on the app. Which kind of appeal is it?", "Informational: a demonstration", ["Transformational: an image appeal", "Social channel", "Reminder advertising"], "A demonstration elaborates on what the product does, so it is informational. Transformational appeals work through image, such as who uses the brand."),
      ask("For the pensioner app, which message source is most likely to be trusted?", "A branch manager customers already know", ["The bank's advertising agency", "A source chosen because the firm admires it", "Whoever is cheapest to film"], "Choose the source the audience trusts. A source the firm admires may mean little to pensioners."),
    ],
    lens: [],
    reflect: "Recall an advertisement that persuaded you. Was its appeal informational or transformational, and who was the source?",
    summary: {
      points: [
        "Steps: audience, objectives, design, channels, budget, mix, results.",
        "Objectives: category need, brand awareness, brand attitude, brand purchase intention.",
        "Design: message, creative (informational or transformational) and source.",
        "Channels are personal (advocate, expert, social) or non-personal (media, atmospheres, events).",
      ],
      memory: "Audience, objectives, design, channels, budget, mix, results.",
    },
  },
  {
    blockId: "promotion-budget",
    name: "Setting the promotion budget",
    intro: "Four ways to decide how much to spend, and why they give different answers.",
    before: {
      q: "Is matching what competitors spend the most logical way to set a budget?",
      choices: [
        { label: "Yes", reveal: "That is competitive parity, and competitors' needs and wisdom may differ. The objective and task method is the most logical." },
        { label: "No", reveal: "Right. The objective and task method is the most logical: define objectives, set the tasks, cost them, and the total is the budget." },
      ],
    },
    lead: "The affordable, percentage-of-sales, competitive-parity and objective-and-task methods give different budgets; objective and task is the most logical.",
    check: [
      ask("Which method treats sales as the cause of promotion rather than its result?", "Percentage of sales", ["Affordable", "Competitive parity", "Objective and task"], "It spends a set share of sales, so falling sales cut the budget. The affordable method's flaw is different: it ignores promotion's effect on sales altogether."),
      ask("A firm forecasts sales of ₹24 crore and spends 3% of forecast sales on promotion. What is its budget?", "₹72 lakh", ["₹7.2 lakh", "₹75 lakh", "₹24 lakh"], "0.03 × ₹24 crore = ₹0.72 crore = ₹72 lakh. ₹75 lakh is the objective-and-task total in the example, not 3% of sales."),
      ask("A whole category spends ₹5 crore on promotion and a rival spends ₹1 crore. What is the rival's share of voice?", "20%", ["5%", "25%", "80%"], "Share of voice = ₹1 crore ÷ ₹5 crore = 20%. 25% would be ₹1 crore divided by the other brands' ₹4 crore."),
    ],
    lens: [
      { pairing: 1, adds: "The counsel to give according to the measure of one's means, so as to give while guarding one's wealth.", differs: "The couplet concerns a ruler's or householder's gifts. The chapter treats the affordable method as weak, since it ignores promotion's effect on sales." },
    ],
    reflect: "If you ran promotion for a small business you know, which budget method would you use, and what would its weakness be?",
    summary: {
      points: [
        "Affordable: what is left after other costs; ignores the effect on sales.",
        "Percentage of sales treats sales as the cause; competitive parity copies rivals and aims at share of voice.",
        "Objective and task costs the tasks needed to reach the objectives.",
        "Share of voice is a brand's share of category promotion spending, not of sales.",
      ],
      memory: "Objective and task is the most logical method.",
    },
  },
  {
    blockId: "advertising",
    name: "Advertising",
    intro: "Its qualities, the 5 Ms, objectives, and reach, frequency and impact.",
    before: {
      q: "Is advertising only an expense?",
      choices: [
        { label: "Only an expense", reveal: "It is treated as a current expense, but part of it is really an investment in brand equity." },
        { label: "Partly an investment", reveal: "Right. Part of advertising builds brand equity." },
      ],
    },
    lead: "Advertising is paid, non-personal and openly sponsored; its decisions follow the 5 Ms: mission, money, message, media and measurement.",
    check: [
      ask("Advertising that aims to convince current buyers they made the right choice is…", "Reinforcement advertising", ["Reminder advertising", "Informative advertising", "Persuasive advertising"], "Reinforcement reassures people who have already bought. Reminder advertising aims at the next purchase."),
      ask("A newspaper writes a story about a start-up without being paid, and the start-up cannot change the wording. This is…", "Publicity", ["Advertising", "Persuasive advertising", "Reinforcement advertising"], "Advertising is paid and the sponsor controls the message. Unpaid coverage the firm cannot control is publicity, which is why readers find it more credible."),
      ask("A schedule reaches 60% of the target audience an average of 4 times. How many gross rating points does it deliver?", "240", ["64", "15", "24"], "GRPs = reach × average frequency = 60 × 4 = 240. 64 adds the two numbers instead of multiplying them."),
    ],
    lens: [],
    reflect: "Pick a current advertisement. Is its objective to inform, persuade, remind or reinforce, and how would you measure whether it worked?",
    summary: {
      points: [
        "Paid, non-personal, by an identified sponsor; pervasive, expressive, impersonal and controlled.",
        "5 Ms: mission, money, message, media, measurement.",
        "Objectives: inform, persuade, remind, reinforce.",
        "Media weigh reach, frequency and impact; GRPs = reach × frequency.",
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
    lead: "Sales promotion gives an incentive to buy now; personal selling persuades buyers one at a time.",
    check: [
      ask("A contest differs from a sweepstakes because a contest…", "Has entries that are judged", ["Is a draw of names", "Gives cash back on proof of purchase", "Is only a trade promotion"], "Contests judge entries; sweepstakes draw names. Cash back on proof of purchase is a rebate."),
      ask("A biscuit maker pays a supermarket to build a special display at the entrance during Diwali. This is…", "A display allowance", ["A price-off", "A free goods offer", "A premium"], "Paying a retailer to feature the product in a special display is a display allowance. A price-off is a discount on each case bought."),
      ask("A ₹60 pack costs the seller ₹35. On ‘buy two, get one free’, what profit does the seller make per pack?", "₹5", ["₹25", "₹15", "₹20"], "Three packs bring ₹120 and cost ₹105, so ₹15 profit for three, or ₹5 a pack. ₹15 is the profit on all three packs, not per pack."),
    ],
    lens: [],
    reflect: "Which sales promotion last made you buy something sooner than you planned? Which of the three benefits did it use?",
    summary: {
      points: [
        "Sales promotion: consumer, trade and sales-force promotions; attention, incentive and invitation.",
        "Consumer tools include samples, coupons, rebates, price packs, premiums and prizes; trade tools include price-offs, allowances and free goods.",
        "Price packs eat margin fast; frequent deals teach buyers to wait.",
        "Personal selling is two-way, trusted and persuasive, but costly and limited in reach.",
      ],
      memory: "Sales promotion buys action now; personal selling builds conviction.",
    },
  },
];

export default lessons;
