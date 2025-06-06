import React, { useState } from 'react';
import { Brain, LogOut, AlertCircle } from 'lucide-react';
import { useGame } from '../context/GameContext';
import Button from './ui/Button';

const AppHeader: React.FC = () => {
  const { userProgress, isAuthenticated, signOut } = useGame();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState<string | null>(null);
  
  const getAgeGroupLabel = () => {
    switch(userProgress.ageGroup) {
      case 'kids':
        return 'Kids (7-12)';
      case 'teens':
        return 'Teens (13-19)';
      case 'adults':
        return 'Adults (20+)';
      default:
        return '';
    }
  };

  const handleSignOut = async () => {
    if (isSigningOut) return; // Prevent multiple clicks
    
    setIsSigningOut(true);
    setSignOutError(null);
    
    try {
      await signOut();
      // Success - the auth state change will handle the UI update
    } catch (error: any) {
      console.error('Failed to sign out:', error);
      setSignOutError(error.message || 'Failed to sign out. Please try again.');
    } finally {
      setIsSigningOut(false);
    }
  };
  
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="w-8 h-8 mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Brain Buzz</h1>
            <p className="text-xs text-purple-200">Brain Voyage</p>
          </div>
        </div>
        
        {isAuthenticated && userProgress.name && (
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-purple-200">Welcome back,</div>
              <div className="font-medium">{userProgress.name}</div>
            </div>
            
            {userProgress.ageGroup && (
              <div className="text-center">
                <div className="text-xs text-purple-200">Age Group</div>
                <div className="font-medium text-sm">{getAgeGroupLabel()}</div>
              </div>
            )}
            
            <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Level {userProgress.highestLevel}
            </div>

            <div className="flex flex-col items-end">
              <Button
                onClick={handleSignOut}
                variant="secondary"
                size="sm"
                disabled={isSigningOut}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSigningOut ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Signing Out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </>
                )}
              </Button>
              
              {signOutError && (
                <div className="mt-1 text-xs text-red-200 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {signOutError}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;