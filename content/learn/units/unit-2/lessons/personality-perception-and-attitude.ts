import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "personality",
    name: "Personality",
    intro: "A person's consistent pattern of thought, emotion and behaviour.",
    before: {
      q: "Is personality fixed at birth?",
      choices: [
        { label: "Yes, it is inherited", reveal: "Genetics plays a part, but personality is also shaped by environment, experience and learning." },
        { label: "It is shaped over time", reveal: "Partly. Genetics, environment, experience and learning all shape it, and it stays relatively consistent once formed." },
      ],
    },
    lead: "Personality is a person's typical way of thinking, feeling and acting, fairly steady across situations; the Big Five measure it as traits, the MBTI as types.",
    check: [
      ask("Which MBTI dimension contrasts facts and present realities with patterns and possibilities?", "Sensing and intuition", ["Extraversion and introversion", "Thinking and feeling", "Judging and perceiving"], "Sensing (S) attends to facts and the present; intuition (N) to patterns and possibilities. Thinking and feeling is about how decisions are made, logic against human impact."),
      ask("On a college fest committee, one member keeps the budget on time, tracks every receipt and never misses a deadline. Which Big Five trait does she score high on?", "Conscientiousness", ["Extraversion", "Openness", "Agreeableness"], "Organised, dependable and persistent describes conscientiousness. Openness is about curiosity and new ideas, not about keeping to plans."),
      ask("You are choosing a test to help select ten new officers. Which choice does the evidence support best?", "A validated measure of conscientiousness", ["An MBTI type for each candidate", "A test that sorts candidates by Jung's types", "Picking the most talkative candidates"], "Conscientiousness has the most consistent link with job performance. MBTI types predict performance poorly and can change on retest, so they suit team discussion, not selection."),
    ],
    lens: [
      { pairing: 0, adds: "Three qualities that mix in every person and colour food, work and faith alike.", differs: "The guṇas are a metaphysical account of nature. Trait theories measure dispositions with tests and statistics." },
      { pairing: 1, adds: "Disposition persists even in the wise: people act in keeping with their own nature.", differs: "The verse asks what mere restraint can achieve, though the next verse urges not falling under the sway of likes and dislikes. Personality theory says traits are stable but allows that behaviour can be learnt and changed." },
    ],
    reflect: "Which of the Big Five traits do you think is strongest in you, and how does it show at work or in study?",
    summary: {
      points: [
        "Personality: a unique, relatively consistent pattern of thoughts, feelings and behaviour, shaped by genes, environment, experience and learning.",
        "The Big Five (OCEAN) score traits on scales; conscientiousness links most consistently with job performance.",
        "MBTI: 16 types from four two-way dimensions (E–I, S–N, T–F, J–P); popular, but weak at predicting performance.",
        "Theories: psychoanalytic, behaviourist, humanistic, trait, cognitive, biological.",
      ],
      memory: "Personality is who you are, fairly steadily.",
    },
  },
  {
    blockId: "determinants-of-personality",
    name: "What shapes personality",
    intro: "Heredity, culture, family, social groups and the situation.",
    before: {
      q: "Two brothers grow up in the same house. Can their personalities still differ a great deal?",
      choices: [
        { label: "No, same home, same personality", reveal: "Not so. They share a family and culture, but heredity, friends and later situations differ for each." },
        { label: "Yes, quite a lot", reveal: "Right. Heredity, different friendships and different situations all shape each person separately." },
      ],
    },
    lead: "Personality is shaped by heredity, culture, family, social groups and the situation; heredity sets a range, not a result.",
    check: [
      ask("Which determinant covers the demands of the moment that bring out different sides of the same person?", "Situation", ["Heredity", "Culture", "Family"], "The situation calls forth different aspects of a stable personality. Heredity is what is present at birth, not what the moment demands."),
      ask("A relaxed clerk turns firm and commanding during a fire drill. Which determinant explains the change best?", "The situation", ["Heredity", "Family upbringing", "Cultural conditioning"], "The new demands of the moment brought out a different side of the same person. Heredity and family explain the clerk's usual calm, not the change."),
      ask("A trainer says, \"Sixty per cent of your personality is inherited and forty per cent learned.\" What is the best response?", "Heredity and environment work together, so such exact shares cannot be given for one person", ["Correct, because heredity always outweighs learning", "Correct, because culture and family make up the rest", "Wrong, because personality is entirely learned"], "Heredity sets a range and experience fills it in; the two cannot be separated for any one person. Saying it is entirely learned ignores heredity just as much."),
    ],
    lens: [],
    reflect: "Which of the five determinants shaped you most, and which would you like to change in your workplace?",
    summary: {
      points: [
        "Personality: from Latin persona, the actor's mask; Allport defines it as the dynamic organisation of psychophysical systems that determine characteristic behaviour and thought.",
        "Determinants: heredity (biological), culture, family, social groups and the situation; many texts use three: heredity, environment, situation.",
        "Heredity sets a range, not a result; shares of heredity and learning cannot be given exactly.",
        "A manager cannot change heredity but can change the situation.",
      ],
      memory: "Born with it, taught by it, brought out by the moment.",
    },
  },
  {
    blockId: "dark-triad-and-traits-at-work",
    name: "The Dark Triad and traits at work",
    intro: "Three socially undesirable traits, and what other traits predict on the job.",
    before: {
      q: "A manager hits every target but takes credit for his team's work. Is a good result enough to call his personality an asset?",
      choices: [
        { label: "Yes, results are all that matter", reveal: "Not quite. Some traits help the person while harming others, and in time harm the organisation too." },
        { label: "Not necessarily", reveal: "Right. Dark traits can produce results and damage trust in the same job." },
      ],
    },
    lead: "The Dark Triad is narcissism, Machiavellianism and psychopathy; other traits such as locus of control, self-esteem and risk-taking predict which job suits whom.",
    check: [
      ask("Which three traits make up the Dark Triad?", "Narcissism, Machiavellianism and psychopathy", ["Narcissism, neuroticism and psychopathy", "Machiavellianism, introversion and aggression", "Narcissism, Machiavellianism and low self-esteem"], "The Dark Triad is those three. Neuroticism belongs to the Big Five, and it is not part of the triad."),
      ask("An employee believes ends justify means, stays emotionally distant and manipulates colleagues to win. Which Dark Triad trait is that?", "Machiavellianism", ["Narcissism", "Psychopathy", "Low self-esteem"], "Manipulation and belief that ends justify means describe Machiavellianism. Narcissism centres on an inflated sense of self-importance and a need for admiration."),
      ask("A firm needs one person to decide fast in a volatile market and another to check accounts for fraud. Which pairing of risk-taking fits best?", "High risk-taking for the market role, low for the accounts check", ["Low risk-taking for both roles", "High risk-taking for both roles", "Low risk-taking for the market role, high for the accounts check"], "High risk-takers decide faster on less information, which suits the market. A careful person suits checking for fraud, where a guess can miss a problem."),
    ],
    lens: [],
    reflect: "Where have you seen charm and results used to hide poor treatment of others, and how could a team have noticed it sooner?",
    summary: {
      points: [
        "Dark Triad (Paulhus and Williams): narcissism, Machiavellianism, psychopathy; these are socially undesirable traits.",
        "Narcissism: inflated self-importance; Machiavellianism: manipulation, ends justify means; psychopathy: little concern or remorse.",
        "Internal locus of control suits initiative-heavy jobs; external suits structured, routine ones.",
        "High risk-takers decide faster on less information; match risk-taking to the job.",
      ],
      memory: "Self, schemer, cold: the dark three.",
    },
  },
  {
    blockId: "perception",
    name: "Perception",
    intro: "Selecting, organising and interpreting what we sense.",
    before: {
      q: "Do two people in the same meeting see the same meeting?",
      choices: [
        { label: "Yes", reveal: "Not quite. Perception is subjective: different experiences and expectations lead people to notice and interpret different things." },
        { label: "Not quite", reveal: "Right. Perception is subjective, so the same situation can draw different responses." },
      ],
    },
    lead: "We select, organise and interpret what we sense, and judge the causes of others' behaviour; errors creep in along the way, most at interpretation.",
    check: [
      ask("In which stage of perception do assumptions and stereotypes most often cause errors?", "Interpretation", ["Selection", "Organisation", "Sensation"], "Interpretation draws on experience, beliefs and motives, so assumptions fill the gaps there. Selection decides what we notice, not what it means."),
      ask("A manager rates an officer highly on every point of an appraisal because she speaks well in meetings. Which error is that?", "The halo effect", ["The horn effect", "Stereotyping", "The contrast effect"], "One favourable trait colouring the whole judgement is the halo effect. Stereotyping would judge her by a group she belongs to, not by one of her own traits."),
      ask("A salesperson misses target for one quarter, and so does everyone else in the region. Using Kelley's cues, what is the likelier cause?", "The situation, because consensus is high", ["Her lack of effort, because consistency is high", "Her character, because distinctiveness is low", "Her lack of skill, because consensus is low"], "When others act the same way in the same situation, consensus is high, which points to an external cause. Blaming her effort would be the fundamental attribution error."),
    ],
    lens: [
      { pairing: 2, adds: "A method: look for merits, look for faults, and judge by what outweighs.", differs: "The Kuṟaḷ gives advice for choosing people. Perception research describes the errors themselves and why they happen." },
      { pairing: 3, adds: "Wisdom defined as finding the truth of a message whoever speaks it.", differs: "The couplet is a moral ideal. OB treats judging the source as a predictable error to guard against." },
      { pairing: 5, adds: "The bias is old enough to have a proverb: others' faults are winnowed in the open, one's own are hidden.", differs: "The verse is a moral warning about honesty with oneself. Attribution research describes a measurable tendency and its causes, without blame." },
    ],
    reflect: "Recall a time you misjudged someone at first. Which perceptual error was at work?",
    summary: {
      points: [
        "Perception: selecting, organising and interpreting sensory information; it is subjective.",
        "Shaped by the perceiver, the target and the situation.",
        "Attribution (Kelley): high distinctiveness or consensus points outside the person; high consistency points to the person.",
        "Errors: stereotyping, halo and horn effects, selective perception, projection, contrast effect, fundamental attribution error, self-serving bias.",
      ],
      memory: "Select, organise, interpret.",
    },
  },
  {
    blockId: "attitude",
    name: "Attitude",
    intro: "A learned tendency to respond, favourably or not.",
    before: {
      q: "If someone believes hard work pays off, will they always work hard?",
      choices: [
        { label: "Always", reveal: "Not necessarily. Belief is only the cognitive part of an attitude; feelings and the intention to act matter too." },
        { label: "Not necessarily", reveal: "Right. An attitude has three parts: what you think, what you feel and what you are ready to do." },
      ],
    },
    lead: "An attitude is a favourable or unfavourable stance made of a belief, a feeling and a readiness to act; when these clash, people feel dissonance.",
    check: [
      ask("“Hard work leads to success” is which component of an attitude?", "Cognitive", ["Affective", "Behavioural", "Normative"], "Beliefs and ideas are cognitive. Affective would be a feeling, such as “I enjoy this project”."),
      ask("A shop assistant believes customers deserve good service but avoids the counter. He decides that difficult customers are not worth serving well. What is he doing?", "Reducing cognitive dissonance by changing his belief", ["Showing high job involvement", "Showing continuance commitment", "Forming an attitude through his peer group"], "His belief and his behaviour clashed, and he changed the belief to fit the behaviour. That is Festinger's dissonance reduction, not a form of commitment."),
      ask("A branch loses 5 staff a year, and each replacement costs about ₹2 lakh. If better commitment cuts leavers to 2, how much does it save a year?", "₹6 lakh", ["₹4 lakh", "₹10 lakh", "₹2 lakh"], "Three fewer leavers × ₹2 lakh = ₹6 lakh. ₹10 lakh is the total cost of 5 leavers, not the saving."),
    ],
    lens: [
      { pairing: 4, adds: "A person's settled inner stance (their faith) is said to make them who they are.", differs: "The Gītā links faith to a person's nature as a whole. Attitude theory describes a learned, specific tendency that can change." },
    ],
    reflect: "What is your attitude toward your current work or course, in each of its three parts?",
    summary: {
      points: [
        "Attitude: a learned tendency to respond consistently, favourably or unfavourably.",
        "Three components: affective (feel), behavioural (act), cognitive (think).",
        "Work attitudes: job satisfaction, organisational commitment (affective, continuance, normative), job involvement.",
        "Cognitive dissonance (Festinger): a clash between attitudes and behaviour is uncomfortable, so people change one or explain it away.",
      ],
      memory: "Think, feel, act.",
    },
  },
  {
    blockId: "attitude-definitions-and-job-attitudes",
    name: "Defining attitude; POS and job attitudes",
    intro: "Standard definitions, explicit and implicit attitudes, and perceived organisational support.",
    before: {
      q: "Can a person hold an attitude without knowing it?",
      choices: [
        { label: "No, we always know our own attitudes", reveal: "Not always. Implicit attitudes work without awareness yet still affect what we do." },
        { label: "Yes, some are unconscious", reveal: "Right. These are called implicit attitudes, as against explicit ones, which a person can state." },
      ],
    },
    lead: "Allport, Krech and Crutchfield, and Katz and Stotland define attitude in different words; attitudes can be explicit or implicit, and POS and engagement join the list of job attitudes.",
    check: [
      ask("Which definition calls attitude a tendency or predisposition to evaluate an object in a certain way?", "Katz and Stotland", ["Allport", "Krech and Crutchfield", "Festinger"], "That wording is Katz and Stotland's. Allport describes a state of readiness organised through experience, and Festinger is known for cognitive dissonance."),
      ask("A manager says in meetings that women make good engineers, yet keeps giving site visits only to men without noticing. What does this show?", "An implicit attitude that differs from his explicit one", ["High organisational commitment", "Perceived organisational support", "Cognitive dissonance reduced by a changed belief"], "He is unaware of the attitude that guides his assignments, so it is implicit. Dissonance would need him to notice the clash between belief and action."),
      ask("A clerk's request for emergency leave is granted without fuss and she concludes that the bank cares about her. Which job attitude is she showing?", "High perceived organisational support", ["High job involvement", "Strong continuance commitment", "High self-monitoring"], "She believes the organisation values and cares about her, which is POS. Job involvement is about identifying with the job itself, not about the employer's care."),
    ],
    lens: [],
    reflect: "Think of a recent time your employer or college showed it did or did not care about you. How did that change your effort?",
    summary: {
      points: [
        "Allport: a state of readiness organised through experience; Krech and Crutchfield: an enduring organisation of motivational, emotional, perceptual and cognitive processes; Katz and Stotland: a predisposition to evaluate an object in a certain way.",
        "Attitudes are learned, directed at objects, vary in strength, and may be explicit (stated) or implicit (unconscious).",
        "Perceived organisational support (POS): belief that the organisation values contributions and cares about well-being.",
        "Job attitudes: satisfaction, involvement, organisational commitment, POS and engagement.",
      ],
      memory: "Ready, steady, felt: attitude is a readiness shaped by experience.",
    },
  },
];

export default lessons;
