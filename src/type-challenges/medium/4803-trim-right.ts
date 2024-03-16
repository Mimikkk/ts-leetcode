type Whitespace = " " | "\n" | "\t";
type TrimRight<S extends string> = S extends `${infer T}${Whitespace}` ? TrimRight<T> : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TrimRight<"str">, "str">>,
  Expect<Equal<TrimRight<"str ">, "str">>,
  Expect<Equal<TrimRight<"str     ">, "str">>,
  Expect<Equal<TrimRight<"     str     ">, "     str">>,
  Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
  Expect<Equal<TrimRight<"">, "">>,
  Expect<Equal<TrimRight<"\n\t ">, "">>,
];

/* _____________ Further Steps _____________ */
/*
 > Share your solutions: https://tsch.js.org/4803/answer
 > View solutions: https://tsch.js.org/4803/solutions
 > More Challenges: https://tsch.js.org
 */
