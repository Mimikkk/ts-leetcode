import { exercise } from "@shared/utilities/exercise.ts";

const furthestDistanceFromOrigin = (moves: string): number => {
  let countLeft = 0;
  let countRight = 0;
  let countUndefined = 0;

  for (let i = 0; i < moves.length; ++i) {
    switch (moves[i]) {
      case "L": {
        ++countLeft;
        break;
      }
      case "R": {
        ++countRight;
        break;
      }
      default: {
        ++countUndefined;
      }
    }
  }

  return Math.abs(countLeft - countRight) + countUndefined;
};

exercise(furthestDistanceFromOrigin, [
  [["RRRLLL"], 0],
  [["L_RL__R"], 3],
  [["_R__LL_"], 5],
  [["_______"], 7],
]);
