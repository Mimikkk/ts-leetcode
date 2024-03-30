type Mutable<T extends object> = { -readonly [K in keyof T]: T[K] };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Item {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [Expect<Equal<Mutable<Readonly<Item>>, Item>>, Expect<Equal<Mutable<Readonly<List>>, List>>];

type errors = [
  // @ts-expect-error
  Mutable<"string">,
  // @ts-expect-error
  Mutable<0>,
];
