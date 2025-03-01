import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const removeDuplicates = (nums: number[]): number => {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

describe("26 - remove duplicates from sorted array", () => {
  it("case 1", () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2);
  });
  it("case 2", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  });

  it("case 3", () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toEqual(3);
  });
});
