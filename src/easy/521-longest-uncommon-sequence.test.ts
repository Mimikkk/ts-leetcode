import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const findLUSlength = (a: string, b: string): number => (a === b ? -1 : Math.max(a.length, b.length));

describe("fin lus", () => {
  it("case 1", () => {
    expect(findLUSlength("aba", "cdc")).toEqual(3);
  });

  it("case 2", () => {
    expect(findLUSlength("aaa", "bbb")).toEqual(3);
  });

  it("case 2", () => {
    expect(findLUSlength("aaa", "abb")).toEqual(3);
  });

  it("case 3", () => {
    expect(findLUSlength("aaa", "aaa")).toEqual(-1);
  });

  it("case 4", () => {
    expect(findLUSlength("aefawfawfawfaw", "aefawfeawfwafwaef")).toEqual(17);
  });
});