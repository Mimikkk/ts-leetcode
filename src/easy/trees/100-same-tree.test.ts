import { TreeNode } from "shared/structures";

// Recursive
const isSameTreeR = (p: TreeNode | null, q: TreeNode | null): boolean =>
  (
    (!p && !q) ||
    (!!p && !!q && p.val === q.val && isSameTreeR(p.left, q.left) && isSameTreeR(p.right, q.right))
  );

// Iterative
const isSameTreeI = (p: TreeNode | null, q: TreeNode | null): boolean => {
  const stack = [[p, q]];

  while (stack.length) {
    const [p, q] = stack.pop()!;

    if (!p && !q) continue;
    if (!p || !q || p.val !== q.val) return false;

    stack.push([p.right, q.right]);
    stack.push([p.left, q.left]);
  }
  return true;
};

describe("100 - same tree", () => {
  it("runs successfully", () => {
    expect(isSameTreeR(null, null)).toEqual(true);
  });

  it("should classify as the same tree", () => {
    const p = new TreeNode(1);
    const q = new TreeNode(1);
    expect(isSameTreeR(p, q)).toEqual(true);
  });

  it("should not classify as the same tree", () => {
    const p = new TreeNode(1);
    const q = new TreeNode(2);
    expect(isSameTreeR(p, q)).toEqual(false);
  });

  it("should not classify as the same tree", () => {
    const p = new TreeNode(1);
    p.left = new TreeNode(2);
    const q = new TreeNode(1);
    q.right = new TreeNode(2);
    expect(isSameTreeR(p, q)).toEqual(false);
  });

  it("should classify as the same tree", () => {
    const p = new TreeNode(1);
    p.left = new TreeNode(2);
    p.right = new TreeNode(3);
    const q = new TreeNode(1);
    q.left = new TreeNode(2);
    q.right = new TreeNode(3);
    expect(isSameTreeR(p, q)).toEqual(true);
  });

  it("should not classify as the same tree", () => {
    const p = new TreeNode(1);
    p.left = new TreeNode(2);
    p.right = new TreeNode(3);
    const q = new TreeNode(1);
    q.left = new TreeNode(2);
    q.right = new TreeNode(1);
    expect(isSameTreeR(p, q)).toEqual(false);
  });

  it("should not classify as the same tree", () => {
    const p = new TreeNode(1);
    p.left = new TreeNode(2);
    p.right = new TreeNode(3);
    const q = new TreeNode(1);
    q.left = new TreeNode(2);
    q.right = new TreeNode(3);
    q.right = new TreeNode(4);
    expect(isSameTreeR(p, q)).toEqual(false);
  });

  it("should not classify as the same tree", () => {
    const p = new TreeNode(1);
    p.left = new TreeNode(2);
    p.right = new TreeNode(3);
    const q = new TreeNode(1);
    q.left = new TreeNode(2);
    q.right = new TreeNode(3);
    q.right = new TreeNode(4);
    q.right = new TreeNode(5);
    expect(isSameTreeR(p, q)).toEqual(false);
  });
});
