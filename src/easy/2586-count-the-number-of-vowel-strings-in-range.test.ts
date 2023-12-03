import { exercise } from "@shared/utilities/exercise.js";

const vowels = new Set(["a", "e", "i", "o", "u"]);
const vowelStrings = (words: string[], left: number, right: number): number => {
  words = words.slice(left, right + 1);
  let count = 0;

  for (let word of words) if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) ++count;

  return count;
};

exercise(vowelStrings, [
  [[["are", "amy", "u"], 0, 2], 2],
  [[["hey", "aeo", "mu", "ooo", "artro"], 1, 4], 3],
]);
