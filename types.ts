export interface PersonTypes {
  firstName: string;
  lastName: string;
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface User {
  id: string;
  info?: {
    email?: string;
  };
}

export interface RankTypes<RankItem> {
  item: RankItem;
  rank: number;
}

export interface Pokemon {
  name: string;
  hp: number;
}
