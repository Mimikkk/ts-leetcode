import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const fillCups = (amount: number[]): number =>
  Math.max(Math.max(...amount), Math.floor((amount.reduce((a, b) => a + b) + 1) / 2));

describe("fill cups", () => {
  it("case 1", () => {
    expect(fillCups([1, 4, 2])).toEqual(4);
  });
  it("case 2", () => {
    expect(fillCups([1, 4, 2])).toEqual(4);
  });
});
