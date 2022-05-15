export {};


const dayOfTheWeek = (day: number, month: number, year: number): string =>
  new Date(year, month - 1, day)
    .toLocaleString("en-US", { weekday:"long" });

describe("day of week", () => {
  it("case 1", () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe("Saturday");
  });

  it("case 2", () => {
    expect(dayOfTheWeek(18, 7, 1999)).toBe("Sunday");
  });

  it("case 3  ", () => {
    expect(dayOfTheWeek(15, 5, 1993)).toBe("Saturday");
  });
});