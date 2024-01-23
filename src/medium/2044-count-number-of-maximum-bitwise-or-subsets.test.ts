import { exercise } from "@shared/utilities/exercise.js";

const countMaxOrSubsets = (nums: number[]): number => {
  const subsets: number[][] = [[]];

  const ors = [0];
  for (let i = 0; i < nums.length; ++i) {
    const count = subsets.length;

    for (let j = 0; j < count; ++j) {
      const subset = subsets[j].concat(nums[i]);

      subsets.push(subset);

      ors.push(subset.reduce((acc, num) => acc | num, 0));
    }
  }

  const maxOr = Math.max(...ors);
  let count = 0;
  for (let i = 0; i < ors.length; ++i) if (ors[i] === maxOr) ++count;

  return count;
};

exercise(countMaxOrSubsets, [
  [[[3, 1]], 2],
  [[[2, 2, 2]], 7],
  [[[3, 2, 1, 5]], 6],
]);
