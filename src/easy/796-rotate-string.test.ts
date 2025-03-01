import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const shift = (s: string) => s.slice(1) + s[0];
const rotateString = (s: string, goal: string): boolean => {
  if (s.length !== goal.length) return false;

  let shiftsLeft = s.length;
  while (shiftsLeft--) {
    if (s === goal) return true;
    s = shift(s);
  }

  return false;
};

describe("rotate string", () => {
  it("case 1", () => {
    expect(rotateString("abcde", "cdeab")).toBeTruthy();
  });

  it("case 2", () => {
    expect(rotateString("abcde", "abced")).toBeFalsy();
  });

  it("case 3", () => {
    expect(rotateString("abcde", "abcde")).toBeTruthy();
  });
});