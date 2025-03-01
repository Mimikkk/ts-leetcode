import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./day-11-cosmic-expansion.case.txt");
const UserCase = await Deno.readTextFile("./day-11-cosmic-expansion.user.txt");
import { findGalaxies, manhattan, parse } from "./day-11-cosmic-expansion.utils.ts";

const expansion = (input: string): number => {
  const map = parse(input);
  const galaxies = findGalaxies(map, 1_000_000);

  let distance = 0;
  for (let i = 0; i < galaxies.length; ++i) {
    for (let j = i + 1; j < galaxies.length; ++j) {
      distance += manhattan(galaxies[i], galaxies[j]);
    }
  }

  return distance;
};

exercise(expansion, [
  [[TestCase], 82000210],
  [[UserCase], 377318892554],
]);
