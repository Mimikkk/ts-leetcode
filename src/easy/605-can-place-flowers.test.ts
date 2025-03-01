import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const canPlaceFlowers = (flowerbed: number[], n: number): boolean =>
  flowerbed.reduce((acc, _, i) => {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      return acc + 1;
    }
    return acc;
  }, 0) >= n;

describe("canPlaceFlowers", () => {
  it("should return true", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true);
  });

  it("should return false", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toEqual(false);
  });
});