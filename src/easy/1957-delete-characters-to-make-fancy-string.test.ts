import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const makeFancyString = (s: string) => s.replace(/([a-z])\1\1+/g, "$1$1");

describe("make fancy", () => {
  it("case 1", () => {
    expect(makeFancyString("aaabbbcc")).toEqual("aabbcc");
  });
});
