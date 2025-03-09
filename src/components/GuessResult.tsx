import React from 'react';
import { Character } from '../data/onepiece-characters';
import { AttributeComparison as AttributeComparisonType, compareCharacters } from '../utils/gameLogic';
import AttributeComparison from './AttributeComparison';
import CharacterImage from './CharacterImage';
import { cn } from '@/lib/utils';

interface GuessResultProps {
  guessedCharacter: Character;
  targetCharacter: Character;
  isCorrect: boolean;
}

const GuessResult: React.FC<GuessResultProps> = ({ 
  guessedCharacter, 
  targetCharacter,
  isCorrect
}) => {
  // Compare the guessed character with the target character
  const comparisons: AttributeComparisonType[] = compareCharacters(guessedCharacter, targetCharacter);
  
  return (
    <div className={cn(
      "w-full max-w-md mx-auto p-5 rounded-xl border transition-all duration-300",
      isCorrect 
        ? "border-green-300 bg-green-50 shadow-md" 
        : "border-gray-200 bg-white"
    )}>
      <div className="flex items-center mb-4">
        <CharacterImage 
          src={guessedCharacter.image}
          alt={guessedCharacter.name}
          size="medium"
          className="mr-4"
        />
        
        <div className="flex-1">
          <h3 className={cn(
            "text-lg font-semibold",
            isCorrect ? "text-green-700" : "text-gray-800"
          )}>
            {guessedCharacter.name}
          </h3>
          <p className="text-sm text-gray-600">{guessedCharacter.role} • {guessedCharacter.crew}</p>
        </div>
        
        {isCorrect && (
          <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-green-300">
            Winner
          </div>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-xs text-gray-500">
              {comparisons.map((comparison) => (
                <th key={`header-${comparison.attribute}`} className="px-2 py-1 font-medium">
                  {comparison.attribute}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {comparisons.map((comparison, index) => (
                <AttributeComparison 
                  key={`${guessedCharacter.id}-${comparison.attribute}`} 
                  comparison={comparison}
                  index={index}
                  layout="horizontal"
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuessResult;