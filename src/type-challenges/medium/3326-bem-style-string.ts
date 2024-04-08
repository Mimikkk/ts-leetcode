type Element<S extends string[]> = S extends [] ? "" : `__${S[number]}`;
type Modifier<S extends string[]> = S extends [] ? "" : `--${S[number]}`;

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${Element<E>}${Modifier<M>}`;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<Equal<BEM<"btn", ["price"], ["warning", "success"]>, "btn__price--warning" | "btn__price--success">>,
  Expect<Equal<BEM<"btn", [], ["small", "medium", "large"]>, "btn--small" | "btn--medium" | "btn--large">>,
];
