import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (s: string) => {
  const counter: Record<string, number> = {};
  for (const char of s) counter[char] = (counter[char] || 0) + 1;
  return counter;
};

const numJewelsInStones = (jewels: string, stones: string): number => {
  const stoneCounter = createCounter(stones);
  return [...jewels].reduce((acc, char) => acc + (stoneCounter[char] || 0), 0);
};

describe("jewels and stones", () => {
  it("should pass", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3);
  });

  it("should pass", () => {
    expect(numJewelsInStones("z", "ZZ")).toEqual(0);
  });
});