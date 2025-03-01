import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const largestOddNumber = (num: string) => {
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] & 1) return num.substring(0, i + 1);
  }
  return "";
};

describe("largest odd number", () => {
  it("case 1", () => {
    expect(largestOddNumber("52")).toBe("5");
  });
  it("case 2", () => {
    expect(largestOddNumber("4206")).toBe("");
  });
  it("case 3", () => {
    expect(largestOddNumber("35427")).toBe("35427");
  });
  it("case 4", () => {
    expect(largestOddNumber("523")).toBe("523");
  });
  it("case 4", () => {
    expect(largestOddNumber("5232525")).toBe("5232525");
  });
});
