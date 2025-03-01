import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { TreeNode } from "@shared/structures/TreeNode.ts";
import node = TreeNode.node;

const tree2str = (root: TreeNode | null): string => {
  if (root == null) return "";
  const stack = [root];
  const visited = new Set();

  let result = "";
  while (stack.length != 0) {
    const current = stack[stack.length - 1];

    if (visited.has(current)) {
      stack.pop();
      result = `${result})`;
    } else {
      visited.add(current);
      result = `${result}(${current.val}`;
      if (current.left === null && current.right) result = `${result}()`;
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  return result.slice(1, -1);
};

describe("tree2str", () => {
  it("returns the string representation of binary tree", () => {
    expect(tree2str(node([1, 2, 3, 4]))).toBe("1(2(4))(3)");
  });

  it("returns the string representation of binary tree", () => {
    expect(tree2str(node([1, 2, 3, null, 4]))).toBe("1(2()(4))(3)");
  });
});
