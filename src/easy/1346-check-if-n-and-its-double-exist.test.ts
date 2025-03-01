import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const checkIfExist = (nums: number[]): boolean => {
  const doubles: Record<number, number> = {};
  for (let n of nums) {
    if (doubles[n * 2] || doubles[n / 2] || (n === 0 && doubles[0] === 0)) return true;
    doubles[n] = n;
  }

  return false;
};

describe("check if exists double check", () => {
  it("case 1", () => {
    expect(checkIfExist([10, 2, 5, 3])).toEqual(true);
  });

  it("case 2", () => {
    expect(checkIfExist([7, 1, 14, 11])).toEqual(true);
  });

  it("case 3", () => {
    expect(checkIfExist([3, 1, 7, 11])).toEqual(false);
  });

  it("case 4", () => {
    expect(checkIfExist([-2, 0, 10, -19, 4, 6, -8])).toEqual(false);
  });
});
