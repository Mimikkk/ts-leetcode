import { exercise } from "@shared/utilities/exercise.ts";
import { TreeNode } from "@shared/structures/index.ts";

export namespace P1382_1 {
  export const balanceBST = (root: TreeNode | null): TreeNode | null => {
    if (!root) return null;

    const inorder = function* (node: TreeNode): Generator<number> {
      if (node.left) yield* inorder(node.left);
      yield node.val;
      if (node?.right) yield* inorder(node.right);
    };

    const values = [...inorder(root)];

    const build = (values: number[], left: number, right: number): TreeNode | null => {
      if (right < left) return null;

      const mid = Math.floor((left + right) / 2);

      const root = new TreeNode(values[mid]);
      root.left = build(values, left, mid - 1);
      root.right = build(values, mid + 1, right);

      return root;
    };

    return build(values, 0, values.length - 1);
  };
}
export namespace P1382_2 {
  export const balanceBST = (root: TreeNode | null): TreeNode | null => {
    if (!root) return null;

    const inorder = function* (node: TreeNode): Generator<number> {
      if (node.left) yield* inorder(node.left);
      yield node.val;
      if (node?.right) yield* inorder(node.right);
    };

    const values = [...inorder(root)];

    const build = (values: number[], left: number, right: number): TreeNode | null => {
      if (right < left) return null;

      const mid = Math.floor((left + right) / 2);

      const root = new TreeNode(values[mid]);
      root.left = build(values, left, mid - 1);
      root.right = build(values, mid + 1, right);

      return root;
    };

    return build(values, 0, values.length - 1);
  };
}
export namespace P1382_3 {
  const inorder = (node: TreeNode): number[] => {
    const values: number[] = [];
    const stack: TreeNode[] = [];
    while (stack.length || node) {
      while (node) {
        stack.push(node);
        node = node.left!;
      }

      node = stack.pop()!;
      values.push(node.val);
      node = node.right!;
    }
    return values;
  };

  export const balanceBST = (root: TreeNode | null): TreeNode | null => {
    if (!root) return null;

    const values = inorder(root);
    const build = (values: number[], left: number, right: number): TreeNode | null => {
      if (right < left) return null;

      const mid = Math.floor((left + right) / 2);

      const root = new TreeNode(values[mid]);
      root.left = build(values, left, mid - 1);
      root.right = build(values, mid + 1, right);

      return root;
    };

    return build(values, 0, values.length - 1);
  };
}

export namespace P1382_T {
  export const solutions = [P1382_1, P1382_2, P1382_3];

  export const cases = [
    [[TreeNode.node([1, null, 2, null, 3, null, 4, null, null])], TreeNode.node([2, 1, 3, null, null, null, 4])],
    [[TreeNode.node([2, 1, 3])], TreeNode.node([2, 1, 3])],
  ] satisfies exercise.cases<(typeof solutions)[number]["balanceBST"]>;
}
