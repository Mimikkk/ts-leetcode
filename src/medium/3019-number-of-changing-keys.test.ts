import { exercise } from "@shared/utilities/exercise.js";

const countKeyChanges = (s: string): number => {
  s = s.toLowerCase();

  let count = 0;
  for (let i = 1; i < s.length; ++i) if (s[i] !== s[i - 1]) ++count;

  return count;
};

exercise(countKeyChanges, [
  [["aAbBcC"], 2],
  [["AaAaAaaA"], 0],
]);
