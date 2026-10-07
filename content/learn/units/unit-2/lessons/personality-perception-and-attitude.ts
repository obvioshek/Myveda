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
    lead: "Personality is unique to each person and relatively consistent over time.",
    check: [
      ask("Which MBTI dimension contrasts facts and present realities with patterns and possibilities?", "Sensing and intuition", ["Extraversion and introversion", "Thinking and feeling", "Judging and perceiving"], "S for facts and the present, N for patterns and possibilities."),
      ask("Which theory says personality is driven by unconscious conflicts among id, ego and superego?", "Psychoanalytic (Freud)", ["Trait (Allport)", "Humanistic (Rogers)", "Cognitive (Bandura)"], "Freud also stressed early childhood."),
      ask("What does OCEAN stand for?", "Openness, conscientiousness, extraversion, agreeableness, neuroticism", ["Optimism, confidence, energy, ambition, nerve", "Openness, curiosity, empathy, attitude, need", "Order, control, efficiency, authority, norms"], "These are the Big Five traits."),
    ],
    lens: [
      { pairing: 0, adds: "Three qualities that mix in every person and colour food, work and faith alike.", differs: "The guṇas are a metaphysical account of nature. Trait theories measure dispositions with tests and statistics." },
      { pairing: 1, adds: "Disposition persists even in the wise: people act in keeping with their own nature.", differs: "The verse asks what mere restraint can achieve, though the next verse urges not falling under the sway of likes and dislikes. Personality theory says traits are stable but allows that behaviour can be learnt and changed." },
    ],
    reflect: "Which of the Big Five traits do you think is strongest in you, and how does it show at work or in study?",
    summary: {
      points: [
        "Personality: a unique, relatively consistent pattern of thoughts, emotions and behaviour, shaped by genes, environment, experience and learning.",
        "MBTI: 16 types from four dimensions (E–I, S–N, T–F, J–P).",
        "Theories: psychoanalytic, behaviourist, humanistic, trait, cognitive, biological. The Big Five: OCEAN.",
      ],
      memory: "Personality is who I am.",
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
    lead: "We notice some things, arrange them into patterns, and give them meaning, and errors creep in at each step.",
    check: [
      ask("In which stage of perception do assumptions and stereotypes most often cause errors?", "Interpretation", ["Selection", "Organisation", "Sensation"], "Interpretation draws on experience, beliefs and motives."),
      ask("One unfavourable trait colours the whole judgement of a person. Which error is that?", "The horn effect", ["The halo effect", "Projection", "The contrast effect"], "The halo effect is the same with a favourable trait."),
      ask("Judging a candidate against the previous candidate rather than a fixed standard is…", "The contrast effect", ["Stereotyping", "Selective perception", "Projection"], "The standard should be objective, not the person before."),
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
        "Errors: stereotyping, halo and horn effects, selective perception, projection, contrast effect.",
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
    lead: "An attitude combines a belief, a feeling and a readiness to act.",
    check: [
      ask("“Hard work leads to success” is which component of an attitude?", "Cognitive", ["Affective", "Behavioural", "Normative"], "Beliefs and ideas are cognitive."),
      ask("Which work attitude is emotional attachment and loyalty to the organisation?", "Organisational commitment", ["Job involvement", "Job satisfaction", "Job enrichment"], "Strong commitment can reduce turnover and absenteeism."),
    ],
    lens: [
      { pairing: 4, adds: "A person's settled inner stance (their faith) is said to make them who they are.", differs: "The Gītā links faith to a person's nature as a whole. Attitude theory describes a learned, specific tendency that can change." },
    ],
    reflect: "What is your attitude toward your current work or course, in each of its three parts?",
    summary: {
      points: [
        "Attitude: a learned tendency to respond consistently, favourably or unfavourably.",
        "Three components: affective (feel), behavioural (act), cognitive (think).",
        "Work attitudes: job satisfaction, organisational commitment, job involvement. Formed by family, peers, the organisation and experience.",
      ],
      memory: "Think, feel, act.",
    },
  },
];

export default lessons;
