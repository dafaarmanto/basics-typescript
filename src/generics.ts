import { RankTypes, Pokemon } from '../types';

const genericsState = <T>(initial: T): [() => T, (v: T) => void] => {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
};

const [stringGetter, setStringGetter] = genericsState(20);
console.log(stringGetter());

setStringGetter(78);
console.log(stringGetter());

// Overriding inferred generic types using: <type | type>
const [string2Getter, setString2Getter] = genericsState<number | null>(null);
console.log(stringGetter());

setString2Getter(78);
console.log(string2Getter());

const ranker = <RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] => {
  const ranks: RankTypes<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
};

const pokemon: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 100,
  },
  {
    name: 'Pikachu',
    hp: 1200,
  },
  {
    name: 'Lizard',
    hp: 900,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
