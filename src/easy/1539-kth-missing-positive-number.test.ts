import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


function findKthPositive(arr: number[], k: number): number {
  let missing = 0;

  let next = 0;
  for (let i = 1; i < arr.at(-1)! + 1; i++) {
    if (i !== arr[next]) {
      ++missing;
      if (missing === k) return i;
    } else ++next;
  }

  return arr.at(-1)! + (k - missing);
}

describe("kth missing positive", () => {
  it("case 1", () => {
    expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
  });

  it("case 2", () => {
    expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);
  });
});