import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const missingNumber = (nums: number[]) => (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b);

describe("268. Missing Number", () => {
  it("#1", () => {
    expect(missingNumber([3, 0, 1])).toEqual(2);
  });
  it("#2", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
  });
});