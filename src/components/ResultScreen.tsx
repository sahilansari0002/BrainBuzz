import React from 'react';
import { useGame } from '../context/GameContext';
import Button from './ui/Button';
import Card from './ui/Card';
import { Award, ArrowRight, RefreshCw, Home, Brain } from 'lucide-react';
import { getRandomQuote } from '../data/quotes';

const ResultScreen: React.FC = () => {
  const { gameState, userProgress, resetLevel, startGame } = useGame();
  const quote = getRandomQuote();
  
  const calculatePercentage = () => {
    return (gameState.score / 10) * 100;
  };
  
  const scorePercentage = calculatePercentage();
  const isPassing = scorePercentage >= 80; // Updated to 80%
  const nextLevelUnlocked = isPassing && gameState.currentLevel === userProgress.highestLevel;
  
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card variant="elevated" className="text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {gameState.gameOver ? 'Time\'s Up!' : 'Level Complete!'}
          </h2>
          <p className="text-gray-600">
            {gameState.gameOver 
              ? 'You ran out of time. Try again!' 
              : isPassing 
                ? 'Great job! You passed this level.' 
                : 'Keep trying! You need 80% to pass.'} {/* Updated message */}
          </p>
        </div>
        
        {!gameState.gameOver && (
          <div className="mb-8">
            <div className="relative h-36 w-36 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={isPassing ? "#10B981" : "#F87171"}
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * scorePercentage) / 100}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold">
                      {scorePercentage.toFixed(0)}%
                    </span>
                    <span className="text-sm text-gray-500">Score</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-xl font-medium">
                You answered {gameState.score} out of 10 questions correctly
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {isPassing ? 'Excellent work!' : 'You need 8 or more correct answers to pass'}
              </p>
            </div>
          </div>
        )}
        
        <div className="mb-8 p-6 bg-purple-50 rounded-lg">
          <blockquote className="italic text-lg text-purple-800">
            "{quote.quote}"
          </blockquote>
          <p className="mt-2 text-purple-600">- {quote.author}</p>
        </div>
        
        {nextLevelUnlocked && (
          <div className="mb-8 p-4 bg-purple-100 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-purple-700 mr-2" />
              <span className="text-lg font-semibold text-purple-700">
                New Level Unlocked!
              </span>
            </div>
            <p>You've unlocked Level {userProgress.highestLevel + 1}!</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button 
            onClick={resetLevel} 
            variant="secondary"
            className="flex items-center justify-center"
            fullWidth
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Levels
          </Button>
          
          {isPassing && gameState.currentLevel ? (
            <Button 
              onClick={() => startGame(gameState.currentLevel + 1)}
              variant="primary"
              className="flex items-center justify-center"
              fullWidth
              disabled={gameState.currentLevel >= 225}
            >
              Next Level
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={() => resetLevel()} 
              variant="warning"
              className="flex items-center justify-center"
              fullWidth
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ResultScreen;