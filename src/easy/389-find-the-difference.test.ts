import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const findTheDifference = (s: string, t: string): string => {
  const ss = [...s].sort();
  const ts = [...t].sort();

  const len = Math.max(ss.length, ts.length);
  for (let i = 0; i < len; i++) if (ss[i] !== ts[i]) return ts[i];

  return "";
};

describe("findTheDifference", () => {
  it("#1", () => {
    expect(findTheDifference("abcd", "abcde")).toEqual("e");
  });
});