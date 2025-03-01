import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => i + start);

const unique = <T>(s: T[]) => [...new Set(s)];

const isUpperCase = (s: string) => s === s.toUpperCase();
const isLowerCase = (s: string) => s === s.toLowerCase();

const isNice = (s: string) => {
  const uppercase = new Set(s.match(/[A-Z]/g));
  const lowercase = new Set(s.match(/[a-z]/g));

  return ![...s].some(
    (char) =>
      (isUpperCase(char) && !lowercase.has(char.toLowerCase())) ||
      (isLowerCase(char) && !uppercase.has(char.toUpperCase())),
  );
};

const substrings = (s: string) =>
  unique(range(0, s.length).flatMap((x) => range(x, s.length).flatMap((y) => s.slice(x, y + 1))));

const first = (s: string[]) => s[0];
const lengthwise = (a: string, b: string) => b.length - a.length;
const longestNiceSubstring = (s: string) => first(substrings(s).filter(isNice).sort(lengthwise)) ?? "";

describe("nice sentence", () => {
  it("case 1", () => {
    expect(longestNiceSubstring("YazaAay")).toEqual("aAa");
  });

  it("case 2", () => {
    expect(longestNiceSubstring("Bb")).toEqual("Bb");
  });

  it("case 3", () => {
    expect(longestNiceSubstring("c")).toEqual("");
  });

  it("case 4", () => {
    expect(longestNiceSubstring("")).toEqual("");
  });
});