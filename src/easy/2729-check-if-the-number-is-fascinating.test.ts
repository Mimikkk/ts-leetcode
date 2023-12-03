import { exercise } from "@shared/utilities/exercise.js";

const readDigits = (n: number): number[] => {
  const digits = [];

  while (n) {
    digits.unshift(n % 10);
    n = ~~(n / 10);
  }

  return digits;
};

const isFascinating = (n: number): boolean => {
  const digits = readDigits(n)
    .concat(readDigits(n * 2))
    .concat(readDigits(n * 3));

  const counts = new Set();
  for (const digit of digits) {
    if (digit === 0 || counts.has(digit)) return false;
    counts.add(digit);
  }

  return true;
};

exercise(isFascinating, [
  [[192], true],
  [[100], false],
  [[783], false],
]);
