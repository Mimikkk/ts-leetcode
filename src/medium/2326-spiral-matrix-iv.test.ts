import { exercise } from "@shared/utilities/exercise.ts";
import { ListNode } from "@shared/structures/index.ts";

const spiralMatrix = (m: number, n: number, head: ListNode | null): number[][] => {
  if (head === null) return [];

  const result: number[][] = Array(m)
    .fill(-1)
    .map(() => Array(n).fill(-1));

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; ++j) {
      result[top][j] = head.val;
      head = head?.next ?? null;
      if (head === null) return result;
    }
    ++top;

    for (let i = top; i <= bottom; ++i) {
      result[i][right] = head.val;
      head = head?.next ?? null;
      if (head === null) return result;
    }
    --right;

    for (let j = right; j >= left; --j) {
      result[bottom][j] = head.val;
      head = head?.next ?? null;
      if (head === null) return result;
    }
    --bottom;

    for (let i = bottom; i >= top; --i) {
      result[i][left] = head.val;
      head = head?.next ?? null;
      if (head === null) return result;
    }
    ++left;
  }

  return result;
};

exercise(spiralMatrix, [
  [
    [3, 3, ListNode.node([1, 2, 3, 4, 5, 6, 7, 8, 9])],
    [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ],
  ],
  [[1, 4, ListNode.node([1, 2, 3])], [[1, 2, 3, -1]]],
]);
