import { expect } from "vitest";

export {};

const lastVisitedIntegers = (words: (`${number}` | "prev")[]): (number | -1)[] => {
  const result: number[] = [];
  const previous: number[] = [];
  let index = 0;

  for (const word of words) {
    if (word === "prev") {
      result.push(previous[--index] ?? -1);
    } else {
      previous.push(+word);
      index = previous.length;
    }
  }

  return result;
};

describe("2899 - Last visited integers", () => {
  it("case 1", () => {
    expect(lastVisitedIntegers(["1", "2", "prev", "prev", "prev"])).toEqual([2, 1, -1]);
  });

  it("case 2", () => {
    expect(lastVisitedIntegers(["1", "prev", "2", "prev", "prev"])).toEqual([1, 2, 1]);
  });
});
