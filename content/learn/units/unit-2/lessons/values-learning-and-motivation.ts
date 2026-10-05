import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-shapes-individual-behaviour",
    name: "What shapes individual behaviour",
    intro: "Biology, psychology and environment.",
    before: {
      q: "Can two people with the same skills react differently to the same deadline?",
      choices: [
        { label: "No", reveal: "They can. Psychological factors such as optimism change whether a deadline feels like a challenge or a threat." },
        { label: "Yes", reveal: "Right. An optimistic employee may see a deadline as a challenge rather than a threat." },
      ],
    },
    lead: "Behaviour comes from internal traits, learned experience and surroundings.",
    check: [
      ask("Culture, family, peers and the workplace are which kind of factor?", "Environmental", ["Biological", "Psychological", "Cognitive"], "Biological factors are age, gender, health and heredity."),
      ask("Which culture tends to stress teamwork over personal success?", "Collectivist", ["Individualist", "Hierarchical", "Masculine"], "Individualist cultures stress personal success."),
    ],
    lens: [],
    reflect: "Which of the three factors has shaped your own behaviour at work or study the most?",
    summary: {
      points: [
        "Biological: age, gender, health, heredity.",
        "Psychological: personality, perception, attitude, beliefs.",
        "Environmental: culture, family, peers, workplace.",
      ],
      memory: "Biology, psychology, environment.",
    },
  },
  {
    blockId: "values",
    name: "Values",
    intro: "Deep beliefs that guide actions and decisions.",
    before: {
      q: "Is honesty an end in itself, or a way of reaching an end?",
      choices: [
        { label: "An end in itself", reveal: "In Rokeach's scheme honesty is an instrumental value: a means. Terminal values are end goals such as freedom or wisdom." },
        { label: "A way of reaching one", reveal: "In Rokeach's scheme, yes: honesty is instrumental. Terminal values are end goals such as freedom, inner harmony and wisdom." },
      ],
    },
    lead: "Values decide what a person considers right, desirable or important.",
    check: [
      ask("Which is a terminal value in Rokeach's scheme?", "Inner harmony", ["Honesty", "Responsibility", "Politeness"], "The others are instrumental values."),
      ask("Values are usually…", "Stable and enduring, often formed early through family and culture", ["Changed every year", "Learned only at work", "The same for everyone"], "They also act as standards for judging actions and people."),
    ],
    lens: [
      { pairing: 0, adds: "A list of ten ways of acting rightly, most of them means rather than ends.", differs: "Manu presents them as marks of dharma. Rokeach separates end goals from the means of reaching them; the mapping is a reading." },
    ],
    reflect: "Name one terminal value and one instrumental value that guide you. Have they ever pulled against each other?",
    summary: {
      points: [
        "Values: deep, stable beliefs about what is right, desirable or important.",
        "They act as standards, influence ethics and shape priorities.",
        "Rokeach: terminal values (ends: freedom, inner harmony, wisdom) and instrumental values (means: honesty, responsibility, politeness).",
      ],
      memory: "Terminal are ends; instrumental are means.",
    },
  },
  {
    blockId: "learning",
    name: "Learning",
    intro: "A lasting change from experience, observation or practice.",
    before: {
      q: "Can you learn a job just by watching someone else do it?",
      choices: [
        { label: "No, only by doing", reveal: "Bandura's social learning theory says people do learn by observing and imitating others." },
        { label: "Yes, partly", reveal: "Right. Social learning theory says people learn by observing and imitating others." },
      ],
    },
    lead: "Learning is a relatively permanent change in behaviour or knowledge.",
    check: [
      ask("Bonuses that encourage performance apply which theory?", "Operant conditioning (Skinner)", ["Classical conditioning (Pavlov)", "Cognitive learning (Tolman, Piaget)", "Social learning (Bandura)"], "Behaviour is shaped by rewards and punishments."),
      ask("Advertising that links an emotion with a product applies which theory?", "Classical conditioning (Pavlov)", ["Operant conditioning", "Social learning", "Cognitive learning"], "Learning by association."),
    ],
    lens: [
      { pairing: 1, adds: "Practice grounded by time, continuity and care.", differs: "Patañjali speaks of the practice of a steady mind. Learning theory covers any lasting change, including through reward and observation." },
      { pairing: 2, adds: "People do what the best among them do, and follow the standard they set.", differs: "The Gītā is advising a leader to set an example. Bandura studies how observers learn." },
    ],
    reflect: "What is one habit you picked up by watching someone at work or in class?",
    summary: {
      points: [
        "Learning: a relatively permanent change in behaviour or knowledge through experience, observation or practice.",
        "Classical conditioning (Pavlov): association. Operant (Skinner): reward and punishment.",
        "Cognitive (Tolman, Piaget): thinking. Social learning (Bandura): observation and imitation.",
      ],
      memory: "Pavlov associates, Skinner reinforces, Piaget thinks, Bandura watches.",
    },
  },
  {
    blockId: "motivation",
    name: "Motivation",
    intro: "The push that energises, guides and sustains behaviour.",
    before: {
      q: "Will a pay rise, on its own, make people satisfied with their jobs?",
      choices: [
        { label: "Yes", reveal: "Herzberg disagreed: pay is a hygiene factor. It prevents dissatisfaction, but motivators such as recognition create satisfaction." },
        { label: "Not on its own", reveal: "Right. In Herzberg's terms pay is a hygiene factor; satisfaction comes from motivators such as recognition." },
      ],
    },
    lead: "Motivation energises, guides and sustains behaviour toward goals.",
    check: [
      ask("In Vroom's theory, motivation equals…", "Expectancy × instrumentality × valence", ["Needs + drives + rewards", "Achievement + affiliation + power", "Hygiene − motivators"], "Effort leads to performance, and performance to reward."),
      ask("McClelland's three needs are…", "Achievement, affiliation and power", ["Safety, esteem and belonging", "Existence, relatedness and growth", "Pay, status and security"], "Assign work to suit the dominant need."),
    ],
    lens: [
      { pairing: 3, adds: "Five layers of the person, from food to bliss, each within the last.", differs: "The Upaniṣad describes the self, not a sequence of needs to be satisfied at work; the comparison with Maslow is a reading." },
      { pairing: 4, adds: "Confidence that effort brings prosperity.", differs: "The Kuṟaḷ states the link between effort and reward as a truth. Vroom treats it as a belief that may be weak, and that managers must strengthen." },
    ],
    reflect: "What motivates you more at work: hygiene factors or motivators? Give one example of each.",
    summary: {
      points: [
        "Maslow: needs rise from physiological to self-actualisation.",
        "Herzberg: motivators create satisfaction; hygiene factors prevent dissatisfaction.",
        "McClelland: achievement, affiliation, power. Vroom: motivation = expectancy × instrumentality × valence.",
      ],
      memory: "Maslow needs, Herzberg two factors, McClelland A-A-P, Vroom E × I × V.",
    },
  },
];

export default lessons;
