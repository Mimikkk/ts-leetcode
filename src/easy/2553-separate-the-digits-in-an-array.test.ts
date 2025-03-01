import { exercise } from "@shared/utilities/exercise.ts";

let divmod = (n: number, mod: number) => [~~(n / mod), n % mod];
let digits = (n: number): number[] => {
  let digits = [];
  let digit;

  while (n > 0) {
    [n, digit] = divmod(n, 10);
    digits.push(digit);
  }

  return digits.reverse();
};

const separateDigits = (nums: number[]): number[] => nums.flatMap(digits);

exercise(separateDigits, [
  [[[13, 25, 83, 77]], [1, 3, 2, 5, 8, 3, 7, 7]],
  [[[7, 1, 3, 9]], [7, 1, 3, 9]],
]);
