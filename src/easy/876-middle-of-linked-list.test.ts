import { ListNode } from "@shared/structures";
import node = ListNode.node;

const middleNode = (head: ListNode | null): ListNode | null => {
  if (!head) return null;
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  return fast.next ? slow.next : slow;
};

describe("middle node", () => {
  it("case 1", () => {
    expect(middleNode(node([1, 2, 3, 4, 5]))).toEqual(node([3, 4, 5]));
  });

  it("case 2", () => {
    expect(middleNode(node([1, 2, 3, 4, 5, 6]))).toEqual(node([4, 5, 6]));
  });
});