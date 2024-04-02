type Int<T extends string> = T extends `${infer N extends number}` ? N : never;

type ReverseString<S extends string> = S extends `${infer H}${infer T}` ? `${ReverseString<T>}${H}` : "";

type TrimLeft<S extends string> = S extends "0" ? S : S extends `${"0"}${infer R}` ? TrimLeft<R> : S;

type SubOne<S extends string> = S extends `${infer H extends number}${infer T}`
  ? H extends 0
    ? `9${SubOne<T>}`
    : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][H]}${T}`
  : never;

type AddOne<S extends string> = S extends "9"
  ? "01"
  : S extends `${infer H extends number}${infer T}`
    ? H extends 9
      ? `0${AddOne<T>}`
      : `${[1, 2, 3, 4, 5, 6, 7, 8, 9][H]}${T}`
    : never;

type Negative<S extends string> = `-${S}`;

type MinusOne<T extends number> = T extends 0
  ? -1
  : `${T}` extends `-${infer A}`
    ? Int<Negative<ReverseString<AddOne<ReverseString<`${A}`>>>>>
    : Int<TrimLeft<ReverseString<SubOne<ReverseString<`${T}`>>>>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
];

/* _____________ Further Steps _____________ */
/*
 > Share your solutions: https://tsch.js.org/2257/answer
 > View solutions: https://tsch.js.org/2257/solutions
 > More Challenges: https://tsch.js.org
 */
