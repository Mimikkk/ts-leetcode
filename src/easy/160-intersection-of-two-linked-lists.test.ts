import { ListNode } from "@shared/structures";

const getIntersectionNode = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (!l1 || !l2) return null;

  let p1 = l1;
  let p2 = l2;
  while (p1 !== p2) {
    p1 = p1.next as ListNode;
    p2 = p2.next as ListNode;

    if (p1 === p2) return p1;
    if (!p1) p1 = l2;
    if (!p2) p2 = l1;
  }

  return p1;
};

describe("160 - intersection of two linked lists", () => {
  it("case 1", () => {
    const headA = new ListNode(1);
    headA.next = new ListNode(2);
    headA.next.next = new ListNode(3);
    headA.next.next.next = new ListNode(4);
    headA.next.next.next.next = new ListNode(5);

    const headB = new ListNode(6);
    headB.next = new ListNode(7);
    headB.next.next = new ListNode(8);
    headB.next.next.next = new ListNode(9);
    headB.next.next.next.next = new ListNode(10);
    headB.next.next.next.next.next = headA.next.next;

    expect(getIntersectionNode(headA, headB)).toEqual(headA.next.next);
  });
});
