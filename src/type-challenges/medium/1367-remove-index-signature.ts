type RemoveIndexSignature<T> = {};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const foobar = Symbol("foobar");

type cases = [
  Expect<Equal<RemoveIndexSignature<{ [key: string]: any; foo(): void }>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<{ [key: number]: any; bar(): void; 0: string }>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<{ [key: symbol]: any; [foobar](): void }>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<{ bar(): void; baz: string }>, { bar(): void; baz: string }>>,
];
