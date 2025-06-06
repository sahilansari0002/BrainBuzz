import { Question } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const mediumQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "What causes the aurora borealis (Northern Lights)?",
    options: [
      "Reflection of sunlight on ice",
      "Solar wind interacting with Earth's magnetosphere",
      "Volcanic eruptions",
      "Light pollution"
    ],
    correctAnswer: 1,
    explanation: "The Northern Lights occur when charged particles from the sun collide with gases in Earth's atmosphere along magnetic field lines.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which ancient civilization built the Machu Picchu complex in Peru?",
    options: ["Maya", "Aztec", "Inca", "Olmec"],
    correctAnswer: 2,
    explanation: "The Inca built Machu Picchu around 1450 CE. It was later abandoned during the Spanish conquest.",
    topic: "history",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main cause of ocean currents?",
    options: [
      "Wind patterns",
      "Temperature differences",
      "Earth's rotation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Ocean currents are caused by a combination of wind patterns, temperature differences, and Earth's rotation (Coriolis effect).",
    topic: "earth",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the function of mitochondria in cells?",
    options: [
      "Store genetic information",
      "Produce energy",
      "Break down waste",
      "Produce proteins"
    ],
    correctAnswer: 1,
    explanation: "Mitochondria are often called the powerhouse of the cell because they produce energy through cellular respiration.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which element is essential for the formation of bones and teeth?",
    options: ["Iron", "Calcium", "Potassium", "Sodium"],
    correctAnswer: 1,
    explanation: "Calcium is crucial for building and maintaining strong bones and teeth.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the process by which plants make their own food?",
    options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
    correctAnswer: 1,
    explanation: "Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to produce glucose and oxygen.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which layer of Earth's atmosphere contains the ozone layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    correctAnswer: 1,
    explanation: "The ozone layer is located in the stratosphere, about 15-35 kilometers above Earth's surface.",
    topic: "earth",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary function of white blood cells?",
    options: [
      "Carry oxygen",
      "Fight infection",
      "Clot blood",
      "Produce hormones"
    ],
    correctAnswer: 1,
    explanation: "White blood cells are part of the immune system and help fight infections and diseases.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What causes earthquakes?",
    options: [
      "Volcanic eruptions only",
      "Movement of tectonic plates",
      "Weather changes",
      "Ocean currents"
    ],
    correctAnswer: 1,
    explanation: "Earthquakes primarily occur due to the movement and collision of tectonic plates in Earth's crust.",
    topic: "earth",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the speed of light in a vacuum?",
    options: [
      "299,792 kilometers per second",
      "300,000 kilometers per second",
      "199,792 kilometers per second",
      "250,000 kilometers per second"
    ],
    correctAnswer: 0,
    explanation: "Light travels at exactly 299,792 kilometers per second in a vacuum.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  }
];