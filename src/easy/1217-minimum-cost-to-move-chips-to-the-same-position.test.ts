export {};

const minCostToMoveChips = (position: number[]): number => {
  let [odd, even] = [0, 0];
  for (const p of position) p % 2 ? ++odd : ++even;
  return Math.min(even, odd);
};

describe("minCostToMoveChips", () => {
  it("case 1", () => {
    expect(minCostToMoveChips([1, 2, 3])).toEqual(1);
  });

  it("case 2", () => {
    expect(minCostToMoveChips([2, 2, 2, 3, 3])).toEqual(2);
  });

  it("case 3", () => {
    expect(minCostToMoveChips([1, 1000000000])).toEqual(1);
  });
});
