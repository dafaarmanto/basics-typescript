const myForEach = <T>(items: T[], forEachFunc: (v: T) => void): void => {
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
};

myForEach(['a', 'b', 'c', 'd', 'e', 'f', 'g'], (v) =>
  console.log(`forEach: ${v}`)
);

const myFilter = <T>(items: T[], filterFunc: (v: T) => boolean): T[] => {
  return items.reduce((a: T[], v) => (filterFunc(v) ? [...a, v] : a), []);
};

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0));

const myMap = <T, K>(items: T[], mapFunc: (v: T) => K): K[] => {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
};

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (v) => (v * 30).toString()));
