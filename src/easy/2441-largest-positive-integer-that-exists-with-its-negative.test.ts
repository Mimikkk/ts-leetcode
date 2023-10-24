import { expect } from "vitest";

const findMaxK = (nums: number[]): number => {
  const set = new Set(nums);

  let max = -1;
  for (const num of nums) {
    if (set.has(-num) && set.has(num)) {
      let value = Math.abs(num);

      if (max < value) max = value;
    }
  }

  return max;
};

describe("2441", () => {
  it.each([
    {
      a: [-1, 2, -3, 3],
      b: 3,
    },
    {
      a: [-1, 10, 6, 7, -7, 1],
      b: 7,
    },
    {
      a: [-10, 8, 6, 7, -2, -3],
      b: -1,
    },
  ])("$a -> $b", ({ a, b }) => expect(findMaxK(a)).toBe(b));
});
