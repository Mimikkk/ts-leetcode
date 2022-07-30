export {};

const maxRepeating = (sequence: string, word: string): number => {
  let count = 0;
  return count;
};

describe("maximum repeating substring", () => {
  it("case 1", () => {
    expect(maxRepeating("abab", "ab")).toBe(2);
  });

  it("case 2", () => {
    expect(maxRepeating("abab", "abab")).toBe(1);
  });

  it("case 3", () => {
    expect(maxRepeating("ababc", "ba")).toBe(1);
  });

  it("case 4", () => {
    expect(maxRepeating("ababc", "ac")).toBe(0);
  });

  it("case 5", () => {
    expect(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")).toBe(5);
  });
});
