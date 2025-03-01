import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const summaryRanges = (nums: number[]): string[] => {
  const result = [];
  let [start, end] = [0, 0];

  while (end < nums.length) {
    while (nums[end + 1] - nums[end] === 1) ++end;

    if (start === end) result.push(`${nums[start]}`);
    else result.push(`${nums[start]}->${nums[end]}`);

    start = end + 1;
    end = start;
  }

  return result;
};

describe("228 - summary ranges", () => {
  it("should pass test case", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
  });

  it("should pass test case", () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
  });

  it("should pass test case", () => {
    expect(summaryRanges([0, 1, 2, 4, 6, 7, 8, 9])).toEqual(["0->2", "4", "6->9"]);
  });
});
