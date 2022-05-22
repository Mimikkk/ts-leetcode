export {};

const asc = (a: number, b: number) => a - b;

const targetIndices = (nums: number[], target: number): number[] =>
  nums.sort(asc)
      .map((x, i) => x === target ?i:-1)
      .filter(x => x !== -1);

describe("target indices", () => {
  it("case 1", () => {
    expect(targetIndices([1, 2, 5, 2, 3], 2)).toEqual([1, 2]);
  });

  it("case 2", () => {
    expect(targetIndices([1, 2, 5, 2, 3], 3)).toEqual([3]);
  });

  it("case 3", () => {
    expect(targetIndices([1, 2, 5, 2, 3], 5)).toEqual([4]);
  });
});