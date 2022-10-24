import addNumbers from './functions';
import { arrayMutate, addFive } from './func-and-func';
import { parseCoordinate } from './overloading-function';

console.log(addNumbers(5, 5));

console.log(arrayMutate([1, 2, 3], (v) => v * 30));

console.log(addFive(55));

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate('x:12,y:22'));
