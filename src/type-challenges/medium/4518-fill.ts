type Take<T extends any[], N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : T extends [infer H, ...infer T]
    ? Take<T, N, [...R, H]>
    : R;
type Skip<T extends any[], N extends number, C extends any[] = []> = C["length"] extends N
  ? T
  : T extends [any, ...infer T]
    ? Skip<T, N, [any, ...C]>
    : T;

type Replace<T extends any[], E> = T extends [any, ...infer T] ? [E, ...Replace<T, E>] : [];

type Fill<T extends any[], E, Start extends number = 0, End extends number = T["length"]> = Start extends End
  ? T
  : [...Take<T, Start>, ...Replace<Take<Skip<T, Start>, End>, E>, ...Skip<Skip<T, End>, Start>];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1], 0, 0, 3>, [0]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4518/answer
  > View solutions: https://tsch.js.org/4518/solutions
  > More Challenges: https://tsch.js.org
*/
