import { exercise } from "@shared/utilities/exercise";

// You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:
//
// -1 represents there is no fort at the ith position.
// 0 indicates there is an enemy fort at the ith position.
// 1 indicates the fort at the ith the position is under your command.
// Now you have decided to move your army from one of your forts at position i to an empty position j such that:
//
// 0 <= i, j <= n - 1
// The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.
// While moving the army, all the enemy forts that come in the way are captured.
//
// Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.
const enum FortType {
  Empty = 0,
  Enemy = -1,
  Friendly = 1,
}

const captureForts = (forts: number[]): number => {
  let max = 0;

  const traverse = () => {
    let i = 0;
    outer: while (i < forts.length - 1) {
      if (forts[i] !== FortType.Friendly) {
        ++i;
        continue;
      }

      for (let j = i + 1; j < forts.length; ++j) {
        if (forts[j] === FortType.Empty) continue;

        if (forts[j] === FortType.Enemy) {
          const value = j - i - 1;
          if (value > max) max = value;
        }

        i = j;
        continue outer;
      }

      ++i;
    }
  };
  traverse();
  forts.reverse();
  traverse();

  return max;
};

exercise(captureForts, [
  [[[1, 0, 0, -1, 0, 0, 0, 0, 1]], 4],
  [[[0, 0, 1, -1]], 0],
  [[[1, 0, 0, 0, 1, 0, 0, -1]], 2],
  [[[1, 0, 0, 1, 0, 0, 0, -1]], 3],
  [[[-1, 0, 0, 0, 1, 0, 0, 1]], 3],
  [[[-1, 0, 0, 1, 0, 0, 0, 1]], 2],
]);
