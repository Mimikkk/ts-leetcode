import { exercise } from "@shared/utilities/exercise.js";

const findTheLongestBalancedSubstring = (s: string): number => {
  const n = s.length;

  let longest = 0;
  for (let i = 0; i < n; ++i) {
    if (s[i] === "1") continue;
    for (let j = i + 1; j < n; ++j) {
      if (s[j] === "0") continue;
      let zeroCount = 0;
      let oneCount = 0;

      let k = i - 1;
      while (s[++k] === "0") ++zeroCount;
      while (s[k++] === "1") if (++oneCount === zeroCount) break;

      const length = oneCount * 2;
      if (length > longest) longest = length;
    }
  }

  return longest;
};

exercise(findTheLongestBalancedSubstring, [
  [["01000111"], 6],
  [["01000111000"], 6],
  [["00111"], 4],
  [["111"], 0],
  [["001"], 2],
]);
