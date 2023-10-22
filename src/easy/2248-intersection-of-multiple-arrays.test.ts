import { A } from "@shared/modules";

const intersection = (nums: number[][]): number[] => A.sorted(A.intersection(...nums), A.N.asc);

describe("intersection of arrays", () => {
  it("should return the intersection of two arrays", () => {
    expect(
      intersection([
        [2, 4, 6],
        [2, 4, 6],
      ]),
    ).toEqual([2, 4, 6]);
  });

  it("should return the intersection of three arrays", () => {
    expect(
      intersection([
        [1, 2, 3],
        [2, 4, 6],
        [3, 5, 2],
      ]),
    ).toEqual([2]);
  });
});