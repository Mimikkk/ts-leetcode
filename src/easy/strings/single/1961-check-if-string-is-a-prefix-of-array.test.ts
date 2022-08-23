export {};

const isPrefixString = (s: string, words: string[]) => {
  let current = 0;
  for (const word of words) {
    for (const char of word) {
      if (s[current++] !== char) return false;
    }
    if (current === s.length) return true;
  }

  return false;
};

describe("is prefix string", () => {
  it("case 1", () => {
    expect(
      isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]),
    ).toBe(true);
  });
});