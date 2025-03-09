import React, { useState, useRef, useEffect } from 'react';
import { getAllCharacterNames } from '../utils/gameLogic';
import { cn } from '@/lib/utils';
import { Search, ArrowRight } from 'lucide-react';

interface GuessInputProps {
  onSubmit: (characterName: string) => void;
  isCorrect: boolean;
}

const GuessInput: React.FC<GuessInputProps> = ({ onSubmit, isCorrect }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
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
      setSuggestions(filtered.slice(0, 8)); // Limit to 8 suggestions
      setShowSuggestions(filtered.length > 0);
      setSelectedIndex(-1); // Reset selection when input changes
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
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

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;
    
    // Arrow down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    }
    
    // Arrow up
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    }
    
    // Enter to select
    if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[selectedIndex]);
    } else if (e.key === 'Enter' && input.trim()) {
      handleSubmit(e);
    }
    
    // Escape to close suggestions
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

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
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => input.length > 0 && suggestions.length > 0 && setShowSuggestions(true)}
            className={cn(
              "w-full pl-10 pr-20 py-3 border bg-white bg-opacity-90 backdrop-blur-sm",
              "border-gray-300 focus:border-op-blue-400 rounded-lg shadow-inner",
              "focus:outline-none focus:ring-2 focus:ring-op-blue-300 transition-all",
              isCorrect ? "opacity-50 cursor-not-allowed" : ""
            )}
            placeholder="Enter a character name..."
            disabled={isCorrect}
          />
          <button
            type="submit"
            className={cn(
              "absolute right-2 top-2 px-4 py-1.5 rounded-md text-white transition-all flex items-center gap-1",
              isCorrect 
                ? "bg-green-500 cursor-not-allowed" 
                : "bg-gradient-to-r from-op-blue-600 to-op-blue-700 hover:from-op-blue-700 hover:to-op-blue-800 shadow-md hover:shadow-lg"
            )}
            disabled={isCorrect}
          >
            Guess
            <ArrowRight className="h-4 w-4" />
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
              className={cn(
                "px-4 py-2 cursor-pointer transition-colors border-l-4",
                selectedIndex === index 
                  ? "bg-op-blue-50 text-op-blue-700 border-op-blue-500 font-medium" 
                  : "hover:bg-gray-50 border-transparent"
              )}
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