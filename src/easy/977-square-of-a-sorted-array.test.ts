import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const asc = (a: number, b: number) => a - b;
const square = (a: number) => a * a;
const sortedSquares = (nums: number[]) => nums.map(square).sort(asc);

describe("sorted squares", () => {
  it("case 1", () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });

  it("case 2", () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });
});
