import React, { useState, useEffect } from 'react';
import { Character } from '../data/onepiece-characters';
import { getRandomCharacter, getCharacterByName, characterExists } from '../utils/gameLogic';
import GuessInput from './GuessInput';
import GuessResult from './GuessResult';
import CharacterImage from './CharacterImage';
import { useToast } from '@/hooks/use-toast';

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
        description: `You guessed the character in ${attemptsCount + 1} attempts!`,
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
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse-soft">Loading game...</div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-op-blue-900">One Piece Character Guesser</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Guess the One Piece character. See which attributes match or differ from the target character.
        </p>
      </div>
      
      {isCorrect && (
        <div className="flex flex-col items-center justify-center mb-8 animate-fade-in">
          <div className="mb-4 text-center">
            <CharacterImage 
              src={targetCharacter.image}
              alt={targetCharacter.name}
              size="large"
              className="mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-green-700 mb-1">{targetCharacter.name}</h2>
            <p className="text-gray-600">{targetCharacter.role} of {targetCharacter.crew}</p>
          </div>
          
          <button
            onClick={handleNewGame}
            className="px-5 py-2 bg-op-gold-500 text-white rounded-lg shadow-md hover:bg-op-gold-600 transition-colors btn-hover-effect"
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
          <div className="text-center p-10 border border-dashed border-gray-300 rounded-xl bg-gray-50">
            <p className="text-gray-500">
              {gameStarted 
                ? "Make your first guess to start playing!" 
                : "Start by entering a character name above"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterGuessGame;
