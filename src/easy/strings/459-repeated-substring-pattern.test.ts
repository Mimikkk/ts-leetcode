export {};

const repeatedSubstringPattern = (s: string): boolean => {
  for (let i = 1; i < s.length; ++i) {
    if (s.substring(0, i).repeat(s.length / i) === s) return true;
  }

  return false;
};

describe(" repeated substring pattern", () => {
  it("has repeated", () => {
    expect(repeatedSubstringPattern("abab")).toEqual(true);
  });

  it("has not repeated", () => {
    expect(repeatedSubstringPattern("aba")).toEqual(false);
  });

  it("has repeated", () => {
    expect(repeatedSubstringPattern("abcabcabcabc")).toEqual(true);
  });
});