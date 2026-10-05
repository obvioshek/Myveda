import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "interpersonal-behaviour-and-its-patterns",
    name: "Interpersonal behaviour and its patterns",
    intro: "How people communicate, respond and interact.",
    before: {
      q: "When a colleague is curt with you, does your reply affect how they treat you next?",
      choices: [
        { label: "No", reveal: "It does. Interpersonal behaviour is reciprocal: A's behaviour influences B, and B's response in turn influences A." },
        { label: "Yes", reveal: "Right. That is reciprocal influence: each person's response shapes the other's next move." },
      ],
    },
    lead: "Interpersonal behaviour runs both ways, and it shapes teamwork, leadership and culture.",
    check: [
      ask("Several employees communicating with one superior is which pattern?", "Many-to-one", ["One-to-many", "One-to-one", "Many-to-many"], "It calls for active listening from the superior."),
      ask("A leader addressing a group needs, above all…", "Clarity and confidence", ["Active listening only", "Silence", "Formality"], "That is the one-to-many pattern."),
    ],
    lens: [],
    reflect: "Which pattern of interaction do you find hardest, and why?",
    summary: {
      points: [
        "Interpersonal behaviour includes verbal and non-verbal communication: tone, body language, emotion, gesture.",
        "Patterns: one-to-one, one-to-many, many-to-one, many-to-many.",
        "Reciprocal influence: positive behaviour builds morale and cooperation; negative behaviour erodes them.",
      ],
      memory: "A shapes B, and B shapes A.",
    },
  },
  {
    blockId: "types-determinants-and-skills",
    name: "Types, determinants and skills",
    intro: "Cooperation, conflict, and the skills that keep them healthy.",
    before: {
      q: "Is conflict between colleagues always harmful?",
      choices: [
        { label: "Always", reveal: "Not always. Managed constructively, conflict brings role clarity, better understanding and innovative solutions." },
        { label: "Not always", reveal: "Right. Managed constructively, it brings role clarity, understanding and new solutions." },
      ],
    },
    lead: "Six things shape how people behave toward one another, and five skills keep it constructive.",
    check: [
      ask("Which is one of the six determinants of interpersonal behaviour?", "Emotional intelligence", ["Salary", "Job title", "Office location"], "The six are personality, perception, attitudes, values, emotional intelligence and motivation."),
      ask("Which skill maintains respect and professional decorum?", "Courtesy", ["Positive thinking", "Mutual trust", "Avoiding ego clashes"], "Each skill has its own job; courtesy keeps respect."),
    ],
    lens: [],
    reflect: "Which of the five interpersonal skills would make the biggest difference in your team right now?",
    summary: {
      points: [
        "Cooperative behaviour: shared goals, respect, openness. Conflicting behaviour: different goals or perceptions.",
        "Determinants: personality, perception, attitudes, values, emotional intelligence, motivation.",
        "Skills: positive thinking, mutual trust, empathy, courtesy, avoiding ego clashes.",
      ],
      memory: "Cooperate where you can; manage conflict when you must.",
    },
  },
  {
    blockId: "transactional-analysis",
    name: "Transactional analysis",
    intro: "Johari window, ego states and transactions.",
    before: {
      q: "Is there anything about you that others can see but you cannot?",
      choices: [
        { label: "No", reveal: "The Johari window says there usually is: the blind area, known to others but not to you. Feedback reduces it." },
        { label: "Probably", reveal: "Right. That is the blind area of the Johari window, and feedback is how it shrinks." },
      ],
    },
    lead: "Transactional analysis explains interactions through ego states, and the Johari window maps self-awareness.",
    check: [
      ask("Which Johari area is reduced through self-disclosure?", "Hidden", ["Blind", "Open", "Unknown"], "The blind area is reduced through feedback."),
      ask("A logical, factual reply to a factual question comes from which ego state?", "Adult", ["Parent", "Child", "Critical parent"], "Parent holds learned values; Child holds emotion."),
      ask("A reply from an unexpected ego state that causes misunderstanding is…", "A crossed transaction", ["A complementary transaction", "An ulterior transaction", "A stroke"], "Complementary transactions flow smoothly; ulterior ones carry a hidden message."),
    ],
    lens: [
      { pairing: 0, adds: "Friendship's real purpose: stepping in to correct a friend who goes wrong.", differs: "The Kuṟaḷ speaks of a friend's duty. The Johari window is a model of self-awareness that also includes self-disclosure and the unknown area." },
      { pairing: 1, adds: "A picture of the self in which intellect steers mind and senses, as a charioteer steers horses.", differs: "The Upaniṣad describes the self's journey. Berne's ego states describe patterns of communication, so the comparison is a reading." },
    ],
    reflect: "Ask yourself which ego state you speak from most often in meetings. Is it the one the situation needs?",
    summary: {
      points: [
        "Transactional analysis (Eric Berne) explains interactions through ego states.",
        "Johari window (Luft and Ingham): open, blind, hidden, unknown; the goal is a larger open area.",
        "Ego states: Parent (learned values), Adult (logic), Child (emotion). Transactions: complementary, crossed, ulterior.",
      ],
      memory: "Parent is learned values, Adult is logic, Child is emotion.",
    },
  },
  {
    blockId: "life-positions-strokes-and-games",
    name: "Life scripts, life positions, strokes and games",
    intro: "The patterns behind how we treat ourselves and others.",
    before: {
      q: "Is criticism a kind of recognition?",
      choices: [
        { label: "No", reveal: "In transactional analysis it is: a negative stroke. Strokes are any act of recognition, positive or negative." },
        { label: "In a way", reveal: "Right. In TA, criticism is a negative stroke: recognition that may discourage." },
      ],
    },
    lead: "Life positions shape relationships; strokes and games shape everyday exchanges.",
    check: [
      ask("Which life position is the ideal?", "I'm OK, you're OK", ["I'm OK, you're not OK", "I'm not OK, you're OK", "I'm not OK, you're not OK"], "It brings healthy relationships."),
      ask("“I'm not OK, you're OK” tends to lead to…", "Dependency", ["Conflict", "Disengagement", "Healthy relationships"], "It is an inferior, submissive orientation."),
      ask("In the “Yes, but…” game, a person…", "Asks for solutions and rejects each one", ["Accepts every suggestion", "Gives praise to others", "Refuses to ask for help"], "The hidden motive is to avoid responsibility."),
    ],
    lens: [],
    reflect: "Which life position do you slip into when things go wrong at work?",
    summary: {
      points: [
        "Life script: an unconscious pattern formed in childhood that shapes later behaviour.",
        "Life positions: I'm OK–you're OK is ideal; the others bring conflict, dependency or disengagement.",
        "Strokes: acts of recognition, positive or negative. Games: recurring patterns with hidden motives.",
      ],
      memory: "I'm OK, you're OK.",
    },
  },
];

export default lessons;
