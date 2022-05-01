const findMaxAverage = (nums: number[], k: number) => {
  let average = -Infinity;

  let sum = 0;
  let start = 0;
  for (let end = 0; end < nums.length; ++end) {
    sum += nums[end];

    if (end - start + 1 === k) {
      average = Math.max(average, sum / k);
      sum -= nums[start];
      start += 1;
    }
  }

  return average;
};
