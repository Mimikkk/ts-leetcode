type Remove<T extends any[], E> = T extends [infer H, ...infer T]
  ? Equal<H, E> extends true
    ? Remove<T, E>
    : [H, ...Remove<T, E>]
  : [];

type Without<T extends any[], E> = E extends any[]
  ? E extends [infer EH, ...infer ET]
    ? Without<Remove<T, EH>, ET>
    : T
  : Remove<T, E>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.ts.org/5117/answer
  > View solutions: https://tsch.ts.org/5117/solutions
  > More Challenges: https://tsch.ts.org
*/
