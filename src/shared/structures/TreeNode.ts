import { Nullable } from "../utilities";

export class TreeNode {
  val: number;
  left: Nullable<TreeNode>;
  right: Nullable<TreeNode>;

  constructor(
    val?: number,
    left?: Nullable<TreeNode>,
    right?: Nullable<TreeNode>,
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export module TreeNode {
  export const array = (root: TreeNode): (number | null)[] => {
    const result: (number | null)[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node?.val ?? null);

      if (node) {
        queue.push(node.left!);
        queue.push(node.right!);
      }
    }

    for (let i = result.length - 1; i >= 0; --i) {
      if (result[i] === null) result.splice(i, 1);
      else return result;
    }
    return result;
  };

  export const node = (arr: [number, ...Nullable<number>[]]): TreeNode => {
    const root = new TreeNode(arr.shift()!);
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node !== null && node !== undefined) {
        const left = arr.shift();
        if (left !== null && left !== undefined) {
          node.left = new TreeNode(left!);
          queue.push(node.left);
        }

        const right = arr.shift();
        if (right !== null && right !== undefined) {
          node.right = new TreeNode(right!);
          queue.push(node.right);
        }
      }
    }
    return root;
  };

  export const preorder = (root: Nullable<TreeNode>): number[] =>
    root ? [root.val, ...preorder(root.left), ...preorder(root.right)] : [];

  export const inorder = (root: Nullable<TreeNode>): number[] =>
    root ? [...inorder(root.left), root.val, ...inorder(root.right)] : [];

  export const postorder = (root: Nullable<TreeNode>): number[] =>
    root ? [...postorder(root.left), ...postorder(root.right), root.val] : [];
}
