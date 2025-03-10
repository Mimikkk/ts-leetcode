import { A } from "@shared/modules/arrays.ts";
import { R } from "@shared/modules/records.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const specialArray = (nums: number[]): number => {
  const counter = R.counter<number>(nums);

  return (
    A.N.range(0, nums.length + 1).find((n) => A.N.sum(R.values(R.filterByKey(counter, (count) => count >= n))) === n) ??
    -1
  );
};

describe("special array with x elements greater or equal to x", () => {
  it("case 1", () => {
    expect(specialArray([3, 5])).toBe(2);
    expect(specialArray([])).toBe(0);
    expect(specialArray([0, 0])).toBe(-1);
    expect(specialArray([0, 4, 3, 0, 4])).toBe(3);
    expect(specialArray([1])).toBe(1);
    expect(specialArray([2])).toBe(1);
  });
});
