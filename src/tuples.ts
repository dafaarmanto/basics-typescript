type ThreeDCoordinate = [x: number, y: number, z: number];

const addThreeDCordinate = (
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate => {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
};

console.log(addThreeDCordinate([0, 100, 0], [10, 20, 30]));

// Tuple with different types
const stringState = (initial: string): [() => string, (v: string) => void] => {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
};

const [getString, setGetString] = stringState('Hello World');
console.log(getString()); // Hello World

setGetString('and hello goodbye!');
console.log(getString()); // and hello goodbye
