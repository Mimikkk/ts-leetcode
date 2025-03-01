export namespace Lagoon {
  enum Direction {
    Left = "L",
    Right = "R",
    Up = "U",
    Down = "D",
  }

  type DigPlan = [Direction, number];
  type Position = [number, number];

  export const parseDec = (input: string): DigPlan[] =>
    input
      .split(/\r?\n/)
      .map((x) => x.split(" "))
      .map(([direction, times]) => [direction, +times] as DigPlan);

  export const parseHex = (input: string): DigPlan[] => {
    const hex = (x: string) => parseInt(x, 16);
    const colorToDirection = (color: string) => {
      switch (hex(color.slice(7, 8))) {
        case 0:
          return Direction.Right;
        case 1:
          return Direction.Down;
        case 2:
          return Direction.Left;
        case 3:
          return Direction.Up;
      }
    };
    const colorToTimes = (color: string) => hex(color.slice(2, 7));

    return input
      .split(/\r?\n/)
      .map((x) => x.split(" "))
      .map(([, , color]) => [colorToDirection(color), colorToTimes(color)] as DigPlan);
  };

  export const asPath = (plan: DigPlan[]): Position[] => {
    let x = 0;
    let y = 0;

    return plan.map(([direction, times]) => {
      switch (direction) {
        case Direction.Left:
          y -= times;
          break;
        case Direction.Right:
          y += times;
          break;
        case Direction.Up:
          x -= times;
          break;
        case Direction.Down:
          x += times;
          break;
      }

      return [x, y] as const;
    });
  };

  export const calcPerimeter = (path: Position[]): number => {
    let perimeter = 0;

    for (let i = 0, it = path.length; i < it; ++i) {
      const [x1, y1] = path[i];
      const [x2, y2] = path[(i + 1) % path.length];

      perimeter += Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }

    return Math.abs(perimeter / 2);
  };

  export const calcArea = (path: Position[]): number => {
    let area = 0;

    for (let i = 0, it = path.length; i < it; ++i) {
      const [x1, y1] = path[i];
      const [x2, y2] = path[(i + 1) % path.length];

      area += x1 * y2 - x2 * y1;
    }

    return Math.abs(area / 2);
  };
}
