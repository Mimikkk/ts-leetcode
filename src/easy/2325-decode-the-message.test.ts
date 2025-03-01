import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const decodeMessage = (key: string, message: string): string => {
  const unique = [...new Set(key.split(" ").join(""))];
  const translator: Record<string, string> = {};

  for (let i = 0; i < 26; ++i) {
    translator[unique[i]] = String.fromCharCode(i + 97);
  }

  return [...message].map((c) => translator[c] || c).join("");
};

describe("decode message", () => {
  it("case 1", () => {
    expect(decodeMessage("cba", "abc")).toEqual("cba");
  });
  it("case 2", () => {
    expect(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")).toEqual(
      "this is a secret",
    );
  });
});