import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const minimumMoves = (s: string): number => {
  let [i, step] = [0, 0];

  while (i < s.length) {
    if (s.charAt(i) == "X") {
      i += 3;
      ++step;
    } else ++i;
  }

  return step;
};

describe("minimum moves", () => {
  it("should return the minimum moves", () => {
    expect(minimumMoves("X")).toBe(1);
  });
});