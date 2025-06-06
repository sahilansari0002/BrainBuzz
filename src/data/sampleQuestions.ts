import { Question } from '../types';
import { allQuestions } from './questions';

// Keep track of the current question index for each difficulty
const questionIndices = {
  easy: 0,
  medium: 0,
  hard: 0
};

// Function to get questions for a specific level and age group
export const getQuestionsForLevel = (
  levelId: number, 
  ageGroup: string
): Question[] => {
  let difficulty: 'easy' | 'medium' | 'hard';
  
  if (levelId <= 10) {
    difficulty = 'easy';
  } else if (levelId <= 30) {
    difficulty = 'medium';
  } else {
    difficulty = 'hard';
  }
  
  // Filter questions by difficulty and age group
  const difficultyQuestions = allQuestions.filter(q => 
    q.difficulty === difficulty && 
    q.ageGroups.includes(ageGroup as any)
  );
  
  const selectedQuestions = [];
  let currentIndex = questionIndices[difficulty];
  
  // Select next 10 sequential questions
  for (let i = 0; i < 10; i++) {
    // Reset index if we reach the end of questions
    if (currentIndex >= difficultyQuestions.length) {
      currentIndex = 0;
    }
    
    selectedQuestions.push(difficultyQuestions[currentIndex]);
    currentIndex++;
  }
  
  // Update the index for next time
  questionIndices[difficulty] = currentIndex;
  
  return selectedQuestions;
};