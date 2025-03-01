import { exercise } from "@shared/utilities/exercise.ts";

const removeTrailingZeros = (num: string): string => {
  let i = num.length - 1;

  while (num[i] === "0") --i;

  return num.substring(0, i + 1);
};

exercise(removeTrailingZeros, [
  [["51230100"], "512301"],
  [["123"], "123"],
]);
