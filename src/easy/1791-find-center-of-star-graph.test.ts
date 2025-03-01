import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type Edge = [number, number];

const findCenter = ([[s1, d1], [s2, d2]]: Edge[]) => (s1 == s2 || s1 == d2 ? s1 : d1);

describe("find center", () => {
  it("case 1", () => {
    expect(
      findCenter([
        [1, 2],
        [2, 3],
        [4, 2],
      ]),
    ).toBe(2);
  });
});
