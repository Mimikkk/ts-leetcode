import { A } from "@shared/modules";

const sortEvenOdd = (nums: number[]): number[] => {
  const even = nums.filter((_, i) => i % 2 === 0).sort(A.N.asc);
  const odd = nums.filter((_, i) => i % 2 === 1).sort(A.N.desc);

  return A.interweave(even, odd);
};

describe("sortEvenOdd", () => {
  it("case 1", () => {
    expect(sortEvenOdd([4, 1, 2, 3])).toEqual([2, 3, 4, 1]);
  });

  it("case 2", () => {
    expect(sortEvenOdd([2, 1])).toEqual([2, 1]);
  });

  it("case 3", () => {
    expect(
      sortEvenOdd([4, 1, 2, 3, 11, 14, 15, 61, 78, 72, 75, 2, 57, 25, 27, 2]),
    ).toEqual([2, 72, 4, 61, 11, 25, 15, 14, 27, 3, 57, 2, 75, 2, 78, 1]);
  });

  it("case 4", () => {
    expect(
      sortEvenOdd([
        5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21,
      ]),
    ).toEqual([
      5, 45, 9, 39, 12, 33, 14, 30, 20, 27, 21, 25, 30, 15, 32, 14, 33, 5, 44,
    ]);
  });
});