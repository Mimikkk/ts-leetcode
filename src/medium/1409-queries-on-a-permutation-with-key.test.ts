import { exercise } from "@shared/utilities/exercise.js";

const processQueries = (queries: number[], m: number): number[] => {
  const P = Array.from({ length: m }, (_, i) => i + 1);

  return queries.map((query) => {
    const value = P.indexOf(query);

    P.splice(value, 1);
    P.unshift(query);

    return value;
  });
};

exercise(processQueries, [
  [
    [[3, 1, 2, 1], 5],
    [2, 1, 2, 1],
  ],
  [
    [[4, 1, 2, 2], 4],
    [3, 1, 2, 0],
  ],
  [
    [[7, 5, 5, 8, 3], 8],
    [6, 5, 0, 7, 5],
  ],
]);
