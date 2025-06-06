import React from 'react';
import Card from './ui/Card';
import { Code2, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">About Brain Buzz</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card variant="elevated" className="text-center p-8">
          <div className="mb-6">
            <img 
              src="https://ik.imagekit.io/Sahilansari0002/WhatsApp%20Image%202025-06-05%20at%2017.41.20_0a6af483.jpg?updatedAt=1749125517280" 
              alt="Aaryan Ansari"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-500"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <User className="w-5 h-5 text-purple-600" />
            <h3 className="text-xl font-bold">Aaryan Ansari</h3>
          </div>
          <p className="text-gray-600 mb-2">Website Owner</p>
          <p className="text-gray-700">
            Visionary behind Brain Buzz, dedicated to making learning engaging and fun for everyone.
          </p>
        </Card>

        <Card variant="elevated" className="text-center p-8">
          <div className="mb-6">
            <img 
              src="https://ik.imagekit.io/Sahilansari0002/sahil%20google.jpg?updatedAt=1749125517286" 
              alt="Sahil Ansari"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-teal-500"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Code2 className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-bold">Sahil Ansari</h3>
          </div>
          <p className="text-gray-600 mb-2">Creator & Developer</p>
          <p className="text-gray-700">
            Lead developer and creative mind behind the technical implementation of Brain Buzz.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;