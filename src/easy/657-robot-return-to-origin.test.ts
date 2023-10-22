export {};

const judgeCircle = (moves: string): boolean => {
  let [x, y] = [0, 0];
  for (let move of moves) {
    switch (move) {
      case "U":
        ++y;
        break;
      case "D":
        --y;
        break;
      case "L":
        --x;
        break;
      case "R":
        ++x;
        break;
    }
  }

  return x === 0 && y === 0;
};

describe("Robot Return to Origin", () => {
  it("case 1", () => {
    expect(judgeCircle("UD")).toBe(true);
  });

  it("case 2", () => {
    expect(judgeCircle("LL")).toBe(false);
  });
});