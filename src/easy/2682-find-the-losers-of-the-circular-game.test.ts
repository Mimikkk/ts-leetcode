import { exercise } from "@shared/utilities/exercise";

const circularGameLosers = (n: number, k: number): number[] => {
  const losers = new Set(Array.from({ length: n }, (_, index) => index));

  let iteration = 0;
  let holder = 0;
  while (losers.delete(holder)) holder = (holder + k * ++iteration) % n;

  return [...losers].map((x) => x + 1);
};

exercise(circularGameLosers, [
  [
    [5, 2],
    [4, 5],
  ],
  [
    [4, 4],
    [2, 3, 4],
  ],
]);
