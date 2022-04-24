export {};

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const letters: Record<string, number> = {};

  for (const letter of magazine) letters[letter] = (letters[letter] || 0) + 1;
  for (const letter of ransomNote) if (!letters[letter]--) return false;

  return true;
};

describe("canConstruct", () => {
  it("Case 1", () => {
    expect(canConstruct("a", "b")).toBe(false);
  });

  it("Case 2", () => {
    expect(canConstruct("aa", "ab")).toBe(false);
  });

  it("Case 3", () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
});