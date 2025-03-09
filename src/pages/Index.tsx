import React from 'react';
import CharacterGuessGame from '@/components/CharacterGuessGame';
import { Github } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('https://i.imgur.com/e3KRrgD.jpg')] bg-fixed bg-cover bg-center">
      {/* Paper-like overlay for content */}
      <div className="min-h-screen bg-white/85 backdrop-blur-sm">
        {/* Header with One Piece theming */}
        <div className="relative w-full bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] overflow-hidden py-3 shadow-lg border-b-4 border-[#FFD700]">
          <div className="container mx-auto px-4 flex justify-center items-center">
            {/* One Piece Logo */}
            <div className="flex flex-col items-center">
              <img 
                src="/logo.webp"
                alt="One Piece Logo" 
                className="h-16 md:h-20 mb-1"
              />
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider" style={{fontFamily: "'Pirata One', cursive"}}>
                CHARACTER GUESSER
              </h1>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="container px-4 py-6 mx-auto">
          <div className="max-w-4xl mx-auto bg-[#FFF8E1] rounded-xl border-2 border-[#D4AF37] shadow-lg p-6 mb-8">
            <CharacterGuessGame />
          </div>
          
          <div className="text-center text-sm text-gray-700 mt-8 pb-12">
            <p className="mb-2 font-bold" style={{fontFamily: "'Pirata One', cursive"}}>
              A One Piece guessing game inspired by Wordle
            </p>
          </div>
        </div>
      </div>

      {/* Import Pirata One font for pirate theme */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pirata+One&display=swap');
      `}</style>
    </div>
  );
};

export default Index;