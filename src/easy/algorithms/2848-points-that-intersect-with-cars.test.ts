export {};

const mergeRanges = (nums: [number, number][]): [number, number][] => {
  if (nums.length === 0) return [];
  nums.sort((a, b) => a[0] - b[0]);

  const result: [number, number][] = [];

  let [start, end] = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    const [s, e] = nums[i];

    if (s <= end) {
      end = Math.max(end, e);
    } else {
      result.push([start, end]);
      [start, end] = [s, e];
    }
  }

  result.push([start, end]);
  return result;
};
const sum = (nums: number[]) => {
  let sum = 0;
  for (const num of nums) sum += num;
  return sum;
};
const numberOfPoints = (nums: [number, number][]): number =>
  sum(mergeRanges(nums).map(([a, b]) => b - a + 1));

describe("has groups size", () => {
  it("case 1", () => {
    expect(
      numberOfPoints([
        [3, 6],
        [1, 5],
        [4, 7],
      ]),
    ).toEqual(7);
  });

  it("case 2", () => {
    expect(
      numberOfPoints([
        [1, 3],
        [5, 8],
      ]),
    ).toEqual(7);
  });

  it("case 3", () => {
    expect(numberOfPoints([])).toEqual(0);
  });
});
