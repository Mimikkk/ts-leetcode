import { A } from "@shared/modules/arrays.js";

const areNumbersAscending = (s: string) => {
  let numbers = s.match(/(\d+)/g)?.map(Number) || [];

  return !A.windows(numbers, 2).find(([a, b]) => a >= b);
};

describe("are numbers asc", () => {
  it("should return true", () => {
    expect(areNumbersAscending("1 2 3")).toBe(true);
    expect(areNumbersAscending("1 2 ss 23 13")).toBe(false);
    expect(areNumbersAscending("1 1")).toBe(false);
  });
});
