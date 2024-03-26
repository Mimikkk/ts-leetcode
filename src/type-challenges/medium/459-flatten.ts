type Flatten<T extends any[]> = T extends [infer E]
  ? E extends any[]
    ? [...Flatten<E>]
    : [E]
  : T extends [infer H, ...infer R]
    ? [...Flatten<[H]>, ...Flatten<R>]
    : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>, [{ foo: "bar"; 2: 10 }, "foobar"]>>,
];

// @ts-expect-error
type error = Flatten<"1">;
