import { exercise } from "@shared/utilities/exercise.js";

const isLetter = (c: string): boolean => ("a" <= c && c <= "z") || ("A" <= c && c <= "Z");
const letterCasePermutation = (s: string): string[] => {
  const characters = Array.from(s);
  const n = characters.length;

  function* permute(i: number): Generator {
    if (i === n) return yield;

    const generator = permute(i + 1);
    while (generator.next().done === false) {
      yield;
      if (!isLetter(characters[i])) continue;

      const isUpper = characters[i] === characters[i].toUpperCase();
      characters[i] = isUpper ? characters[i].toLowerCase() : characters[i].toUpperCase();
      yield;
      characters[i] = isUpper ? characters[i].toUpperCase() : characters[i].toLowerCase();
    }
  }

  const permutations = [];
  const generator = permute(0);
  while (generator.next().done === false) permutations.push(characters.join(""));
  return permutations;
};

exercise(letterCasePermutation, [
  [["a1b2"], ["a1b2", "A1b2", "a1B2", "A1B2"]],
  [["C"], ["C", "c"]],
]);
