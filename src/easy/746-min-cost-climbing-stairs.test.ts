import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const minCostClimbingStairs = (costs: number[]): number => {
  let [f1, f2] = [0, 0];

  for (const cost of costs.reverse()) [f2, f1] = [f1, Math.min(f1, f2) + cost];

  return Math.min(f1, f2);
};

describe("minCostClimbingStairs", () => {
  it("case 1", () => {
    expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
  });

  it("case 2", () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6);
  });
});
