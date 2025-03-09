import React, { useState, useEffect } from 'react';
import { Character } from '../data/onepiece-characters';
import { getRandomCharacter, getCharacterByName, characterExists } from '../utils/gameLogic';
import GuessInput from './GuessInput';
import GuessResult from './GuessResult';
import CharacterImage from './CharacterImage';
import { useToast } from '@/hooks/use-toast';
import BountyDisplay from './BountyDisplay';
import { Check, X, ArrowUp, ArrowDown, Clock } from 'lucide-react';

const CharacterGuessGame: React.FC = () => {
  const [targetCharacter, setTargetCharacter] = useState<Character | null>(null);
  const [guesses, setGuesses] = useState<Character[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const { toast } = useToast();
  
  // Initialize the game with a random character
  useEffect(() => {
    const character = getRandomCharacter();
    setTargetCharacter(character);
    console.log("Target character:", character.name); // For debugging
  }, []);
  
  // Celebration animation when correct guess is made
  useEffect(() => {
    if (isCorrect) {
      // Instead of confetti, we'll use CSS animations
      // The animation is already handled in the component through the
      // animate-fade-in class on the success container
    }
  }, [isCorrect]);
  
  const handleGuess = (characterName: string) => {
    if (!targetCharacter) return;
    
    // Check if the character exists
    if (!characterExists(characterName)) {
      toast({
        title: "Character not found",
        description: "Please enter a valid character name from One Piece.",
        variant: "destructive",
      });
      return;
    }
    
    const guessedCharacter = getCharacterByName(characterName);
    if (!guessedCharacter) return;
    
    // Add to guesses
    setGuesses(prev => [guessedCharacter, ...prev]);
    setAttemptsCount(prev => prev + 1);
    setGameStarted(true);
    
    // Check if the guess is correct
    if (guessedCharacter.id === targetCharacter.id) {
      setIsCorrect(true);
      toast({
        title: "Congratulations!",
        description: `You found ${targetCharacter.name} in ${attemptsCount + 1} attempts!`,
        variant: "default",
      });
    }
  };
  
  const handleNewGame = () => {
    const character = getRandomCharacter();
    setTargetCharacter(character);
    setGuesses([]);
    setIsCorrect(false);
    setAttemptsCount(0);
    setGameStarted(false);
    console.log("New target character:", character.name); // For debugging
  };
  
  if (!targetCharacter) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-pulse-soft text-lg font-semibold text-op-blue-700">Loading game...</div>
        <div className="mt-4 w-16 h-16 border-4 border-op-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-op-blue-600 to-op-blue-800 bg-clip-text text-transparent">
          One Piece Character Guesser
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Guess the mystery One Piece character. See which attributes match or differ from the target character.
        </p>
      </div>
      
      {isCorrect && (
        <div className="flex flex-col items-center justify-center mb-8 animate-fade-in">
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-lg mb-6 w-full max-w-md">
            <div className="text-center">
              <CharacterImage 
                src={targetCharacter.image}
                alt={targetCharacter.name}
                size="large"
                className="mx-auto mb-4 border-4 border-op-gold-400 shadow-lg"
              />
              <h2 className="text-2xl font-bold text-op-blue-800 mb-1">
                {targetCharacter.name}
              </h2>
              <p className="text-gray-600 mb-2">{targetCharacter.role} of {targetCharacter.crew}</p>
              
              <div className="grid grid-cols-2 gap-2 my-4 text-sm">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-gray-500">Race:</span> 
                  <span className="font-medium ml-1">{targetCharacter.race}</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-gray-500">Bounty:</span> 
                  <span className="font-medium ml-1">
                    <BountyDisplay bounty={targetCharacter.bounty} />
                  </span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-gray-500">Devil Fruit:</span> 
                  <span className="font-medium ml-1">{targetCharacter.devilFruit.has ? 'Yes' : 'No'}</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-gray-500">Status:</span> 
                  <span className="font-medium ml-1">{targetCharacter.isAlive ? 'Alive' : 'Deceased'}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-green-700 font-bold mb-4">
                You found the character in {attemptsCount} {attemptsCount === 1 ? 'guess' : 'guesses'}!
              </p>
            </div>
          </div>
          
          <button
            onClick={handleNewGame}
            className="px-6 py-3 bg-gradient-to-r from-op-gold-400 to-op-gold-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            Play Again
          </button>
        </div>
      )}
      
      <div className="mb-6">
        <GuessInput onSubmit={handleGuess} isCorrect={isCorrect} />
      </div>
      
      <div className="space-y-6">
        {guesses.length > 0 ? (
          guesses.map((guess, index) => (
            <GuessResult
              key={`${guess.id}-${index}`}
              guessedCharacter={guess}
              targetCharacter={targetCharacter}
              isCorrect={guess.id === targetCharacter.id}
            />
          ))
        ) : (
          <div className="text-center p-10 border border-dashed border-gray-300 rounded-xl bg-white shadow-sm">
            <p className="text-gray-500">
              {gameStarted 
                ? "Make your first guess to start playing!" 
                : "Start by entering a character name above"}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Try to guess the mystery character by comparing attributes
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-12 pb-6 text-center">
        <div className="text-xs text-gray-500">
          <p>Icons Guide:</p>
          <div className="flex justify-center flex-wrap gap-3 mt-2">
            <span className="bg-green-50 p-1.5 rounded-md border border-green-200 text-green-700">
              <Check className="inline-block w-4 h-4 mr-1" /> Correct
            </span>
            <span className="bg-red-50 p-1.5 rounded-md border border-red-200 text-red-700">
              <X className="inline-block w-4 h-4 mr-1" /> Wrong
            </span>
            <span className="bg-amber-50 p-1.5 rounded-md border border-amber-200 text-amber-700">
              <ArrowUp className="inline-block w-4 h-4 mr-1" /> Too Low
            </span>
            <span className="bg-amber-50 p-1.5 rounded-md border border-amber-200 text-amber-700">
              <ArrowDown className="inline-block w-4 h-4 mr-1" /> Too High
            </span>
            <span className="bg-blue-50 p-1.5 rounded-md border border-blue-200 text-blue-700">
              <Clock className="inline-block w-4 h-4 mr-1" /> Earlier/Later
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterGuessGame;