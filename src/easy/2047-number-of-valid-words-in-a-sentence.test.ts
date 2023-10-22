export {};

const isValidWord = (word: string) =>
  !!word.match(/^[a-z]+(-[a-z]+)?[.!,]?$|^[.!,]$/);

const countValidWords = (sentence: string) =>
  sentence.split(/ +/).filter(isValidWord).length;

describe("count valid words", () => {
  it("should return the number of valid words", () => {
    expect(countValidWords("i love you")).toBe(3);
    expect(countValidWords("i love y-ou.")).toBe(3);
    expect(countValidWords("i love y-o-u")).toBe(2);
    expect(countValidWords("!this  1-s b8d!")).toBe(0);
    expect(countValidWords("alice and  bob are playing stone-game10")).toBe(5);
    expect(countValidWords("! , .")).toBe(3);
  });
});