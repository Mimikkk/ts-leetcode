export {};

type Domino = [number, number];
const toString = ([a, b]: Domino) => [a, b].sort().join("-");
const createCounter = (nums: string[]) => {
  const counter: Record<string, number> = {};
  nums.forEach(n => counter[n] = (counter[n] || 0) + 1);
  return counter;
};

const add = (a: number, b: number) => a + b;
const sum = (arr: number[]) => arr.reduce(add, 0);
const pairsCount = (n: number) => n * (n - 1) / 2;

const numEquivDominoPairs = (dominoes: Domino[]) =>
  sum(Object.values(createCounter(dominoes.map(toString))).map(pairsCount));

describe("Test", () => {
  it("case 1", () => {
    expect(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])).toEqual(1);
  });

  it("case 2", () => {
    expect(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]])).toEqual(3);
  });

  it("case 3", () => {
    expect(numEquivDominoPairs([])).toEqual(0);
  });
});