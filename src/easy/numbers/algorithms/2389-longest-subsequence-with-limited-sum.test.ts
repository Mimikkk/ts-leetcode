export {};

const binarySearch = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = ~~((left + right) / 2);

    if (nums[mid] === target)
      return mid + 1;
    else if (nums[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }

  return nums[left] > target ? left : left + 1;
};

const answerQueries = (nums: number[], queries: number[]): number[] => {
  nums.sort((a, b) => a - b);
  for (let i = 1, n = nums.length; i < n; i++) nums[i] = nums[i - 1] + nums[i];


  const result: number[] = [];
  for (let i = 0, n = queries.length; i < n; i++) {
    result.push(binarySearch(nums, queries[i]));
  }

  return result;
};

describe('2389 - longest', () => {
  it('case 1', () => {
    expect(answerQueries([4, 5, 2, 1], [3, 10, 21])).toEqual([2, 3, 4]);
  });

  it('case 2', () => {
    expect(answerQueries([2, 3, 4, 5], [1])).toEqual([0]);
  });

  it('case 3', () => {
    expect(answerQueries([736411, 184882, 914641, 37925, 214915],
      [331244, 273144, 118983, 118252, 305688, 718089, 665450])).toEqual([2, 2, 1, 1, 2, 3, 3],
    );
  })
});
