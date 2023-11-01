import { exercise } from "@shared/utilities/exercise";

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
