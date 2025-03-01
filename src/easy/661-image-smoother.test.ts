import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const filter = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
const createFilter = (x: number, y: number) => filter.map(([nx, ny]) => [nx + x, ny + y]);

const imageSmoother = (img: number[][]): number[][] => {
  const [m, n] = [img.length, img[0].length];

  const result = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  for (let x = 0; x < m; ++x) {
    for (let y = 0; y < n; ++y) {
      const neighbors = createFilter(x, y).filter(([nx, ny]) => nx >= 0 && nx < m && ny >= 0 && ny < n);
      const count = neighbors.length;
      const sum = neighbors.reduce((sum, [nx, ny]) => sum + img[nx][ny], 0);

      result[x][y] = Math.floor(sum / count);
    }
  }

  return result;
};

describe("image smoother", () => {
  it("case 1", () => {
    const input = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const output = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(imageSmoother(input)).toEqual(output);
  });

  it("case 2", () => {
    const input = [
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100],
    ];
    const output = [
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ];
    expect(imageSmoother(input)).toEqual(output);
  });
});