import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./day-16-floor.case.txt");
const UserCase = await Deno.readTextFile("./day-16-floor.user.txt");
import { Floor } from "./day-16-floor.utils.ts";

const floor = (input: string): number => {
  const map = Floor.parse(input);

  const starts: [Floor.Position, Floor.Direction][] = [];
  for (let i = 0; i < map.n; ++i) starts.push([[i, 0], "right"]);
  for (let i = 0; i < map.m; ++i) starts.push([[0, i], "down"]);
  for (let i = 0; i < map.n; ++i) starts.push([[i, map.m - 1], "left"]);
  for (let i = 0; i < map.m; ++i) starts.push([[map.n - 1, i], "up"]);

  return Math.max(...starts.map((start) => Floor.explore(map, start)));
};

exercise(floor, [
  [[TestCase], 51],
  [[UserCase], 8026],
]);
