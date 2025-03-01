import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

type Triplet = [number, number, number];

const threeSum = (nums: number[]): Triplet[] => {
  const results: Triplet[] = [];
  if (nums.length < 3) return results;
  nums.sort((a, b) => a - b);

  const target = 0;
  for (let leftmost = 0; leftmost < nums.length - 2; ++leftmost) {
    if (nums[leftmost] > target) break;
    if (leftmost > 0 && nums[leftmost] === nums[leftmost - 1]) continue;

    let middle = leftmost + 1;
    let rightmost = nums.length - 1;

    while (middle < rightmost) {
      const sum = nums[leftmost] + nums[middle] + nums[rightmost];

      if (sum === target) {
        results.push([nums[leftmost], nums[middle], nums[rightmost]]);

        while (nums[middle] === nums[middle + 1]) ++middle;
        while (nums[rightmost] === nums[rightmost - 1]) --rightmost;
        ++middle;
        --rightmost;
      } else if (sum < target) {
        ++middle;
      } else --rightmost;
    }
  }

  return results;
};

describe("three sum", () => {
  it("case 1", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, 0, 1],
      [-1, -1, 2],
    ]);
  });
});
