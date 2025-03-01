import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const cases: readonly [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

type Move = [number, number];
const first = (item?: number[]) => item?.[0];
const tictactoe = (moves: Move[]) => {
  const grid = new Uint8Array(9);

  moves.forEach(([x, y], i) => (grid[3 * x + y] = (i % 2) + 1));

  let winner = first(
    cases
      .map((item) => item.map((x) => grid[x]))
      .filter(([x]) => x !== 0)
      .find(([x, y, z]) => x === y && x === z),
  );

  return winner ? (winner === 1 ? "A" : "B") : moves.length === 9 ? "Draw" : "Pending";
};
describe("tictactoe", () => {
  it("case 1", () => {
    expect(
      tictactoe([
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2],
      ]),
    ).toBe("A");
  });

  it("case 2", () => {
    expect(
      tictactoe([
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0],
      ]),
    ).toBe("B");
  });

  it("case 3", () => {
    expect(
      tictactoe([
        [0, 0],
        [1, 1],
        [2, 0],
        [1, 0],
        [1, 2],
        [2, 1],
        [0, 1],
        [0, 2],
        [2, 2],
      ]),
    ).toBe("Draw");
  });
});