import { R } from "@shared/modules";

const divideArray = (nums: number[]) => R.values(R.counter(nums)).every((value) => value % 2 === 0);

describe("divide array into equal parts", () => {
  it("should return the number of parts", () => {
    expect(divideArray([3, 2, 3, 2, 2, 2])).toEqual(true);
  });
});