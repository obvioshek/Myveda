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
];

export default lessons;
