import React, { useState, useRef, useEffect } from 'react';
import { getAllCharacterNames } from '../utils/gameLogic';
import { cn } from '@/lib/utils';
import { Search, Anchor } from 'lucide-react';

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
      <div className="absolute -inset-2 bg-[url('https://i.imgur.com/kl9UOM0.png')] bg-cover rounded-xl opacity-50 blur-[1px] z-0"></div>
      <form onSubmit={handleSubmit} className="w-full relative z-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#8B4513]" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => input.length > 0 && suggestions.length > 0 && setShowSuggestions(true)}
            className={cn(
              "w-full pl-10 pr-20 py-3 bg-[#FFF8E1] bg-opacity-90 backdrop-blur-sm",
              "border-2 border-[#D4AF37] focus:border-[#D32F2F] rounded-lg shadow-inner",
              "focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/50 transition-all text-[#8B4513]",
              isCorrect ? "opacity-50 cursor-not-allowed" : ""
            )}
            placeholder="Enter a character name..."
            disabled={isCorrect}
          />
          <button
            type="submit"
            className={cn(
              "absolute right-2 top-2 px-4 py-1.5 rounded-md text-white transition-all flex items-center gap-1 font-pirate",
              isCorrect 
                ? "bg-green-500 cursor-not-allowed" 
                : "bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] shadow-md hover:shadow-lg border border-[#FFD700]"
            )}
            disabled={isCorrect}
          >
            Guess
            <Anchor className="h-4 w-4" />
          </button>
        </div>
      </form>
      
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute z-20 w-full mt-1 bg-[#FFF8E1] border-2 border-[#D4AF37] rounded-lg shadow-lg overflow-hidden animate-fade-in"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={cn(
                "px-4 py-2 cursor-pointer transition-colors border-l-4",
                selectedIndex === index 
                  ? "bg-[#FFD700]/20 text-[#8B4513] border-[#D32F2F] font-medium" 
                  : "hover:bg-[#FFD700]/10 border-transparent"
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