import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { ListNode } from "@shared/structures/ListNode.ts";
const { node, array } = ListNode;

const tester = (numbers: number[], value: number) => array(removeElements(node(numbers), value));

const removeElements = (head: ListNode | null, val: number): ListNode | null => {
  let current = head;

  while (current) {
    if (current.val === val) {
      current = current.next;
      head = current;
    } else if (current.next && current.next.val === val) {
      current.next = current.next.next;
    } else current = current.next;
  }

  return head;
};

describe("203 - remove lined list elements", () => {
  it("should pass the default case", () => {
    expect(tester([1, 2, 6, 3, 4, 5, 6], 6)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should remove ones", () => {
    expect(tester([1, 1, 1, 1, 1, 1, 1], 1)).toEqual([]);
  });

  it("should do nothing with empty list", () => {
    expect(tester([], 1)).toEqual([]);
  });

  it("should remove first", () => {
    expect(tester([1, 2, 3, 4, 5, 6], 1)).toEqual([2, 3, 4, 5, 6]);
  });

  it("should remove last", () => {
    expect(tester([1, 2, 3, 4, 5, 6], 6)).toEqual([1, 2, 3, 4, 5]);
  });
});
