import { TreeNode } from "@shared/structures";

const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true;

  const queue = [[root.left, root.right]];
  while (queue.length) {
    const [left, right] = queue.shift()!;
    if (!left && !right) continue;

    if (!left || !right || left.val !== right.val) return false;

    queue.push([left.left, right.right]);
    queue.push([left.right, right.left]);
  }

  return true;
};

describe("101 - symetric tree", () => {
  it("should be symmetric if null", () => {
    expect(isSymmetric(null)).toBe(true);
  });

  it("should be symmetric if root has no children", () => {
    expect(isSymmetric(new TreeNode(1))).toBe(true);
  });

  it("should not be symmetric if root has one child", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(isSymmetric(root)).toBe(false);
  });

  it("should be symmetric if root has two children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    expect(isSymmetric(root)).toBe(true);
  });

  it("should not be symmetric if root has two children with different values", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(isSymmetric(root)).toBe(false);
  });

  it("should not be symmetric if root has children with different children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(isSymmetric(root)).toBe(false);
  });

  it("should be symmetric if root has symetric children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right.right = new TreeNode(3);
    expect(isSymmetric(root)).toBe(true);
  });
});

