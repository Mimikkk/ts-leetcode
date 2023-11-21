import { exercise } from "@shared/utilities/exercise";

const maxDivScore = (nums: number[], divisors: number[]): number => {
  const scores = Array(divisors.length).fill(0);
  let maxDivisor = Math.min(...divisors);
  let maxDivisorScore = 0;

  for (let i = 0; i < divisors.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[j] % divisors[i] !== 0) continue;
      ++scores[i];

      if (scores[i] > maxDivisorScore || (scores[i] === maxDivisorScore && maxDivisor > divisors[i])) {
        maxDivisor = divisors[i];
        maxDivisorScore = scores[i];
      }
    }
  }

  return maxDivisor;
};

exercise(maxDivScore, [
  [
    [
      [4, 7, 9, 3, 9],
      [5, 2, 3],
    ],
    3,
  ],
  [
    [
      [20, 14, 21, 10],
      [5, 7, 5],
    ],
    5,
  ],
  [[[12], [10, 16]], 10],
]);
