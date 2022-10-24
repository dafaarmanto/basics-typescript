import addNumbers from './functions';
import { arrayMutate, addFive } from './func-and-func';

console.log(addNumbers(5, 5));
console.log(arrayMutate([1, 2, 3], (v) => v * 30));
console.log(addFive(55));
