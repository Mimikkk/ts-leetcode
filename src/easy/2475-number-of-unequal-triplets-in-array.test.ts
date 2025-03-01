import { exercise } from "@shared/utilities/exercise.ts";

import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const unequalTriplets = (nums: number[]): number => {
  let count = 0;

  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) ++count;
      }
    }
  }

  return count;
};

exercise(unequalTriplets, [
  [[[4, 4, 2, 4, 3]], 3],
  [[[1, 1, 1, 1, 1]], 0],
]);
