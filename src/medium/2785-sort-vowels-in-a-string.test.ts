import { exercise } from "@shared/utilities/exercise.js";

const vowelRegex = /[aeiou]/i;
const isVowel = (char: string): boolean => vowelRegex.test(char);

const sortVowels = (s: string): string => {
  const arr = [...s];

  const vowelsIndices = <number[]>arr.map((char, i) => (isVowel(char) ? i : null)).filter((i) => i !== null);
  const sortedVowels = vowelsIndices.map((i) => arr[i]).sort();

  vowelsIndices.forEach((i, j) => (arr[i] = sortedVowels[j]));

  return arr.join("");
};

exercise(sortVowels, [
  [["lEetcOde"], "lEOtcede"],
  [["lYmpH"], "lYmpH"],
]);
