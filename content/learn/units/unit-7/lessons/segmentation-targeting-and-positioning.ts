import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "market-segmentation",
    name: "Market segmentation",
    intro: "Dividing a market into groups of buyers who want different things.",
    before: {
      q: "Is ‘people who buy often and stay loyal’ a demographic segment?",
      choices: [
        { label: "Yes", reveal: "Not quite. Usage rate and loyalty status are behavioural variables. Demographic variables are age, gender, income, education, occupation, family size and life cycle, and religion." },
        { label: "No, behavioural", reveal: "Right. Usage rate and loyalty status are behavioural variables, along with occasions, benefits sought, user status, readiness to buy and attitude." },
      ],
    },
    lead: "Segmentation splits a market into groups of buyers with similar needs, characteristics or behaviour, so each group can get an offer that fits it.",
    check: [
      ask("Lifestyle measured by activities, interests and opinions belongs to which basis?", "Psychographic", ["Demographic", "Behavioural", "Geographic"], "The AIO approach of Wells and Tigert (1971) measures lifestyle, which is psychographic. It is not demographic: people with the same age and income can have very different lifestyles."),
      ask("A bank branch sorts its customers into non-users, first-time users and ex-users of its mobile app. Which basis is it using?", "Behavioural", ["Demographic", "Psychographic", "Geographic"], "User status is a behavioural variable: it describes how people respond to the product. It is not demographic, because it says nothing about age, income or occupation."),
      ask("A coaching centre in Patna counts 6,000 Class 12 students nearby. If 4% enrol at ₹1,000 a month, the monthly revenue is…", "₹2.4 lakh", ["₹24,000", "₹60 lakh", "₹24 lakh"], "4% of 6,000 is 240 students, and 240 × ₹1,000 = ₹2,40,000, or ₹2.4 lakh. ₹60 lakh forgets that only 4% enrol. The estimate tests whether the segment is substantial."),
    ],
    lens: [
      { pairing: 0, adds: "A rule for speakers: those who know the range of words should study the assembly before they speak.", differs: "The couplet is about addressing a gathering, not dividing a market. Segmentation adds bases such as geographic, demographic, psychographic and behavioural variables, and tests of a useful segment." },
    ],
    reflect: "Choose a brand you buy. Which segment do you think it is aiming at, and on which bases (geographic, demographic, psychographic, behavioural)?",
    summary: {
      points: [
        "STP: segmentation, targeting and positioning; segmentation comes first.",
        "Levels run from mass marketing through segment and niche to local and individual marketing.",
        "Consumer bases: geographic, demographic, psychographic, behavioural; business markets use Bonoma and Shapiro's nested approach.",
        "Useful segments are measurable, substantial, accessible, differentiable and actionable.",
      ],
      memory: "Geographic, demographic, psychographic, behavioural.",
    },
  },
  {
    blockId: "targeting",
    name: "Targeting",
    intro: "Choosing which segments to serve.",
    before: {
      q: "Should a firm always target the biggest segment?",
      choices: [
        { label: "Yes, always", reveal: "Size and growth are only one test. A segment is also judged on its structural attractiveness and its fit with the firm's objectives and resources." },
        { label: "Not necessarily", reveal: "Right. A segment is judged on size and growth, structural attractiveness, and fit with the firm's objectives and resources." },
      ],
    },
    lead: "Targeting judges each segment on size, attractiveness and fit, then chooses which segments to serve and how many.",
    check: [
      ask("Niche marketing as a targeting strategy is also called…", "Concentrated marketing", ["Undifferentiated marketing", "Differentiated marketing", "Full market coverage"], "Concentrated marketing puts the firm's effort into one niche. Differentiated marketing is the tempting answer, but it serves several segments with separate offers."),
      ask("A Pune firm makes only brake pads and sells them to car makers, two-wheeler makers and repair garages. Which pattern is this?", "Product specialisation", ["Market specialisation", "Selective specialisation", "Single-segment concentration"], "One product sold to several segments is product specialisation. Market specialisation is the reverse: many products for one customer group."),
      ask("What is the main risk for a small firm that serves a single segment with a single product?", "If the segment shrinks or a strong rival enters, it has nothing to fall back on", ["It spreads its effort across too many offers to serve any of them well", "It cannot learn what its customers need", "It must always charge less than its larger rivals"], "Concentration puts everything on one segment. Spreading effort too thin is the risk of full market coverage, the opposite pattern."),
    ],
    lens: [],
    reflect: "Think of a company you know well. Which of the five patterns of target market selection does it follow?",
    summary: {
      points: [
        "Segments are evaluated on size and growth, structural attractiveness, and fit with objectives and resources.",
        "Five patterns (Abell, 1980): single-segment concentration, selective specialisation, product specialisation, market specialisation, full coverage.",
        "Product specialisation: one product, many markets. Market specialisation: many products, one market.",
        "Strategies run from undifferentiated through differentiated and concentrated to micromarketing.",
      ],
      memory: "Evaluate the segments, then choose a pattern of coverage.",
    },
  },
  {
    blockId: "positioning",
    name: "Positioning",
    intro: "Winning a distinct, valued place in the customer's mind.",
    before: {
      q: "Is positioning something you do to the product?",
      choices: [
        { label: "Yes", reveal: "Ries and Trout said the opposite: positioning is not what you do to a product but what you do to the prospect's mind." },
        { label: "No, to the mind", reveal: "Right. In Ries and Trout's words, positioning is what you do to the prospect's mind." },
      ],
    },
    lead: "Positioning chooses the idea buyers should link with the brand, built on points of difference and points of parity.",
    check: [
      ask("Associations a brand needs just to be credible in its category are…", "Points of parity", ["Points of difference", "Value propositions", "Reasons to believe"], "Points of parity remove reasons not to choose the brand. Points of difference do the opposite job: they give a reason to choose it."),
      ask("A budget hotel chain offers clean rooms with few extra services, at a much lower price than full-service hotels. Its value proposition is…", "Less for much less", ["The same for less", "More for less", "Less for the same"], "Buyers get fewer benefits but pay much less. ‘The same for less’ would need the same benefits as full-service hotels, which the chain does not offer."),
      ask("Buyers love a breakfast mix because it is quick, but suspect it is unhealthy. What should the brand do?", "Keep speed at the centre and give a reason to believe on nutrition", ["Drop speed and reposition the brand on health", "Cut the price to win back the doubters", "Advertise the speed more heavily"], "The doubt is a missing point of parity, not a reason to drop the point of difference. Repositioning on health throws away what buyers already value."),
    ],
    lens: [],
    reflect: "Pick two competing brands you know. What is one point of difference and one point of parity for each?",
    summary: {
      points: [
        "Ries and Trout: positioning is what you do to the prospect's mind.",
        "Keller's PODs give a reason to choose; POPs remove reasons not to.",
        "Five winning value propositions: more for more, more for the same, more for less, the same for less, less for much less.",
        "Brands can be positioned on attributes, benefits, use, user, competitor, product class, or price and quality.",
      ],
      memory: "Positioning lives in the customer's mind, not in the product.",
    },
  },
  {
    blockId: "differentiation-and-the-positioning-bulls-eye",
    name: "Differentiation and the brand bull's-eye",
    intro: "How an offer is made different, and how the positioning is shared.",
    before: {
      q: "Is any feature that makes a brand different a good point of difference?",
      choices: [
        { label: "Yes", reveal: "Not quite. It must pass three tests: desirable to consumers, deliverable by the company, and differentiating from competitors." },
        { label: "No", reveal: "Right. A real point of difference must be desirable, deliverable and differentiating." },
      ],
    },
    lead: "Firms differentiate on product, services, personnel, channel or image, and test each point of difference as desirable, deliverable and differentiating.",
    check: [
      ask("Competence, courtesy, credibility and responsiveness are bases of…", "Personnel differentiation", ["Services differentiation", "Channel differentiation", "Image differentiation"], "These describe the firm's people, so they are personnel. Services differentiation covers what the firm does for the buyer, such as delivery, installation and repair."),
      ask("Every tiffin service in a city says its food is ‘tasty and hygienic’. Which of Keller's tests does this claim fail?", "Differentiating", ["Desirable", "Deliverable", "None: it passes all three"], "Buyers do want tasty, hygienic food, so the claim is desirable. It fails because every rival makes it, so it is not distinctive."),
      ask("A low-priced brand runs advertisements reassuring buyers about its quality. Which kind of point of parity is it building?", "Correlational", ["Competitive", "Category", "A point of difference"], "The doubt about quality comes from the brand's own low price, so it is correlational. A competitive point of parity answers a rival's point of difference instead."),
    ],
    lens: [],
    reflect: "Pick a brand you use. What is its main point of difference, and does it pass all three tests?",
    summary: {
      points: [
        "Five bases of differentiation: product, services, personnel, channel, image.",
        "A point of difference must be desirable, deliverable and differentiating.",
        "Points of parity are category, correlational or competitive.",
        "The bull's-eye: brand mantra and key POPs and PODs at the centre, then reasons to believe, then values and executional properties.",
      ],
      memory: "Differentiate on product, services, people, channel or image.",
    },
  },
];

export default lessons;
