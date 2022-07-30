export {};

const maxRepeating = (sequence: string, word: string): number => {
  let max = 0;

  for (let i = 0; i < sequence.length; ++i) {
    let count = 0;

    here: for (let j = i; j < sequence.length; j += word.length) {
      if (j + word.length > sequence.length) break;

      for (let k = 0; k < word.length; ++k) {
        if (sequence[j + k] !== word[k]) break here;
      }

      if (++count > max) max = count;
    }
  }

  return max;
};

describe("maximum repeating substring", () => {
  it("case 1", () => {
    expect(maxRepeating("ababc", "ab")).toBe(2);
    expect(maxRepeating("ababab", "ab")).toBe(3);
    expect(maxRepeating("ababab", "a")).toBe(1);
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
