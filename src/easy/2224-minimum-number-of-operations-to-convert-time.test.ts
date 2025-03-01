import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type time = string;

namespace Time {
  export const asMinuteHourPair = (str: time) => str.split(":").map(Number);

  export const asMinutes = (time: time) => asMinuteHourPair(time).reduce((a, b) => a * 60 + b);

  export const difference = (a: time, b: time) => asMinutes(a) - asMinutes(b);
}

const operations = [60, 15, 5, 1];
const convertTime = (current: time, correct: time): number => {
  let count = 0;
  let difference = Time.difference(correct, current);

  while (difference > 0) {
    difference -= operations.find((operation) => difference >= operation)!;
    ++count;
  }

  return count;
};

describe("convert time", () => {
  it("case 1", () => {
    expect(convertTime("12:00", "12:00")).toBe(0);
  });

  it("case 2", () => {
    expect(convertTime("12:00", "14:00")).toBe(2);
  });

  it("case 3", () => {
    expect(convertTime("12:00", "14:45")).toBe(5);
  });

  it("case 4", () => {
    expect(convertTime("13:45", "14:15")).toBe(2);
  });
});