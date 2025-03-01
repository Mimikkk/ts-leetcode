import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const maxScore = (s: string): number => {
  let max = 0;
  let [leftOnes, rightZeros] = [s.split("1").length - 1, 0];

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") rightZeros++;
    else leftOnes--;

    max = Math.max(max, leftOnes + rightZeros);
  }

  return max;
};

describe("max score after split", () => {
  it("case 1", () => {
    expect(maxScore("011101")).toEqual(5);
  });

  it("case 2", () => {
    expect(maxScore("00111")).toEqual(5);
  });

  it("case 3", () => {
    expect(maxScore("1111")).toEqual(3);
  });

  it("case 4", () => {
    expect(maxScore("00")).toEqual(1);
  });
});
