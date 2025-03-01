import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const singleNumber = (nums: number[]): number => nums.reduce((acc, curr) => acc ^ curr, 0);

describe("136 - single number", () => {
  it("#1", () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
  });

  it("#2", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
  });

  it("#3", () => {
    expect(singleNumber([1, 2, 1, 3, 3])).toEqual(2);
  });
});
