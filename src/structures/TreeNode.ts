import { Nullable } from "../utilities";

export class TreeNode {
  val: number;
  left: Nullable<TreeNode>;
  right: Nullable<TreeNode>;
  constructor(val?: number, left?: Nullable<TreeNode>, right?: Nullable<TreeNode>) {
    this.val = (val === undefined ?0:val);
    this.left = (left === undefined ?null:left);
    this.right = (right === undefined ?null:right);
  }
}

export module TreeNode {
  export const preorder = (root: Nullable<TreeNode>): number[] => root ?
    [root.val, ...preorder(root.left), ...preorder(root.right)]:
    [];

  export const inorder = (root: Nullable<TreeNode>): number[] => root ?
    [...inorder(root.left), root.val, ...inorder(root.right)]:
    [];

  export const postorder = (root: Nullable<TreeNode>): number[] => root ?
    [...postorder(root.left), ...postorder(root.right), root.val]:
    [];
}
