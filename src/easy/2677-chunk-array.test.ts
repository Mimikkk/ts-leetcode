import { exercise } from "@shared/utilities/exercise";

const chunk = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

exercise(chunk, [
  [
    [[1, 2, 3, 4], 2],
    [
      [1, 2],
      [3, 4],
    ],
  ],
  [
    [[1, 2, 3, 4, 5], 2],
    [[1, 2], [3, 4], [5]],
  ],
]);
