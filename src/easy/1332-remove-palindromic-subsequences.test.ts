import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const removePalindromeSub = (s: string) => (!s.length ? 0 : s === [...s].reverse().join("") ? 1 : 2);

describe("remove palindromic subsequences", () => {
  it("case 1", () => {
    expect(removePalindromeSub("ababa")).toBe(1);
  });
});