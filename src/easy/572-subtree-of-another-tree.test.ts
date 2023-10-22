import { TreeNode } from "@shared/structures";
import node = TreeNode.node;

const isSameTreeR = (
  root: TreeNode | null,
  sub: TreeNode | null,
): boolean => {
  if (!root && !sub) return true;
  if (!root || !sub) return false;
  if (root.val !== sub.val) return false;
  return isSameTreeR(root.left, sub.left) && isSameTreeR(root.right, sub.right);
};

const isSubtreeR = (root: TreeNode | null, sub: TreeNode | null): boolean => {
  if (!root || !sub) return false;

  if (root.val === sub.val && isSameTreeR(root, sub)) return true;

  return isSubtreeR(root.left, sub) || isSubtreeR(root.right, sub);
};


const isSameTree = (
  root: TreeNode | null,
  sub: TreeNode | null,
) => {
  let stack = [[root, sub]];

  while (stack.length) {
    const [root, sub] = stack.pop()!;

    if (!root && !sub) continue;
    if (!root || !sub) return false;
    if (root.val !== sub.val) return false;

    stack.push([root.left, sub.left]);
    stack.push([root.right, sub.right]);
  }

  return true;
};

const isSubtree = (root: TreeNode | null, sub: TreeNode | null): boolean => {
  let stack = [[root, sub]];

  while (stack.length) {
    const [root, sub] = stack.pop()!;

    if (!root && !sub) return true;
    if (!root || !sub) return false;

    if (isSameTree(root, sub)) return true;

    if (root.left) stack.push([root.left, sub]);
    if (root.right) stack.push([root.right, sub]);
  }

  return false;
};

describe("is subtree", () => {
  it("is", () => {
    expect(isSubtree(node([3, 4, 5, 1, 2]), node([4, 1, 2]))).toEqual(true);
  });

  it("is not", () => {
    expect(isSubtree(node([3, 4, 5, 1, 2, null, null, null, null, 0]), node([4, 1, 2]))).toEqual(false);
  });
});