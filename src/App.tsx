import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import AuthScreen from './components/AuthScreen';
import AgeSelection from './components/AgeSelection';
import LevelSelection from './components/LevelSelection';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import AppHeader from './components/AppHeader';
import About from './components/About';

const AppContent: React.FC = () => {
  const { gameState, userProgress, isAuthenticated, loading } = useGame();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  const renderScreen = () => {
    if (!isAuthenticated) {
      return <AuthScreen onAuthSuccess={() => {}} />;
    }
    
    if (!userProgress.ageGroup) {
      return <AgeSelection />;
    }
    
    if (gameState.isPlaying) {
      return <GameScreen />;
    }
    
    if (gameState.gameOver || gameState.levelComplete) {
      return <ResultScreen />;
    }
    
    return <LevelSelection />;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full">
          {renderScreen()}
        </div>
      </main>
      
      {isAuthenticated && <About />}
      
      <footer className="py-4 text-center text-gray-500 text-sm">
        Brain Buzz: Brain Voyage &copy; 2025
      </footer>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;