import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const arraySign = (nums: number[]) => nums.reduce((a, b) => a * Math.sign(b), 1);

describe("array sign", () => {
  it("case 1", () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1);
  });
});