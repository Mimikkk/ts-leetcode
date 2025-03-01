import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const repeatedCharacter = (s: string): string => {
  const seen = new Set<string>();

  for (const c of s) {
    if (seen.has(c)) return c;
    seen.add(c);
  }

  return "";
};

describe("first repeat", () => {
  it("case 1", () => {
    expect(repeatedCharacter("abacabad")).toBe("a");
  });
  it("case 2", () => {
    expect(repeatedCharacter("abacabaabacaba")).toBe("a");
  });
  it("case 3", () => {
    expect(repeatedCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe")).toBe("i");
  });
  it("case 4", () => {
    expect(repeatedCharacter("bcccccccb")).toBe("c");
  });
});