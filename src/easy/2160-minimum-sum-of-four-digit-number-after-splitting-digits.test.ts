import { A } from "@shared/modules";
export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const minimumSum = (num: number): number => {
  let numbers = [];

  let mod = 0;
  while (num > 0) {
    [num, mod] = divmod(num, 10);
    numbers.push(mod);
  }

  const sorted = numbers.sort(A.N.desc);
  return sorted[0] + sorted[1] + 10 * (sorted[2] + sorted[3]);
};

describe("min sum", () => {
  it("should return the minimum sum", () => {
    expect(minimumSum(1234)).toBe(37);
  });
});