import { exercise } from "@shared/utilities/exercise";

const enum BoxType {
  Heavy = "Heavy",
  Bulky = "Bulky",
  Neither = "Neither",
  Both = "Both",
}

const categorizeBox = (length: number, width: number, height: number, mass: number): BoxType => {
  const isBulky = length >= 1e4 || width >= 1e4 || height >= 1e4 || length * width * height >= 1e9;
  const isHeavy = mass >= 100;

  if (isBulky && isHeavy) return BoxType.Both;
  if (isBulky) return BoxType.Bulky;
  if (isHeavy) return BoxType.Heavy;
  return BoxType.Neither;
};

exercise(categorizeBox, [
  [[1000, 35, 700, 300], "Heavy"],
  [[200, 50, 800, 50], "Neither"],
  [[3223, 1271, 2418, 749], "Both"],
]);
