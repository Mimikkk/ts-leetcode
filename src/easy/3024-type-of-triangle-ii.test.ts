import { exercise } from "@shared/utilities/exercise.js";

type TriangleSides = [number, number, number];
type TriangleType = "none" | "equilateral" | "isosceles" | "scalene";

const isTriangle = ([a, b, c]: TriangleSides): boolean => a + b > c && b + c > a && a + c > b;

const isEquilateral = ([a, b, c]: TriangleSides): boolean => a === b && b === c;

const isIsosceles = ([a, b, c]: TriangleSides): boolean => a === b || b === c || a === c;

const triangleType = (sides: TriangleSides): TriangleType => {
  if (!isTriangle(sides)) return "none";

  if (isEquilateral(sides)) return "equilateral";
  if (isIsosceles(sides)) return "isosceles";
  return "scalene";
};

exercise(triangleType, [
  [[[3, 3, 3]], "equilateral"],
  [[[3, 4, 5]], "scalene"],
  [[[3, 3, 4]], "isosceles"],
  [[[3, 3, 7]], "none"],
]);
