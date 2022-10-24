import { Coordinate } from '../types';

export function parseCoordinate(str: string): Coordinate;
export function parseCoordinate(obj: Coordinate): Coordinate;
export function parseCoordinate(x: number, y: number): Coordinate;
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, val] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(val, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}
