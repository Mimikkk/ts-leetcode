type Join<T extends string[], U extends string | number> = T extends [
  infer H extends string,
  ...infer T extends string[],
]
  ? T extends []
    ? `${H}`
    : `${H}${U}${Join<T, U>}`
  : "";

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>,
  Expect<Equal<Join<[], "u">, "">>,
];
