import { TreeNode } from "@shared/structures/index.js";

const findValues = (node: TreeNode | null): Set<number> => {
  const set = new Set<number>();

  const traverse = (node: TreeNode, value: number) => {
    if (!node) return;

    set.add(value);
    if (node.left) traverse(node.left, 2 * value + 1);
    if (node.right) traverse(node.right, 2 * value + 2);
  };
  if (node) traverse(node, 0);

  return set;
};

class FindElements {
  values: Set<number>;

  constructor(root: TreeNode | null) {
    this.values = findValues(root);
  }

  find(target: number): boolean {
    return this.values.has(target);
  }
}

it("1261. Find Elements in a Contaminated Binary Tree", () => {
  const tree = TreeNode.node([-1, null, -1]);

  const findElements = new FindElements(tree);

  expect(findElements.find(1)).toBeFalsy();
  expect(findElements.find(2)).toBeTruthy();
});
