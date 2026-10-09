import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-shapes-individual-behaviour",
    name: "What shapes individual behaviour",
    intro: "Biology, psychology and environment, acting together.",
    before: {
      q: "Can two people with the same skills react differently to the same deadline?",
      choices: [
        { label: "No", reveal: "They can. Psychological factors such as optimism change whether a deadline feels like a challenge or a threat." },
        { label: "Yes", reveal: "Right. An optimistic employee may see a deadline as a challenge rather than a threat." },
      ],
    },
    lead: "Behaviour depends on the person and the situation together: biological, psychological and environmental factors.",
    check: [
      ask("Culture, family, peers and the workplace are which kind of factor?", "Environmental", ["Biological", "Psychological", "Cognitive"], "They are the person's surroundings, so they are environmental. Personality and perception are psychological; age, gender, health and heredity are biological."),
      ask("Two new officers with the same training work in the same branch under the same manager. One sees the quarter-end target as a challenge, the other as a threat. What best explains the difference?", "Psychological factors, such as optimism", ["Environmental factors, such as the branch", "Biological factors, such as heredity", "Economic factors, such as pay"], "They share the same branch and manager, so the environment explains little of the difference. How each one sees the target is a matter of personality and perception, which are psychological."),
      ask("What does Lewin's formula B = f(P, E) imply for a manager?", "The same person may behave differently if the situation changes", ["Behaviour is fixed by personality alone", "Behaviour is fixed by the environment alone", "Only biological factors shape behaviour"], "Behaviour depends on the person and the environment together. \"Fixed by personality alone\" ignores the E in the formula, and the environment is the part a manager can change."),
    ],
    lens: [],
    reflect: "Which of the three factors has shaped your own behaviour at work or study the most?",
    summary: {
      points: [
        "Lewin: B = f(P, E). Behaviour depends on the person and the environment together.",
        "Biological: age, gender, health, heredity.",
        "Psychological: personality, perception, attitude, beliefs.",
        "Environmental: culture, family, peers, workplace. Collectivist cultures stress teamwork; individualist ones, personal success.",
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
    lead: "Values are lasting beliefs about what is right and important; Rokeach splits them into ends (terminal) and means (instrumental).",
    check: [
      ask("Which is a terminal value in Rokeach's scheme?", "Inner harmony", ["Honesty", "Responsibility", "Politeness"], "Inner harmony is an end-state a person strives for. Honesty, responsibility and politeness are ways of behaving, so they are instrumental values."),
      ask("A borrower offers a loan officer a gift. Honesty says refuse it; politeness says accept it. In Rokeach's terms, this is a conflict between…", "Two instrumental values", ["Two terminal values", "A terminal and an instrumental value", "A value and an attitude"], "Honesty and politeness are both modes of conduct, so both are instrumental. Neither is an end-state, so no terminal value is involved."),
      ask("An employee says, \"I dislike the new gift policy.\" This is best described as…", "An attitude towards one particular thing", ["A terminal value", "An instrumental value", "A stable personality trait"], "It evaluates one specific policy, so it is an attitude, and it can change easily. A value is broader and more stable, such as \"honesty matters\"."),
    ],
    lens: [
      { pairing: 0, adds: "A list of ten ways of acting rightly, most of them means rather than ends.", differs: "Manu presents them as marks of dharma. Rokeach separates end goals from the means of reaching them; the mapping is a reading." },
    ],
    reflect: "Name one terminal value and one instrumental value that guide you. Have they ever pulled against each other?",
    summary: {
      points: [
        "Values: enduring beliefs about what is right, desirable or important; stable, often formed early through family and culture.",
        "They act as standards, influence ethics and shape priorities, but do not always predict behaviour under pressure.",
        "Rokeach: terminal values (ends: freedom, inner harmony, wisdom) and instrumental values (means: honesty, responsibility, politeness), 18 of each in his survey.",
        "Values are broad and stable; attitudes are evaluations of particular things and change more easily.",
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
    lead: "Learning is a relatively permanent change in behaviour from experience: by association, by consequences, by thinking or by watching others.",
    check: [
      ask("Bonuses that encourage performance apply which theory?", "Operant conditioning (Skinner)", ["Classical conditioning (Pavlov)", "Cognitive learning (Tolman, Piaget)", "Social learning (Bandura)"], "A bonus is a pleasant consequence that makes the behaviour more likely: operant conditioning. Classical conditioning works by association on involuntary reactions, not on chosen effort."),
      ask("A supervisor stops the daily checks on an operator once his scrap rate falls, and the operator keeps it low. This is…", "Negative reinforcement", ["Punishment", "Extinction", "Positive reinforcement"], "Something unpleasant is removed, and the wanted behaviour becomes more likely. Punishment is the opposite move: it adds something unpleasant to make a behaviour less likely."),
      ask("Which of these is not learning, in the textbook sense?", "Working more slowly at the end of a long, tiring shift", ["Using a new machine correctly after training", "Arriving early after watching a punctual senior", "Wearing safety gloves after praise for doing so"], "Learning is a relatively permanent change from experience; tiredness passes. The other three are lasting changes from training, observation and reinforcement."),
    ],
    lens: [
      { pairing: 1, adds: "Practice grounded by time, continuity and care.", differs: "Patañjali speaks of the practice of a steady mind. Learning theory covers any lasting change, including through reward and observation." },
      { pairing: 2, adds: "People do what the best among them do, and follow the standard they set.", differs: "The Gītā is advising a leader to set an example. Bandura studies how observers learn." },
    ],
    reflect: "What is one habit you picked up by watching someone at work or in class?",
    summary: {
      points: [
        "Learning: a relatively permanent change in behaviour that occurs as a result of experience.",
        "Classical conditioning (Pavlov): association; the bell alone comes to bring salivation.",
        "Operant (Skinner): positive and negative reinforcement make behaviour more likely; punishment and extinction make it less likely.",
        "Cognitive (Tolman, Piaget): thinking. Social learning (Bandura): observation, through attention, retention, reproduction and reinforcement.",
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
    lead: "Motivation gives effort its intensity, direction and persistence; content theories say what motivates, process theories how.",
    check: [
      ask("In Vroom's theory, motivation equals…", "Expectancy × instrumentality × valence", ["Needs + drives + rewards", "Achievement + affiliation + power", "Hygiene − motivators"], "Vroom multiplies three beliefs: effort leads to performance, performance to reward, and the reward is valued. Achievement, affiliation and power are McClelland's needs, not a formula."),
      ask("A sales executive finds the bonus attractive and the target reachable, but bonuses have never been paid on time. Which of Vroom's links is weak?", "Instrumentality", ["Expectancy", "Valence", "Self-actualisation"], "Instrumentality is the belief that performance will bring the reward. Expectancy is fine here, because she believes the target is reachable."),
      ask("Expectancy is 0.8, instrumentality 0.9 and valence 0.5. Using Vroom's formula, what is motivation?", "0.36", ["2.2", "0.72", "0.45"], "0.8 × 0.9 × 0.5 = 0.72 × 0.5 = 0.36. 0.72 forgets to multiply by valence, and 2.2 adds the three instead of multiplying them."),
    ],
    lens: [
      { pairing: 3, adds: "Five layers of the person, from food to bliss, each within the last.", differs: "The Upaniṣad describes the self, not a sequence of needs to be satisfied at work; the comparison with Maslow is a reading." },
      { pairing: 4, adds: "Confidence that effort brings prosperity.", differs: "The Kuṟaḷ states the link between effort and reward as a truth. Vroom treats it as a belief that may be weak, and that managers must strengthen." },
    ],
    reflect: "What motivates you more at work: hygiene factors or motivators? Give one example of each.",
    summary: {
      points: [
        "Content theories (what motivates): Maslow, Herzberg, McClelland. Process theories (how): Vroom.",
        "Maslow: physiological, safety, social, esteem, self-actualisation; the first two are lower-order needs.",
        "Herzberg: motivators create satisfaction; hygiene factors, such as pay, only prevent dissatisfaction.",
        "McClelland: achievement, affiliation, power. Vroom: motivation = expectancy × instrumentality × valence, so one weak link pulls it down.",
      ],
      memory: "Maslow needs, Herzberg two factors, McClelland A-A-P, Vroom E × I × V.",
    },
  },
];

export default lessons;
