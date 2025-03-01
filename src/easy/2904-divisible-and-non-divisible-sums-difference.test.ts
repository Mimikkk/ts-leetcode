import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const differenceOfSums = (n: number, m: number): number => {
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i <= n; ++i) if (i % m === 0) sum -= 2 * i;

  return sum;
};

describe("2899 - Last visited integers", () => {
  it("case 1", () => {
    expect(differenceOfSums(10, 3)).toEqual(19);
  });

  it("case 2", () => {
    expect(differenceOfSums(5, 6)).toEqual(15);
  });
});
