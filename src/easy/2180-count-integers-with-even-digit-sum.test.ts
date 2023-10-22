import { A } from "@shared/modules";
export {};

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const sumDigits = (n: number): number => {
  let [sum, mod] = [0, 0];

  while (n > 0) ([n, mod] = divmod(n, 10)), (sum += mod);

  return sum;
};

const isEven = (n: number) => n % 2 === 0;
const countEven = (num: number) => A.count(A.N.range(1, num).map(sumDigits), isEven);

describe("count even", () => {
  it("should return the number of even numbers", () => {
    expect(countEven(1)).toBe(0);
    expect(countEven(30)).toBe(14);
  });
});