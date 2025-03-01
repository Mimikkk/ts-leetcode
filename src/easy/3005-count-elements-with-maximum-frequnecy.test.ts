import { exercise } from "@shared/utilities/exercise.ts";

const createCounter = <T>(arr: T[]): Map<T, number> => {
  const counter = new Map<T, number>();
  for (const value of arr) counter.set(value, (counter.get(value) || 0) + 1);
  return counter;
};

const maxFrequencyElements = (nums: number[]): number => {
  const counter = createCounter(nums);

  let max = 0;
  for (const value of counter.values()) if (value > max) max = value;

  let count = 0;
  for (const frequency of counter.values()) if (frequency === max) count += frequency;

  return count;
};

exercise(maxFrequencyElements, [
  [[[1, 2, 2, 3, 1, 4]], 4],
  [[[1, 2, 3, 4, 5]], 5],
  [[[17, 17, 2, 12, 20, 17, 12]], 3],
]);
