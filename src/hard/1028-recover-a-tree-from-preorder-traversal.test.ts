import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";

const regex = /(-+)?(\d+)/g;
const recoverFromPreorder = (traversal: string): TreeNode | null => {
  let values: [number, TreeNode][] = [];
  for (const [, dashes = "", value] of traversal.matchAll(regex)) values.push([dashes.length, new TreeNode(+value)]);

  if (values.length === 0) return null;

  const levels = new Map<number, TreeNode[]>();
  const add = (depth: number, node: TreeNode) => {
    const level = levels.get(depth) ?? [];
    level.push(node);
    levels.set(depth, level);
  };

  for (const [depth, node] of values) {
    add(depth, node);

    const parent = levels.get(depth - 1)?.findLast((node) => !node.left || !node.right);
    if (!parent) continue;

    if (!parent.left) parent.left = node;
    else parent.right = node;
  }

  return values[0][1];
};

const wrap = (traversal: string) => TreeNode.array(recoverFromPreorder(traversal) ?? TreeNode.node([0]));

exercise(wrap, [
  [["1-2-3"], [1, 2, 3]],
  [["1-2--3"], [1, 2, null, 3]],
  [["1-2--3--4"], [1, 2, null, 3, 4]],
  [["1-2--3--4-5"], [1, 2, 5, 3, 4]],
  [["1-2--3--4-5--6--7"], [1, 2, 5, 3, 4, 6, 7]],
  [["1-2--3---4-5--6---7"], [1, 2, 5, 3, null, 6, null, 4, null, 7]],
  [["1-401--349---90--88"], [1, 401, null, 349, 88, 90]],
]);
