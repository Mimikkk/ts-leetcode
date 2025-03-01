import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isLongPressedName = (name: string, typed: string): boolean => {
  let [i, j] = [0, 0];
  while (j < typed.length) {
    if (i < name.length && name[i] === typed[j]) ++i;
    else if (typed[j] !== typed[j - 1]) return false;
    ++j;
  }

  return i === name.length;
};

describe("is long pressed name", () => {
  it("should pass", () => {
    expect(isLongPressedName("alex", "aaleex")).toEqual(true);
  });

  it("should pass", () => {
    expect(isLongPressedName("leelee", "lleeelee")).toEqual(true);
  });

  it("should pass", () => {
    expect(isLongPressedName("saeed", "ssaaedd")).toEqual(false);
  });

  it("should pass", () => {
    expect(isLongPressedName("laiden", "laiden")).toEqual(true);
  });

  it("should pass", () => {
    expect(isLongPressedName("alex", "aaleexa")).toEqual(false);
  });
});