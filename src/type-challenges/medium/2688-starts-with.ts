type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<StartsWith<"abc", "ac">, false>>,
  Expect<Equal<StartsWith<"abc", "ab">, true>>,
  Expect<Equal<StartsWith<"abc", "abc">, true>>,
  Expect<Equal<StartsWith<"abc", "abcd">, false>>,
  Expect<Equal<StartsWith<"abc", "">, true>>,
  Expect<Equal<StartsWith<"abc", " ">, false>>,
  Expect<Equal<StartsWith<"", "">, true>>,
];
