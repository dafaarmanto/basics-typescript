import { BaseEvent, EventMap } from '../types';

// Example 1
const pluck = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map((item) => item[key]);
};

const cats = [
  { name: 'Lulu', age: 2 },
  { name: 'Gray', age: 1 },
];

console.log(pluck(cats, 'name'));
console.log(pluck(cats, 'age'));

// Example 2
const sendEvent = <Name extends keyof EventMap>(
  name: string,
  data: EventMap[Name]
): void => {
  console.log([name, data]);
};

sendEvent('addToCart', { productID: 'foo', user: 'Joe', quantity: 1, time: 2 });
sendEvent('checkout', { time: 2, user: 'Joe' });
