export {};

const createCounter = (s: string) => {
  const counter: Record<string, number> = {};
  for (const char of s) counter[char] = (counter[char] || 0) + 1;
  return counter;
};

const createArray = ([k, c]: [string, number]): string[] => Array(c).fill(k);

const commonChars = (words: string[]): string[] => {
  const counters = words.map(createCounter);

  const min = (k: string) => Math.min(...counters.map((c) => c[k]));
  const common = (k: string): [string, number] => [k, min(k) || 0];
  return Object.keys(counters[0]).map(common).flatMap(createArray);
};

describe("common chars", () => {
  it("case 1", () => {
    expect(commonChars(["bella", "label", "roller"])).toEqual(["e", "l", "l"]);
  });

  it("case 2", () => {
    expect(commonChars(["cool", "lock", "cook"])).toEqual(["c", "o"]);
  });
});
