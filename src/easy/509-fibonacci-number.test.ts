import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const fib = (n: number): number => {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
};

describe("fib", () => {
  it("4", () => {
    expect(fib(4)).toEqual(3);
  });

  it("10", () => {
    expect(fib(10)).toEqual(55);
  });

  it("28", () => {
    expect(fib(28)).toEqual(317811);
  });
});