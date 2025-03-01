import { exercise } from "@shared/utilities/exercise.ts";

const findMinimumOperations = (s1: string, s2: string, s3: string): number => {
  let commonLength = 0;

  while (
    commonLength < s1.length &&
    commonLength < s2.length &&
    commonLength < s3.length &&
    s1[commonLength] === s2[commonLength] &&
    s2[commonLength] === s3[commonLength]
  ) {
    ++commonLength;
  }

  return commonLength ? s1.length - commonLength + s2.length - commonLength + s3.length - commonLength : -1;
};

exercise(findMinimumOperations, [
  [["abc", "abb", "ab"], 2],
  [["a", "a", "a"], 0],
  [["dac", "bac", "cac"], -1],
]);
