import { exercise } from "@shared/utilities/exercise.ts";

const createCounter = (nums: number[]): Map<number, number> => {
  const counter = new Map();

  for (const num of nums) {
    if (counter.has(num)) counter.set(num, counter.get(num) + 1);
    else counter.set(num, 1);
  }

  return counter;
};

const findMatrix = (nums: number[]): number[][] => {
  const counter = createCounter(nums);

  const result = [];
  while (counter.size) {
    const row = [];
    for (const [num, count] of counter) {
      row.push(num);
      if (count > 1) counter.set(num, count - 1);
      else counter.delete(num);
    }
    result.push(row);
  }

  return result;
};

exercise(findMatrix, [
  [[[1, 3, 4, 1, 2, 3, 1]], [[1, 3, 4, 2], [1, 3], [1]]],
  [[[1, 2, 3, 4]], [[1, 2, 3, 4]]],
]);
