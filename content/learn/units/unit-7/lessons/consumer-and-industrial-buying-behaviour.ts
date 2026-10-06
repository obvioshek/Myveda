import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "consumer-behaviour-and-its-influences",
    name: "Consumer behaviour and its influences",
    intro: "How people select, buy, use and dispose of what they want, and what shapes it.",
    before: {
      q: "Does consumer behaviour end once the purchase is made?",
      choices: [
        { label: "Yes", reveal: "Not quite. Consumer behaviour covers searching, buying, using, evaluating and disposing of goods and services, not just the moment of purchase." },
        { label: "No", reveal: "Right. Consumer behaviour covers searching, buying, using, evaluating and disposing of goods and services, not just the moment of purchase." },
      ],
    },
    lead: "Consumer behaviour is how people select, buy, use and dispose of products, shaped by cultural, social, personal and psychological factors.",
    check: [
      ask("Which factor does the chapter call the most basic cause of wants?", "Culture", ["Personality", "Reference groups", "Economic situation"], "Culture sits under the cultural factors, with subculture and social class."),
      ask("Lifestyle is measured by…", "Activities, interests and opinions (AIO)", ["Age and life-cycle stage", "Selective attention and retention", "Initiator, influencer and decider roles"], "Lifestyle is one of the personal factors."),
      ask("Initiator, influencer, decider, buyer and user are…", "Buying roles, a social factor", ["Stages of the buying process", "Psychological factors", "Types of subculture"], "Roles and status sit with reference groups and family among the social factors."),
    ],
    lens: [
      { pairing: 0, adds: "An image: water takes on the nature of the soil it flows through, and a person's understanding takes on the nature of their company.", differs: "The couplet is about how company shapes a person's mind. Reference groups are one social factor among the four sets of influences a marketer studies." },
    ],
    reflect: "Think of a recent purchase. Which reference group, family member or friend shaped what you chose?",
    summary: {
      points: [
        "Consumer behaviour covers searching for, buying, using, evaluating and disposing of products.",
        "It draws on psychology, sociology, anthropology and economics, and is complex, dynamic and goal-oriented.",
        "Four sets of factors: cultural, social, personal and psychological.",
      ],
      memory: "Cultural, social, personal, psychological.",
    },
  },
  {
    blockId: "buying-decision-process",
    name: "The buying decision process",
    intro: "Five stages from noticing a need to feeling about the purchase afterwards.",
    before: {
      q: "Is a buyer's decision finished at the till?",
      choices: [
        { label: "Yes", reveal: "Not quite. The fifth stage is post-purchase behaviour: satisfaction leads to repurchase and loyalty, dissatisfaction to returns and complaints." },
        { label: "No", reveal: "Right. The fifth stage is post-purchase behaviour: satisfaction leads to repurchase and loyalty, dissatisfaction to returns and complaints." },
      ],
    },
    lead: "Buyers move through need recognition, information search, evaluation, purchase and post-purchase behaviour.",
    check: [
      ask("The brands a buyer actually considers are called the…", "Evoked set", ["Awareness set", "Choice set", "Total set"], "The buyer is aware of some brands, considers fewer, and chooses among a few."),
      ask("Who described cognitive dissonance, the discomfort after a purchase?", "Leon Festinger", ["Henry Assael", "Martin Fishbein", "Philip Kotler"], "Festinger (1957); it is often called buyer's remorse."),
      ask("What decides how much of the process a buyer goes through?", "Involvement", ["The evoked set", "Price alone", "The number of brands"], "Involvement runs from routine to extensive decisions."),
    ],
    lens: [
      { pairing: 1, adds: "A rule: do nothing that will make you grieve ‘what have I done’, and if you have, do not do it again.", differs: "The couplet speaks of wrong actions in general, not purchases. Cognitive dissonance is a buyer's doubt after buying, which marketers ease with reassurance and guarantees." },
    ],
    reflect: "Recall a purchase you doubted afterwards. What could the seller have done to reassure you?",
    summary: {
      points: [
        "Stages: need recognition, information search, evaluation of alternatives, purchase, post-purchase behaviour.",
        "Awareness set, evoked (consideration) set, choice set.",
        "Cognitive dissonance is eased by reassurance, guarantees and after-sales contact.",
      ],
      memory: "Need, search, evaluate, buy, reflect.",
    },
  },
  {
    blockId: "types-of-buying-behaviour",
    name: "Types of buying behaviour",
    intro: "Assael's four types, from involvement and brand differences.",
    before: {
      q: "Do buyers of salt and buyers of a car behave the same way?",
      choices: [
        { label: "Much the same", reveal: "No. Salt is habitual buying: low involvement and few brand differences. A car is complex buying: high involvement and significant differences." },
        { label: "Very differently", reveal: "Right. Salt is habitual buying: low involvement and few brand differences. A car is complex buying: high involvement and significant differences." },
      ],
    },
    lead: "Henry Assael sorted buying behaviour by the buyer's involvement and the differences between brands.",
    check: [
      ask("High involvement with few differences between brands, as with a carpet, is…", "Dissonance-reducing buying", ["Complex buying", "Variety-seeking buying", "Habitual buying"], "The marketer provides reassurance and after-sales support."),
      ask("Buyers who switch soft drinks or biscuits for a change show…", "Variety-seeking buying", ["Habitual buying", "Complex buying", "Dissonance-reducing buying"], "Low involvement but significant brand differences."),
      ask("For complex buying, the marketer should give…", "Detailed information and trials", ["Price deals and repetition", "Only reminders on the shelf", "Nothing beyond the label"], "Price, promotion and repetition suit habitual buying."),
    ],
    lens: [],
    reflect: "Pick something you bought this month. Which of Assael's four types was it, and why?",
    summary: {
      points: [
        "Two dimensions: involvement (high or low) and differences between brands.",
        "Complex (car) and dissonance-reducing (carpet) are high involvement.",
        "Variety-seeking (soft drinks) and habitual (salt) are low involvement.",
      ],
      memory: "High involvement and real differences make buying complex.",
    },
  },
  {
    blockId: "decision-rules-and-models",
    name: "Decision rules and models of buyer behaviour",
    intro: "How buyers choose among brands, and how theorists explain buying.",
    before: {
      q: "Can a brand's great design make up for a price the buyer will not accept?",
      choices: [
        { label: "Always", reveal: "Not under non-compensatory rules: there a weakness on one attribute cannot be made up by strength on another. Only compensatory rules let strengths offset weaknesses." },
        { label: "It depends on the rule", reveal: "Right. Under non-compensatory rules a weakness cannot be made up; under compensatory rules, such as Fishbein's model, strengths can offset weaknesses." },
      ],
    },
    lead: "Buyers choose by non-compensatory or compensatory rules, and models explain buying in economic, psychological, sociological or combined terms.",
    check: [
      ask("A buyer who sets a minimum on every attribute and takes the first brand meeting all of them uses the…", "Conjunctive rule", ["Disjunctive rule", "Lexicographic rule", "Expectancy-value model"], "The marketer must meet the minimum on everything."),
      ask("Ranking attributes and comparing on the most important first is the…", "Lexicographic rule", ["Conjunctive rule", "Disjunctive rule", "Compensatory rule"], "The buyer moves to the next attribute only if there is a tie."),
      ask("Which model explains buying by family, social class, reference groups and culture?", "Sociological (Veblenian)", ["Economic (Marshallian)", "Psychological (Pavlovian)", "Howard–Sheth"], "The Marshallian model sees rational choice within a budget."),
    ],
    lens: [],
    reflect: "When you last chose a phone or laptop, did one attribute decide it, or did you weigh everything together?",
    summary: {
      points: [
        "Non-compensatory rules: conjunctive, disjunctive, lexicographic.",
        "Compensatory rules, such as Fishbein's expectancy-value model, let strengths offset weaknesses.",
        "Models: economic, psychological, sociological, and comprehensive (Nicosia, Engel–Kollat–Blackwell, Howard–Sheth).",
      ],
      memory: "Conjunctive: every minimum. Disjunctive: one high standard. Lexicographic: the top attribute first.",
    },
  },
  {
    blockId: "industrial-buying-behaviour",
    name: "Industrial (organisational) buying behaviour",
    intro: "How formal organisations decide what to buy and from whom.",
    before: {
      q: "Is a company's purchase usually made by one person?",
      choices: [
        { label: "Usually one", reveal: "Not usually. Several people influence each decision; together they form the buying centre: users, influencers, buyers, deciders and gatekeepers." },
        { label: "Usually several", reveal: "Right. Several people influence each decision; together they form the buying centre: users, influencers, buyers, deciders and gatekeepers." },
      ],
    },
    lead: "Organisations buy through a professional process, in buying situations that run from a routine reorder to a new task.",
    check: [
      ask("Demand for business goods that comes from demand for consumer goods is…", "Derived demand", ["Elastic demand", "Primary demand", "Habitual demand"], "So it is fairly inelastic in the short run and fluctuates more."),
      ask("A first-time purchase needing extensive research and many decision-makers is a…", "New task", ["Straight rebuy", "Modified rebuy", "Buyphase"], "It carries the highest risk of the three buyclasses."),
      ask("In the buying centre, who controls the flow of information?", "Gatekeepers", ["Deciders", "Users", "Influencers"], "Webster and Wind named five roles; later writers add initiators and approvers."),
    ],
    lens: [
      { pairing: 2, adds: "Precious goods examined before entering the treasury, with qualities and defects set out so experts can judge them.", differs: "The passage concerns a treasury's gems and pearls. Industrial buying adds the buyclasses, the buygrid's eight buyphases and the roles of the buying centre." },
    ],
    reflect: "Think of something your college or workplace bought. Who in its buying centre had the final say?",
    summary: {
      points: [
        "Business markets: fewer, larger buyers, professional purchasing, several influencers, derived demand.",
        "Buyclasses: straight rebuy, modified rebuy, new task; crossed with eight buyphases in the buygrid.",
        "Buying centre: users, influencers, buyers, deciders, gatekeepers; influences are environmental, organisational, interpersonal and individual.",
      ],
      memory: "Straight rebuy, modified rebuy, new task.",
    },
  },
];

export default lessons;
