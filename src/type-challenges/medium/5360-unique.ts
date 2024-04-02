type IsIn<E, T extends any[]> = T extends [infer H, ...infer T]
  ? Equal<E, H> extends true
    ? true
    : IsIn<E, T>
  : false;

type Unique<T extends any[], R extends any[] = []> = T extends [infer H, ...infer T]
  ? IsIn<H, R> extends true
    ? Unique<T, R>
    : Unique<T, [...R, H]>
  : R;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
  Expect<Equal<Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>, [string, number, 1, "a", 2, "b"]>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
];
