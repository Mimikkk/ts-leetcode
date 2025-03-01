import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const arithmeticTriplets = (nums: number[], diff: number) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let [triplets, e2] = [0, i];

    for (let e1 = e2 + 1; e1 < nums.length; e1++) {
      if (nums[e1] - nums[e2] != diff) continue;

      e2 = e1;
      if (++triplets == 2) ++count;
    }
  }
  return count;
};
