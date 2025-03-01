import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { R } from "@shared/modules/records.ts";

const divideArray = (nums: number[]) => R.values(R.counter(nums)).every((value) => value % 2 === 0);

describe("divide array into equal parts", () => {
  it("should return the number of parts", () => {
    expect(divideArray([3, 2, 3, 2, 2, 2])).toEqual(true);
  });
});
