import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const createCounter = (nums: number[]) => {
  const counter: Record<number, number> = {};
  for (const num of nums) counter[num] = counter[num] + 1 || 1;
  return counter;
};

const uniqueOccurrences = (arr: number[]) => {
  const counts = Object.values(createCounter(arr));
  return counts.length === new Set(counts).size;
};
