export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const sumBase = (n: number, k: number): number => {
  let sum = 0;

  let mod;
  while (n > 0) {
    [n, mod] = divmod(n, k);
    sum += mod;
  }

  return sum;
};

describe("sum of digits of base k", () => {
  it("case 1", () => {
    expect(sumBase(34, 6)).toBe(9);
  });

  it("case 2", () => {
    expect(sumBase(10, 10)).toBe(1);
  });
});
