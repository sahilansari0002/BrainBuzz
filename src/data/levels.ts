import { Level } from '../types';

const createLevels = (): Level[] => {
  const levels: Level[] = [];
  
  // Create 225 levels (increased from 50)
  for (let i = 1; i <= 225; i++) {
    let difficulty: 'easy' | 'medium' | 'hard';
    
    if (i <= 75) {
      difficulty = 'easy';
    } else if (i <= 150) {
      difficulty = 'medium';
    } else {
      difficulty = 'hard';
    }
    
    levels.push({
      id: i,
      difficulty,
      requiredScore: 80, // Updated to 80% required to pass
      timeLimit: 240, // 4 minutes in seconds
      unlocked: i === 1 // Only level 1 is unlocked initially
    });
  }
  
  return levels;
};

export const levels = createLevels();