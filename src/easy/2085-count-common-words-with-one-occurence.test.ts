export {};

const createCounter = (words: string[]) => {
  const counter: Record<string, number> = {};
  words.forEach((w) => (counter[w] = (counter[w] || 0) + 1));
  return counter;
};

const countWords = (w1: string[], w2: string[]): number => {
  const [c1, c2] = [w1, w2].map(createCounter);

  const once = (w: string) => c1[w] === 1 && c2[w] === 1;
  return Object.keys(c1).filter(once).length;
};

describe("count words", () => {
  it("case 1", () => {
    expect(countWords(["a", "b", "c", "d", "a"], ["a", "b", "c"])).toEqual(2);
  });

  it("case 2", () => {
    expect(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"])).toEqual(0);
  });

  it("case 3", () => {
    expect(countWords(["a", "ab"], ["a", "a", "a", "ab"])).toEqual(1);
  });

  it("case 4", () => {
    expect(countWords(["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"])).toEqual(2);
  });
});