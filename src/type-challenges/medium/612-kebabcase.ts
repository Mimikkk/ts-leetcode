type KebabCase<S extends string> = S extends `${infer R}${infer H}`
  ? R extends Uppercase<R>
    ? `-${Lowercase<R>}${KebabCase<H>}`
    : `${R}${KebabCase<H>}`
  : S;

type X = KebabCase<"AbC">;
type Y = KebabCase<"abC">;
type Z = KebabCase<"">;
type E = KebabCase<"😎">;
type F = KebabCase<"ABCDEF">;
type G = KebabCase<"AbcDef">;
type H = KebabCase<"foo-bar">;
type I = KebabCase<"Foo-Bar">;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
