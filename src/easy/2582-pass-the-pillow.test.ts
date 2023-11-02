import { exercise } from "@shared/utilities/exercise";

const passThePillow = (n: number, time: number): number => {
  // 4 | 3 2 1 | 2 3 4 | 3 2 1 | 2 3 4 ...
  const offset = n - ((n + ((n - time) % n)) % n);
  const dance2 = ~~(time / n);
  const dance3 = ~~(time / n) % 2;

  console.log(n, time, offset, dance2, dance3, n - offset, dance3 === 1 ? offset - n : n - offset);

  return 0;
};

exercise(passThePillow, [
  [[4, 0], 4],
  [[4, 1], 3],
  [[4, 2], 2],
  [[4, 3], 1],
  [[4, 4], 2],
  [[4, 5], 3],
  [[4, 6], 4],
  [[4, 7], 3],
  [[4, 8], 2],
  [[4, 9], 1],
  [[4, 10], 2],
]);
