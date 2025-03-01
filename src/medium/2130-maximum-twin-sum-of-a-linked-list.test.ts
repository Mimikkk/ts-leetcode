import { ListNode } from "@shared/structures/ListNode.ts";
import { exercisesNs } from "@shared/utilities/exercise.ts";

namespace S2130_1 {
  const listToArray = (head: ListNode | null): number[] => {
    const values = [];

    let current: ListNode | null = head;
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  };

  export const pairSum = (head: ListNode | null): number => {
    if (!head) return 0;
    let values = listToArray(head);

    const mid = ~~(values.length / 2);
    let max = 0;
    for (let i = 0; i < mid; ++i) {
      const sum = values[i] + values[values.length - 1 - i];
      if (sum > max) max = sum;
    }

    return max;
  };
}
namespace S2130_2 {
  export const pairSum = (head: ListNode | null): number => {
    if (!head) return 0;

    let middle: ListNode = head;
    let end: ListNode = head;
    while (end?.next?.next) {
      middle = middle.next!;
      end = end.next.next;
    }

    let current = middle.next;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    middle.next = prev;
    middle = middle.next!;

    let max = 0;
    let start = head;
    while (middle) {
      const sum = start.val + middle.val;
      if (sum > max) max = sum;
      start = start.next!;
      middle = middle.next!;
    }

    return max;
  };
}

exercisesNs(
  [
    {
      cases: [
        [[ListNode.node([])], 0],
        [[ListNode.node([1, 3, 3, 4])], 6],
        [[ListNode.node([1, 3, 9, 12, 3, 4])], 21],
        [
          [
            ListNode.node([
              1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9,
              12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4,
              1, 3, 9, 12, 3, 4, 1, 3, 9, 12, 3, 4,
            ]),
          ],
          21,
        ],
      ],
    },
    S2130_1,
    S2130_2,
  ],
  "pairSum",
);
