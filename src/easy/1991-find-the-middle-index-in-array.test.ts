import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const zip = (a: number[], b: number[]): [number, number][] => a.map((x, i) => [x, b[i]]);
const prefixsum = (nums: number[]) => {
  let sum = 0;
  return nums.map((n) => (sum += n));
};
const equal = ([a, b]: [number, number]) => a === b;

const findMiddleIndex = (nums: number[]): number =>
  zip(prefixsum(nums), prefixsum(nums.reverse()).reverse()).findIndex(equal);

describe("find middle index", () => {
  it("case 1", () => {
    expect(findMiddleIndex([2, 3, -1, 8, 4])).toEqual(3);
  });

  it("case 2", () => {
    expect(findMiddleIndex([1, -1, 4])).toEqual(2);
  });

  it("case 3", () => {
    expect(findMiddleIndex([2, 5])).toEqual(-1);
  });
});