import { exercise } from "@shared/utilities/exercise";

const vowelStrings = (words: string[], left: number, right: number): number => {
  console.log(words.splice(left, right));

  return 0;
};

exercise(vowelStrings, [
  [[["are", "amy", "u"], 0, 2], 2],
  [[["hey", "aeo", "mu", "ooo", "artro"], 1, 4], 3],
]);
