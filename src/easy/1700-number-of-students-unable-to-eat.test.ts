import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const countStudents = (students: number[], sandwiches: number[]): number => {
  let count = 0;
  while (students.length > count) {
    const student = students.shift()!;
    const sandwich = sandwiches.shift()!;

    if (student == sandwich) {
      count = 0;
    } else {
      ++count;
      students.push(student);
      sandwiches.unshift(sandwich);
    }
  }

  return students.length;
};

describe("count students unable to eat", () => {
  it("case 1", () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
  });

  it("case 2", () => {
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
  });
});