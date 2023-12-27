import { exercise } from "@shared/utilities/exercise.js";
import { TreeNode } from "@shared/structures/index.js";

const constructMaximumBinaryTree = (nums: number[]): TreeNode | null => {
  const construct = (nums: number[], start: number, end: number): TreeNode | null => {
    if (start >= end) return null;

    let max = start;
    for (let i = start + 1; i < end; ++i) if (nums[i] > nums[max]) max = i;

    return new TreeNode(nums[max], construct(nums, start, max), construct(nums, max + 1, end));
  };

  return construct(nums, 0, nums.length);
};

const wrap = (input: number[]) => TreeNode.array(constructMaximumBinaryTree(input) ?? TreeNode.empty);

exercise(wrap, [
  [[[3, 2, 1, 6, 0, 5]], [6, 3, 5, null, 2, 0, null, null, 1]],
  [[[3, 2, 1]], [3, null, 2, null, 1]],
]);
