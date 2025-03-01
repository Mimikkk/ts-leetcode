import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { ListNode } from "@shared/structures/ListNode.ts";
const { node } = ListNode;

const tester = (numbers: number[]) => isPalindrome(node(numbers));

const isPalindrome = (head: ListNode | null): boolean => {
  let [slow, fast] = [head, head];

  while (slow && fast && fast.next) [slow, fast] = [slow.next, fast.next.next];

  let prev = null;
  while (slow) [slow.next, prev, slow] = [prev, slow, slow.next];

  while (prev && head) {
    if (prev.val !== head.val) return false;
    [prev, head] = [prev.next, head.next];
  }

  return true;
};

describe("234 - palindrome linked list", () => {
  it("case 1", () => {
    expect(tester([1, 2])).toEqual(false);
  });

  it("case 2", () => {
    expect(tester([1, 2, 2, 1])).toEqual(true);
  });

  it("case 3", () => {
    expect(tester([1, 2, 3, 2, 1])).toEqual(true);
  });

  it("case 4", () => {
    expect(tester([1, 2, 3, 4, 2, 1])).toEqual(false);
  });
});
