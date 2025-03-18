/*
GreaterThan<2, 1> //should be true
GreaterThan<1, 1> //should be false
GreaterThan<10, 100> //should be false
GreaterThan<111, 11> //should be true
*/

type GreaterThan<
  T extends number,
  U extends number,
  R extends number[] = []
> = T extends R["length"]
  ? false
  : U extends R["length"]
  ? true
  : GreaterThan<T, U, [...R, 1]>;

const foo: GreaterThan<2, 1> = true;
