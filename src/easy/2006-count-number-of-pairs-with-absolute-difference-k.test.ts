import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { A } from "@shared/modules/arrays.ts";

const hasAbsoluteDifferenceK =
  (k: number) =>
  ([a, b]: A.Pair<number>) =>
    Math.abs(a - b) === k;

const countKDifference = (nums: number[], k: number): number =>
  A.count(
    A.pairs(nums).map(([[a], [b]]): A.Pair<number> => [a, b]),
    hasAbsoluteDifferenceK(k),
  );

describe("count with absolute diff of k", () => {
  it("should return the correct count", () => {
    expect(countKDifference([1, 2, 2, 1], 1)).toBe(4);
  });
});
