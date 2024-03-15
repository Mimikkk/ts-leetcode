type HelloWorld = string;

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotAny } from "@type-challenges/utils";

type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;
type Expect = Equal;

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
