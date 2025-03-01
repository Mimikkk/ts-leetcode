import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const checkString = (s: string) => {
  let aOccured = false;
  let bOccured = false;

  return ![...s].some((c) => {
    if (c === "a") {
      aOccured = true;
      if (bOccured) return true;
    } else if (c === "b") {
      bOccured = true;
    }
  });
};

describe("check string", () => {
  it("test", () => {
    expect(checkString("aaabbb")).toEqual(true);
    expect(checkString("abab")).toEqual(false);
    expect(checkString("bbb")).toEqual(true);
  });
});