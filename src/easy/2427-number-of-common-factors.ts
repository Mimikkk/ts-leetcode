export {};

const commonFactors = (a: number, b: number): number => {
  [a, b] = a > b ? [a, b] : [b, a];

  let count = 1;
  for (let n = 2; n <= a; ++n) if (a % n === 0 && b % n === 0) ++count;

  return count;
};

describe("2427", () => {
  it("case 1", () => {
    expect(commonFactors(2, 2)).toBe(2);
  });
});
