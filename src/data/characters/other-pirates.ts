
import { Character } from '../../types/character';

const otherPirates: Character[] = [
  {
    id: 11,
    name: 'Trafalgar D. Water Law',
    gender: 'Male',
    race: 'Human',
    bounty: 3000000000,
    devilFruit: {
      has: true,
      type: 'Paramecia',
      name: 'Ope Ope no Mi'
    },
    firstAppearance: {
      saga: 'Summit War',
      arc: 'Sabaody Archipelago'
    },
    crew: 'Heart Pirates',
    isAlive: true,
    role: 'Captain',
    image: '/images/law.jpg'
  },
  {
    id: 12,
    name: 'Boa Hancock',
    gender: 'Female',
    race: 'Human',
    bounty: 80000000,
    devilFruit: {
      has: true,
      type: 'Paramecia',
      name: 'Mero Mero no Mi'
    },
    firstAppearance: {
      saga: 'Summit War',
      arc: 'Amazon Lily'
    },
    crew: 'Kuja Pirates',
    isAlive: true,
    role: 'Captain',
    image: '/images/hancock.jpg'
  },
  {
    id: 13,
    name: 'Portgas D. Ace',
    gender: 'Male',
    race: 'Human',
    bounty: 550000000,
    devilFruit: {
      has: true,
      type: 'Logia',
      name: 'Mera Mera no Mi'
    },
    firstAppearance: {
      saga: 'Alabasta',
      arc: 'Drum Island'
    },
    crew: 'Whitebeard Pirates',
    isAlive: false,
    role: '2nd Division Commander',
    image: '/images/ace.jpg'
  },
  {
    id: 14,
    name: 'Marshall D. Teach',
    gender: 'Male',
    race: 'Human',
    bounty: 3996000000,
    devilFruit: {
      has: true,
      type: 'Logia',
      name: 'Yami Yami no Mi'
    },
    firstAppearance: {
      saga: 'Skypiea',
      arc: 'Jaya'
    },
    crew: 'Blackbeard Pirates',
    isAlive: true,
    role: 'Captain',
    image: '/images/blackbeard.jpg'
  },
  {
    id: 15,
    name: 'Shanks',
    gender: 'Male',
    race: 'Human',
    bounty: 4048900000,
    devilFruit: {
      has: false,
      type: 'None',
      name: null
    },
    firstAppearance: {
      saga: 'East Blue',
      arc: 'Romance Dawn'
    },
    crew: 'Red Hair Pirates',
    isAlive: true,
    role: 'Captain',
    image: '/images/shanks.jpg'
  }
];

export default otherPirates;
