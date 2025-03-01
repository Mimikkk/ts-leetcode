import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const sum = (arr: number[]) => arr.reduce((a, b) => a + b) ?? NaN;
const fairCandySwap = (aliceSizes: number[], bobSizes: number[]): number[] => {
  const aliceSum = sum(aliceSizes);
  const bobSum = sum(bobSizes);

  const diff = (aliceSum - bobSum) / 2;
  for (let a of aliceSizes) {
    for (let b of bobSizes) {
      if (a !== b && a - b === diff) return [a, b];
    }
  }
  return [];
};

describe("fair candy swap", () => {
  it("case 1", () => {
    expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);
  });

  it("case 2", () => {
    expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);
  });

  it("case 3", () => {
    expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);
  });
});