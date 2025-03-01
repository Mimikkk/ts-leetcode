type Flatten<T extends any[]> = T extends [infer H, ...infer T]
  ? H extends any[]
    ? [...H, ...Flatten<T>]
    : [H, ...Flatten<T>]
  : T;

type IsFlat<T extends any[]> = T extends [infer H, ...infer T] ? (H extends any[] ? false : IsFlat<T>) : true;

type FlattenDepth<T extends any[], D extends number = 1, C extends 1[] = []> = C["length"] extends D
  ? T
  : IsFlat<T> extends true
    ? T
    : FlattenDepth<Flatten<T>, D, [...C, 1]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
];

/* _____________ Further Steps _____________ */
/*
 > Share your solutions: https://tsch.ts.org/3243/answer
 > View solutions: https://tsch.ts.org/3243/solutions
 > More Challenges: https://tsch.ts.org
 */
