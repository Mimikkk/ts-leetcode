import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const majorityElement = (nums: number[]): number => {
  const elements: Record<number, number> = {};

  for (const num of nums) elements[num] = (elements[num] || 0) + 1;

  let [max, index] = [0, 0];
  for (const [key, value] of Object.entries(elements)) {
    if (value > max) {
      max = value;
      index = Number(key);
    }
  }
  return index;
};

describe("169 - majority element", () => {
  it("three", () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
  });

  it("four", () => {
    expect(majorityElement([4, 4, 4, 4, 5, 5, 5])).toEqual(4);
  });

  it("two", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  });
});
