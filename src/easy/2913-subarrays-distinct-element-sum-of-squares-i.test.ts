import { exercise } from "@shared/utilities/exercise";

const sumCounts = (nums: number[]): number => {
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    const items = new Set();
    for (let j = i; j < nums.length; ++j) {
      items.add(nums[j]);

      count += items.size ** 2;
    }
  }

  return count;
};

exercise(sumCounts, [
  [[[1, 2, 1]], 15],
  [[[1, 1]], 3],
]);
