import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

interface AuthScreenProps {
  onAuthSuccess: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      {isSignUp ? (
        <SignUp 
          onSuccess={onAuthSuccess}
          onSwitchToSignIn={() => setIsSignUp(false)}
        />
      ) : (
        <SignIn 
          onSuccess={onAuthSuccess}
          onSwitchToSignUp={() => setIsSignUp(true)}
        />
      )}
    </div>
  );
};

export default AuthScreen;