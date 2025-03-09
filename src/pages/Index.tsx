
import React from 'react';
import CharacterGuessGame from '@/components/CharacterGuessGame';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 py-12 mx-auto">
        <CharacterGuessGame />
        
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>list dial persos still limited</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
