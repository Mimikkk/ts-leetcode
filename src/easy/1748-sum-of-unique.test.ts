import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const sumOfUnique = (nums: number[]): number => {
  const unique = new Set<number>(nums);
  const visited = new Set<number>();

  for (const num of nums) {
    if (visited.has(num)) {
      unique.delete(num);
    } else visited.add(num);
  }

  return [...unique].reduce((acc, curr) => acc + curr, 0);
};

describe("sum of unique", () => {
  it("case 1", () => {
    expect(sumOfUnique([1, 2, 3, 1])).toEqual(5);
  });

  it("case 2", () => {
    expect(sumOfUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
  });

  it("case 3", () => {
    expect(sumOfUnique([2, 2, 2, 2])).toEqual(0);
  });
});