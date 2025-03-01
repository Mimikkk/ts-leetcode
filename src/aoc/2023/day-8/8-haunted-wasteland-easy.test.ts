import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./8-haunted-wasteland.easy-case.txt");
const UserCase = await Deno.readTextFile("./8-haunted-wasteland.user.txt");

const enum Direction {
  Left = 0,
  Right = 1,
}

const parse = (input: string): [Direction[], Map<string, [string, string]>] => {
  const lines = input.split(/\r?\n/).filter((x) => x);

  return [
    [...lines[0]].map((x) => (x === "L" ? Direction.Left : Direction.Right)),
    new Map(
      lines
        .slice(1)
        .map((line) => line.match(/(\w+) = \((\w+), (\w+)\)/)!)
        .map(([, from, left, right]) => [from, [left, right]]),
    ),
  ];
};

const uglyassWasteland = (input: string): number => {
  for (
    let [directions, pathways] = parse(input), i = -1, count = 0, current = "AAA";
    ;
    current = (++count, pathways.get(current)![directions[(i = (i + 1) % directions.length)]])
  )
    if (current === "ZZZ") return count;
};
const wasteland = (input: string): number => {
  const [directions, pathways] = parse(input);

  let i = 0;
  let count = 0;
  let current = "AAA";
  do {
    ++count;
    current = pathways.get(current)![directions[i++]];
    if (i === directions.length) i = 0;
  } while (current !== "ZZZ");

  return count;
};

exercise(uglyassWasteland, [
  [[TestCase], 2],
  [[UserCase], 14429],
]);

exercise(wasteland, [
  [[TestCase], 2],
  [[UserCase], 14429],
]);
