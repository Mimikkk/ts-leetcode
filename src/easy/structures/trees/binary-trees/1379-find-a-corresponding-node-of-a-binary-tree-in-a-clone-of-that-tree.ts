import { TreeNode } from "shared/structures";

const getTargetCopy = (original: TreeNode | null,
                       cloned: TreeNode | null,
                       target: TreeNode | null): TreeNode | null => {
  if (!original || !cloned) return null;
  if (original === target) return cloned;

  let left = getTargetCopy(original.left, cloned.left, target);
  if (left) return left;

  return getTargetCopy(original.right, cloned.right, target);
};
