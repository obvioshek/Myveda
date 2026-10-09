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
    lead: "Affect is the whole range of feelings; emotions are short, strong and aimed at something; moods are milder, longer and often without a clear cause.",
    check: [
      ask("Which is brief, intense and directed at a particular event or person?", "An emotion", ["A mood", "Affect", "A display rule"], "An emotion has a clear target and passes quickly. A mood is milder and lasts longer, often with no clear cause; affect is the umbrella over both."),
      ask("A cashier feels flat and low all week, though nothing in particular has happened. What is she experiencing?", "A mood", ["An emotion", "Emotional labour", "A display rule"], "Mild, lasting and without a clear cause marks a mood. It is tempting to call it an emotion, but an emotion is intense, short and aimed at someone or something."),
      ask("Which list contains only emotions widely treated as universal?", "Fear, surprise and disgust", ["Wonder, joy and sadness", "Love, anger and fear", "Desire, happiness and surprise"], "The six universal emotions are happiness, sadness, fear, anger, surprise and disgust. Wonder, love and desire come from Descartes's six passions, a common trap."),
    ],
    lens: [],
    reflect: "What mood have you carried into work or class this week, and how did it colour your day?",
    summary: {
      points: [
        "Affect: broad emotional tone. Emotions: brief, intense, specific. Moods: general, longer, often without cause.",
        "An emotion can settle into a mood; a bad mood makes reactions stronger.",
        "Six universal emotions (Ekman): happiness, sadness, fear, anger, surprise, disgust.",
        "Display rules: a culture's rules on which feelings may be shown, where and to whom.",
        "Descartes's six passions (wonder, love, hatred, desire, joy, sadness) are a different list.",
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
    lead: "Personality, stress, social contact, sleep, exercise and age shape emotions and moods; some are fixed, and a manager can change others.",
    check: [
      ask("Believing rain makes you gloomy because you remember only the gloomy rainy days is an example of…", "Illusory correlation", ["Emotional labour", "Emotional dissonance", "A display rule"], "Seeing a link that is not really there is illusory correlation. Emotional dissonance is the gap between felt and shown emotion, which has nothing to do with the weather."),
      ask("A night-shift agent grows more irritable as the week goes on. Which source is the most likely cause?", "Poor sleep weakening emotional regulation", ["Her personality changing", "The weather that week", "Her age"], "Poor sleep brings irritability and poorer judgement. Personality is stable, so a weekly pattern points to sleep, not a change in who she is."),
      ask("Which step is most within a manager's power to improve a team's mood?", "Change rosters so people get enough sleep", ["Change team members' personalities", "Wait for better weather", "Hire only older staff"], "Sleep, stress and social contact can be influenced; personality, age and weather cannot. Hiring by age is unfair and the age effect is only a tendency."),
    ],
    lens: [],
    reflect: "Which of these sources most affects your own mood at work?",
    summary: {
      points: [
        "Sources: personality, weather (limited), stress, social interaction, sleep, exercise, age, sex.",
        "Poor sleep weakens regulation; exercise lifts mood modestly.",
        "Illusory correlation: seeing a link that is not there, as with weather.",
        "Some sources are fixed; a manager can change rosters, workload and conflict.",
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
    lead: "Emotional labour is the effort of showing the feelings a job requires; emotional intelligence is the ability to recognise and manage feelings in yourself and others.",
    check: [
      ask("The gap between felt and displayed emotion is called…", "Emotional dissonance", ["Emotional intelligence", "Deep acting", "Empathy"], "Dissonance is the gap itself, and prolonged it can lead to burnout. Deep acting is one way of narrowing that gap, not the gap."),
      ask("A billing clerk calms herself by remembering the shouting customer has waited an hour in the heat, and her anger eases. What is she doing?", "Deep acting", ["Surface acting", "Emotional dissonance", "Illusory correlation"], "She is trying to actually feel the required emotion, which is deep acting. Surface acting would mean smiling while still furious inside."),
      ask("A complaints desk loses staff every few months. Which change is the research most likely to support?", "Training to see the caller's side, plus short breaks after hard calls", ["A stricter script: smile and apologise on every call", "Hiring only people with high IQ scores", "Removing all breaks to cut queues"], "Surface acting is linked with exhaustion more than deep acting. A stricter script asks for more surface acting, so it is likely to make turnover worse."),
    ],
    lens: [
      { pairing: 0, adds: "A portrait of steadiness: undisturbed in sorrow, free of craving, fear and anger.", differs: "The Gītā aims at rising above emotion. Emotional intelligence also values recognising and using emotions." },
      { pairing: 1, adds: "Seeing the joy and sorrow of others as equal to one's own.", differs: "The Gītā presents this as the mark of the highest yogin. EI treats empathy as a skill that can be developed and used at work." },
      { pairing: 2, adds: "Patience with those who scorn you, like the earth with those who dig it.", differs: "The couplet praises patience. Emotional labour research warns that suppressing feeling for long periods leads to burnout." },
    ],
    reflect: "When did you last show an emotion at work that you did not feel? What did it cost you?",
    summary: {
      points: [
        "Emotional labour (Hochschild): displaying the emotions a job requires; dissonance can cause burnout.",
        "Surface acting fakes the display; deep acting tries to feel it. Surface acting drains more.",
        "Emotional intelligence (Salovey and Mayer; Goleman): recognise and manage your own and others' emotions.",
        "Components: self-awareness, emotional regulation, empathy, relationships.",
        "Criticism: EI overlaps with personality and IQ, and self-report tests can be faked.",
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
      ask("A tight but meaningful deadline is which kind of stressor?", "A challenge stressor", ["A hindrance stressor", "An environmental stressor", "A personal stressor"], "A deadline on worthwhile work can energise, so it is a challenge stressor. Hindrance stressors, such as bureaucracy, only get in the way of goals."),
      ask("A branch manager spends hours each week chasing approvals for routine loans. Which kind of stressor is this?", "A hindrance stressor", ["A challenge stressor", "A personal stressor", "A physiological consequence"], "Red tape blocks goals without adding meaning, so it is a hindrance. It is tempting to call all workload a challenge, but challenges are demands that can motivate."),
      ask("Demands on a team rise sharply in March, and targets cannot be cut. What does the demands–resources view suggest?", "Add resources, such as extra help or a clear order of priorities", ["Tell staff that stress is good for them", "Raise the targets to motivate", "Do nothing, as moderate stress improves performance"], "When demands exceed resources the result is strain, so adding resources restores the balance. The inverted U does not mean more pressure always helps."),
    ],
    lens: [],
    reflect: "List your current stressors. Which are challenges and which are hindrances?",
    summary: {
      points: [
        "Stress: demands stretching the capacity to cope; demands above resources cause strain.",
        "Challenge stressors can motivate; hindrance stressors block goals.",
        "Sources: environmental, organisational, personal. Consequences: physiological, psychological, behavioural.",
        "Stressor is the cause, stress the reaction, strain the harm.",
        "Inverted U: moderate stress may help, but its evidence for work is limited.",
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
    lead: "Stress is managed from both sides: individuals learn to cope, and organisations change the work that causes it.",
    check: [
      ask("Which is an organisational approach?", "Job redesign", ["Meditation", "Time management", "Physical exercise"], "Job redesign changes the work itself, which only the organisation can do. Time management is tempting because it is taught at work, but the individual does it."),
      ask("A BPO's stress complaints come from a roster that changes every week. Which step tackles the cause?", "Publish rosters a month ahead and keep each person on one pattern", ["Run a yoga session for all staff", "Offer a helpline for stressed staff", "Teach time management to agents"], "Fixing the roster removes the stressor, a primary measure. Yoga and helplines help people cope, but the roster would keep causing stress."),
      ask("A counselling service for staff already burnt out is which level of response?", "Tertiary", ["Primary", "Secondary", "Preventive"], "Tertiary measures treat harm already done. Primary measures remove the stressor; secondary ones help people cope with stress they still face."),
    ],
    lens: [
      { pairing: 3, adds: "Moderation in food, recreation, effort and sleep as the way to remove sorrow.", differs: "The Gītā describes a discipline for life. Stress management adds organisational measures, such as job redesign, that no individual can apply alone." },
      { pairing: 4, adds: "A first question to ask under pressure: can anything be done about this?", differs: "Śāntideva aims at equanimity as a spiritual practice. Stress management adds organisational remedies, such as job redesign and support, that change the situation itself." },
    ],
    reflect: "Which individual approach could you start this week, and which organisational one would you ask for?",
    summary: {
      points: [
        "Individual: time management, exercise, relaxation, social support.",
        "Organisational: job fit, training, clear goals, job redesign, empowerment, communication, sabbaticals, wellness programmes.",
        "Primary removes the stressor; secondary helps coping; tertiary treats the harm.",
        "Individual coping cannot fix a stressor that the job creates.",
      ],
      memory: "Manage stress from both sides.",
    },
  },
];

export default lessons;
