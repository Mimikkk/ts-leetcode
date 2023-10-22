import { R } from "@shared/modules";

const findKDistantIndices = (nums: number[], key: number, k: number) => {
  let indices = R.keys(R.filterByValue<number, number>(nums, (n) => n === key));

  return R.filterKeys<number, number>(nums, (index) => indices.some((i) => Math.abs(i - index) <= k));
};

describe("find k distance indices", () => {
  it("case 1", () => {
    expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("case 2", () => {
    expect(findKDistantIndices([2, 2, 2, 2, 2], 2, 2)).toEqual([0, 1, 2, 3, 4]);
  });
});
