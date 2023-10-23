import { expect } from "vitest";
export {};
const hardestWorker = (_: number, logs: [number, number][]): number => {
  let longestTime = 0;
  let bestEmployeeId = 0;

  let start = 0;
  for (const [employeeId, end] of logs) {
    let passed = end - start;

    if (passed > longestTime) {
      bestEmployeeId = employeeId;
      longestTime = passed;
    } else if (passed === longestTime && bestEmployeeId > employeeId) {
      bestEmployeeId = employeeId;
    }

    start = end;
  }

  return bestEmployeeId;
};

describe("2432", () => {
  it("case 1", () => {
    expect(
      hardestWorker(2, [
        [1, 2],
        [2, 3],
        [1, 5],
        [1, 6],
      ]),
    ).toBe(1);
  });

  it("case 2", () => {
    expect(
      hardestWorker(10, [
        [0, 3],
        [2, 5],
        [0, 9],
        [1, 15],
      ]),
    ).toBe(1);
  });
});
