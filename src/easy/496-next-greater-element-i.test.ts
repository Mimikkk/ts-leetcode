export {};

const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  let stack: number[] = [];
  let record: Record<number, number> = {};
  for (const num of nums2.reverse()) {
    while (stack.length && num > stack[stack.length - 1]) stack.pop();
    if (stack.length) record[num] = stack[stack.length - 1];
    stack.push(num);
  }

  return nums1.map((num) => record[num] || -1);
};

describe("next greater element", () => {
  it("case 1", () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  });

  it("case 2", () => {
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
  });
});
