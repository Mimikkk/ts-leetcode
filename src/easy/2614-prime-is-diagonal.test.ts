import { exercise } from "@shared/utilities/exercise.ts";

const memo = <T, Y>(fn: (n: T) => Y) => {
  const cache = new Map<T, Y>();

  return (n: T): Y => {
    let value = cache.get(n);
    if (value !== undefined) return value;

    value = fn(n);
    cache.set(n, value);
    return value;
  };
};

const isPrime = memo((n: number) => {
  if (n <= 1) return false;

  const sqrtN = ~~Math.sqrt(n);
  for (let i = 2; i <= sqrtN; ++i) if (n % i === 0) return false;
  return true;
});

const diagonalPrime = (nums: number[][]): number => {
  let maxPrime = 0;

  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    const left = nums[i][i];
    const right = nums[i][n - i - 1];

    if (isPrime(left) && maxPrime < left) maxPrime = left;
    if (isPrime(right) && maxPrime < right) maxPrime = right;
  }

  return maxPrime;
};

exercise(diagonalPrime, [
  [
    [
      [
        [1, 2, 3],
        [5, 6, 7],
        [9, 10, 11],
      ],
    ],
    11,
  ],
  [
    [
      [
        [1, 2, 3],
        [5, 17, 7],
        [9, 11, 10],
      ],
    ],
    17,
  ],
  [
    [
      [
        [883, 2, 3],
        [5, 932, 7],
        [9, 11, 982],
      ],
    ],
    883,
  ],
]);
