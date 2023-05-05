type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [44, 23, 54];
const rollNumbers2: GenericArray<string> = ["42", "53", "64"];

type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Hello", "Maruf"];

// Generic Interface
interface ICrush<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush1: ICrush<{ name: string; color: string }> = {
  name: "Emma Watson",
  husband: {
    name: "Maruf",
    color: "brown",
  },
};

// Generic Function
const love = <T, U>(param: T, param1: U): [T, U] => {
  return [param, param1];
};

const result = love<string, boolean>("Hello Bangladesh", true);

// Generic keyof constraints
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const result1 = getProperty({ name: "Shahrukh", age: 30 }, "age");
