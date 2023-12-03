import { exercise } from "@shared/utilities/exercise.js";

const gcd = (a: number, b: number) => {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const firstDigit = (n: number) => {
  while (n >= 10) n = ~~(n / 10);
  return n;
};
const lastDigit = (n: number) => n % 10;

const countBeautifulPairs = (nums: number[]): number => {
  const m = nums.length;
  const n = m - 1;

  let count = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < m; ++j) {
      if (gcd(firstDigit(nums[i]), lastDigit(nums[j])) === 1) ++count;
    }
  }

  return count;
};

exercise(countBeautifulPairs, [
  [[[2, 5, 1, 4]], 5],
  [[[11, 21, 12]], 2],
  [[[31, 25, 72, 79, 74]], 7],
]);
