import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const duplicateZeros = (arr: number[]) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.pop();
    }
  }
};
