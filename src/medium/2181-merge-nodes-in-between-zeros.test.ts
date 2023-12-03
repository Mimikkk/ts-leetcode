import { ListNode } from "@shared/structures/ListNode.js";

const mergeNodes = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let current = head;
  while (current.next) {
    current.val += current.next.val;
    current.next = current.next.next;

    if (current.next && !current.next.next) current.next = null;
    else if (current.next?.val === 0) current = current.next;
  }

  return head;
};
