/*
 Constructs a type with all properties of T 
   set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
