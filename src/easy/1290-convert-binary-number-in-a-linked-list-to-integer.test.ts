import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { ListNode } from "@shared/structures/ListNode.ts";
const { node } = ListNode;

const getDecimalValue = (node: ListNode | null): number => {
  let sum = 0;
  while (node) {
    sum = (sum << 1) + node.val;
    node = node.next;
  }
  return sum;
};

describe("234 - palindrome linked list", () => {
  it("case 1", () => {
    expect(getDecimalValue(node([1, 0, 1]))).toEqual(5);
  });

  it("case 2", () => {
    expect(getDecimalValue(node([1]))).toEqual(1);
  });

  it("case 3", () => {
    expect(getDecimalValue(node([1, 0]))).toEqual(2);
  });

  it("case 4", () => {
    expect(getDecimalValue(node([0]))).toEqual(0);
  });

  it("case 5", () => {
    expect(getDecimalValue(node([0, 0, 0]))).toEqual(0);
  });

  it("case 6", () => {
    expect(getDecimalValue(node([0, 0, 1]))).toEqual(1);
  });

  it("case 7", () => {
    expect(getDecimalValue(node([1, 0, 0]))).toEqual(4);
  });
});
