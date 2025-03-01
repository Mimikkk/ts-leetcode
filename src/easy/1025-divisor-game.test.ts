import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const divisorGame = (n: number) => n % 2 === 0;

describe("divisor game", () => {
  it("should pass the first test", () => {
    expect(divisorGame(2)).toBe(true);
  });

  it("should pass the second test", () => {
    expect(divisorGame(3)).toBe(false);
  });
});