import { exercise } from "@shared/utilities/exercise";

const isCircularSentence = (sentence: string): boolean => {
  const words = sentence.split(" ");

  for (let i = 1; i < words.length; ++i) if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) return false;
  return words[0][0] === words[words.length - 1][words[words.length - 1].length - 1];
};

exercise(isCircularSentence, [
  [["leetcode eats soul"], true],
  [["happy leetcode"], false],
]);
