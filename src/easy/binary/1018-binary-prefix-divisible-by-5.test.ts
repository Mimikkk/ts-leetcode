export {};

const prefixesDivBy5 = (nums: number[], acc = 0) =>
  nums.map((n) => !(acc = ((acc << 1) + n) % 5));

describe("prefixes divisible by 5", () => {
  it('case 1', () => {
    expect(prefixesDivBy5([0, 1, 1])).toEqual([true, false, false]);
  });
});
