export namespace Floor {
  export type Position = [number, number];

  enum Cell {
    Floor = ".",
    MirrorRight = "\\",
    MirrorLeft = "/",
    SplitterHorizontal = "-",
    SplitterVertical = "|",
  }
  export type Direction = "left" | "right" | "up" | "down";

  const directions: Record<Direction, [Position, Direction]> = {
    left: [[0, -1], "left"],
    right: [[0, 1], "right"],
    up: [[-1, 0], "up"],
    down: [[1, 0], "down"],
  };

  type Map = Cell[][] & { n: number; m: number };

  export const parse = (input: string) => {
    const map = <Map>input.split(/\r?\n/).map((x) => x.split(""));
    map.n = map.length;
    map.m = map[0].length;
    return map;
  };

  export const directionsOf = (map: Map, [x, y]: Position, direction: Direction): [Position, Direction][] => {
    const cell = map[x][y];

    switch (cell) {
      case Cell.Floor:
        return [directions[direction]];
      case Cell.SplitterHorizontal:
        switch (direction) {
          case "right":
          case "left":
            return [directions[direction]];
          case "up":
            return [directions.left, directions.right];
          case "down":
            return [directions.left, directions.right];
        }
      case Cell.SplitterVertical:
        switch (direction) {
          case "up":
          case "down":
            return [directions[direction]];
          case "right":
            return [directions.up, directions.down];
          case "left":
            return [directions.up, directions.down];
        }
      case Cell.MirrorRight:
        switch (direction) {
          case "right":
            return [directions.down];
          case "left":
            return [directions.up];
          case "up":
            return [directions.left];
          case "down":
            return [directions.right];
        }
      case Cell.MirrorLeft:
        switch (direction) {
          case "right":
            return [directions.up];
          case "left":
            return [directions.down];
          case "up":
            return [directions.right];
          case "down":
            return [directions.left];
        }
    }
  };
}
