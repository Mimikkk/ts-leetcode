type ExcludeIndex<K, P = PropertyKey> = P extends K ? never : K extends P ? K : never;

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as ExcludeIndex<K, P>]: T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const foobar = Symbol("foobar");

type cases = [
  Expect<Equal<RemoveIndexSignature<{ [key: string]: any; foo(): void }>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<{ [key: number]: any; bar(): void; 0: string }>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<{ [key: symbol]: any; [foobar](): void }>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<{ bar(): void; baz: string }>, { bar(): void; baz: string }>>,
];
