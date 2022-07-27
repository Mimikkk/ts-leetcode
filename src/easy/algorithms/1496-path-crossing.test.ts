export {};

const enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W"
}

const isPathCrossing = (path: string): boolean => {
  let [x, y] = [0, 0];

  const set = new Set<string>([`${x},${y}`]);
  for (const direction of path) {
    switch (direction) {
      case Direction.North:
        y += 1;
        break;
      case Direction.East:
        x += 1;
        break;
      case Direction.South:
        y -= 1;
        break;
      case Direction.West:
        x -= 1;
        break;
    }

    if (set.has(`${x},${y}`)) return true;
    set.add(`${x},${y}`);
  }

  return false;
};

describe("is path isPathCrossing", () => {
  it("case 1", () => {
    expect(isPathCrossing("NES")).toBeFalsy();
  });

  it("case 2", () => {
    expect(isPathCrossing("NESW")).toBeTruthy();
  });
});
