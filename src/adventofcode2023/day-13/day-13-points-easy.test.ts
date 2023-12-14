import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-13-points.case.txt?raw";
import UserCase from "./day-13-points.user.txt?raw";
import { Points } from "./day-13-points.utils.js";

const points = (input: string): number => {
  const maps = Points.parse(input);

  const findReflectionPoint = (map: Points.Map) => {
    let m = map.length;
    console.log(map);

    for (let i = 1; i < m; ++i) {}
  };

  console.log(maps.map(findReflectionPoint));

  return 0;
};

exercise(points, [
  [[TestCase], 374],
  // [[UserCase], 9647174],
]);
