import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./8-haunted-wasteland.hard-case.txt");
const UserCase = await Deno.readTextFile("./8-haunted-wasteland.user.txt");

const enum Direction {
  Left = 0,
  Right = 1,
}

const parse = (input: string): [string[], Direction[], Map<string, [string, string]>] => {
  const lines = input.split(/\r?\n/).filter((x) => x);

  const starts = [];
  const pathways = new Map<string, [string, string]>();

  for (let i = 1, it = lines.length; i < it; ++i) {
    const line = lines[i];
    const [, from, left, right] = line.match(/(\w+) = \((\w+), (\w+)\)/)!;

    if (from[2] === "A") starts.push(from);
    pathways.set(from, [left, right]);
  }

  const directions = [];
  for (let i = 0, it = lines[0].length; i < it; ++i) {
    directions.push(lines[0][i] === "L" ? Direction.Left : Direction.Right);
  }

  return [starts, directions, pathways];
};

const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);

const isEnd = (x: string) => x[2] === "Z";
export const iterWasteland = (input: string): number => {
  const [starts, directions, pathways] = parse(input);

  let count = 0;
  let direction = 0;
  const directionsCount = directions.length;

  let counts = Array(starts.length);
  counter: while (true) {
    ++count;

    for (let i = starts.length - 1; i >= 0; --i) {
      starts[i] = pathways.get(starts[i])![directions[direction]];

      if (isEnd(starts[i])) {
        starts.splice(i, 1);
        counts[i] = count;

        if (starts.every(isEnd)) break counter;
      }
    }

    if (++direction === directionsCount) direction = 0;
  }

  return counts.reduce(lcm);
};

export const funcWasteland = (input: string): number => {
  const [starts, directions, pathways] = parse(input);
  let directionCount = directions.length;

  return starts
    .map((current) => {
      let count = 0;
      let direction = 0;

      while (!isEnd(current)) {
        ++count;
        current = pathways.get(current)![directions[direction]];
        if (++direction === directionCount) direction = 0;
      }

      return count;
    })
    .reduce(lcm);
};

exercise(iterWasteland, [
  [[TestCase], 6],
  [[UserCase], 10921547990923],
]);

exercise(funcWasteland, [
  [[TestCase], 6],
  [[UserCase], 10921547990923],
]);
