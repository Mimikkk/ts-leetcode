import { Nullable } from "../utilities";

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ?0:val);
    this.next = (next === undefined ?null:next);
  }
}

export module ListNode {
  export const node = (numbers: number[]): Nullable<ListNode> => {
    let head: ListNode | null = null;
    let tail: ListNode | null = null;
    for (let n of numbers) {
      const node = new ListNode(n);
      if (head === null) {
        head = node;
      } else {
        tail!.next = node;
      }
      tail = node;
    }
    return head;
  };
  export const array = (node: Nullable<ListNode>) => {
    const result: number[] = [];

    while (node) {
      result.push(node.val);
      node = node.next;
    }

    return result;
  };
}
