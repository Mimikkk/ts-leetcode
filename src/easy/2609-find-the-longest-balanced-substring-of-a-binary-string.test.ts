import { exercise } from "@shared/utilities/exercise";

const findTheLongestBalancedSubstring = (s: string): number => {
  let left = 0;
  let longest = 0;

  outer: while (left < s.length - 1) {
    if (s[left] === "1") {
      ++left;
      continue;
    }

    let k = left + 1;

    let ones = 0;
    let zeros = 0;
    while (k < s.length - 1) {
      console.log(left, s[k], k, zeros, ones);
      const isOne = s[k] === "1";

      if (isOne) {
        if (zeros) {
          ++ones;
          left = k + 1;
          continue outer;
        } else ++ones;
      } else ++zeros;

      ++k;
    }

    ++left;
  }

  return longest;
};

exercise(findTheLongestBalancedSubstring, [
  [["01000111"], 6],
  [["01000111000"], 6],
  [["00111"], 4],
  [["111"], 0],
]);
