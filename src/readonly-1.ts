import { Cat } from '../types';

// READONLY - Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
const makecat = (name: string, breed: string): Readonly<Cat> => {
  return {
    name,
    breed,
  };
};

const lulu = makecat('Lulu', 'Domestic Cat');
// lulu.name = "Gray" - Forbidden

// Readonly in tuples
const makeCoordinate = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => {
  return [x, y, z];
};

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 20; - Forbidden

// Make immutable array
const immutableArray = [10, 20, 30] as const;
// immutableArray[0] = 78 - Forbidden
