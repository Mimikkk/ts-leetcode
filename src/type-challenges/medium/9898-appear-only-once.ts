type IsIn<T extends any[], Y> = T extends [infer HT, ...infer TT]
  ? Equal<HT, Y> extends true
    ? true
    : IsIn<TT, Y>
  : false;

type HasAnyOf<T extends any[], Y extends any[]> = Y extends [infer HY, ...infer TY]
  ? IsIn<T, HY> extends true
    ? true
    : HasAnyOf<T, TY>
  : false;

type ElementsOf<Array extends any[], Result extends any[] = []> = Array extends [infer HA, ...infer TA]
  ? Result extends [...infer TR, infer HR]
    ? Equal<HA, HR> extends true
      ? ElementsOf<TA, [...Result]>
      : ElementsOf<TA, [...Result, HA]>
    : ElementsOf<TA, [HA]>
  : Result;

type Unique<Array extends any[]> = [];

const x: ElementsOf<[2, 2, 2, 2]> = void 0 as never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Unique<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<Unique<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<Unique<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[]>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9898/answer
  > View solutions: https://tsch.js.org/9898/solutions
  > More Challenges: https://tsch.js.org
*/
