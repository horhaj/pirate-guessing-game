import React from 'react';
import CharacterGuessGame from '@/components/CharacterGuessGame';
import { Github } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-op-blue-50 via-white to-white">
      {/* Header with wave decoration */}
      <div className="relative w-full bg-gradient-to-r from-op-blue-600 to-op-blue-800 overflow-hidden py-4 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-white">
            ONE PIECE GUESSER
          </h1>
          <p className="text-op-blue-100 text-sm">
            Test your knowledge of One Piece characters
          </p>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-6"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 py-6 mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-8">
          <CharacterGuessGame />
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-8 pb-12">
          <p className="mb-2">
            A One Piece guessing game inspired by Wordle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;