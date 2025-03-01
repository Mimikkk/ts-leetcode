import { R } from "@shared/modules/records.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const mostFrequent = (nums: number[], key: number) => {
  const frequencies = R.counter(nums, (n, i, nums) => nums[i - 1] === key);
  const max = R.maxValue(frequencies);

  return R.findKey(frequencies, (key) => frequencies[key] === max);
};

describe("most fequent", () => {
  it("case 1", () => {
    expect(mostFrequent([1, 100, 200, 1, 100], 1)).toBe(100);
  });

  it("case 2", () => {
    expect(mostFrequent([2, 2, 2, 2, 3], 2)).toBe(2);
  });
});
