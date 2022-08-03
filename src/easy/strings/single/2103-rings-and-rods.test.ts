import { R } from "shared/modules";

type Color = "R" | "G" | "B";
type Position = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const toPair = (ring: string): [Color, Position] => [ring[0], +ring[1]] as any;
const hasAllColors = (rings: Set<Color>) => rings.size === 3;

const countPoints = (rings: string) => {
  const counter = R.empty<string, Set<Color>>();

  rings
    .match(/../g)
    ?.map(toPair)
    .forEach(([color, position]) => {
      if (!counter[position]) counter[position] = new Set<Color>();
      counter[position].add(color);
    });

  return R.values(counter).filter(hasAllColors).length;
};

describe("count points", () => {
  it("should return the number of points", () => {
    expect(countPoints("B0B6G0R6R0R6G9")).toBe(1);
    expect(countPoints("B0R0G0R9R0B0G0")).toBe(1);
    expect(countPoints("G4")).toBe(0);
  });
});