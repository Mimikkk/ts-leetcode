import { exercise } from "@shared/utilities/exercise.ts";
import { TreeNode } from "@shared/structures/index.ts";

const createNode = () => new TreeNode();
const structuredClone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const allPossibleFBT = (n: number): (TreeNode | null)[] => {
  const root = createNode();
  if (n === 1) return [root];
  if (n % 2 === 0) return [];

  const construct = function* (node: TreeNode, n: number, trees: TreeNode[] = []): Generator<TreeNode> {
    if (n === 0) {
      yield root;
      return;
    }

    node.left = createNode();
    node.right = createNode();
    trees.push(node.left, node.right);

    for (let i = 0; i < trees.length; ++i) {
      yield* construct(trees[i], n - 2, trees.slice(i + 1));
      trees[i].left = null;
      trees[i].right = null;
      if (n - 2 === 0) return;
    }
  };

  const trees = [];
  for (const tree of construct(root, n - 1)) trees.push(structuredClone(tree));
  return trees;
};

exercise(
  (n: number) => allPossibleFBT(n).map(TreeNode.array),
  [
    [[1], [[0]]],
    [[2], []],
    [[4], []],
    [
      [7],
      [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, null, null, 0, 0],
        [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
        [0, 0, 0, null, null, 0, 0, 0, 0],
        [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
      ],
    ],
  ],
);
