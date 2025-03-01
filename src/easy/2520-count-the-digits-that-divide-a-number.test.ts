import { exercise } from "@shared/utilities/exercise.ts";

const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];
const countDigits = (num: number): number => {
  let count = 0;

  let digit;
  let div = num;
  while (div > 0) {
    [div, digit] = divmod(div, 10);
    if (num % digit === 0) ++count;
  }

  return count;
};

exercise(countDigits, [
  [[7], 1],
  [[121], 2],
  [[1248], 4],
]);
