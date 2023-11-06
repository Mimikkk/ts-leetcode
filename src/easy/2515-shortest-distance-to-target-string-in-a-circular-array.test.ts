import { exercise } from "@shared/utilities/exercise";

const closetTarget = (words: string[], target: string, startIndex: number): number => {
  if (words[startIndex] === target) return 0;

  const traverse = (at: number, update: (n: number) => number) => {
    let moves = 0;
    let i = update(at);
    while (i !== startIndex) {
      ++moves;
      if (words[i] === target) return moves;
      i = update(i);
    }
  };

  const { length } = words;
  let a = traverse(startIndex, (i) => (i + 1) % length);
  let b = traverse(startIndex, (i) => (length + i - 1) % length);

  return a ? (b && a > b ? b : a) : -1;
};

exercise(closetTarget, [
  [[["hello", "i", "am", "leetcode", "hello"], "hello", 1], 1],
  [[["i", "am", "leetcode"], "leetcode", 0], 1],
  [[["i", "am", "wood"], "leetcode", 0], -1],
]);
