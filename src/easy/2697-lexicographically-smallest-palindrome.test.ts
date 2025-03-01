import { exercise } from "@shared/utilities/exercise.ts";

const lexicallySmaller = (a: string, b: string): string => (a < b ? a : b);
const makeSmallestPalindrome = (s: string): string => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      const smaller = lexicallySmaller(s[left], s[right]);

      if (s[right] === smaller) {
        s = s.slice(0, left) + smaller + s.slice(left + 1);
      } else {
        s = s.slice(0, right) + smaller + s.slice(right + 1);
      }
    }

    ++left;
    --right;
  }

  return s;
};

exercise(makeSmallestPalindrome, [
  [["egcfe"], "efcfe"],
  [["abcd"], "abba"],
  [["seven"], "neven"],
]);
