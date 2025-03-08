
import characters, { Character } from '../data/onepiece-characters';

// Select a random character for the game
export const getRandomCharacter = (): Character => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};

// Check if the character name exists in our database
export const characterExists = (name: string): boolean => {
  return characters.some(char => 
    char.name.toLowerCase() === name.toLowerCase()
  );
};

// Get character by name
export const getCharacterByName = (name: string): Character | undefined => {
  return characters.find(char => 
    char.name.toLowerCase() === name.toLowerCase()
  );
};

// Get all character names for autocomplete
export const getAllCharacterNames = (): string[] => {
  return characters.map(char => char.name);
};

// Compare attributes between guessed and target characters
export interface AttributeComparison {
  attribute: string;
  value: string | number | boolean | null;
  targetValue: string | number | boolean | null;
  status: 'correct' | 'wrong' | 'higher' | 'lower';
}

export const compareCharacters = (guessed: Character, target: Character): AttributeComparison[] => {
  const comparisons: AttributeComparison[] = [];
  
  // Gender comparison
  comparisons.push({
    attribute: 'Gender',
    value: guessed.gender,
    targetValue: target.gender,
    status: guessed.gender === target.gender ? 'correct' : 'wrong'
  });
  
  // Race comparison
  comparisons.push({
    attribute: 'Race',
    value: guessed.race,
    targetValue: target.race,
    status: guessed.race === target.race ? 'correct' : 'wrong'
  });
  
  // Bounty comparison
  if (guessed.bounty !== null && target.bounty !== null) {
    comparisons.push({
      attribute: 'Bounty',
      value: guessed.bounty,
      targetValue: target.bounty,
      status: guessed.bounty === target.bounty 
        ? 'correct' 
        : guessed.bounty > target.bounty 
          ? 'higher' 
          : 'lower'
    });
  } else {
    comparisons.push({
      attribute: 'Bounty',
      value: guessed.bounty,
      targetValue: target.bounty,
      status: guessed.bounty === target.bounty ? 'correct' : 'wrong'
    });
  }
  
  // Devil Fruit comparison - has
  comparisons.push({
    attribute: 'Has Devil Fruit',
    value: guessed.devilFruit.has,
    targetValue: target.devilFruit.has,
    status: guessed.devilFruit.has === target.devilFruit.has ? 'correct' : 'wrong'
  });
  
  // Devil Fruit comparison - type
  if (guessed.devilFruit.has && target.devilFruit.has) {
    comparisons.push({
      attribute: 'Devil Fruit Type',
      value: guessed.devilFruit.type,
      targetValue: target.devilFruit.type,
      status: guessed.devilFruit.type === target.devilFruit.type ? 'correct' : 'wrong'
    });
  }
  
  // First Appearance - saga comparison
  comparisons.push({
    attribute: 'First Saga',
    value: guessed.firstAppearance.saga,
    targetValue: target.firstAppearance.saga,
    status: guessed.firstAppearance.saga === target.firstAppearance.saga ? 'correct' : 'wrong'
  });
  
  // First Appearance - arc comparison
  comparisons.push({
    attribute: 'First Arc',
    value: guessed.firstAppearance.arc,
    targetValue: target.firstAppearance.arc,
    status: guessed.firstAppearance.arc === target.firstAppearance.arc ? 'correct' : 'wrong'
  });
  
  // Crew comparison
  comparisons.push({
    attribute: 'Crew',
    value: guessed.crew,
    targetValue: target.crew,
    status: guessed.crew === target.crew ? 'correct' : 'wrong'
  });
  
  // Is Alive comparison
  comparisons.push({
    attribute: 'Status',
    value: guessed.isAlive ? 'Alive' : 'Deceased',
    targetValue: target.isAlive ? 'Alive' : 'Deceased',
    status: guessed.isAlive === target.isAlive ? 'correct' : 'wrong'
  });
  
  // Role comparison
  comparisons.push({
    attribute: 'Role',
    value: guessed.role,
    targetValue: target.role,
    status: guessed.role === target.role ? 'correct' : 'wrong'
  });
  
  return comparisons;
};

// Format bounty with commas
export const formatBounty = (bounty: number | null): string => {
  if (bounty === null) return 'Unknown';
  return bounty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ฿';
};
