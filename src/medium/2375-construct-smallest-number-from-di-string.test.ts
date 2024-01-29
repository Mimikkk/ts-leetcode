import { exercise } from "@shared/utilities/exercise.js";

const reverse = <T>(arr: T[], from: number, to: number): void => {
  while (from < to) {
    const temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
    ++from;
    --to;
  }
};

const smallestNumber = (pattern: string): string => {
  const n = pattern.length;
  const str = Array(n + 1)
    .fill(0)
    .map((_, i) => i + 1);

  for (let i = 0; i < n; ++i) {
    if (pattern[i] === "I") continue;

    const j = i;
    while (i < n && pattern[i] === "D") ++i;

    reverse(str, j, i);
  }

  return str.join("");
};

exercise(smallestNumber, [
  [["DDD"], "4321"],
  [["IIIDIDDD"], "123549876"],
]);
