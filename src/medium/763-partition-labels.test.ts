import { exercise } from "@shared/utilities/exercise.ts";

const partitionLabels = (s: string): number[] => {
  const sizes: number[] = [];
  const occurrences = new Map([...s].map((c, i) => [c, i]));

  let head = 0;
  let tail = 0;
  let previous = 0;
  while (head < s.length) {
    let lastIndex = occurrences.get(s[head])!;

    while (tail <= lastIndex) {
      const index = occurrences.get(s[tail])!;
      if (index > lastIndex) lastIndex = index;
      ++tail;
    }

    sizes.push(tail - previous);
    previous = tail;
    head = tail;
  }

  return sizes;
};

exercise(partitionLabels, [
  [["ababcbacadefegdehijhklij"], [9, 7, 8]],
  [["eccbbbbdec"], [10]],
  [["caedbdedda"], [1, 9]],
]);
