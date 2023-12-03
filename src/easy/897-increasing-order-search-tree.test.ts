import { TreeNode } from "@shared/structures/TreeNode.js";
import node = TreeNode.node;

const inorder = (root: TreeNode | null): number[] =>
  root ? [...inorder(root.left), root.val, ...inorder(root.right)] : [];
const createNode = (val: number) => new TreeNode(val);

const increasingBST = (root: TreeNode | null): TreeNode | null => {
  let spine: TreeNode | null = null;
  const head = inorder(root)
    .map(createNode)
    .reduce((current, node) => {
      if (!spine) spine = current;
      return (current.right = node);
    });

  return spine || head;
};

describe("increasing bst", () => {
  it("case 1", () => {
    expect(increasingBST(node([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]))).toEqual(
      node([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9]),
    );
  });

  it("case 2", () => {
    expect(increasingBST(node([1]))).toEqual(node([1]));
  });
});
