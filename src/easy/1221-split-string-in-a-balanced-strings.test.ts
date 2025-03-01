import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const balancedStringSplit = (s: string): number => {
  let count = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") left++;
    else right++;

    if (left === right) {
      left = 0;
      right = 0;
      ++count;
    }
  }
  return count;
};

describe("balanced string split", () => {
  it("case 1", () => {
    expect(balancedStringSplit("RLRRLLRLRL")).toEqual(4);
  });

  it("case 2", () => {
    expect(balancedStringSplit("RLLLLRRRLR")).toEqual(3);
  });

  it("case 3", () => {
    expect(balancedStringSplit("LLLLRRRR")).toEqual(1);
  });
});
