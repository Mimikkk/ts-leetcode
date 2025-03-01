import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const code = (s: string) => s.charCodeAt(0);
const squareIsWhite = (coordinates: string) => {
  const [x, y] = coordinates.split("");

  return !!((code(x) + code(y)) % 2);
};

describe("square is white", () => {
  it("case 1", () => {
    expect(squareIsWhite("a1")).toBe(false);
  });
  it("case 2", () => {
    expect(squareIsWhite("h3")).toBe(true);
  });
  it("case 3", () => {
    expect(squareIsWhite("c7")).toBe(false);
  });
});