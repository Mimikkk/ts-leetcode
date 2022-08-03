import { A } from "shared/modules";
import Pair = A.Pair;

const hasAbsoluteDifferenceK =
  (k: number) =>
  ([a, b]: A.Pair<number>) =>
    Math.abs(a - b) === k;

const countKDifference = (nums: number[], k: number): number =>
  A.count(
    A.pairs(nums).map(([[a], [b]]): Pair<number> => [a, b]),
    hasAbsoluteDifferenceK(k),
  );

describe("count with absolute diff of k", () => {
  it("should return the correct count", () => {
    expect(countKDifference([1, 2, 2, 1], 1)).toBe(4);
  });
});
