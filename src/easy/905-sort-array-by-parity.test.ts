import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const sortArrayByParity = (nums: number[]) => nums.sort((a, b) => (a % 2) - (b % 2));

describe("sort array by parity", () => {
  it("should pass", () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });

  it("should pass", () => {
    expect(sortArrayByParity([0])).toEqual([0]);
  });
});
