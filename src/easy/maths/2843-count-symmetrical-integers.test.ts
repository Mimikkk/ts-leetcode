import { expect } from "vitest";

export {};

const isSymmetric = (s: string) => {
  const { length } = s;

  if (length % 2 === 1) return false;
  const half = length / 2;

  let sum = 0;
  for (let i = 0; i < half; i++) sum += +s[i];
  for (let i = half; i < length; i++) sum -= +s[i];
  return sum === 0;
};

const countSymmetricIntegers = (low: number, high: number): number => {
  let count = 0;
  for (let n = low; n <= high; ++n) if (isSymmetric(`${n}`)) ++count;
  return count;
};

describe("peak index in mountain array", () => {
  it("case 1", () => {
    expect(countSymmetricIntegers(0, 100)).toBe(9);
  });

  it("case 2", () => {
    expect(countSymmetricIntegers(1200, 1230)).toBe(4);
  });
});
