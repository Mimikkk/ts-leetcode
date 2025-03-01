import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const longestCommonPrefix = (strs: string[]): string => {
  const first = strs[0];

  const index = [...first].findIndex((c1, i) => strs.map((s) => s[i]).some((c2) => c1 !== c2));
  return index !== -1 ? first.slice(0, index) : first;
};

describe("14 - longest common prefix", () => {
  it("should return the longest common prefix", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  });

  it("should return the longest common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  });

  it("should return the longest common prefix", () => {
    expect(longestCommonPrefix(["c", "c"])).toEqual("c");
  });

  it("should return the longest common prefix", () => {
    expect(longestCommonPrefix(["aa", "a"])).toEqual("a");
  });
});
