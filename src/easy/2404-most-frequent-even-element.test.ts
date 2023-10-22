export {};

const badMostFrequentEven = (numbers: number[]): number => {
  const counters = Object.entries(
    numbers
      .filter(n => n % 2 === 0)
      .sort((a, b) => a - b)
      .reduce<Record<string, number>>((counters, n) => {
        counters[n] = (counters[n] ?? 0) + 1;
        return counters;
      }, {}))
  if (counters.length === 0) return -1;

  return +counters.reduce((first, second) => {
    if (!first) return second;
    const [number0, count0] = first;
    const [number1, count1] = second;
    if (count0 < count1 && +number0 < +number1) return second;
    return first;
  })[0];
};

// numer = 2;

const arena = <number[]>Array.from({length: 10e5 + 1}).fill(0);
const mostFrequentEven = (numbers: number[]): number => {
  let first = undefined;

  for (const number of numbers) {
    if (number & 1) continue;
    arena[number] += 1;
    if (first === undefined) first = number;
  }

  if (first === undefined) return -1;

  let mostFrequent = first;
  for (const number of new Set(numbers)) {
    const count0 = arena[number];
    const count1 = arena[mostFrequent];
    if (count0 > count1 || (count0 === count1 && number < mostFrequent)) mostFrequent = number;
  }

  return mostFrequent;
};

describe("2404 - most frequent even element", () => {
  beforeEach(() => {
    arena.fill(0);
  });

  it("case 1", () => {
    expect(badMostFrequentEven([0, 1, 2, 2, 4, 4, 1])).toEqual(2);
  });

  it("case 2", () => {
    expect(badMostFrequentEven([0, 1, 4, 4, 2, 2, 1])).toEqual(2);
  });

  it("case 3", () => {
    expect(badMostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])).toEqual(-1);
  });

  it("case 1 - a", () => {
    expect(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])).toEqual(2);
  });

  it("case 2 - a", () => {
    expect(mostFrequentEven([0, 1, 4, 4, 2, 2, 1])).toEqual(2);
  });

  it("case 3 - a", () => {
    expect(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])).toEqual(-1);
  });

  it.only("case 4 - a", () => {
    expect(mostFrequentEven([2, 10000, 10000, 10000, 2])).toEqual(10000);
  });
});
