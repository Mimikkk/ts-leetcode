type FirstUniqueCharIndex<T extends string, A extends string[] = []> = T extends ""
  ? -1
  : T extends `${infer H}${infer T}`
    ? H extends A[number]
      ? FirstUniqueCharIndex<T, [...A, H]>
      : T extends `${string}${H}${string}`
        ? FirstUniqueCharIndex<T, [...A, H]>
        : A["length"]
    : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
  Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
  Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"aaa">, -1>>,
];
