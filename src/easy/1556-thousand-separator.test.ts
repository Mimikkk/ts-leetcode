import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const thousandSeparator = (n: number): string =>
  n
    .toString()
    .split("")
    .reverse()
    .reduce<string[]>((acc, next, i) => {
      if (i % 3 === 0 && i !== 0) acc.push(".");
      acc.push(next);
      return acc;
    }, [])
    .reverse()
    .join("");

describe("thousandSeparator", () => {
  it("should return correct result", () => {
    expect(thousandSeparator(123456789)).toEqual("123.456.789");
    expect(thousandSeparator(123)).toEqual("123");
    expect(thousandSeparator(1234)).toEqual("1.234");
    expect(thousandSeparator(12345)).toEqual("12.345");
    expect(thousandSeparator(123456)).toEqual("123.456");
    expect(thousandSeparator(1234567)).toEqual("1.234.567");
    expect(thousandSeparator(12345678)).toEqual("12.345.678");
    expect(thousandSeparator(123456789)).toEqual("123.456.789");
    expect(thousandSeparator(1234567890)).toEqual("1.234.567.890");
  });
});