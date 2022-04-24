import { TreeNode } from "structures";

const maxDepth = (root: TreeNode | null): number => root ?Math.max(maxDepth(root.left), maxDepth(root.right)) + 1:0;

describe("104 - maximum depth of binary tree", () => {
  it("should be 3 if children have own offspring", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    expect(maxDepth(root)).toEqual(3);
  });


  it("should be 0", () => {
    const root = null;
    expect(maxDepth(root)).toEqual(0);
  });

  it("should be 1 if root has no children", () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toEqual(1);
  });

  it("should be 2 if root has no children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(maxDepth(root)).toEqual(2);
  });
});

