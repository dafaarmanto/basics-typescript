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

export interface BaseEvent {
  time: number;
  user: string;
}

export interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

export interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: number;
}

export interface Cat {
  name: string;
  breed: string;
}
