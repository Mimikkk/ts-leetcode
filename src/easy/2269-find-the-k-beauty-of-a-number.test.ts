import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const divisorSubstrings = (num: number, k: number) =>
  [...`${num}`].reduce((acc, digit, i, digits) => {
    if (i + k > digits.length) return acc;

    const n = +digits.slice(i, i + k).join("");
    return !n || num % n !== 0 ? acc : acc + 1;
  }, 0);

describe("divisorSubstrings", () => {
  it("case 1", () => {
    expect(divisorSubstrings(240, 2)).toEqual(2);
  });

  it("case 2", () => {
    expect(divisorSubstrings(430043, 2)).toEqual(2);
  });

  it("case 3", () => {
    expect(divisorSubstrings(1, 1)).toEqual(1);
  });

  it("case 4", () => {
    expect(divisorSubstrings(30003, 3)).toEqual(1);
  });

  it("case 5", () => {
    expect(divisorSubstrings(1020102, 2)).toEqual(3);
  });
});