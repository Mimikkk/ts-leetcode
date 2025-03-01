import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const countAsterisks = (s: string) => s.replace(/[^|*]/g, "").replace(/\|.*?\|/g, "").length;

describe("count asterisks", () => {
  it("case 1", () => {
    expect(countAsterisks("|*|*||")).toEqual(1);
  });
});