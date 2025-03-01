import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

const intToRoman = (n: number) => {
  let result = "";

  for (let i = 0; n; ++i) {
    while (n >= values[i]) (result += roman[i]), (n -= values[i]);
  }

  return result;
};

describe("int to roman", () => {
  it("case 1", () => {
    expect(intToRoman(3)).toBe("III");
  });

  it("case 2", () => {
    expect(intToRoman(4)).toBe("IV");
  });

  it("case 3", () => {
    expect(intToRoman(9)).toBe("IX");
  });

  it("case 4", () => {
    expect(intToRoman(58)).toBe("LVIII");
  });
});
