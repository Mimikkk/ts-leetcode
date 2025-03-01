import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const canThreePartsEqualSum = (nums: number[]): boolean => {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 3) return false;

  let count = 0;
  let partialSum = 0;
  for (let num of nums) {
    partialSum += num;

    if (sum / 3 == partialSum) {
      ++count;
      partialSum = 0;
    }
  }

  return count >= 3;
};

describe("can three parts equal sum", () => {
  it("case 1", () => {
    expect(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toEqual(true);
  });

  it("case 2", () => {
    expect(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toEqual(false);
  });

  it("case 3", () => {
    expect(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toEqual(true);
  });
});
