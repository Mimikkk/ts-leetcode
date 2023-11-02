import { exercise } from "@shared/utilities/exercise";

const findTheArrayConcVal = (nums: number[]): number => {
  let result = 0;

  while (nums.length) {
    const n1 = nums.shift()!;
    const n2 = nums.pop();

    result += n2 === undefined ? n1 : +`${n1}${n2}`;
  }

  return result;
};

//@ts-ignore
exercise(findTheArrayConcVal, [
  [[[7, 52, 2, 4]], 596],
  [[[5, 14, 13, 8, 12]], 673],
]);
