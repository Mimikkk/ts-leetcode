import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const asc = (a: number, b: number) => a - b;

const arrayRankTransform = (arr: number[]): number[] => {
  const sorted = [...new Set(arr)].sort(asc);

  const map: Record<number, number> = {};
  sorted.forEach((x, i) => (map[x] = i + 1));

  return arr.map((n) => map[n]);
};

describe("rank transform of an array", () => {
  it("case 1", () => {
    expect(arrayRankTransform([40, 10, 20, 30])).toEqual([4, 1, 2, 3]);
  });

  it("case 2", () => {
    expect(arrayRankTransform([100, 100, 100])).toEqual([1, 1, 1]);
  });

  it("case 3", () => {
    expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])).toEqual([5, 3, 4, 2, 8, 6, 7, 1, 3]);
  });
});
