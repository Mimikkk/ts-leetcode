import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


namespace S {
  export const reverse = (word: string) => word.split("").reverse().join("");
}

const reversePrefix = (word: string, ch: string): string => {
  let i = 0;
  while (word[i++] !== ch && i <= word.length);
  if (i > word.length) return word;

  return S.reverse(word.substring(0, i)) + word.substring(i);
};

describe("reversePrefix", () => {
  it("should return the correct value", () => {
    expect(reversePrefix("abcdefd", "d")).toBe("dcbaefd");
    expect(reversePrefix("abcd", "d")).toBe("dcba");
    expect(reversePrefix("abcdefd", "g")).toBe("abcdefd");
    expect(reversePrefix("abcd", "z")).toBe("abcd");
    expect(reversePrefix("rzwuktxcjfpamlonbgyieqdvhs", "s")).toBe("shvdqeiygbnolmapfjcxtkuwzr");
  });
});