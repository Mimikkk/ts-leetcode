import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const stringMatching = (words: string[]): string[] => {
  const res = new Set<string>();

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].includes(words[j])) res.add(words[j]);
      if (words[j].includes(words[i])) res.add(words[i]);
    }
  }
  return [...res];
};

describe("string matching in array", () => {
  it("case 1", () => {
    expect(stringMatching(["leetcode", "et", "code"])).toEqual(["et", "code"]);
  });

  it("case 2", () => {
    expect(stringMatching(["blue", "green", "bu"])).toEqual([]);
  });

  it("case 3", () => {
    expect(stringMatching(["mass", "as", "hero", "superhero"])).toEqual(["as", "hero"]);
  });

  it("case 4", () => {
    expect(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"])).toEqual(["leetcode", "od", "am"]);
  });
});
