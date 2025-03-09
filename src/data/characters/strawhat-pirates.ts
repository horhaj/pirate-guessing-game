
import { Character } from '../../types/character';

const strawHatPirates: Character[] = [
  {
    id: 1,
    name: 'Monkey D. Luffy',
    gender: 'Male',
    race: 'Human',
    bounty: 3000000000,
    devilFruit: {
      has: true,
      type: 'Mythical Zoan',
      name: 'Hito Hito no Mi, Model: Nika'
    },
    firstAppearance: {
      saga: 'East Blue',
      arc: 'Romance Dawn'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Captain',
    image: '/images/luffy.jpg'
  },
  {
    id: 2,
    name: 'Roronoa Zoro',
    gender: 'Male',
    race: 'Human',
    bounty: 1111000000,
    devilFruit: {
      has: false,
      type: 'None',
      name: null
    },
    firstAppearance: {
      saga: 'East Blue',
      arc: 'Romance Dawn'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Swordsman',
    image: '/images/zoro.jpg'
  },
  {
    id: 3,
    name: 'Nami',
    gender: 'Female',
    race: 'Human',
    bounty: 366000000,
    devilFruit: {
      has: false,
      type: 'None',
      name: null
    },
    firstAppearance: {
      saga: 'East Blue',
      arc: 'Orange Town'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Navigator',
    image: '/images/nami.jpg'
  },
  {
    id: 4,
    name: 'Usopp',
    gender: 'Male',
    race: 'Human',
    bounty: 500000000,
    devilFruit: {
      has: false,
      type: 'None',
      name: null
    },
    firstAppearance: {
      saga: 'East Blue',
      arc: 'Syrup Village'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Sniper',
    image: '/images/usopp.jpg'
  },
  {
    id: 5,
    name: 'Sanji',
    gender: 'Male',
    race: 'Human',
    bounty: 1032000000,
    devilFruit: {
      has: false,
      type: 'None',
      name: null
    },
    firstAppearance: {
      saga: 'East Blue',
      arc: 'Baratie'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Cook',
    image: '/images/sanji.jpg'
  },
  {
    id: 6,
    name: 'Tony Tony Chopper',
    gender: 'Male',
    race: 'Reindeer',
    bounty: 1000,
    devilFruit: {
      has: true,
      type: 'Zoan',
      name: 'Hito Hito no Mi'
    },
    firstAppearance: {
      saga: 'Alabasta',
      arc: 'Drum Island'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Doctor',
    image: '/images/chopper.jpg'
  },
  {
    id: 7,
    name: 'Nico Robin',
    gender: 'Female',
    race: 'Human',
    bounty: 930000000,
    devilFruit: {
      has: true,
      type: 'Paramecia',
      name: 'Hana Hana no Mi'
    },
    firstAppearance: {
      saga: 'Alabasta',
      arc: 'Whisky Peak'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Archaeologist',
    image: '/images/robin.jpg'
  },
  {
    id: 8,
    name: 'Franky',
    gender: 'Male',
    race: 'Human (Cyborg)',
    bounty: 394000000,
    devilFruit: {
      has: false,
      type: 'None',
      name: null
    },
    firstAppearance: {
      saga: 'Water 7',
      arc: 'Water 7'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Shipwright',
    image: '/images/franky.jpg'
  },
  {
    id: 9,
    name: 'Brook',
    gender: 'Male',
    race: 'Human (Skeleton)',
    bounty: 383000000,
    devilFruit: {
      has: true,
      type: 'Paramecia',
      name: 'Yomi Yomi no Mi'
    },
    firstAppearance: {
      saga: 'Thriller Bark',
      arc: 'Thriller Bark'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Musician',
    image: '/images/brook.jpg'
  },
  {
    id: 10,
    name: 'Jinbe',
    gender: 'Male',
    race: 'Fish-Man',
    bounty: 1100000000,
    devilFruit: {
      has: false,
      type: 'None',
      name: null
    },
    firstAppearance: {
      saga: 'Summit War',
      arc: 'Impel Down'
    },
    crew: 'Straw Hat Pirates',
    isAlive: true,
    role: 'Helmsman',
    image: '/images/jinbe.jpg'
  }
];

export default strawHatPirates;
