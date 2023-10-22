import { A, R } from "@shared/modules";

const slowestKey = (releaseTimes: number[], keysPressed: string): string => {
  let durations = R.empty<string, number>();

  for (let i = 0; i < releaseTimes.length; ++i) {
    const duration = releaseTimes[i] - (releaseTimes[i - 1] || 0);

    if ((durations[keysPressed[i]] || 0) < duration)
      durations[keysPressed[i]] = duration;
  }

  let max = R.maxValue(durations);
  const isLongest = (duration: number) => duration === max;
  return A.first(R.sortedKeys(R.filterByValue(durations, isLongest), A.S.desc));
};

describe("slowest key", () => {
  it("should return the slowest key", () => {
    expect(slowestKey([9, 29, 49, 50], "cbcd")).toBe("c");
    expect(slowestKey([12, 23, 36, 46, 62], "spuda")).toBe("a");
  });
});
