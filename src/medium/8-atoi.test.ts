import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const asCode = (char: string) => char.charCodeAt(0) - 48;

const enum Limit {
  Min = -2147483648,
  Max = 2147483647,
}
const enum Sign {
  Minus = -1,
  Plus = 1,
}

const myAtoi = (str: string) => {
  let i = 0;
  let sign = Sign.Plus;
  let num = 0;

  str = str.trim();

  if (str[i] == "-" || str[i] == "+") sign = str[i++] == "-" ? Sign.Minus : Sign.Plus;
  while (str[i] && asCode(str[i]) <= 9 && asCode(str[i]) >= 0) {
    num = num * 10 + asCode(str[i++]);
  }

  num *= sign;
  return num <= Limit.Min ? Limit.Min : num >= Limit.Max ? Limit.Max : num;
};

describe("atoi", () => {
  it("case 1", () => {
    expect(myAtoi("42")).toEqual(42);
  });

  it("case 2", () => {
    expect(myAtoi("   -42")).toEqual(-42);
  });

  it("case 3", () => {
    expect(myAtoi("4193 with words")).toEqual(4193);
  });

  it("case 4", () => {
    expect(myAtoi("words and 987")).toEqual(0);
  });
});
