import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const findErrorNums = (nums: number[]): number[] => {
  const visited: Record<number, boolean> = {};
  const expected = (nums.length * (nums.length + 1)) / 2;

  let repeat = 0;
  let actual = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in visited) repeat = nums[i];
    else {
      visited[nums[i]] = true;
      actual += nums[i];
    }
  }

  return [repeat, expected - actual];
};

describe("find error numbers", () => {
  it("should pass the first test", () => {
    expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3]);
  });

  it("should pass the second test", () => {
    expect(findErrorNums([1, 1])).toEqual([1, 2]);
  });
});