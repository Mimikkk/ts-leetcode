import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";
import { Tree } from "./utils/tree.js";
import { Chalk } from "./utils/chalk.js";

const regex = /(-+)?(\d+)/g;
const recoverFromPreorder = (traversal: string): TreeNode | null => {
  let values = [];
  for (const [, dashes = "", value] of traversal.matchAll(regex)) values.push([dashes.length, +value]);
  values.reverse();

  if (values.length === 0) return null;

  const [depth, value] = values.pop()!;
  const tree = new TreeNode(value);

  const stack: [TreeNode, number][] = [[tree, depth]];

  console.log({ values });
  while (values.length > 0) {
    const [depth, value] = values.pop()!;
    const [parentNode, parentDepth] = stack[stack.length - 1];

    const node = new TreeNode(value);

    if (depth === parentDepth + 1) {
      if (parentNode.left) {
        parentNode.right = node;
      } else {
        parentNode.left = node;
      }
    }
  }

  console.log(TreeNode.array(tree));
  console.log(Tree.tree(tree, (n) => Chalk.chalk(n.val, "red")));

  return tree;
};

const wrap = (traversal: string) => TreeNode.array(recoverFromPreorder(traversal) ?? TreeNode.node([0]));

exercise(wrap, [
  [["1-2-3"], [1, 2, 3]],
  // [["1-2--3"], [1, 2, null, 3]],
  // [["1-2--3---4"], [1, 2, null, 3, null, 4]],
  // [["1-2--3--4"], [1, 2, null, 3, 4]],
  // [["1-2--3--4-5--6--7"], TreeNode.node([1, 2, 5, 3, 4, 6, 7])],
  // [["1-2--3---4-5--6---7"], TreeNode.node([1, 2, 5, 3, null, 6, null, 4, null, 7])],
  // [["1-401--349---90--88"], TreeNode.node([1, 401, null, 349, 88, 90])],
]);
