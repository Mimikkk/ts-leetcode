import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

module Binary {
  export const add = (a: number, b: number) => (a << 1) + b;
  export const num = (path: number[]) => path.reduce(add, 0);
}

const sumRootToLeaf = (root: TreeNode | null): number => {
  if (!root) return 0;
  let sum = 0;

  const stack: [TreeNode, number[]][] = [[root, []]];
  while (stack.length) {
    const [node, path] = stack.pop()!;

    path.push(node.val);
    if (!node.left && !node.right) sum += Binary.num(path);

    if (node.left) stack.push([node.left, [...path]]);
    if (node.right) stack.push([node.right, [...path]]);
  }

  return sum;
};

describe("sum root to leaf", () => {
  it("case 1", () => {
    expect(sumRootToLeaf(node([1, 0, 1, 0, 1, 0, 1]))).toEqual(22);
  });

  it("case 2", () => {
    expect(sumRootToLeaf(node([0]))).toEqual(0);
  });
});
