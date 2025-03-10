type LookUp<U, T> = U extends { type: T } ? U : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [Expect<Equal<LookUp<Animal, "dog">, Dog>>, Expect<Equal<LookUp<Animal, "cat">, Cat>>];

/* _____________ Further Steps _____________ */
/*
 > Share your solutions: https://tsch.ts.org/62/answer
 > View solutions: h                     ttps://tsch.ts.org/62/solutions
 > More Challenges: https://tsch.ts.org
 */
