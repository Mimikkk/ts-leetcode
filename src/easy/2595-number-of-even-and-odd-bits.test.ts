import { exercise } from "@shared/utilities/exercise.js";

const evenOddBit = (n: number): [number, number] => {
  let even = 0;
  let odd = 0;
  let isOddBit = false;

  while (n) {
    if (n & 1) {
      if (isOddBit) ++odd;
      else ++even;
    }

    isOddBit = !isOddBit;
    n >>= 1;
  }

  return [even, odd];
};

exercise(evenOddBit, [
  [[0b10001], [2, 0]],
  [[0b10], [0, 1]],
]);
