import { exercise } from "@shared/utilities/exercise.ts";

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];
const digitSum = (num: number): number => {
  let sum = 0;

  let digit;
  let div = num;
  while (div > 0) {
    [div, digit] = divmod(div, 10);
    sum += digit;
  }

  return sum;
};
const sum = (nums: number[]): number => nums.reduce((a, b) => a + b, 0);
const differenceOfSum = (nums: number[]): number => Math.abs(sum(nums) - sum(nums.map(digitSum)));

exercise(differenceOfSum, [
  [[[1, 15, 6, 3]], 9],
  [[[1, 2, 3, 4]], 0],
]);
