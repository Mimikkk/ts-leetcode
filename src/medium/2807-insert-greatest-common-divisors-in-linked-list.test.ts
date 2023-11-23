import { exercise } from "@shared/utilities/exercise";
import { ListNode } from "@shared/structures";

const gcd = (a: number, b: number): number => {
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

const insert = (node: ListNode, value: number): ListNode => {
  const next = new ListNode(value);

  if (!node.next) node.next = next;
  else {
    const temp = node.next;
    node.next = next;
    next.next = temp;
  }

  return node;
};

const insertGreatestCommonDivisors = (head: ListNode | null): ListNode | null => {
  if (head === null) return null;

  let node: ListNode | null = head;
  let { val } = node;

  while (node && node.next) {
    val = gcd(node.val, node.next.val);
    insert(node, val);
    node = node.next.next;
  }

  return head;
};

exercise(insertGreatestCommonDivisors, [
  [[ListNode.node([18, 6, 10, 3])], ListNode.node([18, 6, 6, 2, 10, 1, 3])],
  [[ListNode.node([17, 6, 18])], ListNode.node([17, 1, 6, 6, 18])],
]);
