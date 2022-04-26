export {};

const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      ++count;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }

  return Math.max(max, count);
};

describe("max consecutive ones", () => {
  it("should have three consecutive numbers", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
  });

  it("should have two consecutive numbers", () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2);
  });

  it("should have three consecutive number", () => {
    expect(findMaxConsecutiveOnes([1, 1, 1])).toEqual(3);
  });

  it("should have zero consecutive number", () => {
    expect(findMaxConsecutiveOnes([0])).toEqual(0);
  });
});