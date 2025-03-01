import { A } from "@shared/modules/arrays.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const secondHighest = (s: string) =>
  A.second(
    A.unique(
      s
        .replace(/[^0-9]/g, "")
        .split("")
        .map(Number),
    ).sort(A.N.desc),
    -1,
  );

describe("secon", () => {
  it("case 1", () => {
    expect(secondHighest("dfa12321afd")).toBe(2);
  });
});
