import { ListNode } from "shared/structures/ListNode.js";
const { node, array } = ListNode;

const tester = (l1: number[], l2: number[]): number[] => array(addTwoNumbers(node(l1), node(l2)));

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let current: ListNode = new ListNode(0);
  const result = current;

  let carry = 0;
  while (l1 || l2 || carry) {
    const n1 = l1?.val || 0;
    const n2 = l2?.val || 0;

    let sum = n1 + n2 + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    current.next = new ListNode(sum);
    current = current.next;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return result.next;
};

describe("2 - add two numbers", () => {
  it("1 - nines", () => {
    expect(tester([9], [9])).toEqual([8, 1]);
  });

  it("2 - zeros", () => {
    expect(tester([0], [0])).toEqual([0]);
  });

  it("3 - ones", () => {
    expect(tester([1], [9])).toEqual([0, 1]);
  });

  it("3 - a lot of nines", () => {
    expect(tester([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
