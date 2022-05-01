export {};

const isPalindrome = (s: string): boolean => {
  s = s.toLowerCase().replace(/[^A-Za-z0-9]+/g, '');

  return s.split('').reverse().join('') === s;
};

describe("125 - valid palindrome", () => {
  it("can be implemented", () => {
    expect(isPalindrome("A")).toBe(true);
  });

  it("is case insensitive", () => {
    expect(isPalindrome("Aa")).toBe(true);
  });
});
