import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const code = (char: string): number => char.charCodeAt(0);
const nextSafeChar = (char?: string) => (char && char !== "?" ? nextChar(char) : "a");
const nextChar = (char: string) => String.fromCharCode(((code(char) - code("a") + 1) % 26) + code("a"));

const modifyString = (s: string) => {
  let result = [...s];

  result.forEach((char, i) => {
    if (char !== "?") return;
    if (i === 0) result[i] = nextSafeChar(result[i + 1]);
    else if (i === result.length - 1) result[i] = nextSafeChar(result[i - 1]);
    else {
      let next = nextChar(result[i - 1]);
      while (next === result[i + 1]) next = nextChar(next);
      result[i] = next;
    }
  });

  return result.join("");
};

describe("replace question marks", () => {
  it("should return correct result", () => {
    expect(nextChar("a")).toBe("b");
    expect(nextChar("z")).toBe("a");
    expect(modifyString("?")).toEqual("a");
    expect(modifyString("?zs")).toEqual("azs");
    expect(modifyString("ubx?w")).toEqual("ubxyw");
    expect(modifyString("uba?a")).toEqual("ubaba");
    expect(modifyString("j?qg??b")).toEqual("jkqghib");
    expect(modifyString("??yw?ipkj?")).toEqual("abywxipkjk");
    expect(modifyString("??bw?ipkj?")).toEqual("acbwxipkjk");
  });
});
