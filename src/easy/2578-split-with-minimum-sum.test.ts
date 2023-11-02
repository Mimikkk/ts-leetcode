import { exercise } from "@shared/utilities/exercise";

const { max, floor, log10 } = Math;
const digitize = (n: number): number[] => {
  let len = max(floor(log10(n)) + 1, 1);
  let digits = Array(len);

  let i = 0;
  while (n > 0) {
    digits[len - ++i] = n % 10;
    n = ~~(n / 10);
  }

  return digits;
};

const assemble = (digits: number[]): number => {
  let n = 0;
  for (let i = 0; i < digits.length; ++i) n = n * 10 + digits[i];
  return n;
};

const splitNum = (num: number): number => {
  num = assemble(digitize(num).sort((a, b) => a - b));

  let a = 0;
  let b = 0;
  let modifier = 1;
  while (num > 0) {
    a += (num % 10) * modifier;
    num = ~~(num / 10);
    b += (num % 10) * modifier;
    num = ~~(num / 10);
    modifier *= 10;
  }

  return a + b;
};

exercise(splitNum, [
  [[4325], 59],
  [[687], 75],
  [[2332], 46],
]);
