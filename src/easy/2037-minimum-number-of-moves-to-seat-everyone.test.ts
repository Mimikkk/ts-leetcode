import { A } from "@shared/modules/arrays.js";

export {};

const minMovesToSeat = (seats: number[], students: number[]): number => {
  seats.sort(A.N.desc);
  students.sort(A.N.desc);

  return A.N.sum(A.zip(seats, students).map(([seat, student]) => Math.abs(student - seat)));
};

describe("min moves to seat", () => {
  it("should return the min moves", () => {
    expect(minMovesToSeat([3, 1, 5], [2, 7, 4])).toBe(4);
  });
});
