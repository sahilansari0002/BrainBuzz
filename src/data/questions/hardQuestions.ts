import { Question } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const hardQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "What is the Chandrasekhar limit?",
    options: [
      "Maximum mass of a stable white dwarf",
      "Minimum distance between galaxies",
      "Speed of light in a vacuum",
      "Temperature at a star's core"
    ],
    correctAnswer: 0,
    explanation: "The Chandrasekhar limit is approximately 1.4 solar masses, above which electron degeneracy pressure cannot prevent gravitational collapse of a white dwarf.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which political system is characterized by rule by the most qualified citizens?",
    options: ["Democracy", "Meritocracy", "Autocracy", "Oligarchy"],
    correctAnswer: 1,
    explanation: "A meritocracy is a political system in which economic goods and/or political power are assigned on the basis of merit, rather than wealth or social class.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the significance of the Higgs boson?",
    options: [
      "It carries electromagnetic force",
      "It gives particles their mass",
      "It causes nuclear decay",
      "It creates dark matter"
    ],
    correctAnswer: 1,
    explanation: "The Higgs boson is a fundamental particle that gives other particles their mass through the Higgs mechanism.",
    topic: "general",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is quantum entanglement?",
    options: [
      "A theory about parallel universes",
      "A state where particles remain connected regardless of distance",
      "The process of quantum tunneling",
      "The uncertainty principle in action"
    ],
    correctAnswer: 1,
    explanation: "Quantum entanglement occurs when particles become correlated in such a way that the quantum state of each particle cannot be described independently.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the function of the Golgi apparatus?",
    options: [
      "Energy production",
      "Protein modification and packaging",
      "DNA replication",
      "Waste disposal"
    ],
    correctAnswer: 1,
    explanation: "The Golgi apparatus modifies, packages, and distributes proteins and lipids to their final cellular destinations.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the principle of superposition in quantum mechanics?",
    options: [
      "Objects can be in multiple states simultaneously",
      "Energy cannot be created or destroyed",
      "Matter and energy are equivalent",
      "Time flows differently at quantum scales"
    ],
    correctAnswer: 0,
    explanation: "The principle of superposition states that quantum systems can exist in multiple states simultaneously until measured.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the role of dark energy in the universe?",
    options: [
      "It creates black holes",
      "It causes the universe's expansion to accelerate",
      "It binds galaxies together",
      "It powers stars"
    ],
    correctAnswer: 1,
    explanation: "Dark energy is a hypothetical form of energy that exerts a negative pressure, causing the accelerating expansion of the universe.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the significance of the P versus NP problem?",
    options: [
      "It's about computer processing speed",
      "It questions whether certain problems can be solved efficiently",
      "It deals with parallel computing",
      "It's about network security"
    ],
    correctAnswer: 1,
    explanation: "The P versus NP problem asks whether every problem whose solution can be quickly verified can also be quickly solved.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the function of telomeres in chromosomes?",
    options: [
      "Code for proteins",
      "Protect chromosome ends and control cell aging",
      "Repair DNA damage",
      "Regulate gene expression"
    ],
    correctAnswer: 1,
    explanation: "Telomeres protect the ends of chromosomes from deterioration and prevent chromosomes from fusing with each other.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the significance of the Second Law of Thermodynamics?",
    options: [
      "Energy is conserved",
      "Entropy of an isolated system always increases",
      "Matter cannot be created or destroyed",
      "Force equals mass times acceleration"
    ],
    correctAnswer: 1,
    explanation: "The Second Law of Thermodynamics states that the total entropy of an isolated system always increases over time.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  }
];