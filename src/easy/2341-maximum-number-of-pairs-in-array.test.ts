import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { A } from "@shared/modules/arrays.ts";
import { R } from "@shared/modules/records.ts";

const numberOfPairs = (nums: number[]): [number, number] => {
  const counter = R.counter(nums);

  const pairs = A.N.sum(R.values(counter).map((count) => Math.floor(count / 2)));

  return [pairs, nums.length - 2 * pairs];
};

describe("num of pairs", () => {
  it("case 1", () => {
    expect(numberOfPairs([1, 2, 3, 4, 5])).toEqual([0, 5]);
  });
  it("case 2", () => {
    expect(numberOfPairs([1, 2, 1, 2, 5])).toEqual([2, 1]);
  });
});
