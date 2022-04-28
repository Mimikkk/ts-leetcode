export {};

const distributeCandies = (candies: number[]): number =>
  Math.min(candies.length / 2, [...new Set(candies)].length);
