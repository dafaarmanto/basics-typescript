enum LoadingState {
  beforeload = 'beforeload',
  loading = 'loading',
  loaded = 'loaded',
}

const subLoadingState = {
  [LoadingState.beforeload]: 'Before Load',
};

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeload));

// Literal types
const rollDice = (dice: 1 | 2 | 3 | 4 | 5 | 6): number => {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
};

console.log(rollDice(4));

function sendEvent(name: 'addToCart', data: { productId: number }): void;
function sendEvent(name: 'checkout', data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent('addToCart', { productId: 123123 });
