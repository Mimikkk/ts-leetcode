export {};

const findIsland = (grid: number[][]): null | [number, number] => {
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j]) return [i, j];
    }
  }
  return null;
};

const neighbors = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];
const createNeighbors = ([x, y]: [number, number]) => neighbors.map(([i, j]) => [x + i, y + j]);

const islandPerimeter = (grid: number[][]): number => {
  let start = findIsland(grid);

  if (!start) return 0;
  const visited: boolean[][] = Array.from(Array(grid.length), () => Array(grid[0].length).fill(false));

  const [x, y] = start;
  visited[x][y] = true;

  let perimeter = 0;
  const stack = [start];
  while (stack.length) {
    for (const [x, y] of createNeighbors(stack.pop()!)) {
      if (grid[x]?.[y]) {
        if (!visited[x][y]) {
          visited[x][y] = true;
          stack.push([x, y]);
        }
      } else ++perimeter;
    }
  }

  return perimeter;
};

describe("islandPerimeter", () => {
  it("grid should have perimeter 16", () => {
    const grid = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ];
    expect(islandPerimeter(grid)).toBe(16);
  });

  it("grid should have perimeter 8", () => {
    const grid = [
      [1, 1],
      [1, 1],
    ];
    expect(islandPerimeter(grid)).toBe(8);
  });

  it("grid should have perimeter 4", () => {
    const grid = [[1]];
    expect(islandPerimeter(grid)).toBe(4);
  });

  it("grid should have perimeter 0", () => {
    const grid = [[0]];
    expect(islandPerimeter(grid)).toBe(0);
  });

  it("grid should have perimeter 0", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(islandPerimeter(grid)).toBe(0);
  });
});