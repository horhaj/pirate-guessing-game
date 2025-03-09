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
  image: string;
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

export default characters;
