import { exercise } from "@shared/utilities/exercise.ts";

const finalString = (s: string): string => {
  let result = [];

  for (let c of s) {
    if (c === "i") result.reverse();
    else result.push(c);
  }

  return result.join("");
};

exercise(finalString, [
  [["string"], "rtsng"],
  [["poiinter"], "ponter"],
]);
