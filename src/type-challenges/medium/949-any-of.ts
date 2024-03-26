type Falsey = 0 | "" | false | [] | { [key: string]: never } | undefined | null;
type AnyOf<T extends any[]> = T[number] extends Falsey ? false : true;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>>,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
];
