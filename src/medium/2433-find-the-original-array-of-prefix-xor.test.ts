import { exercise } from "@shared/utilities/exercise";

const findArray = (pref: number[]): number[] => {
  const result = Array(pref.length);

  result[0] = pref[0];
  for (let i = 1; i < pref.length; ++i) result[i] = pref[i] ^ pref[i - 1];

  return result;
};

exercise(findArray, [[[[5, 2, 0, 3, 1]], [5, 7, 2, 3, 2]]]);
