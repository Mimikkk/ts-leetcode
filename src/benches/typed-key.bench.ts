import { bench } from "@arktype/attest";

type TypedKey<T, K> = keyof { [P in keyof T as T[P] extends K ? P : never]: P };

type makeComplexType<s extends string> = s extends `${infer head}${infer tail}`
  ? head | tail | makeComplexType<tail>
  : s;

bench("bench type", () => {
  return {} as makeComplexType<"defenestration">;
  // This is an inline snapshot that will be populated or compared when you run the file
}).types([169, "instantiations"]);

bench("bench runtime and type", () => {
  return {} as makeComplexType<"antidisestablishmentarianism">;
})
  .mean([2, "ns"])
  .types([1, "instantiations"]);
