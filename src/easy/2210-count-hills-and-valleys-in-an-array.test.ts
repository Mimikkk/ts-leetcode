import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const countHillValley = (nums: number[]): number => {
  let count = 0;
  let level = 0;

  let isHill = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      if (isHill) ++level;
      else {
        isHill = !isHill;
        if (level > 0) ++count;
        level = 1;
      }
    } else if (nums[i] > nums[i + 1])
      if (!isHill) ++level;
      else {
        isHill = !isHill;
        if (level > 0) ++count;
        level = 1;
      }
  }

  return count;
};

describe("count hill valleys", () => {
  it("case 1", () => {
    expect(countHillValley([2, 4, 1, 1, 6, 5])).toEqual(3);
  });

  it("case 2", () => {
    expect(countHillValley([6, 6, 5, 5, 4, 1])).toEqual(0);
  });
});