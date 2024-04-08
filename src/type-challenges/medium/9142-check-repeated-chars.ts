type Count<T extends string, E, C extends any[] = []> = T extends `${infer H}${infer T}`
  ? Equal<H, E> extends true
    ? Count<T, E, [...C, any]>
    : Count<T, E, C>
  : C["length"];

type CheckRepeatedChars<S extends string> = S extends `${infer H}${infer T}`
  ? Count<S, H> extends 1
    ? CheckRepeatedChars<T>
    : true
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<CheckRepeatedChars<"abc">, false>>,
  Expect<Equal<CheckRepeatedChars<"abb">, true>>,
  Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
  Expect<Equal<CheckRepeatedChars<"">, false>>,
];
