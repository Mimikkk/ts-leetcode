export {};

type Counter = Record<string, number>;
const add = (a: number, b: number) => a + b;
const sum = (args: number[]) => args.reduce(add, 0);

const createCounter = (s: string) => {
  const counter: Record<string, number> = {};
  for (const char of s) counter[char] = (counter[char] || 0) + 1;
  return counter;
};

const length = (s: string) => s.length;

const isSubset = (available: Counter, counter: Counter) =>
  Object.entries(counter).every(([char, count]) => available[char] >= count);

const isSubsetAdapter = (available: string) => (word: string) =>
  isSubset(createCounter(available), createCounter(word));

const countCharacters = (words: string[], chars: string) => sum(words.filter(isSubsetAdapter(chars)).map(length));

describe("create counter", () => {
  it("case 1", () => {
    expect(countCharacters(["hat", "cat", "at"], "cat")).toEqual(5);
  });

  it("case 2", () => {
    expect(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")).toEqual(10);
  });
});
