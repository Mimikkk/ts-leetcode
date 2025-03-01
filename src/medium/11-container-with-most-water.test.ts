import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const maxArea = (height: number[]): number => {
  let [max, left, right] = [0, 0, height.length - 1];

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) ++left;
    else --right;
  }

  return max;
};

describe("max area", () => {
  it("case 1", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
});
