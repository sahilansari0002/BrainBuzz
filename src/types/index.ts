export type AgeGroup = 'kids' | 'teens' | 'adults';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Topic = 
  | 'astronomy' 
  | 'earth' 
  | 'politics' 
  | 'history' 
  | 'general';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: Topic;
  difficulty: Difficulty;
  ageGroups: AgeGroup[];
}

export interface Level {
  id: number;
  difficulty: Difficulty;
  requiredScore: number;
  timeLimit: number;
  unlocked: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface UserProgress {
  currentLevel: number;
  highestLevel: number;
  achievements: Achievement[];
  totalScore: number;
  ageGroup: AgeGroup;
  name: string;
  age: number;
}

export interface GameState {
  isPlaying: boolean;
  currentLevel: number | null;
  currentQuestionIndex: number;
  score: number;
  timeRemaining: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  gameOver: boolean;
  levelComplete: boolean;
}