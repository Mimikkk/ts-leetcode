type TupleToObject<T extends readonly (keyof any)[]> = { [K in T[number]]: K };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const symbol_1 = Symbol(1);
const symbol_2 = Symbol(2);
const tuple_string = ["tesla", "model 3", "model X", "model Y"] as const;
const tuple_number = [1, 2, 3, 4] as const;
const tuple_symbol = [symbol_1, symbol_2] as const;
const tuple_mix = [1, "2", 3, "4", symbol_1] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple_string>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tuple_number>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tuple_symbol>, { [symbol_1]: typeof symbol_1; [symbol_2]: typeof symbol_2 }>>,
  Expect<Equal<TupleToObject<typeof tuple_mix>, { 1: 1; "2": "2"; 3: 3; "4": "4"; [symbol_1]: typeof symbol_1 }>>,
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
