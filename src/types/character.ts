
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
