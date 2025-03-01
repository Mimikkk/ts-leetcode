import { ListNode } from "@shared/structures/ListNode.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const hasCycle = (head: ListNode | null): boolean => {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next!.next;
    if (slow === fast) return true;
  }

  return false;
};

describe("141 - linked list cycle", () => {
  it("with cycle", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = head.next;
    expect(hasCycle(head)).toBe(true);
  });

  it("without cycle", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    expect(hasCycle(head)).toBe(false);
  });
});
