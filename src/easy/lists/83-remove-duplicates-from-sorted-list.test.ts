import { ListNode } from "structures";
const { node, array } = ListNode;

const tester = (numbers: number[]): number[] =>
  array(deleteDuplicates(node(numbers)));

const deleteDuplicates = (list: ListNode | null): ListNode | null => {
  let current = list;

  while (current && current.next) {
    if (current.val == current.next.val) current.next = current.next.next;
    else current = current.next;
  }

  return list;
};

describe("83 - remove duplicates from sorted list", () => {
  it("should return null for an empty list", () => {
    expect(tester([])).toEqual([]);
  });

  it("should return the list with no duplicates", () => {
    expect(tester([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the list with no duplicates", () => {
    expect(tester([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the list with no duplicates", () => {
    expect(tester([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should return the list with no duplicates", () => {
    expect(tester([1, 1])).toEqual([1]);
  });

  it("should return the list with no duplicates", () => {
    expect(tester([0])).toEqual([0]);
  });
});
