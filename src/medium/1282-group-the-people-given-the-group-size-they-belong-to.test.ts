import { exercise } from "@shared/utilities/exercise.js";

const groupThePeople = (groupSizes: number[]): number[][] => {
  const n = groupSizes.length;
  const groups = new Map<number, number[]>();
  const result = [];

  for (let i = 0; i < n; ++i) {
    const size = groupSizes[i];

    let group = groups.get(size);
    if (group) {
      group.push(i);
    } else {
      group = [i];
      groups.set(size, group);
    }

    if (group.length === size) {
      result.push(group);
      groups.delete(size);
    }
  }

  return result;
};

exercise(groupThePeople, [
  [[[3, 3, 3, 3, 3, 1, 3]], [[0, 1, 2], [5], [3, 4, 6]]],
  [[[2, 1, 3, 3, 3, 2]], [[1], [2, 3, 4], [0, 5]]],
]);
