import { Question, AgeGroup } from '../types';
import { completeQuestionBank } from './allQuestions';

// Global question index tracker - starts from 0 and increments sequentially
let globalQuestionIndex = 0;

// Function to get the next 10 sequential questions
export const getQuestionsForLevel = (
  levelId: number, 
  ageGroup: AgeGroup
): Question[] => {
  console.log(`Getting questions for Level ${levelId}, Age Group: ${ageGroup}`);
  console.log(`Starting from global index: ${globalQuestionIndex}`);
  
  // Filter questions by age group
  const filteredQuestions = completeQuestionBank.filter(q => 
    q.ageGroups.includes(ageGroup)
  );
  
  if (filteredQuestions.length === 0) {
    console.warn(`No questions found for age group: ${ageGroup}`);
    return [];
  }
  
  const selectedQuestions: Question[] = [];
  
  // Get next 10 sequential questions
  for (let i = 0; i < 10; i++) {
    // Reset to beginning if we reach the end
    if (globalQuestionIndex >= filteredQuestions.length) {
      globalQuestionIndex = 0;
      console.log('Reached end of questions, resetting to beginning');
    }
    
    selectedQuestions.push(filteredQuestions[globalQuestionIndex]);
    globalQuestionIndex++;
  }
  
  console.log(`Selected questions: ${selectedQuestions.map(q => q.id).join(', ')}`);
  console.log(`Next global index will be: ${globalQuestionIndex}`);
  
  return selectedQuestions;
};

// Function to reset the global question index (useful for testing or admin reset)
export const resetQuestionIndex = (): void => {
  globalQuestionIndex = 0;
  console.log('Global question index reset to 0');
};

// Function to get current question index (for debugging)
export const getCurrentQuestionIndex = (): number => {
  return globalQuestionIndex;
};

// Function to set question index to a specific position (for admin use)
export const setQuestionIndex = (index: number): void => {
  globalQuestionIndex = Math.max(0, index);
  console.log(`Global question index set to: ${globalQuestionIndex}`);
};

// Function to get total available questions for an age group
export const getAvailableQuestionCount = (ageGroup: AgeGroup): number => {
  return completeQuestionBank.filter(q => 
    q.ageGroups.includes(ageGroup)
  ).length;
};

// Function to get progress through question bank
export const getQuestionProgress = (ageGroup: AgeGroup): { current: number; total: number; percentage: number } => {
  const total = getAvailableQuestionCount(ageGroup);
  const current = globalQuestionIndex;
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  
  return { current, total, percentage };
};