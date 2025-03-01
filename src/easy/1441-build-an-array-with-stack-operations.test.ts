import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const enum Operation {
  Push = "Push",
  Pop = "Pop",
}

const buildArray = (target: number[], n: number): string[] => {
  const result: Operation[] = [];

  let current = 0;
  for (let i = 1; i < n + 1; ++i) {
    if (target[current] === i) {
      result.push(Operation.Push);
      if (++current === target.length) break;
    } else {
      result.push(Operation.Push);
      result.push(Operation.Pop);
    }
  }

  return result;
};

describe("build array with stack operations", () => {
  it("case 1", () => {
    expect(buildArray([1, 3], 3)).toEqual(["Push", "Push", "Pop", "Push"]);
  });

  it("case 2", () => {
    expect(buildArray([1, 2, 3], 3)).toEqual(["Push", "Push", "Push"]);
  });

  it("case 3", () => {
    expect(buildArray([1, 2], 4)).toEqual(["Push", "Push"]);
  });
});
