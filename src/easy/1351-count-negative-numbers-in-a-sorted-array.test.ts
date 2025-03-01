import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const countNegatives = (grid: number[][]) => grid.flat().filter((x) => x < 0).length;

describe("count negatives", () => {
  it("case 1", () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ]),
    ).toBe(8);
  });
});
