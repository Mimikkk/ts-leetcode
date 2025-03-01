import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => i + start);

const findOcurrences = (text: string, first: string, second: string): string[] => {
  const words = text.split(" ");

  return range(0, words.length - 2)
    .map((i) => words.slice(i, i + 3))
    .filter(([a, b]) => a === first && b === second)
    .map(([, , c]) => c);
};

describe("find occurences", () => {
  it("case 1", () => {
    expect(findOcurrences("alice is a good girl she is a good student", "a", "good")).toEqual(["girl", "student"]);
  });
});
