import { A, R } from "@shared/modules";

const frequencySort = (nums: number[]): number[] => {
  const frequencies = R.counter<number>(nums);

  return A.sorted(
    nums,
    (a, b) => A.N.asc(frequencies[a], frequencies[b]) || A.N.desc(a, b),
  );
};

describe("frequency sort", () => {
  it("case 1", () => {
    expect(frequencySort([1, 1, 2, 2, 2, 3])).toEqual([3, 1, 1, 2, 2, 2]);
  });

  it("case 2", () => {
    expect(frequencySort([2, 3, 1, 3, 2])).toEqual([1, 3, 3, 2, 2]);
  });

  it("case 3", () => {
    expect(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])).toEqual([
      5, -1, 4, 4, -6, -6, 1, 1, 1,
    ]);
  });
});
