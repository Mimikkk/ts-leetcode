import { exercise } from "@shared/utilities/exercise";

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const { max, floor, log10 } = Math;
const alternateDigitSum = (n: number): number => {
  let sum = 0;
  let digit;

  let sign = max(floor(log10(n)) + 1, 1) % 2 === 0 ? -1 : 1;
  while (n > 0) {
    [n, digit] = divmod(n, 10);
    sum += digit;
    if (n === 0) break;
    [n, digit] = divmod(n, 10);
    sum -= digit;
  }

  return sign * sum;
};

exercise(alternateDigitSum, [
  [[521], 4],
  [[111], 1],
  [[10], 1],
  [[100], 1],
  [[0], 0],
  [[886996], -0],
]);
