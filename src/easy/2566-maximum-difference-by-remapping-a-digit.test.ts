import { exercise } from "@shared/utilities/exercise.js";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const digitize = (n: number): number[] => {
  const digits = [];

  while (n > 0) {
    digits.push(n % 10);
    n = ~~(n / 10);
  }

  return digits.reverse();
};

const assemble = (digits: number[]): number => {
  let n = 0;
  for (let i = 0; i < digits.length; ++i) n = n * 10 + digits[i];
  return n;
};

const remap = (digits: number[], from: number, to: number): number[] => {
  digits = digits.slice();
  for (let i = 0; i < digits.length; ++i) if (digits[i] === from) digits[i] = to;
  return digits;
};

const minMaxDifference = (num: number): number => {
  const digits = digitize(num);

  const availableRemaps = numbers.flatMap((n) => numbers.map((m) => remap(digits, n, m))).map(assemble);

  let min = availableRemaps[0];
  let max = availableRemaps[0];
  for (let i = 1; i < availableRemaps.length; ++i) {
    if (availableRemaps[i] < min) min = availableRemaps[i];
    if (availableRemaps[i] > max) max = availableRemaps[i];
  }

  return max - min;
};

exercise(minMaxDifference, [
  [[11891], 99009],
  [[90], 99],
]);
