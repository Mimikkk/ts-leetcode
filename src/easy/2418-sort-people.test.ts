
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const sortPeople = (names: string[], heights: number[]): string[] =>
  Object.entries(names)
    .sort(([i], [j]) => heights[+j] - heights[+i])
    .map(([, name]) => name);

describe("two out of three", () => {
  it("case 1", () => {
    expect(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])).toEqual(["Mary", "Emma", "John"]);
  });
});
