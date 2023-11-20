import { exercise } from "@shared/utilities/exercise.js";

const isPalindrome = (n: number): boolean => [...`${n}`].join("") == [...`${n}`].reverse().join("");

exercise(isPalindrome, [
  [[121], true],
  [[13], false],
  [[1], true],
]);
