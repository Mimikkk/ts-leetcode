import { ListNode } from "@shared/structures/ListNode.js";

const deleteNode = (root: ListNode | null): void => {
  if (!root || !root.next) return;

  [root.val, root.next] = [root.next.val, root.next.next];
};

describe("237 - remove node in linked list", () => {
  it("remove first node", () => {
    const node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    deleteNode(node);
    expect(node.val).toBe(2);
    expect(node.next.val).toBe(3);
  });

  it("remove middle node", () => {
    const node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    deleteNode(node.next.next);
    expect(node.val).toBe(1);
    expect(node.next.val).toBe(2);
    expect(node.next.next.val).toBe(4);
  });
});
