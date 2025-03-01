import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const intersect = (nums1: number[], nums2: number[]): number[] => {
  const map = new Map();
  for (const num of nums1) map.set(num, (map.get(num) || 0) + 1);

  const result = [];
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
};

describe("Intersection of Two Arrays II ", () => {
  it("case 1", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });

  it("case 2", () => {
    expect(intersect([4, 9, 5, 9], [9, 4, 9, 8, 4])).toEqual([9, 4, 9]);
  });
});