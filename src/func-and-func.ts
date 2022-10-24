export const printToFile = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
};

export type MutationFunction = (v: number) => number;

export const arrayMutate = (
  numbers: number[],
  mutate: MutationFunction
): number[] => numbers.map(mutate);

export type AdderFunction = (v: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

export const addFive = createAdder(5);
