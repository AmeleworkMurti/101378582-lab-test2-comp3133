export interface Wand {
  wood: string;
  core: string;
  length: number;
}

export interface Character {
  id: string;
  name: string;
  house: string;
  species: string;
  wizard: boolean;
  ancestry: string;
  actor: string;
  image: string;
  wand: Wand;
}