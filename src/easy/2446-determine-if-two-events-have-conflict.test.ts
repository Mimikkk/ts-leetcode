import { expect } from "vitest";
export {};

const asMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":");

  return +hours * 60 + +minutes;
};

const haveConflict = (event1: [string, string], event2: [string, string]): boolean => {
  const [aStart, aEnd] = event1.map(asMinutes);
  const [bStart, bEnd] = event2.map(asMinutes);

  return aStart <= bStart && bEnd <= aEnd;
};

describe("2446", () =>
  it.each([
    {
      event1: ["01:15", "02:00"] as [string, string],
      event2: ["02:00", "03:00"] as [string, string],
      output: true,
    },
    {
      event1: ["01:00", "02:00"] as [string, string],
      event2: ["01:20", "03:00"] as [string, string],
      output: true,
    },
    {
      event1: ["10:00", "11:00"] as [string, string],
      event2: ["14:00", "15:00"] as [string, string],
      output: false,
    },
  ])("$event1, $event2 -> $output", ({ output, event2, event1 }) => expect(haveConflict(event1, event2)).toBe(output)));
