import { exercise } from "@shared/utilities/exercise.ts";

const findSmallestSetOfVertices = (n: number, edges: number[][]): number[] => {
  const ends = new Set(edges.map(([, to]) => to));

  const nonReachableNodes = [];
  for (let node = 0; node < n; ++node) {
    if (!ends.has(node)) nonReachableNodes.push(node);
  }

  return nonReachableNodes;
};

exercise(findSmallestSetOfVertices, [
  [
    [
      6,
      [
        [0, 1],
        [0, 2],
        [2, 5],
        [3, 4],
        [4, 2],
      ],
    ],
    [0, 3],
  ],
  [
    [
      5,
      [
        [0, 1],
        [2, 1],
        [3, 1],
        [1, 4],
        [2, 4],
      ],
    ],
    [0, 2, 3],
  ],
]);
