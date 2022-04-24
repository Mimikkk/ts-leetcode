export {};

const bitsToHours: Record<number, number[]> = {
  0:[0],
  1:[1, 2, 4, 8],
  2:[3, 5, 6, 9, 10],
  3:[7, 11],
};

const bitsToMinutes: Record<number, number[]> = {
  0:[0],
  1:[1, 2, 4, 8, 16, 32],
  2:[3, 5, 6, 9, 10, 12, 17, 18, 20, 24, 33, 34, 36, 40, 48],
  3:[
    7, 11, 13, 14, 19, 21, 22, 25, 26, 28, 35, 37, 38, 41, 42, 44, 49, 50, 52,
    56,
  ],
  4:[15, 23, 27, 29, 30, 39, 43, 45, 46, 51, 53, 54, 57, 58],
  5:[31, 47, 55, 59],
};

const readBinaryWatch = (turnedOn: number): string[] => {
  const solutions = [];

  for (let i = 0; i <= turnedOn; i++) {
    const hours = bitsToHours[i] ?? [];
    const minutes = bitsToMinutes[turnedOn - i] ?? [];

    for (const hour of hours) {
      for (const minute of minutes) {
        solutions.push(`${hour}:${String(minute).padStart(2, "0")}`);
      }
    }
  }

  return solutions;
};

describe("readBinaryWatch", () => {
  it("#1", () => {
    expect(readBinaryWatch(1))
      .toEqual(["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"]);
  });

  it("#2", () => {
    expect(readBinaryWatch(9)).toEqual([]);
  });
});
