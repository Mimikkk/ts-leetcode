import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


interface Counter extends Record<number, number> {}

namespace Counter {
  export const create = (items: number[]) => {
    const counter: Record<number, number> = {};
    for (let item of items) counter[item] = (counter[item] || 0) + 1;
    return counter;
  };

  export const isEqual = (left: Counter, right: Counter) => {
    for (const key in left) {
      if (left[key] !== right[key]) return false;
    }
    for (const key in right) {
      if (left[key] !== right[key]) return false;
    }

    return true;
  };
}

const { isEqual, create } = Counter;
const canBeEqual = (left: number[], right: number[]) => isEqual(create(left), create(right));

describe("can be equal by reversing", () => {
  it("case 1", () => {
    expect(canBeEqual([1, 2, 3, 4], [4, 3, 2, 1])).toBeTruthy();
  });

  it("case 2", () => {
    expect(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])).toBeTruthy();
  });

  it("case 3", () => {
    expect(canBeEqual([7], [7])).toBeTruthy();
  });

  it("case 4", () => {
    expect(canBeEqual([1, 2, 3, 4], [4, 3, 2, 1, 5])).toBeFalsy();
  });

  it("case 5", () => {
    expect(canBeEqual([3, 7, 9], [3, 7, 11])).toBeFalsy();
  });
});
