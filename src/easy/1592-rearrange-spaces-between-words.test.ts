import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const countSpaces = (text: string) => text.replace(/[^ ]/g, "").length;
const createSpaces = (n: number) => " ".repeat(n);

const readWords = (text: string) => text.split(/ +/gi).filter(Boolean);
const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const reorderSpaces = (text: string): string => {
  const spaces = countSpaces(text);
  const words = readWords(text);
  if (words.length === 1) return `${words.join("")}${createSpaces(spaces)}`;
  const [spacesBetween, rest] = divmod(spaces, words.length - 1);

  return `${words.join(createSpaces(spacesBetween))}${createSpaces(rest)}`;
};

describe("rearange words", () => {
  it("case 1", () => {
    expect(reorderSpaces("a b c d e f")).toBe("a b c d e f");
  });

  it("case 2", () => {
    expect(reorderSpaces("  kya ")).toBe("kya   ");
  });

  it("case 3", () => {
    expect(reorderSpaces("  a b")).toBe("a   b");
    expect(reorderSpaces("  a  b")).toBe("a    b");
    expect(reorderSpaces("  a  b c")).toBe("a  b  c ");
  });
});
