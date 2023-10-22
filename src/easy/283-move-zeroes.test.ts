export {};

const moveZeroes = (nums: number[]): void => {
  const len = nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!nums[i]) nums.splice(i, 1);
  }
  nums.push(...Array(len - nums.length).fill(0));
};

describe("283 - move zeroes", () => {
  it("move zeroes", () => {
    let input = [0, 1, 0, 3, 12];
    moveZeroes(input);
    expect(input).toEqual([1, 3, 12, 0, 0]);

    input = [0, 0, 1];
    moveZeroes(input);
    expect(input).toEqual([1, 0, 0]);

    input = [1];
    moveZeroes(input);
    expect(input).toEqual([1]);

    input = [0];
    moveZeroes(input);
    expect(input).toEqual([0]);
  });
});
