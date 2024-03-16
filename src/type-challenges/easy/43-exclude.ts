/*
 ```ts
 type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 ```
 */

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T;

type A = MyExclude<"a" | "b" | "c", "a" | "b">;
type B = MyExclude<string | number, string>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
];
