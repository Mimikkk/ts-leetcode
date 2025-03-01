import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const toHex = (num: number): string => {
  const arr = "0123456789abcdef";

  if (num == 0) return "0";

  if (num < 0) num += Math.pow(2, 32);

  let res = "";
  let digit;
  while (num > 0) {
    [num, digit] = divmod(num, 16);
    res = arr[digit] + res;
  }
  return res;
};

describe("405. Convert a Number to Hexadecimal", () => {
  it("Case 1", () => {
    expect(toHex(26)).toEqual("1a");
  });

  it("Case 2", () => {
    expect(toHex(0)).toEqual("0");
  });

  it("Case 3", () => {
    expect(toHex(16)).toEqual("10");
  });

  it("Case 4", () => {
    expect(toHex(-1)).toEqual("ffffffff");
  });
});