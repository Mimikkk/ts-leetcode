import { expect } from "vitest";

export {};

const maximumOddBinaryNumber = (s: string): string => {
  const ones = [...s].filter((c) => c === "1").length;
  const zeros = s.length - ones;

  return "1".repeat(ones - 1) + "0".repeat(zeros) + "1".repeat(1);
};

describe("2864. Maximum Odd Binary Number", () => {
  it("case 1", () => {
    expect(maximumOddBinaryNumber("010")).toBe("001");
  });
  it("case 2", () => {
    expect(maximumOddBinaryNumber("0101")).toBe("1001");
  });
});
