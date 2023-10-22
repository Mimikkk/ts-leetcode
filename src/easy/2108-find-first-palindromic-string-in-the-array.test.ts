export {};

const isPalindrome = (word: string) => word.split("").reverse().join("") === word;
const firstPalindrome = (words: string[]) => words.find(isPalindrome) || "";

describe("first palindrome", () => {
  it("should return the first palindrome", () => {
    expect(firstPalindrome(["a", "b", "c", "d", "e"])).toEqual("a");
    expect(firstPalindrome(["a"])).toEqual("a");
    expect(firstPalindrome([])).toEqual("");
  });
});