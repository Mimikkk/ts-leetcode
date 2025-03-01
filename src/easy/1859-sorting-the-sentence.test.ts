import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const sortSentence = (s: string) =>
  [...s.matchAll(/(([a-z]+?)(\d+))/gi)]
    .map(([, , word, order]) => [word, +order] as [string, number])
    .sort(([, a], [, b]) => a - b)
    .map(([v]) => v)
    .join(" ");

describe("sort sentences", () => {
  it("case 1", () => {
    expect(sortSentence("is2 sentence4 This1 a3")).toBe("This is a sentence");
  });
  it("case 2", () => {
    expect(sortSentence("Myself2 Me1 I4 and3")).toBe("Me Myself and I");
  });
});
