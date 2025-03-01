
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const add = (a: number, b: number) => a + b;
const sum = (arr: number[]) => arr.reduce(add, 0);
const transform = (date: string) => date.split("-").map((x) => +x) as [number, number];
const dateToDayInYear = ([month, day]: [number, number]) => sum(daysInMonth.slice(0, month - 1)) + day;
const strToDayInYear = (date: string) => dateToDayInYear(transform(date));

const overlapInDays = (startADay: number, endADay: number, startBDay: number, endBDay: number): number =>
  Math.max(Math.min(endADay, endBDay) - Math.max(startADay, startBDay) + 1, 0);

const countDaysTogether = (arriveA: string, leaveA: string, arriveB: string, leaveB: string): number =>
  overlapInDays(strToDayInYear(arriveA), strToDayInYear(leaveA), strToDayInYear(arriveB), strToDayInYear(leaveB));

describe("2409", () => {
  it("case 1", () => {
    expect(countDaysTogether("08-15", "08-18", "08-16", "08-19")).toBe(3);
  });

  it("case 2", () => {
    expect(countDaysTogether("10-01", "10-31", "11-01", "12-31")).toBe(0);
  });

  it("case 3", () => {
    expect(countDaysTogether("10-20", "12-22", "06-21", "07-05")).toBe(0);
  });
});
