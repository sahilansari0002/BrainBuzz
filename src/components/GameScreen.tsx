import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { getQuestionsForLevel } from '../data/sampleQuestions';
import { Question } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';
import { Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const GameScreen: React.FC = () => {
  const { gameState, userProgress, answerQuestion, nextQuestion, endGame } = useGame();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  
  useEffect(() => {
    if (gameState.currentLevel && userProgress.ageGroup) {
      const levelQuestions = getQuestionsForLevel(
        gameState.currentLevel,
        userProgress.ageGroup
      );
      setQuestions(levelQuestions);
      setLoadingQuestions(false);
    }
  }, [gameState.currentLevel, userProgress.ageGroup]);
  
  if (loadingQuestions) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }
  
  const currentQuestion = questions[gameState.currentQuestionIndex];
  
  if (!currentQuestion) {
    return (
      <div className="text-center p-8">
        <p className="text-xl text-gray-700 mb-4">Level complete! Check your results.</p>
        <Button onClick={nextQuestion} variant="primary">
          Show Results
        </Button>
      </div>
    );
  }
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleAnswerSelect = (index: number) => {
    if (gameState.selectedAnswer === null) {
      const isCorrect = index === currentQuestion.correctAnswer;
      answerQuestion(index, isCorrect);
    }
  };
  
  const isLastQuestion = gameState.currentQuestionIndex === questions.length - 1;
  
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div className="bg-purple-100 px-4 py-2 rounded-full">
          <span className="font-bold text-purple-800">
            Question {gameState.currentQuestionIndex + 1}/{questions.length}
          </span>
        </div>
        
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
          <Clock className="w-5 h-5 mr-2 text-gray-700" />
          <span className="font-mono font-medium">
            {formatTime(gameState.timeRemaining)}
          </span>
        </div>
      </div>
      
      <Card variant="elevated" className="mb-6">
        <div className="mb-6">
          <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {currentQuestion.topic.charAt(0).toUpperCase() + currentQuestion.topic.slice(1)}
          </span>
          <h3 className="text-2xl font-bold text-gray-800 leading-tight">
            {currentQuestion.text}
          </h3>
        </div>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let optionClass = "border-2 border-gray-200 hover:border-purple-500 bg-white";
            
            if (gameState.selectedAnswer !== null) {
              if (index === currentQuestion.correctAnswer) {
                optionClass = "border-2 border-green-500 bg-green-50";
              } else if (index === gameState.selectedAnswer) {
                optionClass = "border-2 border-red-500 bg-red-50";
              }
            }
            
            return (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all ${optionClass}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 text-purple-800 font-medium">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg">{option}</span>
                  
                  {gameState.selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="ml-auto w-6 h-6 text-green-600" />
                  )}
                  
                  {gameState.selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                    <XCircle className="ml-auto w-6 h-6 text-red-600" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
      
      {gameState.showExplanation && (
        <Card 
          variant="outlined" 
          className="mb-6 border-l-4 border-l-purple-500 bg-purple-50"
        >
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg text-purple-800 mb-1">Explanation</h4>
              <p className="text-purple-900">{currentQuestion.explanation}</p>
            </div>
          </div>
        </Card>
      )}
      
      <div className="flex justify-between">
        <Button 
          variant="secondary" 
          onClick={endGame}
        >
          Quit Game
        </Button>
        
        {gameState.selectedAnswer !== null && (
          <Button 
            variant="primary" 
            onClick={nextQuestion}
          >
            {isLastQuestion ? 'Finish Level' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default GameScreen;