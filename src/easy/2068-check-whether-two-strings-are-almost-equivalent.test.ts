import { R } from "@shared/modules";

const checkAlmostEquivalent = (word1: string, word2: string) => {
  const c1 = R.counter<string>(word1);
  const c2 = R.counter<string>(word2);

  return R.commonKeys(c1, c2)
    .map((key) => Math.abs((c2[key] || 0) - (c1[key] || 0)))
    .every((diff) => diff <= 3);
};

describe("check almost equivalent", () => {
  it("should return true", () => {
    expect(checkAlmostEquivalent("abc", "bcd")).toBe(true);
    expect(checkAlmostEquivalent("eeee", "bcd")).toBe(false);
    expect(checkAlmostEquivalent("abcdeef", "abaaacc")).toBe(true);
  });
});
