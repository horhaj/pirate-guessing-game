import characters, { Character } from '../data/onepiece-characters';
import { formatBountyValue } from '../components/BountyDisplay';

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

// Map of saga chronological order
const sagaOrder: Record<string, number> = {
  'East Blue': 1,
  'Alabasta': 2,
  'Skypiea': 3,
  'Water 7': 4,
  'Thriller Bark': 5,
  'Summit War': 6,
  'Fishman Island': 7,
  'Dressrosa': 8,
  'Whole Cake Island': 9,
  'Wano Country': 10,
  'Egghead': 11
};

// Map of arcs chronological order
const arcOrder: Record<string, number> = {
  'Romance Dawn': 1,
  'Orange Town': 2,
  'Syrup Village': 3,
  'Baratie': 4,
  'Arlong Park': 5,
  'Loguetown': 6,
  'Reverse Mountain': 7,
  'Whisky Peak': 8,
  'Little Garden': 9,
  'Drum Island': 10,
  'Arabasta': 11,
  'Jaya': 12,
  'Skypiea': 13,
  'Long Ring Long Land': 14,
  'Water 7': 15,
  'Enies Lobby': 16,
  'Post-Enies Lobby': 17,
  'Thriller Bark': 18,
  'Sabaody Archipelago': 19,
  'Amazon Lily': 20,
  'Impel Down': 21,
  'Marineford': 22,
  'Post-War': 23
  // Add more arcs as needed
};

// Compare attributes between guessed and target characters
export interface AttributeComparison {
  attribute: string;
  value: string | number | boolean | null;
  targetValue: string | number | boolean | null;
  status: 'correct' | 'wrong' | 'higher' | 'lower' | 'earlier' | 'later';
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
  
  // Bounty comparison - IMPROVED HANDLING
  if (guessed.bounty !== null && target.bounty !== null) {
    // Both bounties have values
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
  } else if (guessed.bounty !== null && target.bounty === null) {
    // Guessed character has a bounty, target doesn't
    comparisons.push({
      attribute: 'Bounty',
      value: guessed.bounty,
      targetValue: target.bounty,
      status: 'higher' // Treat having a bounty as "higher" than no bounty
    });
  } else if (guessed.bounty === null && target.bounty !== null) {
    // Target has a bounty, guessed doesn't
    comparisons.push({
      attribute: 'Bounty',
      value: guessed.bounty,
      targetValue: target.bounty,
      status: 'lower' // Treat having no bounty as "lower" than having one
    });
  } else {
    // Both have null bounties
    comparisons.push({
      attribute: 'Bounty',
      value: guessed.bounty,
      targetValue: target.bounty,
      status: 'correct' // Both have no bounty, so it's correct
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
  const guessedSagaOrder = sagaOrder[guessed.firstAppearance.saga] || 999;
  const targetSagaOrder = sagaOrder[target.firstAppearance.saga] || 999;
  
  comparisons.push({
    attribute: 'First Saga',
    value: guessed.firstAppearance.saga,
    targetValue: target.firstAppearance.saga,
    status: guessedSagaOrder === targetSagaOrder 
      ? 'correct' 
      : guessedSagaOrder > targetSagaOrder 
        ? 'later' 
        : 'earlier'
  });
  
  // First Appearance - arc comparison
  const guessedArcOrder = arcOrder[guessed.firstAppearance.arc] || 999;
  const targetArcOrder = arcOrder[target.firstAppearance.arc] || 999;
  
  comparisons.push({
    attribute: 'First Arc',
    value: guessed.firstAppearance.arc,
    targetValue: target.firstAppearance.arc,
    status: guessedArcOrder === targetArcOrder 
      ? 'correct' 
      : guessedArcOrder > targetArcOrder 
        ? 'later' 
        : 'earlier'
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

// Format bounty with Berry symbol and abbreviated numbers
export const formatBounty = (bounty: number | null): string => {
  if (bounty === null) return 'Unknown';
  return `฿ ${formatBountyValue(bounty)}`;
};