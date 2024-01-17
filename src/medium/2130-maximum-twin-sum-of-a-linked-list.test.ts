/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "@shared/structures/ListNode.js";
import { exercisesNs } from "@shared/utilities/exercise.js";
import { Line } from "../hard/utils/tree.js";

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

    console.log(
      Line.repr(head, [
        [middle, "red"],
        [end, "green"],
      ]),
    );

    return 0;
  };
}

exercisesNs([{ cases: [[[ListNode.node([5, 4, 2, 1, 1])], 6]] }, S2130_1, S2130_2], "pairSum");
