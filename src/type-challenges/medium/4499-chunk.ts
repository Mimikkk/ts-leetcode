type Take<T extends any[], N extends number, R extends any[] = []> = R["length"] extends N
  ? [R, T]
  : T extends [infer H, ...infer T]
    ? Take<T, N, [...R, H]>
    : [R, T];

type Chunk<T extends any[], N extends number, R extends any[] = []> = T extends []
  ? R
  : Take<T, N> extends [infer E, infer T]
    ? T extends any[]
      ? Chunk<T, N, [...R, E]>
      : never
    : R;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
];
