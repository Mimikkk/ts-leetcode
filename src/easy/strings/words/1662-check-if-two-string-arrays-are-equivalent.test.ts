export {};

const arrayStringsAreEqual = (word1: string[], word2: string[]) =>
  word1.join("") === word2.join("");

describe("check if equal", () => {
  it("should return true", () => {
    expect(arrayStringsAreEqual(["a", "b", "c"], ["a", "b", "c"])).toBe(true);
  });
});
