export {};

const countPrefixes = (words: string[], s: string) =>
  words.filter((word) => s.startsWith(word)).length;

describe("count prefixes", () => {
  it("case 1", () => {
    expect(countPrefixes(["a", "b", "c"], "a")).toEqual(1);
  });
});
