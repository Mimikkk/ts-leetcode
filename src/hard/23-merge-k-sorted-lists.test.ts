import { exercise } from "@shared/utilities/exercise.js";
import { ListNode } from "@shared/structures/index.js";

const appendNode = (node: ListNode | null, value: number): ListNode => {
  if (node === null) return new ListNode(value);
  node.next = appendNode(node.next, value);
  return node;
};

const mergeKLists = (lists: (ListNode | null)[]): ListNode | null => {
  const root: [ListNode | null] = [null];

  do {
    let min = undefined;
    let minIndex = undefined;

    for (let i = 0; i < lists.length; ++i) {
      const element = lists[i]?.val;
      if (element === undefined) continue;
      if (min === undefined || element < min) {
        minIndex = i;
        min = element;
      }
    }
    if (min === undefined) break;
    lists[minIndex!] = lists[minIndex!]?.next!;
    root[0] = appendNode(root[0], min);
  } while (true);

  return root[0];
};

exercise(
  (lists: number[][]) => ListNode.array(mergeKLists(lists.map(ListNode.node))),
  [
    [[[[1, 3], [2]]], [1, 2, 3]],
    [[[[1, 3], [2], [4]]], [1, 2, 3, 4]],
  ],
);
