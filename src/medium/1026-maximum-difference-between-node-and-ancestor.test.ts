import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";

const maxAncestorDiff = (root: TreeNode | null): number =>
  root
    ? (function traverse({ left, right, val }: TreeNode, min: number = val, max: number = val): number {
        if (val > max) max = val;
        else if (val < min) min = val;

        return Math.max(max - min, left ? traverse(left, min, max) : 0, right ? traverse(right, min, max) : 0);
      })(root)
    : 0;

exercise(maxAncestorDiff, [
  [[TreeNode.node([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])], 7],
  [[TreeNode.node([1, null, 2, null, 0, 3])], 3],
]);
