import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const daysBetweenDates = (date1: string, date2: string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return Math.abs(d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24);
};

describe("number of days between dates", () => {
  it("case 1", () => {
    expect(daysBetweenDates("2019-06-29", "2019-06-30")).toBe(1);
  });

  it("case 2", () => {
    expect(daysBetweenDates("2020-01-15", "2019-12-31")).toBe(15);
  });
});