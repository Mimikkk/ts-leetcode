export {};

const isPalindrome = (s: string, l: number, r: number) => {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    ++l;
    --r;
  }
  return true;
};

const validPalindrome = (s: string) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    ++left;
    --right;
  }

  return true;
};

describe("valid palindrome ii", () => {
  it("case 1 - with one remove", () => {
    expect(validPalindrome("aba")).toBe(true);
  });

  it("case 2 - with one remove", () => {
    expect(validPalindrome("abca")).toBe(true);
  });

  it("case 3 - with one remove", () => {
    expect(validPalindrome("abc")).toBe(false);
  });
});
