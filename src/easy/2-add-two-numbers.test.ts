import { Nullable } from "../utilities";

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ?0:val);
    this.next = (next === undefined ?null:next);
  }

}
const node = (numbers: number[]): Nullable<ListNode> => {
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
const array = (node: Nullable<ListNode>) => {
  const result: number[] = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }

  return result;
};

const _addTwoNumbers = (l1: number[], l2: number[]): number[] => array(addTwoNumbers(node(l1), node(l2)));

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let carry = 0;
  let result: { head: ListNode | null, current: ListNode | null } = { head:null, current:null };

  while (l1 !== null || l2 !== null || carry !== 0) {
    const n1 = l1 === null ?0:l1.val;
    const n2 = l2 === null ?0:l2.val;
    const sum = n1 + n2 + carry;
    const node = new ListNode(sum % 10);

    if (result.head === null) {
      result.head = node;
      result.current = result.head;
    } else {
      result.head.next = node;
    }
    result.current = result.current!.next;
    carry = Math.floor(sum / 10);
    l1 = l1 === null ?null:l1.next;
    l2 = l2 === null ?null:l2.next;
  }

  return result.head;
};

describe("2 - add two numbers", () => {
  it("1 - nines", () => {
    expect(_addTwoNumbers([9], [9])).toEqual([1, 8]);
  });

  it("2 - zeros", () => {
    expect(_addTwoNumbers([0], [0])).toEqual([0]);
  });

  it("3 - ones", () => {
    expect(_addTwoNumbers([1], [9])).toEqual([1, 0]);
  });

  it("3 - ones", () => {
    expect(_addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
