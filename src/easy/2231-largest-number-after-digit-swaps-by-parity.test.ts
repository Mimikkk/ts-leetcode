import { A, N } from "@shared/modules";

const largestInteger = (num: number): number => {
  const digits = N.toDigits(num);
  const pattern = digits.map(N.isOdd);

  const [odds, evens] = [
    digits.filter(N.isOdd).sort(A.N.asc),
    digits.filter(N.isEven).sort(A.N.asc),
  ];

  return N.fromDigits(pattern.map((x) => (x ? odds : evens).pop()!));
};

describe("largest integer", () => {
  it("should return the largest integer", () => {
    expect(largestInteger(1234)).toBe(3412);
    expect(largestInteger(65875)).toBe(87655);
  });
});
