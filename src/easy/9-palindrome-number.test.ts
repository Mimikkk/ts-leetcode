export {};

const isPalindrome = (n: number): boolean => [...`${n}`].join("") == [...`${n}`].reverse().join("");

describe("3 - palindrome number", () => {
  it("1 - 121", () => {
    expect(isPalindrome(121)).toEqual(true);
  });

  it("2 - 13", () => {
    expect(isPalindrome(13)).toEqual(false);
  });

  it("3 - 1", () => {
    expect(isPalindrome(1)).toEqual(true);
  });
});
