import { exercise } from "@shared/utilities/exercise.js";

const createCounter = (word: string): Map<string, number> => {
  const counter = new Map<string, number>();
  for (const letter of word) counter.set(letter, (counter.get(letter) || 0) + 1);
  return counter;
};

const minimumPushes = (word: string): number => {
  const counts = createCounter(word).values();

  let i = 0;
  let sum = 0;
  let cost = 0;
  for (const count of counts) {
    if (i++ % 8 === 0) ++cost;
    sum += cost * count;
  }

  return sum;
};

exercise(minimumPushes, [
  [["aab"], 3],
  [["abcdefghi"], 10],
]);
