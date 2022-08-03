import { A } from "../../../shared/modules";
export {};

const countPairs = (nums: number[], k: number) =>
  A.count(A.pairs(nums), ([[a, i], [b, j]]) => a === b && (i * j) % k === 0);

describe("count pairs", () => {
  it("should return the number of pairs", () => {
    expect(countPairs([3, 1, 2, 2, 2, 1, 3], 2)).toBe(4);
  });
});
