import { exercise } from "@shared/utilities/exercise.ts";
import { TreeNode } from "@shared/structures/index.ts";

const allPathsSourceTarget = (graph: number[][]): number[][] => {
  let start = 0;
  let target = graph.length - 1;

  const paths: number[][] = [];
  const traverse = (node: number, path: number[]) => {
    if (node === target) paths.push(path);
    else for (const n of graph[node]) traverse(n, [...path, n]);
  };
  traverse(start, [start]);

  return paths;
};

exercise(allPathsSourceTarget, [
  [
    [[[1, 2], [3], [3], []]],
    [
      [0, 1, 3],
      [0, 2, 3],
    ],
  ],
  [
    [[[4, 3, 1], [3, 2, 4], [3], [4], []]],
    [
      [0, 4],
      [0, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 2, 3, 4],
      [0, 1, 4],
    ],
  ],
]);
