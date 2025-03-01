import { exercise } from "@shared/utilities/exercise.ts";

const findDifferentBinaryString = (nums: string[]): string => {
  const n = nums.length;

  const values = nums.map((num) => parseInt(num, 2));
  for (let i = 0, it = 1 << n; i < it; ++i) if (!values.includes(i)) return i.toString(2).padStart(n, "0");
  return "";
};

exercise(findDifferentBinaryString, [
  [[["01", "10"]], "00"],
  [[["00", "01"]], "10"],
  [[["111", "011", "001"]], "000"],
]);
