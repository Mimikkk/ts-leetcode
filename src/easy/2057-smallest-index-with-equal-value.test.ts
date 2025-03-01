import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const smallestEqual = (nums: number[]) => nums.findIndex((n, i) => i % 10 === n);

describe("smallest equal", () => {
  it("should return the smallest index", () => {
    expect(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(-1);
  });
});
