import React from 'react';
import { useGame } from '../context/GameContext';
import { AgeGroup } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';
import { Rocket, Brain, GraduationCap } from 'lucide-react';

const AgeSelection: React.FC = () => {
  const { setAgeGroup } = useGame();
  
  const handleAgeSelection = (ageGroup: AgeGroup) => {
    setAgeGroup(ageGroup);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">
        Select Your Age Group
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <AgeCard 
          title="Kids"
          ageRange="Ages 7-12"
          icon={<Rocket className="w-12 h-12 text-pink-500" />}
          description="Fun, colorful interface with simpler questions about our amazing world!"
          onClick={() => handleAgeSelection('kids')}
          color="bg-gradient-to-br from-pink-400 to-purple-500"
        />
        
        <AgeCard 
          title="Teens"
          ageRange="Ages 13-19"
          icon={<Brain className="w-12 h-12 text-blue-500" />}
          description="Engaging challenges that test your growing knowledge about our universe."
          onClick={() => handleAgeSelection('teens')}
          color="bg-gradient-to-br from-blue-400 to-indigo-500"
        />
        
        <AgeCard 
          title="Adults"
          ageRange="Ages 20+"
          icon={<GraduationCap className="w-12 h-12 text-teal-500" />}
          description="Thought-provoking questions to challenge your knowledge and wisdom."
          onClick={() => handleAgeSelection('adults')}
          color="bg-gradient-to-br from-teal-400 to-emerald-500"
        />
      </div>
    </div>
  );
};

interface AgeCardProps {
  title: string;
  ageRange: string;
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
  color: string;
}

const AgeCard: React.FC<AgeCardProps> = ({ 
  title, 
  ageRange, 
  icon, 
  description, 
  onClick,
  color
}) => {
  return (
    <Card 
      variant="elevated" 
      className="transition-transform duration-300 hover:scale-105 overflow-hidden h-full"
    >
      <div className={`absolute top-0 left-0 right-0 h-24 ${color} rounded-t-xl`}></div>
      <div className="flex flex-col items-center relative pt-8 h-full">
        <div className="rounded-full bg-white p-4 shadow-md mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">{ageRange}</p>
        <p className="text-center text-gray-700 mb-6 px-4">{description}</p>
        <div className="mt-auto">
          <Button 
            onClick={onClick}
            variant="primary"
            size="lg"
            className="w-full mt-4"
          >
            Select
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AgeSelection;