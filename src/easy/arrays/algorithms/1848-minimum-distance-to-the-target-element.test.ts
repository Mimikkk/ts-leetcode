export {};

const getMinDistance = (nums: number[], target: number, start: number) => {
  let distance: number = undefined!;
  let i = start;
  while (i < nums.length) {
    if (nums[i] === target) {
      distance = i - start;
      break;
    }
    ++i;
  }

  let j = i - 1;
  while (j >= 0) {
    if (nums[j] === target) {
      distance = Math.min(distance ?? Infinity, start - j);
      break;
    }
    --j;
  }

  return distance;
};

describe("get min distance", () => {
  it("case 1", () => {
    expect(getMinDistance([1, 2, 3, 4, 5], 3, 3)).toBe(1);
  });
  it("case 2", () => {
    expect(getMinDistance([1], 1, 0)).toBe(0);
  });
  it("case 3", () => {
    expect(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)).toBe(0);
  });
});
