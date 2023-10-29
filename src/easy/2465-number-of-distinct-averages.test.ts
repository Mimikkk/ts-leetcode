import { exercise } from "@shared/utilities/exercise";
export {};

const distinctAverages = (nums: number[]): number => {
  const averages = new Set<number>();

  while (nums.length) {
    let max = nums[0];
    let maxi = 0;
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] > max) {
        max = nums[i];
        maxi = i;
      }
    }

    let min = nums[0];
    let mini = 0;
    for (let i = 0; i < nums.length; ++i) {
      if (maxi === i) continue;

      if (nums[i] < min) {
        min = nums[i];
        mini = i;
      }
    }

    averages.add((max + min) / 2);

    if (maxi > mini) {
      nums.splice(maxi, 1);
      nums.splice(mini, 1);
    } else {
      nums.splice(mini, 1);
      nums.splice(maxi, 1);
    }
  }

  return averages.size;
};

exercise(2465, distinctAverages, [
  [[[1, 0, 2, 0, 0, 1]], 2],
  [[[1, 0]], 1],
]);
