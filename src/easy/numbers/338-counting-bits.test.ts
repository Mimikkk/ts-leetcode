export {};

const countBits = (n: number): number[] => {
  const result = Array(n + 1).fill(0);

  for (let i = 0; i < result.length; i++) result[i] = result[i >> 1] + (i & 1);

  return result;
};

describe("338 - Counting Bits", () => {
  it("Case 1", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it("Case 2", () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});