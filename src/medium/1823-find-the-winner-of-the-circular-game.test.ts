import { exercise } from '@shared/utilities/exercise.ts';
import { range } from '../aoc/2023/utils/utils.ts';

const findTheWinner = (n: number, k: number): number => range(n + 1).reduce((n, i) => (n + k) % i) + 1;

exercise(findTheWinner, [
  [[5, 2], 3],
  [[6, 5], 1],
]);
