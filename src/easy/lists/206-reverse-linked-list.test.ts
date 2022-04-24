import { ListNode } from "shared/structures";
const { node, array } = ListNode;

const tester = (numbers: number[]) => array(reverseList(node(numbers)));

const reverseList = (head: ListNode | null): ListNode | null => {
  let prev = null;
  while (head) [head.next, prev, head] = [prev, head, head.next];
  return prev;
};

describe("206 - reverse linked list", () => {
  it("case 1", () => {
    expect(tester([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it("case 2", () => {
    expect(tester([1])).toEqual([1]);
  });


  it("case 3", () => {
    expect(tester([])).toEqual([]);
  });

  it("case 4", () => {
    expect(tester([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
