import { TreeNode } from "@shared/structures";
import { A } from "@shared/modules";
import sum = A.N.sum;

const deepestLeavesSum = (root: TreeNode | null): number => {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;

  let level: TreeNode[] = [root];
  while (level.length) {
    let next = [];

    for (const { left, right } of level) {
      if (left) next.push(left);
      if (right) next.push(right);
    }

    if (!next.some(({ left, right }) => left || right)) return sum(next.map(({ val }) => val));
    level = next;
  }

  return 0;
};

describe("deepest leaves sum", () => {
  it("case 1", () => {
    expect(deepestLeavesSum(TreeNode.node([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]))).toEqual(15);
  });

  it("case 2", () => {
    expect(deepestLeavesSum(TreeNode.node([1]))).toEqual(1);
  });
});
