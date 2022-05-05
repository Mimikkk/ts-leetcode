export {};

const createCounter = (words: string[]) => {
  const counter: Record<string, number> = {};
  for (const word of words) counter[word] = (counter[word] || 0) + 1;
  return counter;
};

const kth = (words: string[], k: number) => words[k - 1] || "";
const kthDistinct = (words: string[], k: number): string => {
  const c = createCounter(words);

  const once = (word: string) => c[word] === 1;
  return kth(words.filter(once), k);
};

describe("kth distinct", () => {
  it("case 1", () => {
    expect(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)).toEqual("a");
  });

  it("case 2", () => {
    expect(kthDistinct(["aaa", "aa", "a"], 1)).toEqual("aaa");
  });

  it("case 3", () => {
    expect(kthDistinct(["a", "b", "a"], 3)).toEqual("");
  });
});