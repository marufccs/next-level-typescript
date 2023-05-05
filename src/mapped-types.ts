type Volume = {
  height: number;
  width: string;
  depth: number;
};

type Area<T> = {
  readonly [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 10,
  width: "10",
};
