export {};

const createCounter = (nums: number[]) => {
  const counter: Record<number, number> = {};
  for (const num of nums) counter[num] = (counter[num] + 1) || 1;
  return counter;
};

const uniqueOccurrences = (arr: number[]) => {
  const counts = Object.values(createCounter(arr));
  return counts.length === new Set(counts).size;
};
