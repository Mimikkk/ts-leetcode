import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const addDigits = (num: number): number => {
  let m = 0;
  while (num > 9) {
    let sum = 0;
    while (num > 0) {
      [num, m] = divmod(num, 10);
      sum += m;
    }
    num = sum;
  }

  return num;
};

describe("258 - add digits", () => {
  it("should return the sum of the digits of a number", () => {
    expect(addDigits(38)).toBe(2);
    expect(addDigits(0)).toBe(0);
    expect(addDigits(9)).toBe(9);
    expect(addDigits(123)).toBe(6);
    expect(addDigits(10)).toBe(1);
    expect(addDigits(19)).toBe(1);
    expect(addDigits(123456789)).toBe(9);
  });
});