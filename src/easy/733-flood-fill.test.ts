import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type Point = [number, number];
const neighbors = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];
const createNeighbors = ([x, y]: Point): Point[] => neighbors.map(([i, j]) => [x + i, y + j]);
const matrix = <T>(m: number, n: number, fill: T): T[][] => Array.from(Array(m), () => Array(n).fill(fill));

const floodFill = (image: number[][], sr: number, sc: number, newColor: number): number[][] => {
  let [m, n] = [image.length, image[0].length];
  let color = image[sr][sc];
  if (color === newColor) return image;

  const visited = matrix(m, n, false);
  visited[sr][sc] = true;
  image[sr][sc] = newColor;

  let queue: Point[] = [[sr, sc]];
  const isValidNeighbor = ([x, y]: Point) => !visited[x]?.[y] && image[x]?.[y] === color;
  const fill = ([x, y]: Point) => {
    image[x][y] = newColor;
    visited[x][y] = true;
    queue.push([x, y]);
  };

  while (queue.length) createNeighbors(queue.shift()!).filter(isValidNeighbor).forEach(fill);

  return image;
};

describe("flood fill", () => {
  it("case 1", () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2,
      ),
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });

  it("case 2", () => {
    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 1, 0],
        ],
        1,
        1,
        2,
      ),
    ).toEqual([
      [0, 0, 0],
      [0, 2, 0],
    ]);
  });
});
