
export interface Character {
  id: number;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  race: string;
  bounty: number | null;
  devilFruit: {
    has: boolean;
    type: 'Paramecia' | 'Zoan' | 'Logia' | 'Mythical Zoan' | 'Ancient Zoan' | 'Special Paramecia' | 'None';
    name: string | null;
  };
  firstAppearance: {
    saga: string;
    arc: string;
  };
  crew: string;
  isAlive: boolean;
  role: string;
}

const characters: Character[] = [
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
    role: 'Captain'
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
    role: 'Swordsman'
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
    role: 'Navigator'
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
    role: 'Sniper'
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
    role: 'Cook'
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
    role: 'Doctor'
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
    role: 'Archaeologist'
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
    role: 'Shipwright'
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
    role: 'Musician'
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
    role: 'Helmsman'
  },
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
    role: 'Captain'
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
    role: 'Captain'
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
    role: '2nd Division Commander'
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
    role: 'Captain'
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
    role: 'Captain'
  }
];

export default characters;
