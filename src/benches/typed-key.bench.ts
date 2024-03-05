import { bench } from "@arktype/attest";

type A_TypedKey<T, K> = keyof { [P in keyof T as T[P] extends K ? P : never]: P };
type B_TypedKey<T, K> = { [P in keyof T]: T[P] extends K ? P : never }[keyof T];

bench("Version - A", () => {
  return {} as A_TypedKey<{ A: string; B: string }, string>;
}).types([24, "instantiations"]);

bench("Version - B", () => {
  return {} as B_TypedKey<{ A: string; B: string }, string>;
}).types([24, "instantiations"]);
