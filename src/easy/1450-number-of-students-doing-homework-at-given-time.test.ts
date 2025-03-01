import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const busyStudent = (startTime: number[], endTime: number[], queryTime: number): number => {
  let count = 0;

  for (let i = 0; i < startTime.length; ++i) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      ++count;
    }
  }

  return count;
};

describe("busy students", () => {
  it("case 1", () => {
    expect(busyStudent([1, 2, 3], [3, 2, 7], 4)).toBe(1);
  });

  it("case 2", () => {
    expect(busyStudent([4], [4], 4)).toBe(1);
  });
});
