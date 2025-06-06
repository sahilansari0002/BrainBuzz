import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import Button from './ui/Button';
import Card from './ui/Card';
import { Brain, Mail, Lock, User, Calendar, ArrowLeft } from 'lucide-react';

interface SignUpProps {
  onSuccess: () => void;
  onSwitchToSignIn: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSuccess, onSwitchToSignIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const ageNum = parseInt(formData.age, 10);
      if (isNaN(ageNum) || ageNum < 7 || ageNum > 100) {
        setError('Please enter a valid age between 7 and 100');
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }

      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // Determine age group
        let ageGroup: string;
        if (ageNum <= 12) {
          ageGroup = 'kids';
        } else if (ageNum <= 19) {
          ageGroup = 'teens';
        } else {
          ageGroup = 'adults';
        }

        // Create user progress record
        const { error: progressError } = await supabase
          .from('user_progress')
          .insert({
            user_id: authData.user.id,
            name: formData.name,
            age: ageNum,
            age_group: ageGroup,
            highest_level: 1,
            total_score: 0
          });

        if (progressError) throw progressError;

        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 left-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-3">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-purple-700 bg-clip-text text-transparent mb-3">
            Join Brain Buzz
          </h1>
          <p className="text-lg text-gray-600 mb-2">Start your knowledge adventure today</p>
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
            <span>🚀</span>
            <span>225 levels</span>
            <span>•</span>
            <span>Progress tracking</span>
            <span>•</span>
            <span>Age-appropriate content</span>
          </div>
        </div>
        
        <Card variant="elevated" className="backdrop-blur-lg bg-white/80 border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2 text-teal-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2 text-teal-600" />
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="Age"
                  min="7"
                  max="100"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-teal-600" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2 text-teal-600" />
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
                placeholder="Create a password (min 6 characters)"
                minLength={6}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters long</p>
            </div>
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}
            
            <div className="space-y-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={loading}
                className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 shadow-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={onSwitchToSignIn}
                variant="secondary"
                fullWidth
                className="border-2 border-teal-200 hover:border-teal-300 bg-gradient-to-r from-teal-50 to-purple-50 flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Sign In Instead
              </Button>
            </div>
          </form>
        </Card>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;