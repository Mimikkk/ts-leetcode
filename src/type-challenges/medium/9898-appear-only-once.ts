type Filter<T extends any[], X> = T extends [infer H, ...infer T]
  ? Equal<H, X> extends true
    ? [H, ...Filter<T, X>]
    : Filter<T, X>
  : [];

type Count<T extends any[], X> = Filter<T, X>["length"];

type IsIn<T extends any[], X> = T extends [infer H, ...infer T]
  ? Equal<H, X> extends true
    ? true
    : IsIn<T, X>
  : false;

type Elements<T extends any[], R extends any[] = []> = T extends [infer H, ...infer TA]
  ? IsIn<R, H> extends false
    ? Elements<TA, [...R, H]>
    : Elements<TA, R>
  : R;

type UniqueElements<T extends any[], E extends any[] = Elements<T>> = E extends [infer HE, ...infer TE]
  ? Count<T, HE> extends 1
    ? [HE, ...UniqueElements<T, TE>]
    : UniqueElements<T, TE>
  : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<UniqueElements<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<UniqueElements<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<UniqueElements<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<UniqueElements<[]>, []>>,
];
