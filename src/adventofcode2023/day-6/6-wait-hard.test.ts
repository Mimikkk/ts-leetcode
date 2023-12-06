import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./6-wait.case.txt?raw";
import UserCase from "./6-wait.user.txt?raw";

const waitforit = (input: string): number => {
  const [time, distance] = input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((line) => +line.split(/ +/).slice(1).join(""));

  let count = 0;
  for (let i = 0; i < time; ++i) if (i * (time - i) > distance) ++count;
  return count;
};

exercise(waitforit, [
  [[TestCase], 71503],
  [[UserCase], 28101347],
]);
