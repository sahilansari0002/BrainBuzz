import React from 'react';
import { useGame } from '../context/GameContext';
import { levels } from '../data/levels';
import Card from './ui/Card';
import Button from './ui/Button';
import { ArrowLeft, Star, Clock, Award } from 'lucide-react';

const LevelSelection: React.FC = () => {
  const { userProgress, startGame } = useGame();
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <ArrowLeft className="w-6 h-6 mr-2" />
        <h2 className="text-3xl font-bold">Select a Level</h2>
      </div>
      
      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center">
          <Award className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-blue-800 font-medium">
            You need 80% (8 out of 10 questions) to pass each level and unlock the next one.
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {levels.map((level) => {
          const isUnlocked = level.id <= userProgress.highestLevel;
          const difficultyColor = getDifficultyColor(level.difficulty);
          
          return (
            <Card 
              key={level.id}
              variant="elevated"
              className={`transition-all duration-300 ${
                isUnlocked ? 'hover:shadow-xl hover:-translate-y-1' : 'opacity-60'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${difficultyColor}`}>
                    {level.difficulty.charAt(0).toUpperCase() + level.difficulty.slice(1)}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-400 mr-1" />
                    <span className="text-sm font-medium">{level.requiredScore}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center my-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-700">{level.id}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{level.timeLimit / 60} minutes</span>
                </div>
                
                <div className="mt-auto">
                  <Button
                    onClick={() => startGame(level.id)}
                    disabled={!isUnlocked}
                    fullWidth
                    variant={isUnlocked ? 'primary' : 'secondary'}
                  >
                    {isUnlocked ? 'Play Level' : 'Locked'}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LevelSelection;