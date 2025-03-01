import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const backspaceCompare = (s: string, t: string) => {
  const applyBackspaces = (s: string) => {
    let stack = [];

    for (const char of s) {
      switch (char) {
        case "#":
          stack.pop();
          break;
        default:
          stack.push(char);
      }
    }

    return stack.join("");
  };

  return applyBackspaces(s) === applyBackspaces(t);
};

describe("backspaceCompare", () => {
  it("case 1", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toEqual(true);
  });

  it("case 2", () => {
    expect(backspaceCompare("ab##", "c#d#")).toEqual(true);
  });

  it("case 3", () => {
    expect(backspaceCompare("a#c", "b")).toEqual(false);
  });
});