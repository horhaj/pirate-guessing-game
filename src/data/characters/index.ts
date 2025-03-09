
import { Character } from '../../types/character';
import strawHatPirates from './strawhat-pirates';
import otherPirates from './other-pirates';

// Combine all character groups
const characters: Character[] = [
  ...strawHatPirates,
  ...otherPirates
];

export default characters;
