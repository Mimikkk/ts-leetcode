import { TreeNode } from "@shared/structures/TreeNode.js";

const getTargetCopy = (
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null,
): TreeNode | null => {
  if (!original || !cloned) return null;
  if (original === target) return cloned;

  let left = getTargetCopy(original.left, cloned.left, target);
  if (left) return left;

  return getTargetCopy(original.right, cloned.right, target);
};
