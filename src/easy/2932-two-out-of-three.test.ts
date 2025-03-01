import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const common = (...arr: number[][]) => [...new Set(arr.flat())];

const twoOutOfThree = (n1: number[], n2: number[], n3: number[]) =>
  common(n1, n2, n3).filter((x) => +n1.includes(x) + +n2.includes(x) + +n3.includes(x) > 1);

describe("two out of three", () => {
  it("case 1", () => {
    expect(twoOutOfThree([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([2, 3, 4]);
  });
});