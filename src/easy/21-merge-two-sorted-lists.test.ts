import { ListNode } from "@shared/structures";
const { array, node } = ListNode;

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
