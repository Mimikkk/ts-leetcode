import { Nullable } from "../utilities/nullable.js";

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export namespace ListNode {
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

  export const array = (node: Nullable<ListNode>): number[] => {
    const numbers: number[] = [];
    const seen = new Set<ListNode>();

    while (node) {
      if (seen.has(node)) break;
      seen.add(node);

      numbers.push(node.val);
      node = node.next;
    }

    return numbers;
  };

  export const list = (node: Nullable<ListNode>): ListNode[] => {
    const nodes: ListNode[] = [];

    while (node) {
      if (nodes.includes(node)) break;
      nodes.push(node);
      node = node.next;
    }
    return nodes;
  };

  export const hasCycle = (node: Nullable<ListNode>): boolean => {
    let first = node;
    let second = node;

    while (second?.next?.next) {
      first = first!.next;
      second = second.next.next;
      if (first === second) return true;
    }

    return false;
  };

  export const cycleAt = (node: Nullable<ListNode>): Nullable<ListNode> => {
    let first = node;
    let second = node;

    while (second?.next?.next) {
      first = first!.next;
      second = second.next.next;
      if (first === second) break;
    }

    if (!second?.next?.next) return null;

    first = node;
    while (first !== second) {
      first = first!.next;
      second = second!.next;
    }

    return first;
  };
}
