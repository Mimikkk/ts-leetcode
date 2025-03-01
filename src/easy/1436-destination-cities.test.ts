import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (s: string[][]) => {
  const counter: Record<string, number> = {};
  for (const [from, to] of s) {
    counter[from] = (counter[from] || 0) + 1;
    counter[to] = (counter[to] || 0) + 1;
  }

  return counter;
};
const second = (arr: string[]) => arr[1];

const destCity = (paths: string[][]): string => {
  const counter = createCounter(paths);

  return second(paths.find(([_, to]) => counter[to] == 1)!);
};

describe("destination city", () => {
  it("case 1", () => {
    expect(
      destCity([
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"],
      ]),
    ).toEqual("Sao Paulo");
  });

  it("case 2", () => {
    expect(
      destCity([
        ["B", "C"],
        ["D", "B"],
        ["C", "A"],
      ]),
    ).toEqual("A");
  });
});
