import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const addToArrayForm = (num: number[], k: number) => {
  let mod;
  const result = [];
  while (k > 0 || num.length) {
    [k, mod] = divmod((num.pop() || 0) + k, 10);
    result.push(mod);
  }

  return result.reverse();
};

describe("add to array form", () => {
  it("case 1", () => {
    expect(addToArrayForm([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4]);
  });

  it("case 2", () => {
    expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5]);
  });

  it("case 3", () => {
    expect(addToArrayForm([0], 181)).toEqual([1, 8, 1]);
  });

  it("case 4", () => {
    expect(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});