export {};

const countConsistentStrings = (allowed: string, words: string[]): number =>
  words.map((word) => word.split("")).filter((word) => !word.filter((c) => !allowed.includes(c)).length).length;

describe("count consistent strings", () => {
  it("case 1", () => {
    expect(countConsistentStrings("abc", ["a", "b", "c"])).toBe(3);
  });
});
