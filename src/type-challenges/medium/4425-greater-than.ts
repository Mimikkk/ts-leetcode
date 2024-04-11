type GreaterThan<
  A extends number | string,
  B extends number | string,
  IsEqual extends boolean = false,
> = `${A}` extends `${infer AH}${infer AT}`
  ? `${B}` extends `${infer BH}${infer BT}`
    ? [IsEqual, AH & BH] extends [false, never]
      ? GreaterThan<AT, BT, "0123456789" extends `${string}${AH}${string}${BH}${string}` ? false : true>
      : GreaterThan<AT, BT, IsEqual>
    : true
  : IsEqual;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
];
