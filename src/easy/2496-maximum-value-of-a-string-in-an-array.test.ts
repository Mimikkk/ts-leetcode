import { exercise } from "@shared/utilities/exercise.js";

const maximumValue = (strs: string[]): number => {
  let max = 0;
  for (const str of strs) {
    let asNumber = +str;
    const value = isNaN(asNumber) ? str.length : asNumber;
    if (value > max) max = value;
  }

  return max;
};

exercise(maximumValue, [
  [[["6", "bob", "3", "3", "4", "00000"]], 6],
  [[["alic3", "bob", "3", "3", "4", "00000"]], 5],
  [[["124e", "al1234e"]], 7],
]);
