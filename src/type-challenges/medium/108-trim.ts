type Whitespace = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${infer T}${Whitespace}` | `${Whitespace}${infer T}` ? Trim<T> : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>,
];
