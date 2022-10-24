// Optional parameters "?"
const printIngredient = (
  quantity: string,
  ingredient: string,
  extra?: string
) => {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`);
};

printIngredient('10', 'Flour');
printIngredient('1 tbsp', 'Sugar', 'and Honey');

// Optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

const getEmail = (user: User) => {
  return user?.info?.email ?? '';
};

// Optional callbacks
const withCallback = (x: number, y: number, callback?: () => void) => {
  console.log([x, y]);
  callback?.();
};

withCallback(10, 20);
