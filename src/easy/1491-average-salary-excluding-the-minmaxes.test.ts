import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const average = (salary: number[]): number => {
  let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  let sum = 0;
  for (let i = 0; i < salary.length; ++i) {
    min = Math.min(min, salary[i]);
    max = Math.max(max, salary[i]);
    sum += salary[i];
  }

  return (sum - max - min) / (salary.length - 2);
};

describe("avg without max and min", () => {
  it("case 1", () => {
    expect(average([4000, 3000, 1000, 2000])).toBe(2500);
  });

  it("case 2", () => {
    expect(average([1000, 2000, 3000])).toBe(2000);
  });
});
