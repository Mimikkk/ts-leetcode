import { exercise } from "@shared/utilities/exercise.js";

const createCounter = (word: string): Map<string, number> => {
  const counter = new Map<string, number>();
  for (const letter of word) counter.set(letter, (counter.get(letter) || 0) + 1);
  return counter;
};

const countNonZeros = (counter: Map<string, number>): number => {
  let count = 0;
  for (const value of new Set(counter.values())) if (value !== 0) ++count;
  return count;
};

const equalFrequency = (word: string): boolean => {
  const counter = createCounter(word);

  for (const [key, value] of counter) {
    counter.set(key, value - 1);
    if (countNonZeros(counter) == 1) return true;
    counter.set(key, value);
  }

  return false;
};

exercise(equalFrequency, [
  [["abcc"], true],
  [["aazz"], false],
]);
