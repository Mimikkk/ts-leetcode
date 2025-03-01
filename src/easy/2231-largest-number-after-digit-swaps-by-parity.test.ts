import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { N } from '@shared/modules/numbers.ts';
import { A } from '@shared/modules/arrays.ts';

const largestInteger = (num: number): number => {
  const digits = N.D.to(num);
  const pattern = digits.map(N.isOdd);

  const [odds, evens] = [digits.filter(N.isOdd).sort(A.N.asc), digits.filter(N.isEven).sort(A.N.asc)];

  return N.D.from(pattern.map((x) => (x ? odds : evens).pop()!));
};

describe("largest integer", () => {
  it("should return the largest integer", () => {
    expect(largestInteger(1234)).toBe(3412);
    expect(largestInteger(65875)).toBe(87655);
  });
});
