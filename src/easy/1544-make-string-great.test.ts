import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const isSame = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

const makeGood = (s: string): string => {
  const stack = [""];

  for (let c of s) {
    let top = stack.at(-1)!;

    if (isSame(top, c) && top !== c) stack.pop();
    else stack.push(c);
  }
  return stack.join("");
};

describe("make string good", () => {
  it("case 1", () => {
    expect(makeGood("leEeetcode")).toEqual("leetcode");
  });

  it("case 2", () => {
    expect(makeGood("abBAcC")).toEqual("");
  });

  it("case 3", () => {
    expect(makeGood("mC")).toEqual("mC");
  });
});
