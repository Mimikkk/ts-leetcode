import { exercises } from "@shared/utilities/exercise.js";

const numTilePossibilities1 = (tiles: string): number =>
  (function traverse(letters: string, current: string = "", permutations: Set<string> = new Set()) {
    if (current.length > 0) permutations.add(current);
    for (let i = 0; i < letters.length; ++i) {
      traverse(letters.slice(0, i) + letters.slice(i + 1), current + letters[i], permutations);
    }

    return permutations;
  })(tiles).size;

const factorial = (n: number): number => {
  let result = 1;
  for (let i = 2; i <= n; ++i) result *= i;
  return result;
};
const factorialProduct = (numbers: Iterable<number>) => {
  let result = 1;
  for (const n of numbers) result *= factorial(n);
  return result;
};
const sumBy = <T>(numbers: Iterable<T>, fn: (item: T) => number) => {
  let result = 0;
  for (const n of numbers) result += fn(n);
  return result;
};

const numTilePossibilities2 = (tiles: string): number => {
  const substrings = (str: string): Set<string> => {
    const strings = new Set([""]);
    str = str.split("").sort().join("");

    for (const character of str) {
      let size = strings.size - 1;

      for (const s of strings) {
        strings.add(s + character);
        if (0 > --size) break;
      }
    }

    return strings;
  };

  const countCombinations = (str: string): number => {
    const counter = new Map();
    for (const character of str) counter.set(character, (counter.get(character) || 0) + 1);

    return factorial(str.length) / factorialProduct(counter.values());
  };

  return sumBy(substrings(tiles), countCombinations);
};

exercises([numTilePossibilities2], [[["AABBCCDDEEAABBCCDDEEFGHAABBCCDDEEAABBCCDDEEF"], 3.6812168848071702e31]]);
