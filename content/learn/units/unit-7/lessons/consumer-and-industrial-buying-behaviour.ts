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
    lead: "Consumer behaviour is how people choose, buy, use and dispose of products, shaped by cultural, social, personal and psychological factors.",
    check: [
      ask("Which factor is the most basic cause of a person's wants?", "Culture", ["Personality", "Reference groups", "Economic situation"], "Culture sits under the cultural factors, with subculture and social class. Reference groups matter, but they are a social factor and narrower than culture."),
      ask("A daughter asks for a scooter, her friends recommend a brand, her father chooses it and her mother pays at the showroom. Who is the buyer?", "The mother", ["The father", "The daughter", "The friends"], "The buyer is the person who makes the actual purchase. The father is the decider; the daughter is the initiator and user; the friends are influencers."),
      ask("A brand wants to reach young professionals who value fitness and travel. Which measure of the personal factors should it use to describe them?", "Activities, interests and opinions (AIO)", ["Age and life-cycle stage alone", "Selective attention and retention", "Primary and secondary groups"], "Lifestyle is measured by AIO, and fitness and travel are interests. Age alone would miss what these buyers do and care about."),
    ],
    lens: [
      { pairing: 0, adds: "An image: water takes on the nature of the soil it flows through, and a person's understanding takes on the nature of their company.", differs: "The couplet is about how company shapes a person's mind. Reference groups are one social factor among the four sets of influences a marketer studies." },
    ],
    reflect: "Think of a recent purchase. Which reference group, family member or friend shaped what you chose?",
    summary: {
      points: [
        "Consumer behaviour covers searching for, buying, using, evaluating and disposing of products.",
        "Four sets of factors: cultural, social, personal and psychological, from the broadest to the most personal.",
        "Buying roles: initiator, influencer, decider, buyer and user; the payer is often not the chooser.",
      ],
      memory: "Cultural, social, personal, psychological.",
    },
  },
  {
    blockId: "buying-decision-process",
    name: "The buying decision process",
    intro: "Five stages from noticing a need to judging the purchase afterwards.",
    before: {
      q: "Is a buyer's decision finished at the till?",
      choices: [
        { label: "Yes", reveal: "Not quite. The fifth stage is post-purchase behaviour: satisfaction leads to repurchase and loyalty, dissatisfaction to returns and complaints." },
        { label: "No", reveal: "Right. The fifth stage is post-purchase behaviour: satisfaction leads to repurchase and loyalty, dissatisfaction to returns and complaints." },
      ],
    },
    lead: "Buyers move through need recognition, information search, evaluation, purchase and post-purchase behaviour; involvement decides how many stages they go through.",
    check: [
      ask("The brands a buyer seriously considers are called the…", "Evoked set", ["Awareness set", "Choice set", "Total set"], "The buyer is aware of some brands, considers fewer (the evoked set), and chooses among a few (the choice set). The awareness set is larger: brands known, not all considered."),
      ask("A week after buying a refrigerator that works perfectly, Ravi wonders whether another brand would have been better. This is…", "Cognitive dissonance", ["Dissatisfaction", "Need recognition", "Variety-seeking"], "Doubt about the choice is dissonance, and it can arise even when the product works well. Dissatisfaction would mean the fridge performed below his expectations."),
      ask("What should the refrigerator brand do to ease Ravi's doubt?", "Call to check the installation and remind him of the warranty", ["Advertise a new model to him at once", "Offer him a discount on a rival brand", "Do nothing, since the sale is complete"], "Reassurance, guarantees and after-sales contact reduce dissonance. Pushing a new model would feed his doubt rather than ease it."),
    ],
    lens: [
      { pairing: 1, adds: "A rule: do nothing that will make you grieve ‘what have I done’, and if you have, do not do it again.", differs: "The couplet speaks of wrong actions in general, not purchases. Cognitive dissonance is a buyer's doubt after buying, which marketers ease with reassurance and guarantees." },
    ],
    reflect: "Recall a purchase you doubted afterwards. What could the seller have done to reassure you?",
    summary: {
      points: [
        "Stages: need recognition, information search, evaluation of alternatives, purchase, post-purchase behaviour.",
        "Awareness set, evoked (consideration) set, choice set.",
        "Cognitive dissonance is doubt about the choice, eased by reassurance, guarantees and after-sales contact.",
        "Satisfaction depends on the gap between expectations and perceived performance.",
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
    lead: "Henry Assael sorted buying behaviour by the buyer's involvement and the differences between brands, giving four types.",
    check: [
      ask("High involvement with few differences between brands, as with a carpet, is…", "Dissonance-reducing buying", ["Complex buying", "Variety-seeking buying", "Habitual buying"], "High involvement but similar brands means the buyer decides quickly and seeks comfort afterwards. Complex buying needs real differences between brands."),
      ask("A shopper buys a different brand of biscuits each week, though she liked last week's. This is…", "Variety-seeking buying", ["Dissonance-reducing buying", "Complex buying", "Habitual buying"], "Low involvement with real brand differences, switching for a change, is variety-seeking. It is not a sign she was dissatisfied with last week's brand."),
      ask("You are the market leader in a variety-seeking category. What should you mainly do?", "Keep shelf space and remind buyers often", ["Offer deals and novelty to make buyers switch", "Give detailed technical information and trials", "Focus on after-sales reassurance"], "Leaders protect their place on the shelf and keep reminding. Deals and novelty are the challenger's tools for prompting a switch."),
    ],
    lens: [],
    reflect: "Pick something you bought this month. Which of Assael's four types was it, and why?",
    summary: {
      points: [
        "Two dimensions: the buyer's involvement and the differences between brands.",
        "Complex (car) and dissonance-reducing (carpet) are high involvement.",
        "Variety-seeking (biscuits) and habitual (salt) are low involvement.",
        "Involvement belongs to the buyer, not the product.",
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
    lead: "The same ratings can lead to different choices: buyers choose by conjunctive, disjunctive, lexicographic or compensatory rules.",
    check: [
      ask("Ranking attributes and comparing brands on the most important first is the…", "Lexicographic rule", ["Conjunctive rule", "Disjunctive rule", "Compensatory rule"], "The buyer moves to the next attribute only if there is a tie. The conjunctive rule instead sets a minimum on every attribute."),
      ask("A buyer will accept any laptop that has either a battery life of 12 hours or more, or a weight under 1 kg. Which rule is this?", "Disjunctive", ["Conjunctive", "Lexicographic", "Compensatory"], "Meeting a high standard on any one key attribute is enough, which is disjunctive (“or”). Conjunctive would require every attribute to pass (“and”)."),
      ask("Phone X is rated 8 on price and 4 on camera; the buyer's weights are price 0.5 and camera 0.5. What is its compensatory score?", "6.0", ["12.0", "4.0", "8.0"], "0.5 × 8 + 0.5 × 4 = 4 + 2 = 6. 12 adds the ratings without weights; 4 is only the price part."),
    ],
    lens: [],
    reflect: "When you last chose a phone or laptop, did one attribute decide it, or did you weigh everything together?",
    summary: {
      points: [
        "Non-compensatory rules: conjunctive (every minimum), disjunctive (any high standard), lexicographic (top attribute first).",
        "Compensatory rules, such as Fishbein's expectancy-value model, weigh all attributes so strengths offset weaknesses.",
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
    lead: "Organisations buy through a professional process, in buying situations from a routine reorder to a new task, with several people in the buying centre.",
    check: [
      ask("Demand for business goods that comes from demand for consumer goods is…", "Derived demand", ["Elastic demand", "Primary demand", "Habitual demand"], "It is derived from final consumer demand, so it is fairly inelastic in the short run and fluctuates more. It is not elastic: price changes move it little in the short run."),
      ask("An auto-parts plant drops its usual paint supplier after a price rise and asks three others to quote. This buying situation is a…", "Modified rebuy", ["Straight rebuy", "New task", "Performance review"], "The plant re-evaluates suppliers because conditions changed: a modified rebuy. It is not a new task, since the plant has bought paint before."),
      ask("You sell robots and the purchase officer decides which sellers get to meet the plant's engineers. Which role is he playing?", "Gatekeeper", ["Decider", "User", "Approver"], "Gatekeepers control the flow of information to the buying centre. The decider settles the final choice, usually someone more senior."),
    ],
    lens: [
      { pairing: 2, adds: "Precious goods examined before entering the treasury, with qualities and defects set out so experts can judge them.", differs: "The passage concerns a treasury's gems and pearls. Industrial buying adds the buyclasses, the buygrid's eight buyphases and the roles of the buying centre." },
    ],
    reflect: "Think of something your college or workplace bought. Who in its buying centre had the final say?",
    summary: {
      points: [
        "Business markets: fewer, larger buyers, professional purchasing, several influencers, derived demand.",
        "Buyclasses: straight rebuy, modified rebuy, new task; crossed with eight buyphases in the buygrid (Robinson, Faris and Wind, 1967).",
        "Buying centre: users, influencers, buyers, deciders, gatekeepers, plus initiators and approvers.",
        "Influences: environmental, organisational, interpersonal and individual (Webster and Wind).",
      ],
      memory: "Straight rebuy, modified rebuy, new task.",
    },
  },
];

export default lessons;
