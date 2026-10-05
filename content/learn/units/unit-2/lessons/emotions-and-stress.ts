import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "emotions-moods-and-affect",
    name: "Emotions, moods and affect",
    intro: "Three kinds of feeling, and what emotions do.",
    before: {
      q: "If you wake up irritable for no clear reason, is that an emotion or a mood?",
      choices: [
        { label: "An emotion", reveal: "More likely a mood: general, longer-lasting and often without a definite cause. Emotions are brief and aimed at a particular person or event." },
        { label: "A mood", reveal: "Right. Moods are general and longer-lasting, often without a definite cause." },
      ],
    },
    lead: "Affect is the background, emotions are brief and specific, moods are general and longer.",
    check: [
      ask("Which is brief, intense and directed at a particular event or person?", "An emotion", ["A mood", "Affect", "A value"], "Moods are general and long; affect is the broad emotional tone."),
      ask("Which of these is one of the six universal emotions?", "Surprise", ["Wonder", "Desire", "Love"], "The six are happiness, sadness, fear, anger, surprise and disgust. Wonder, desire and love are among Descartes' passions."),
    ],
    lens: [],
    reflect: "What mood have you carried into work or class this week, and how did it colour your day?",
    summary: {
      points: [
        "Affect: broad emotional tone. Emotions: brief, intense, specific. Moods: general, longer, often without cause.",
        "Emotions drive behaviour and decisions; display rules vary by culture.",
        "Six universal emotions: happiness, sadness, fear, anger, surprise, disgust.",
      ],
      memory: "Emotion is short and specific; mood is long and general.",
    },
  },
  {
    blockId: "sources-of-emotions-and-moods",
    name: "Sources of emotions and moods",
    intro: "What lifts or lowers how we feel.",
    before: {
      q: "Does bad weather reliably put people in a bad mood?",
      choices: [
        { label: "Yes", reveal: "The evidence says its effects are generally limited; the link people notice may be an illusion of correlation." },
        { label: "Less than we think", reveal: "Right. Weather's effects are generally limited; the link may be an illusion of correlation." },
      ],
    },
    lead: "Personality, stress, social contact, sleep, exercise and age all shape emotions and moods.",
    check: [
      ask("What does poor sleep do?", "Weakens emotional regulation, bringing irritability and poorer judgement", ["Improves focus", "Has no effect", "Reduces stress"], "Sleep is one of the strongest sources."),
      ask("What does the chapter say about sex differences in emotion?", "Patterns may differ, but individual and cultural variation is substantial", ["Women and men feel completely differently", "There are no differences at all", "Men regulate emotion better"], "Differences between groups are smaller than variation within them."),
    ],
    lens: [],
    reflect: "Which of these sources most affects your own mood at work?",
    summary: {
      points: [
        "Sources: personality, weather (limited), stress, social interaction, sleep, exercise, age, sex.",
        "Poor sleep weakens regulation; exercise lifts mood.",
        "Regulation may improve with age and experience.",
      ],
      memory: "Sleep, exercise and people move moods most.",
    },
  },
  {
    blockId: "emotional-labour-and-emotional-intelligence",
    name: "Emotional labour and emotional intelligence",
    intro: "Showing the emotions a job requires, and managing emotions well.",
    before: {
      q: "Is smiling at a rude customer part of the job?",
      choices: [
        { label: "It shouldn't be", reveal: "In many roles it is: that is emotional labour. The risk is emotional dissonance, which over time can lead to burnout." },
        { label: "Often, yes", reveal: "Right. That is emotional labour, and a long gap between felt and shown emotion can lead to burnout." },
      ],
    },
    lead: "Emotional labour has a cost; emotional intelligence helps people bear it and work well with others.",
    check: [
      ask("The gap between felt and displayed emotion is called…", "Emotional dissonance", ["Emotional intelligence", "Affect", "Empathy"], "Prolonged, it may lead to fatigue, burnout and job dissatisfaction."),
      ask("Which is one of the four components of emotional intelligence?", "Empathy", ["Intelligence quotient", "Extraversion", "Conscientiousness"], "The four are self-awareness, emotional regulation, empathy and relationships."),
    ],
    lens: [
      { pairing: 0, adds: "A portrait of steadiness: undisturbed in sorrow, free of craving, fear and anger.", differs: "The Gītā aims at rising above emotion. Emotional intelligence also values recognising and using emotions." },
      { pairing: 1, adds: "Seeing the joy and sorrow of others as equal to one's own.", differs: "The Gītā presents this as the mark of the highest yogin. EI treats empathy as a skill that can be developed and used at work." },
      { pairing: 2, adds: "Patience with those who scorn you, like the earth with those who dig it.", differs: "The couplet praises patience. Emotional labour research warns that suppressing feeling for long periods leads to burnout." },
    ],
    reflect: "When did you last show an emotion at work that you did not feel? What did it cost you?",
    summary: {
      points: [
        "Emotional labour: displaying the emotions a job requires; dissonance can cause burnout.",
        "Emotional intelligence: recognise, understand and manage your own and others' emotions.",
        "Components: self-awareness, emotional regulation, empathy, relationships.",
      ],
      memory: "Recognise, regulate, empathise, relate.",
    },
  },
  {
    blockId: "work-stress",
    name: "Work stress",
    intro: "When demands stretch the capacity to cope.",
    before: {
      q: "Is all stress bad for performance?",
      choices: [
        { label: "Yes", reveal: "Not all. Moderate stress may enhance performance, and challenge stressors can motivate. Chronic stress is what harms." },
        { label: "No", reveal: "Right. Moderate stress may help; chronic stress brings burnout, illness and decline." },
      ],
    },
    lead: "Stress is strain when demands exceed resources; its sources are environmental, organisational and personal.",
    check: [
      ask("A tight but meaningful deadline is which kind of stressor?", "A challenge stressor", ["A hindrance stressor", "An environmental stressor", "A personal stressor"], "Hindrance stressors, such as bureaucracy, block goals."),
      ask("Role ambiguity is which source of stress?", "Organisational", ["Environmental", "Personal", "Physiological"], "Others are heavy workload, poor management and conflict."),
      ask("Absenteeism and withdrawal are which consequence of stress?", "Behavioural", ["Physiological", "Psychological", "Environmental"], "Physiological consequences include headaches and fatigue."),
    ],
    lens: [],
    reflect: "List your current stressors. Which are challenges and which are hindrances?",
    summary: {
      points: [
        "Stress: demands stretching the capacity to cope; demands above resources cause strain.",
        "Challenge stressors can motivate; hindrance stressors block goals.",
        "Sources: environmental, organisational, personal. Consequences: physiological, psychological, behavioural.",
      ],
      memory: "Demands above resources: strain.",
    },
  },
  {
    blockId: "stress-management",
    name: "Stress management",
    intro: "What individuals and organisations can do.",
    before: {
      q: "Is managing stress only the employee's job?",
      choices: [
        { label: "Yes", reveal: "It is a dual strategy: individuals manage their time, exercise and relax, and organisations redesign jobs, set clear goals and support wellness." },
        { label: "No", reveal: "Right. It is a dual strategy: individual and organisational approaches together." },
      ],
    },
    lead: "Stress is managed from both sides: by the individual and by the organisation.",
    check: [
      ask("Which is an organisational approach?", "Job redesign", ["Meditation", "Time management", "Physical exercise"], "The others are individual approaches."),
      ask("Clear goal setting reduces stress because…", "Specific goals and feedback reduce confusion", ["It increases workload", "It removes all deadlines", "It replaces training"], "Unclear roles are a common trigger of stress."),
    ],
    lens: [
      { pairing: 3, adds: "Moderation in food, recreation, effort and sleep as the way to remove sorrow.", differs: "The Gītā describes a discipline for life. Stress management adds organisational measures, such as job redesign, that no individual can apply alone." },
    ],
    reflect: "Which individual approach could you start this week, and which organisational one would you ask for?",
    summary: {
      points: [
        "Individual: time management, exercise, relaxation, social support.",
        "Organisational: job fit, training, clear goals, job redesign, empowerment, communication, sabbaticals, wellness programmes.",
      ],
      memory: "Manage stress from both sides.",
    },
  },
];

export default lessons;
