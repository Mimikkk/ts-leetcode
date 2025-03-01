import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const next = (arr: number[], i: number): number => {
  if (i % 2 === 0) return arr[i / 2];
  return arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1];
};
const getMaximumGenerated = (n: number): number => {
  if (n < 2) return n;
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) arr.push(next(arr, i));

  return Math.max(...arr);
};

describe("get maximum generated", () => {
  it("should return the maximum generated", () => {
    expect(getMaximumGenerated(7)).toBe(3);
    expect(getMaximumGenerated(2)).toBe(1);
    expect(getMaximumGenerated(3)).toBe(2);
  });
});
