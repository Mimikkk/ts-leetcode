export {};

const isAlienSorted = (words: string[], order: string) => {
  for (let i = 1; i < words.length; ++i) {
    const len = Math.max(words[i - 1].length, words[i].length);

    for (let j = 0; j < len; ++j) {
      if (order.indexOf(words[i - 1][j]) < order.indexOf(words[i][j])) break;
      if (order.indexOf(words[i - 1][j]) !== order.indexOf(words[i][j])) return false;
    }
  }
  return true;
};

describe("is alien sorted", () => {
  it("case 1", () => {
    expect(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toEqual(true);
  });

  it("case 2", () => {
    expect(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")).toEqual(false);
  });

  it("case 3", () => {
    expect(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")).toEqual(false);
  });
});