import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const desc = (a: number, b: number) => b - a;

const lastStoneWeight = (stones: number[]): number => {
  while (stones.sort(desc).length > 1) {
    const [a, b] = stones.splice(0, 2);
    if (a !== b) stones.push(a - b);
  }

  return stones[0] || 0;
};

describe("last stone weight", () => {
  it("case 1", () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  it("case 2", () => {
    expect(lastStoneWeight([1])).toBe(1);
  });
});