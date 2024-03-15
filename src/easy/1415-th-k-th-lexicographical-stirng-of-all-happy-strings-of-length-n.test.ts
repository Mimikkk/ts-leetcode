import { exercise } from "@shared/utilities/exercise.js";

const HappyLetters = ["a", "b", "c"];
const getHappyString = (n: number, k: number): string => {
  const happyStringsCount = 3 * 2 ** (n - 1);
  if (k > happyStringsCount) return "";

  let string: string = undefined!;
  const construct = (previous: string, n: number) => {
    for (const character of HappyLetters) {
      if (previous[previous.length - 1] === character) continue;

      if (n) construct(previous + character, n - 1);
      else if (--k === 0) {
        string = previous + character;
        return;
      }
    }
  };
  construct("", n - 1);

  return string;
};

exercise(getHappyString, [
  [[1, 3], "c"],
  [[1, 4], ""],
  [[3, 9], "cab"],
]);
