import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const numOfStrings = (patterns: string[], word: string) => patterns.filter((pattern) => word.includes(pattern)).length;

describe("num of strings", () => {
  it("case 1", () => {
    expect(numOfStrings(["a", "abc", "bc", "d"], "abc")).toEqual(3);
  });
  it("case 2", () => {
    expect(numOfStrings(["a", "b", "c"], "aaaaabbbbb")).toEqual(2);
  });
  it("case 3", () => {
    expect(numOfStrings(["a", "a", "a"], "ab")).toEqual(3);
  });
});
