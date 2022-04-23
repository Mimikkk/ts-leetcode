export {};

const removeElement = (nums: number[], val: number): number =>
  nums.reduceRight((nums, num, index) => {
    if (num === val) nums.splice(index, 1);
    return nums;
  }, nums).length;

describe("27 - remove element", () => {
  it("should pass", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
});
