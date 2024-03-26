type Diff<F extends {}, S> = {
  [K in Exclude<keyof F | keyof S, keyof F & keyof S>]: K extends keyof F ? F[K] : K extends keyof S ? S[K] : never;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Diff<{ name: string; age: string }, { name: string; age: string; gender: number }>, { gender: number }>>,
  Expect<Equal<Diff<{ name: string; age: string; gender: number }, { name: string; age: string }>, { gender: number }>>,
  Expect<Equal<Diff<{ name: string; age: string }, { name: string; gender: number }>, { age: string; gender: number }>>,
  Expect<Equal<Diff<{ name: string; gender: number }, { name: string; age: string }>, { age: string; gender: number }>>,
];
