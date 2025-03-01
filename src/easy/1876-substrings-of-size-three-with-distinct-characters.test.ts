import { A } from "@shared/modules/arrays.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const countGoodSubstrings = (s: string) =>
  A.subarrays([...s])
    .filter((s) => s.length === 3)
    .map(A.unique)
    .filter((s) => s.length === 3).length;

describe("count good substr", () => {
  it("case 1", () => {
    expect(countGoodSubstrings("xyzzaz")).toBe(1);
  });
  it("case 2", () => {
    expect(countGoodSubstrings("aababcabc")).toBe(4);
  });
});
