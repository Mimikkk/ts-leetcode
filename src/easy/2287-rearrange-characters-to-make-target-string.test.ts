import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { R } from "@shared/modules/records.ts";

const rearrangeCharacters = (s: string, target: string) => {
  const leftover = R.counter(s);

  return Math.min(...R.entries(R.counter(target)).map(([c, count]) => Math.floor((leftover[c] || 0) / count)));
};

describe("rearrangeCharacters", () => {
  it("case 1", () => {
    expect(rearrangeCharacters("ilovecodingonleetcode", "code")).toEqual(2);
  });
  it("case 2", () => {
    expect(rearrangeCharacters("abcba", "abc")).toEqual(1);
  });
  it("case 3", () => {
    expect(rearrangeCharacters("abbaccaddaeea", "aaaaa")).toEqual(1);
  });
});
