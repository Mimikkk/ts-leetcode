import { exercise } from "@shared/utilities/exercise.ts";

const findingUsersActiveMinutes = (logs: [id: number, minute: number][], k: number): number[] => {
  const userMinutes = new Map<number, Set<number>>();

  for (const [id, minute] of logs) userMinutes.set(id, (userMinutes.get(id) ?? new Set()).add(minute));

  const counts = Array(k).fill(0);
  for (const { size } of userMinutes.values()) if (size) ++counts[size - 1];
  return counts;
};

exercise(findingUsersActiveMinutes, [
  [
    [
      [
        [0, 5],
        [1, 2],
        [0, 2],
        [0, 5],
        [1, 3],
      ],
      5,
    ],
    [0, 2, 0, 0, 0],
  ],
  [
    [
      [
        [1, 1],
        [2, 2],
        [2, 3],
      ],
      4,
    ],
    [1, 1, 0, 0],
  ],
  [
    [
      [
        [305589003, 4136],
        [305589004, 4139],
        [305589004, 4141],
        [305589004, 4137],
        [305589001, 4139],
        [305589001, 4139],
      ],
      6,
    ],
    [2, 0, 1, 0, 0, 0],
  ],
]);
