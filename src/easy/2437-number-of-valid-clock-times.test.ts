import { exercise } from '@shared/utilities/exercise.ts';

const countTime = (time: string): number => {
  let combinations = 1;

  if (time[0] === "?" && time[1] === "?") combinations *= 24;
  else if (time[0] === "?") combinations *= +time[1] <= 3 ? 3 : 2;
  else if (time[1] === "?") combinations *= time[0] === "2" ? 4 : 10;

  if (time[3] === "?") combinations *= 6;
  if (time[4] === "?") combinations *= 10;

  return combinations;
};

exercise(countTime, [
  [["?5:00"], 2],
  [["0?:0?"], 100],
  [["??:??"], 1440],
  [["?0:?6"], 12],
]);
