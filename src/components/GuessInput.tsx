
import React, { useState, useRef, useEffect } from 'react';
import { getAllCharacterNames } from '../utils/gameLogic';
import { cn } from '@/lib/utils';

interface GuessInputProps {
  onSubmit: (characterName: string) => void;
  isCorrect: boolean;
}

const GuessInput: React.FC<GuessInputProps> = ({ onSubmit, isCorrect }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  // Get all character names for autocomplete
  const characterNames = getAllCharacterNames();
  
  // Filter suggestions when input changes
  useEffect(() => {
    if (input.length > 0) {
      const filtered = characterNames.filter(name => 
        name.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [input]);
  
  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isCorrect) {
      onSubmit(input);
      setInput('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => input.length > 0 && setSuggestions.length > 0 && setShowSuggestions(true)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-op-blue-300 transition-all"
            placeholder="Enter a character name..."
            disabled={isCorrect}
          />
          <button
            type="submit"
            className={cn(
              "absolute right-2 top-2 px-4 py-1 rounded-md text-white transition-all",
              isCorrect 
                ? "bg-green-500 cursor-not-allowed" 
                : "bg-op-blue-600 hover:bg-op-blue-700 btn-hover-effect"
            )}
            disabled={isCorrect}
          >
            Guess
          </button>
        </div>
      </form>
      
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fade-in"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuessInput;
