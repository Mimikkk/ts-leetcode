import { exercise } from "@shared/utilities/exercise.js";

const findMedianSortedArrays = (first: number[], second: number[]): number => {
  let i = 0;
  let j = 0;
  const length = first.length + second.length;
  const middle = Math.ceil((length + 1) / 2);
  const isEven = length % 2 === 0;
  const elements = [];
  let changeSecondElement = false;

  while (i + j != middle) {
    if (second[j] === undefined || (first[i] !== undefined && first[i] < second[j])) {
      if (isEven) {
        elements[changeSecondElement ? 1 : 0] = first[i];
        changeSecondElement = !changeSecondElement;
      } else elements[0] = first[i];
      ++i;
    } else {
      if (isEven) {
        elements[changeSecondElement ? 1 : 0] = second[j];
        changeSecondElement = !changeSecondElement;
      } else elements[0] = second[j];
      ++j;
    }
  }

  return isEven ? (elements[0] + elements[1]) / 2 : elements[0];
};

exercise(findMedianSortedArrays, [
  [[[1, 3], [2]], 2],
  [
    [
      [1, 2],
      [3, 4],
    ],
    2.5,
  ],
]);
