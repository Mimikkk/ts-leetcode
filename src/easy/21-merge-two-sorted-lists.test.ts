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

const tester = (l1: number[], l2: number[]): number[] => array(mergeTwoLists(node(l1), node(l2)));

const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let result = new ListNode(0);
  const head = result;

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        result.next = l1;
        l1 = l1.next;
      } else {
        result.next = l2;
        l2 = l2.next;
      }
    } else if (l1) {
      result.next = l1;
      l1 = l1.next;
    } else if (l2) {
      result.next = l2;
      l2 = l2.next;
    }
    result = result.next!;
  }

  return head.next;
};


describe("21 - merge two sorted lists", () => {
  it("should merge two empty lists", () => {
    expect(tester([], [])).toEqual([]);
  });

  it("should merge two lists with one element", () => {
    expect(tester([1], [])).toEqual([1]);
    expect(tester([], [1])).toEqual([1]);
    expect(tester([1], [1])).toEqual([1, 1]);
  });

  it("should merge many element lists", () => {
    expect(tester([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(tester([1, 3, 5, 7], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
