import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const areAlmostEqual = (s1: string, s2: string) => {
  if (s1 === s2) return true;

  const a1 = s1.split("").sort();
  const a2 = s2.split("").sort();

  if (!a1.every((c, i) => c === a2[i])) return false;

  const difference = s1.split("").filter((c, i) => c !== s2[i]).length;

  return difference <= 2;
};

describe("are almost equal", () => {
  it("case 1", () => {
    expect(areAlmostEqual("a", "a")).toBe(true);
    expect(areAlmostEqual("ba", "ab")).toBe(true);
  });
});
