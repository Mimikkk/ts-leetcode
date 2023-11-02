import { exercise } from "@shared/utilities/exercise";

const sum = (nums: Iterable<number>): number => {
  let sum = 0;
  for (const num of nums) sum += num;
  return sum;
};

const locateMax = (nums: number[]): number => {
  let index = 0;
  let max = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }

  return index;
};

const pickGifts = (gifts: number[], k: number): number => {
  while (k--) {
    const index = locateMax(gifts);

    gifts[index] = Math.floor(Math.sqrt(gifts[index]));
  }

  return sum(gifts);
};

//@ts-ignore
exercise(pickGifts, [[[[25, 64, 9, 4, 100], 4], 29]]);
