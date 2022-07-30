export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const totalMoney = (n: number): number => {
  const [weeks, days] = divmod(n, 7);

  return ((49 + 7 * weeks) * weeks) / 2 + ((2 * weeks + days + 1) * days) / 2;
};

describe("total leetcode money", () => {
  it("case 1", () => {
    expect(totalMoney(4)).toBe(10);
  });

  it("case 2", () => {
    expect(totalMoney(10)).toBe(37);
  });

  it("case 3", () => {
    expect(totalMoney(20)).toBe(96);
  });
});
