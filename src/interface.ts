type User = {
  name: string;
  age: number;
};

//To extend the type user, we should use intersection
type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

//To extend the interface user, we should use extends
interface IExtendedUser extends IUser {
  role: string;
}

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 200,
};

type addNumbers = (num1: number, num2: number) => number;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

const addNewNumbers: addNumbers = (num1, num2) => num1 + num2;
