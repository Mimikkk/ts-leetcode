import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const array = (n: number, fill: number = 0) => new Array(n).fill(fill);
const distributeCandies = (candies: number, num_people: number): number[] => {
  const dp = array(num_people);

  let i = 0;
  let count = 1;
  while (candies > 0) {
    dp[i] += count;
    candies -= count;
    count = count + 1 < candies ? count + 1 : candies;
    i = (i + 1) % num_people;
  }

  return dp;
};

describe("distribute", () => {
  it("case 1", () => {
    expect(distributeCandies(7, 4)).toEqual([1, 2, 3, 1]);
  });

  it("case 2", () => {
    expect(distributeCandies(10, 3)).toEqual([5, 2, 3]);
  });
});