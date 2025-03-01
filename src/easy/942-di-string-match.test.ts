import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const diStringMatch = (s: string): number[] => {
  let [first, last] = [0, s.length];

  let result = [];
  for (let char of s) {
    if (char === "I") result.push(first++);
    else if (char === "D") result.push(last--);
  }
  result.push(first);

  return result;
};

describe("di string match", () => {
  it("case 1", () => {
    expect(diStringMatch("IDID")).toEqual([0, 4, 1, 3, 2]);
  });

  it("case 2", () => {
    expect(diStringMatch("III")).toEqual([0, 1, 2, 3]);
  });

  it("case 3", () => {
    expect(diStringMatch("DDI")).toEqual([3, 2, 0, 1]);
  });
});