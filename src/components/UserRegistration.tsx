import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import Button from './ui/Button';
import Card from './ui/Card';
import { Brain } from 'lucide-react';

const UserRegistration: React.FC = () => {
  const { setUserInfo } = useGame();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !age.trim()) {
      setError('Please fill in all fields');
      return;
    }
    
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 7 || ageNum > 100) {
      setError('Please enter a valid age between 7 and 100');
      return;
    }
    
    setUserInfo(name.trim(), ageNum);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Brain className="w-16 h-16 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-purple-700 mb-2">Brain Buzz</h1>
        <p className="text-lg text-gray-600">Embark on your knowledge journey</p>
      </div>
      
      <Card variant="elevated" className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Your Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your age"
              min="7"
              max="100"
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
          >
            Start Your Journey
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserRegistration;