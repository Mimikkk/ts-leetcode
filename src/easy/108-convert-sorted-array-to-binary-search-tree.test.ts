import { TreeNode } from "@shared/structures/TreeNode.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

describe("108 - convert sorted array to binary search tree", () => {
  it("case 2 empty", () => {
    expect(sortedArrayToBST([])).toEqual(null);
  });

  it("case 4 one element", () => {
    expect(sortedArrayToBST([1])).toEqual(new TreeNode(1, null, null));
  });
});
