import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const countOdds = (low: number, high: number) => {
  const c = Math.round((high - low) / 2);

  return low % 2 === 1 && high % 2 === 1 ? c + 1 : c;
};

describe("count odd in interval", () => {
  it("case 1", () => {
    expect(countOdds(1, 7)).toBe(4);
  });

  it("case 2", () => {
    expect(countOdds(8, 10)).toBe(1);
  });
});