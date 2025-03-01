import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const sortString = (s: string) => {
  s = s.split("").sort().join("");

  let result = "";
  while (s.length) {
    result += s.match(/([a-z])(?!\1)/gi)!.join("");
    s = s.replace(/([a-z])(?!\1)/gi, "");
    result += (s.match(/([a-z])(?!\1)/gi) || []).reverse().join("");
    s = s.replace(/([a-z])(?!\1)/gi, "");
  }
  return result;
};

describe("sort string", () => {
  it("case 1", () => {
    expect(sortString("aaaabbbbcccc")).toBe("abccbaabccba");
  });

  it("case 2", () => {
    expect(sortString("rat")).toBe("art");
  });
});