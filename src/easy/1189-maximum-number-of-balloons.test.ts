import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (s: string) => {
  const counter: Record<string, number> = {};
  for (const char of s) counter[char] = (counter[char] || 0) + 1;
  return counter;
};
const balloon = createCounter("balloon");

const maxNumberOfBalloons = (text: string): number => {
  const counter = createCounter(text);

  let max = Infinity;
  Object.entries(balloon).forEach(([key, value]) => {
    max = Math.min(max, ~~(counter[key] / value));
  });

  return isNaN(max) ? 0 : max;
};

describe("max number of balloons", () => {
  it("case 1", () => {
    expect(maxNumberOfBalloons("nlaebolko")).toBe(1);
  });

  it("case 2", () => {
    expect(maxNumberOfBalloons("loonbalxballpoon")).toBe(2);
  });

  it("case 3", () => {
    expect(maxNumberOfBalloons("leetcode")).toBe(0);
  });

  it("case 3", () => {
    expect(maxNumberOfBalloons("balon")).toBe(0);
  });
});