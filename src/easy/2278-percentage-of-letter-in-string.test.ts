import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const percentageLetter = (s: string, letter: string) =>
  Math.floor(([...s].filter((c) => c === letter).length / s.length) * 100);

describe("percentageLetter", () => {
  it("case 1", () => {
    expect(percentageLetter("a", "a")).toEqual(100);
  });

  it("case 2", () => {
    expect(percentageLetter("a", "b")).toEqual(0);
  });

  it("case 3", () => {
    expect(percentageLetter("ab", "b")).toBeCloseTo(50, 2);
  });
});
