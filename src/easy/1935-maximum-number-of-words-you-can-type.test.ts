export {};

const canBeTypedWords = (text: string, brokenLetters: string) => {
  const regexp = new RegExp(`[${brokenLetters}]`);
  const words = text.split(" ");

  return words.length - words.filter((x) => regexp.test(x)).length;
};

describe("can be typed words", () => {
  it("case 1", () => {
    expect(canBeTypedWords("hello world", "d")).toBe(1);
  });
});