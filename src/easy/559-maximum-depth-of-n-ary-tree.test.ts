import { Node } from "@shared/structures";

const maxDepthR = (root: Node | null): number => {
  const utility = (node: Node | null, depth: number): number => {
    if (node === null) return depth;
    return Math.max(depth, ...node.children.map(child => utility(child, depth + 1)));
  };

  return utility(root, 1);
};

const maxDepthI = (root: Node | null): number => {
  if (!root) return 0;
  let stack: [number, Node][] = [[1, root]];

  let max = 0;
  while (stack.length > 0) {
    const [depth, node] = stack.pop()!;
    if (depth > max) max = depth;
    stack.push(...node.children.map((child): [number, Node] => [depth + 1, child]));
  }

  return max;
};

describe("Maximum depth of nary tree", () => {
  it("0 depth", () => {
    expect(maxDepthI(null)).toBe(0);
  });

  it("1 depth", () => {
    expect(maxDepthI(Node.node([1]))).toBe(1);
  });

  it("2 depth", () => {
    expect(maxDepthI(Node.node([1, [2], [3]]))).toBe(2);
  });

  it("3 depth", () => {
    expect(maxDepthI(Node.node([1, [2, [3]], [4]]))).toBe(3);
  });

  it("4 depth", () => {
    expect(maxDepthI(Node.node([1, [2, [3, [4]]], [5]]))).toBe(4);
  });
});
