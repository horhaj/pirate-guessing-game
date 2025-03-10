import React from 'react';
import { Character } from '../data/onepiece-characters';
import { AttributeComparison as AttributeComparisonType, compareCharacters } from '../utils/gameLogic';
import CharacterImage from './CharacterImage';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown, Check, X, Clock, CalendarDays } from 'lucide-react';
import BountyDisplay from './BountyDisplay';

interface GuessResultProps {
  guessedCharacter: Character;
  targetCharacter: Character;
  isCorrect: boolean;
}

// Helper functions for styling
const getComparisonCardClass = (isCorrect: boolean) => {
  return cn(
    "w-full max-w-full mx-auto p-4 rounded-xl border-2 transition-all duration-300 shadow-lg",
    isCorrect 
      ? "border-green-600 bg-gradient-to-br from-green-50 to-green-100 animate-fade-in" 
      : "border-[#D4AF37] bg-[#FFF8E1]"
  );
};

const getStatusIconAndColor = (comparison: AttributeComparisonType) => {
  switch (comparison.status) {
    case 'correct':
      return {
        icon: <Check className="w-5 h-5 text-green-600" />,
        bgColor: 'bg-green-50',
        borderColor: 'border-green-300',
        textColor: 'text-green-700'
      };
    case 'wrong':
      return {
        icon: <X className="w-5 h-5 text-red-600" />,
        bgColor: 'bg-red-50',
        borderColor: 'border-red-300',
        textColor: 'text-red-700'
      };
    case 'higher':
      return {
        icon: <ChevronDown className="w-5 h-5 text-amber-600" />,
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-300',
        textColor: 'text-amber-700'
      };
    case 'lower':
      return {
        icon: <ChevronUp className="w-5 h-5 text-amber-600" />,
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-300',
        textColor: 'text-amber-700'
      };
    case 'earlier':
      return {
        icon: <Clock className="w-5 h-5 rotate-[-45deg] text-blue-600" />,
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-300',
        textColor: 'text-blue-700'
      };
    case 'later':
      return {
        icon: <Clock className="w-5 h-5 rotate-45 text-blue-600" />,
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-300',
        textColor: 'text-blue-700'
      };
    default:
      return {
        icon: null,
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-300',
        textColor: 'text-gray-700'
      };
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'correct': return 'Correct';
    case 'wrong': return 'Wrong';
    case 'higher': return 'Too High';
    case 'lower': return 'Too Low';
    case 'earlier': return 'Earlier';
    case 'later': return 'Later';
    default: return '';
  }
};

const getAttributeIcon = (attribute: string) => {
  switch (attribute) {
    case 'Gender':
      return '👤';
    case 'Race':
      return '🌍';
    case 'Bounty':
      return '💰';
    case 'Has Devil Fruit':
      return '🍇';
    case 'Devil Fruit Type':
      return '🔱';
    case 'First Saga':
      return '📚';
    case 'First Arc':
      return '📖';
    case 'Crew':
      return '⚓';
    case 'Status':
      return '❤️';
    case 'Role':
      return '👑';
    default:
      return '📋';
  }
};

const formatAttributeValue = (attribute: string, value: any) => {
  if (value === null) return 'Unknown';
  if (attribute === 'Has Devil Fruit') return value ? 'Yes' : 'No';
  if (attribute === 'Bounty') return <BountyDisplay bounty={value} />;
  return value;
};

const GuessResult: React.FC<GuessResultProps> = ({ guessedCharacter, targetCharacter, isCorrect }) => {
  // Compare the guessed character with the target character
  const comparisons: AttributeComparisonType[] = compareCharacters(guessedCharacter, targetCharacter);
  
  return (
    <div className={getComparisonCardClass(isCorrect)}>
      <div className="flex items-center mb-4">
        <CharacterImage 
          src={guessedCharacter.image}
          alt={guessedCharacter.name}
          size="medium"
          className={cn(
            "mr-4 border-2", 
            isCorrect ? "border-green-600 shadow-lg shadow-green-200" : "border-[#D4AF37]"
          )}
        />
        
        <div className="flex-1">
          <h3 className={cn(
            "text-lg md:text-xl font-bold",
            isCorrect ? "text-green-700" : "text-[#8B4513]",
            "font-pirate"
          )}>
            {guessedCharacter.name}
          </h3>
          <p className="text-sm text-[#8B4513]">{guessedCharacter.role} • {guessedCharacter.crew}</p>
        </div>
        
        {isCorrect && (
          <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-300 shadow-sm">
            Correct!
          </div>
        )}
      </div>
      
      <div className="overflow-x-auto pb-2 -mx-2 px-2">
        <table className="w-full min-w-[650px] border-separate border-spacing-0" style={{
          backgroundImage: "url('https://i.imgur.com/kl9UOM0.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <thead>
            <tr className="bg-[#8B4513]/80">
              {comparisons.map((comparison) => {
                const { textColor } = getStatusIconAndColor(comparison);
                return (
                  <th key={`header-${comparison.attribute}`} 
                    className="px-3 py-2 text-xs font-medium text-[#FFF8E1] border-b border-[#D4AF37] first:rounded-tl-lg last:rounded-tr-lg font-pirate">
                    <div className="flex items-center justify-center space-x-1">
                      <span>{getAttributeIcon(comparison.attribute)}</span>
                      <span>{comparison.attribute}</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {comparisons.map((comparison, index) => {
                const { icon, bgColor, borderColor, textColor } = getStatusIconAndColor(comparison);
                const delay = index * 100;
                
                return (
                  <td 
                    key={`${guessedCharacter.id}-${comparison.attribute}`}
                    className={cn(
                      "p-3 text-center border-b-2 border-x-2 first:border-l-2 last:border-r-2 first:rounded-bl-lg last:rounded-br-lg", 
                      "bg-[#FFF8E1]/90",
                      comparison.status === 'correct' ? 'border-green-400' : 
                      comparison.status === 'wrong' ? 'border-red-400' :
                      comparison.status === 'higher' || comparison.status === 'lower' ? 'border-amber-400' :
                      'border-blue-400'
                    )}
                    style={{ 
                      animationDelay: `${delay}ms`,
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className={cn("font-medium", textColor)}>
                        {formatAttributeValue(comparison.attribute, comparison.value)}
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={cn(
                          "flex items-center justify-center p-1 rounded-full",
                          comparison.status === 'correct' ? 'bg-green-100' : 
                          comparison.status === 'wrong' ? 'bg-red-100' :
                          comparison.status === 'higher' || comparison.status === 'lower' ? 'bg-amber-100' :
                          'bg-blue-100',
                          "border border-[#D4AF37]"
                        )}>
                          {icon}
                        </div>
                      </div>
                      <div className={cn("text-xs font-semibold", textColor, "font-pirate")}>
                        {getStatusLabel(comparison.status)}
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuessResult;