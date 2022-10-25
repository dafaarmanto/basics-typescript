import { MyUser } from '../types';

// PARTIAL - Set all type to optionals
type MyUserOptionals = Partial<MyUser>;

// REQUIRED - Set all type to required
type RequiredTypes = Required<MyUser>;

// PICK - Constructs a type by picking the set of properties Keys from Type
type PickNameAndEmail = Pick<MyUser, 'name' | 'email'>;

// OMIT - Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
type UserWithoutID = Omit<MyUser, 'id'>;

// RECORD - Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
// Example of use
const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...others } = v;
    return {
      ...a,
      [id]: others,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Doe',
    },
  ])
);

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: 'Jack',
      id: 1,
      email: 'jackk@gmail.com',
    },
    {
      email: 'jack@gmail.com',
    }
  )
);
