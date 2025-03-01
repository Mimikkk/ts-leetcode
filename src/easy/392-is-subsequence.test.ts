import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isSubsequence = (s: string, t: string): boolean => {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) ++i;
    ++j;
  }

  return i === s.length;
};

describe("isSubsequence", () => {
  it("#1", () => {
    expect(isSubsequence("abc", "ahbgdc")).toEqual(true);
  });

  it("#2", () => {
    expect(isSubsequence("axc", "ahbgdc")).toEqual(false);
  });

  it("#3", () => {
    expect(isSubsequence("", "ahbgdc")).toEqual(true);
  });

  it("#4", () => {
    expect(isSubsequence("abc", "")).toEqual(false);
  });

  it("#5", () => {
    expect(isSubsequence("", "")).toEqual(true);
  });
});