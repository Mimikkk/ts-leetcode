import { exercise } from "@shared/utilities/exercise.ts";

// operations
// if s[start] === s[end] then move both cursors
// or else move start cursor and add 1 to insertions
// or else move end   cursor and add 1 to insertions

const minInsertions = (s: string): number => {
  const array = s.split("");

  let maxInsertions = Infinity;
  const recurse = (start: number, end: number, insertions: number) => {
    if (start >= end) {
      maxInsertions = Math.min(maxInsertions, insertions);
      return;
    }

    if (array[start] === array[end]) {
      recurse(start + 1, end - 1, insertions);
    } else {
      recurse(start + 1, end, insertions + 1);
      recurse(start, end - 1, insertions + 1);
    }
  };
  recurse(0, array.length - 1, 0);

  return maxInsertions;
};

const minInsertions2 = (s: string): number => {
  const cache: number[][] = new Array(501);

  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(501).fill(-1);
  }

  return helper(0, s.length - 1);

  function helper(i: number, j: number): number {
    if (i >= j) {
      return 0;
    }
    if (cache[i][j] !== -1) {
      return cache[i][j];
    }

    let min: number = Number.MAX_VALUE;
    if (s[i] === s[j]) {
      min = Math.min(min, helper(i + 1, j - 1));
    } else {
      min = Math.min(min, helper(i + 1, j) + 1, helper(i, j - 1) + 1);
    }

    cache[i][j] = min;
    return min;
  }
};

const minInsertions3 = (s: string): number => {
  const cache = new Map<string, number>();

  const recurse = (i: number, j: number): number => {
    if (i >= j) return 0;

    const key = `${i}-${j}`;
    const cached = cache.get(key);
    if (cached !== undefined) return cached;

    let min =
      s[i] === s[j]
        ? Math.min(Infinity, recurse(i + 1, j - 1))
        : Math.min(Infinity, recurse(i + 1, j) + 1, recurse(i, j - 1) + 1);

    cache.set(key, min);
    return min;
  };

  return recurse(0, s.length - 1);
};

exercise(minInsertions, [
  [["zzazz"], 0],
  [["dzzazzd"], 0],
  [["mbadm"], 2],
  [["mbdadbm"], 0],
  [["leetcode"], 5],
  [["leetcodocteel"], 0],
  [["zjveiiwvc"], 5],
  [["czjvewiiwevjzc"], 0],
  [["abcedfabcedfabcedfabcefabcdefabcdefabc"], 21],
]);

exercise(minInsertions2, [
  [["zzazz"], 0],
  [["dzzazzd"], 0],
  [["mbadm"], 2],
  [["mbdadbm"], 0],
  [["leetcode"], 5],
  [["leetcodocteel"], 0],
  [["zjveiiwvc"], 5],
  [["czjvewiiwevjzc"], 0],
  [["abcedfabcedfabcedfabcefabcdefabcdefabc"], 21],
]);

exercise(minInsertions3, [
  [["zzazz"], 0],
  [["dzzazzd"], 0],
  [["mbadm"], 2],
  [["mbdadbm"], 0],
  [["leetcode"], 5],
  [["leetcodocteel"], 0],
  [["zjveiiwvc"], 5],
  [["czjvewiiwevjzc"], 0],
  [["abcedfabcedfabcedfabcefabcdefabcdefabc"], 21],
]);
