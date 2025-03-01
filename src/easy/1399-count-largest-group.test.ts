import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => start + i);
const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const sumDigits = (n: number): number => {
  let [sum, mod] = [0, 0];

  while (n > 0) ([n, mod] = divmod(n, 10)), (sum += mod);

  return sum;
};

const createCounter = (nums: number[]) => {
  const counter: Record<number, number> = {};
  nums.forEach((n) => (counter[n] = (counter[n] || 0) + 1));
  return counter;
};

const countLargestGroup = (n: number): number => {
  const numbers = createCounter(Object.values(createCounter(range(1, n + 1).map(sumDigits))));

  return numbers[Math.max(...Object.keys(numbers).map(Number))];
};

describe("count largest group", () => {
  it("case 1", () => {
    expect(countLargestGroup(13)).toBe(4);
  });

  it("case 2", () => {
    expect(countLargestGroup(2)).toBe(2);
  });
});
