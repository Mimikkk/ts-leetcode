import { exercise } from "@shared/utilities/exercise.ts";

const createCounter = (s: string): Map<string, number> => {
  const counter = new Map<string, number>();
  for (const char of s) counter.set(char, (counter.get(char) ?? 0) + 1);
  return counter;
};

const minSteps = (s: string, t: string): number => {
  const sCounter = createCounter(s);
  const tCounter = createCounter(t);

  let steps = 0;
  for (const [char, count] of sCounter) {
    const tCount = tCounter.get(char) ?? 0;
    steps += Math.max(0, count - tCount);
  }

  return steps;
};

exercise(minSteps, [
  [["bab", "aba"], 1],
  [["leetcode", "practice"], 5],
  [["anagram", "mangaar"], 0],
]);
